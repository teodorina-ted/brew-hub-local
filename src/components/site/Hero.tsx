import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";
import { SITE } from "@/lib/translations";
import { useLocalized, buildWhatsAppLink } from "@/lib/site";
import hero from "@/assets/hero-taproom.jpg";

export const Hero = () => {
  const { t } = useI18n();
  const { tagline } = useLocalized();

  return (
    <section id="top" className="relative grain isolate flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={hero}
        alt="BEERLOGA taproom interior"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-dark" />
      <div className="absolute inset-0 -z-10 bg-gradient-radial opacity-70" />

      <div className="container pb-16 pt-32 sm:pb-24 sm:pt-40">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-block border-l-2 border-primary pl-3 font-display text-xs uppercase tracking-[0.3em] text-primary">
            {t("hero.eyebrow")} · {tagline}
          </span>
          <h1 className="mt-5 whitespace-pre-line font-display text-5xl font-bold leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            {t("hero.title").split("\n")[0]}
            <br />
            <span className="text-gradient-amber">{t("hero.title").split("\n")[1]}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">{t("hero.subtitle")}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 bg-gradient-amber px-7 font-display uppercase tracking-wider text-primary-foreground shadow-glow hover:opacity-90">
              <a href={buildWhatsAppLink(t("wa.message"))} target="_blank" rel="noopener noreferrer">
                <Calendar className="h-4 w-4" />
                {t("hero.cta_book")}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 border-white/30 bg-white/5 px-7 font-display uppercase tracking-wider text-white backdrop-blur hover:bg-white/10 hover:text-white">
              <a href={SITE.phoneHref}>
                <Phone className="h-4 w-4" />
                {t("hero.cta_call")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
