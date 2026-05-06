import { useI18n } from "@/contexts/I18nContext";
import beersTrio from "@/assets/beers-trio.jpg";

export const About = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="relative border-t border-border bg-background py-20 sm:py-28">
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-amber opacity-25 blur-2xl" />

          <img
            src={beersTrio}
            alt="BEERLOGA craft beers"
            loading="lazy"
            width={1280}
            height={896}
            className="relative aspect-[4/3] w-full rounded-2xl border border-border object-cover shadow-deep"
          />
        </div>

        <div>
          <span className="inline-block border-l-2 border-primary pl-3 font-display text-xs uppercase tracking-[0.3em] text-primary">
            {t("about.eyebrow")}
          </span>

          <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
            {t("about.title")}
          </h2>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("about.body")}
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {[
              { n: "12", l: "TAPS" },
              { n: "30+", l: "BEERS" },
              { n: "2026", l: "EST." },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-gradient-amber">
                  {s.n}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};