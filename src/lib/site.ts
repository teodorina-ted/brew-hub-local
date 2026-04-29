import { SITE } from "@/lib/translations";
import { useI18n } from "@/contexts/I18nContext";

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const buildMapsLink = () =>
  // Universal geo link — opens default maps app on mobile, Google Maps on desktop
  `https://www.google.com/maps/search/?api=1&query=${SITE.lat},${SITE.lng}`;

export const useLocalized = () => {
  const { lang } = useI18n();
  return {
    address: lang === "ru" ? SITE.address_ru : SITE.address_ro,
    tagline: lang === "ru" ? SITE.tagline_ru : SITE.tagline_ro,
  };
};
