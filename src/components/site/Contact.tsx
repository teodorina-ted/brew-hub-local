import { MapPin, Phone, Clock, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";
import { SITE } from "@/lib/translations";
import { useLocalized, buildMapsLink, buildWhatsAppLink } from "@/lib/site";

export const Contact = () => {
  const { t } = useI18n();
  const { address } = useLocalized();

  // OpenStreetMap embed; click overlay opens device default maps app
  const bbox = `${SITE.lng - 0.01},${SITE.lat - 0.005},${SITE.lng + 0.01},${SITE.lat + 0.005}`;
  const osm = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${SITE.lat},${SITE.lng}`;

  return (
    <section id="contact" className="relative border-t border-border bg-background py-20 sm:py-28">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="inline-block border-l-2 border-primary pl-3 font-display text-xs uppercase tracking-[0.3em] text-primary">
              {t("contact.eyebrow")}
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{t("contact.title")}</h2>

            <div className="mt-8 space-y-6">
              <InfoRow icon={MapPin} label={t("contact.address")} value={address} />
              <InfoRow icon={Phone} label={t("contact.phone")} value={SITE.phone} href={SITE.phoneHref} />
              <div className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{t("contact.hours")}</div>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>{t("contact.h_mon_thu")}</li>
                    <li>{t("contact.h_fri_sat")}</li>
                    <li>{t("contact.h_sun")}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-amber font-display uppercase tracking-wider text-primary-foreground hover:opacity-90">
                <a href={SITE.phoneHref}>
                  <Phone className="h-4 w-4" /> {t("cta.call")}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-display uppercase tracking-wider">
                <a href={buildWhatsAppLink(t("wa.message"))} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" /> {t("cta.whatsapp")}
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-sm border border-border shadow-deep">
              <iframe
                src={osm}
                title="HopHaus location"
                className="h-[420px] w-full grayscale-[40%] contrast-110 dark:invert dark:hue-rotate-180 dark:grayscale-[80%]"
                loading="lazy"
              />
              <a
                href={buildMapsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-end justify-end p-4"
                aria-label={t("contact.directions")}
              >
                <span className="inline-flex items-center gap-2 rounded-sm bg-background px-4 py-2.5 font-display text-xs uppercase tracking-wider shadow-deep transition-all hover:bg-gradient-amber hover:text-primary-foreground">
                  <ExternalLink className="h-3.5 w-3.5" />
                  {t("contact.directions")}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoRow = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
}) => (
  <div className="flex gap-4">
    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
    <div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      {href ? (
        <a href={href} className="mt-1 block text-base font-medium hover:text-primary">
          {value}
        </a>
      ) : (
        <div className="mt-1 text-base font-medium">{value}</div>
      )}
    </div>
  </div>
);
