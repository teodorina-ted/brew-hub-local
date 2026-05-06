import { MapPin, Phone, Clock, ExternalLink, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";
import { SITE } from "@/lib/translations";
import { useLocalized, buildMapsLink, buildWhatsAppLink } from "@/lib/site";

export const Contact = () => {
  const { t } = useI18n();
  const { address } = useLocalized();

  const mapsLink = buildMapsLink();
  const whatsappLink = buildWhatsAppLink(t("wa.message"));

  // Google Maps embed (no API key required)
  const gmaps = `https://www.google.com/maps?q=${encodeURIComponent(SITE.addressQuery)}&z=16&output=embed`;

  return (
    <section id="contact" className="relative border-t border-border bg-background py-20 sm:py-28">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-5 md:gap-10">
          <div className="md:col-span-2">
            <span className="inline-block border-l-2 border-primary pl-3 font-display text-xs uppercase tracking-[0.3em] text-primary">
              {t("contact.eyebrow")}
            </span>

            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              {t("contact.title")}
            </h2>

            <div className="mt-8 space-y-6">
              <InfoRow
                icon={MapPin}
                label={t("contact.address")}
                value={address}
                href={mapsLink}
                external
              />

              <InfoRow
                icon={Phone}
                label={t("contact.phone")}
                value={SITE.phone}
                href={SITE.phoneHref}
              />

              <InfoRow
                icon={Mail}
                label={t("contact.email")}
                value={SITE.email}
                href={SITE.emailHref}
              />

              <div className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />

                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {t("contact.hours")}
                  </div>

                  <ul className="mt-2 space-y-1 text-sm">
                    <li>{t("contact.h_mon_thu")}</li>
                    <li>{t("contact.h_fri_sat")}</li>
                    <li>{t("contact.h_sun")}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-gradient-amber font-display uppercase tracking-wider text-primary-foreground shadow-glow hover:opacity-90"
              >
                <a href={SITE.phoneHref}>
                  <Phone className="h-4 w-4" />
                  {t("cta.call")}
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent/70 font-display uppercase tracking-wider text-primary transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  {t("cta.whatsapp")}
                </a>
              </Button>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-2xl border border-border shadow-deep">
              <iframe
                src={gmaps}
                title="BEERLOGA location"
                className="h-full min-h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("contact.directions")}
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-accent/60 bg-background px-4 py-2.5 font-display text-xs uppercase tracking-wider text-primary shadow-deep transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                {t("contact.directions")}
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
  external = false,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) => (
  <div className="group flex gap-4">
    <Icon
      className="mt-0.5 h-5 w-5 shrink-0 text-primary transition-colors group-hover:text-accent"
      strokeWidth={1.5}
    />

    <div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </div>

      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="mt-1 inline-flex text-base font-semibold text-primary underline decoration-accent/45 underline-offset-4 transition-all hover:text-accent hover:decoration-accent dark:text-accent dark:hover:text-primary"
        >
          {value}
        </a>
      ) : (
        <div className="mt-1 text-base font-medium">
          {value}
        </div>
      )}
    </div>
  </div>
);