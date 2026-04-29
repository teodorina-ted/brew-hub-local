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
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[hsl(142_70%_45%)] px-4 py-3.5 text-white shadow-deep animate-pulse-glow transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
};
