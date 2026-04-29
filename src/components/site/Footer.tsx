import { useI18n } from "@/contexts/I18nContext";
import { SITE } from "@/lib/translations";
import { useLocalized } from "@/lib/site";
import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  const { t } = useI18n();
  const { address } = useLocalized();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-muted/40">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display text-2xl font-bold tracking-wider">
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-amber" />
              {SITE.name}
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              {t("hero.subtitle")}
            </p>
            <p className="mt-5 inline-block rounded-sm border border-primary/40 px-3 py-1 font-display text-xs uppercase tracking-widest text-primary">
              {t("footer.age")}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-primary">{t("contact.eyebrow")}</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-muted-foreground" /> {address}</li>
              <li><a href={SITE.phoneHref} className="flex gap-2 hover:text-primary"><Phone className="h-4 w-4 text-muted-foreground" /> {SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="flex gap-2 hover:text-primary"><Mail className="h-4 w-4 text-muted-foreground" /> {SITE.email}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-primary">{t("footer.legal")}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">{t("footer.terms")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">{t("footer.privacy")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">{t("footer.cookies")}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {year} {SITE.name}. {t("footer.rights")}</p>
          <p>Made with craft & hops 🍺</p>
        </div>
      </div>
    </footer>
  );
};
