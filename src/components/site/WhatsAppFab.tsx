import { MessageCircle } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import { buildWhatsAppLink } from "@/lib/site";

export const WhatsAppFab = () => {
  const { t } = useI18n();

  return (
    <a
      href={buildWhatsAppLink(t("wa.message"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("wa.tooltip")}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#E8C46A] bg-[#C6922E] text-[#0B2F4A] shadow-deep animate-pulse-glow transition-transform hover:scale-110 hover:bg-[#E8C46A] sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} />
    </a>
  );
};