import { SITE } from "@/lib/translations";
import { useI18n } from "@/contexts/I18nContext";

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const buildMapsLink = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.addressQuery)}`;

export const useLocalized = () => {
  const { lang } = useI18n();

  return {
    address: lang === "ru" ? SITE.address_ru : SITE.address_ro,
    tagline: lang === "ru" ? SITE.tagline_ru : SITE.tagline_ro,
  };
};