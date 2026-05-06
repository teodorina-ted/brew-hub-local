import { useI18n } from "@/contexts/I18nContext";
import { SITE } from "@/lib/translations";
import { useLocalized, buildWhatsAppLink, buildMapsLink } from "@/lib/site";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const logo = "/logo-transparent.png";

// TikTok glyph (lucide doesn't ship a TikTok icon)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.5v3a8.5 8.5 0 0 1-4.5-1.3v6.3a6.5 6.5 0 1 1-6.5-6.5c.34 0 .67.03 1 .08v3.07a3.5 3.5 0 1 0 2.5 3.35V3h3z" />
  </svg>
);

const socials = [
  { label: "Instagram", href: "https://instagram.com/beerloga", Icon: Instagram },
  { label: "Facebook", href: "https://facebook.com/beerloga", Icon: Facebook },
  { label: "TikTok", href: "https://tiktok.com/@beerloga", Icon: TikTokIcon },
];

export const Footer = () => {
  const { t } = useI18n();
  const { address } = useLocalized();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-muted/40">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 font-display text-2xl font-bold tracking-wider text-primary">
              <img
                src={logo}
                alt="BEERLOGA"
                className="h-16 w-auto object-contain"
              />
              {SITE.name}
            </div>

            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              {t("hero.subtitle")}
            </p>

            <p className="mt-5 inline-block rounded-sm border border-primary/40 px-3 py-1 font-display text-xs uppercase tracking-widest text-primary">
              {t("footer.age")}
            </p>

            {/* Socials */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}

              <a
                href={buildWhatsAppLink(t("wa.message"))}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
              >
                <MessageCircle className="h-4 w-4" />
              </a>

              <a
                href={SITE.emailHref ?? `mailto:${SITE.email}`}
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-primary">
              {t("contact.eyebrow")}
            </h4>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={buildMapsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 hover:text-primary"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
                  {address}
                </a>
              </li>

              <li>
                <a href={SITE.phoneHref} className="flex gap-2 hover:text-primary">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  {SITE.phone}
                </a>
              </li>

              <li>
                <a
                  href={SITE.emailHref ?? `mailto:${SITE.email}`}
                  className="flex gap-2 hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-primary">
              {t("footer.legal")}
            </h4>

            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-primary">
                  {t("footer.terms")}
                </a>
              </li>

              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-primary">
                  {t("footer.privacy")}
                </a>
              </li>

              <li>
                <a href="/cookies" className="text-muted-foreground hover:text-primary">
                  {t("footer.cookies")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {year} {SITE.name}. {t("footer.rights")}
          </p>

          <p>
            {SITE.domain ?? "beerloga.online"} · Made with craft & hops 🍺
          </p>
        </div>
      </div>
    </footer>
  );
};