-- Conversations: one per visitor session
CREATE TABLE public.conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL UNIQUE,
  visitor_name text,
  wa_contact_wa_id text, -- WhatsApp ID of the staff/business contact (set after first inbound reply)
  last_message_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX conversations_session_idx ON public.conversations (session_id);

-- Messages
CREATE TYPE public.message_direction AS ENUM ('outbound', 'inbound');
CREATE TYPE public.message_status AS ENUM ('pending', 'sent', 'delivered', 'read', 'failed');

CREATE TABLE public.messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid NOT NULL REFERENCES public.conversations(id) ON DELETE CASCADE,
  direction public.message_direction NOT NULL,
  body text NOT NULL,
  status public.message_status NOT NULL DEFAULT 'pending',
  wa_message_id text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX messages_conversation_idx ON public.messages (conversation_id, created_at);

-- Update conversation last_message_at on every new message
CREATE OR REPLACE FUNCTION public.touch_conversation()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  UPDATE public.conversations
  SET last_message_at = NEW.created_at
  WHERE id = NEW.conversation_id;
  RETURN NEW;
END;
$$;

CREATE TRIGGER messages_touch_conversation
AFTER INSERT ON public.messages
FOR EACH ROW EXECUTE FUNCTION public.touch_conversation();

-- RLS
ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Helper: extract session id sent by the client via PostgREST header
-- Frontend sets header: x-session-id: <uuid>; we read via current_setting('request.headers')
CREATE OR REPLACE FUNCTION public.current_session_id()
RETURNS text LANGUAGE sql STABLE AS $$
  SELECT (current_setting('request.headers', true)::json->>'x-session-id')::text
$$;

-- Anyone (anon) can create their own conversation
CREATE POLICY "Anon can create own conversation"
ON public.conversations FOR INSERT TO anon, authenticated
WITH CHECK (session_id = public.current_session_id());

-- Anyone can read their own conversation
CREATE POLICY "Anon can read own conversation"
ON public.conversations FOR SELECT TO anon, authenticated
USING (session_id = public.current_session_id());

-- Anyone can update their own conversation (e.g. set name)
CREATE POLICY "Anon can update own conversation"
ON public.conversations FOR UPDATE TO anon, authenticated
USING (session_id = public.current_session_id())
WITH CHECK (session_id = public.current_session_id());

-- Read messages of own conversation
CREATE POLICY "Anon can read own messages"
ON public.messages FOR SELECT TO anon, authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.conversations c
    WHERE c.id = messages.conversation_id
      AND c.session_id = public.current_session_id()
  )
);

-- Insert outbound messages only, in own conversation
CREATE POLICY "Anon can send outbound in own conversation"
ON public.messages FOR INSERT TO anon, authenticated
WITH CHECK (
  direction = 'outbound'
  AND EXISTS (
    SELECT 1 FROM public.conversations c
    WHERE c.id = messages.conversation_id
      AND c.session_id = public.current_session_id()
  )
);

-- Realtime
ALTER TABLE public.conversations REPLICA IDENTITY FULL;
ALTER TABLE public.messages REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.conversations;
ALTER PUBLICATION supabase_realtime ADD TABLE public.messages;