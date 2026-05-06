import { useI18n } from "@/contexts/I18nContext";
import lager from "@/assets/beer-lager.jpg";
import ipa from "@/assets/beer-ipa.jpg";
import stout from "@/assets/beer-stout.jpg";
import wheat from "@/assets/beer-wheat.jpg";

export const Beers = () => {
  const { t } = useI18n();
  const beers = [
    { img: lager, n: "beers.b1.n", s: "beers.b1.s", d: "beers.b1.d", abv: "4.8" },
    { img: ipa, n: "beers.b2.n", s: "beers.b2.s", d: "beers.b2.d", abv: "6.2" },
    { img: stout, n: "beers.b3.n", s: "beers.b3.s", d: "beers.b3.d", abv: "5.4" },
    { img: wheat, n: "beers.b4.n", s: "beers.b4.s", d: "beers.b4.d", abv: "5.1" },
  ] as const;

  return (
    <section id="beers" className="relative border-t border-border bg-background py-20 sm:py-28">
      <div className="container">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="inline-block border-l-2 border-primary pl-3 font-display text-xs uppercase tracking-[0.3em] text-primary">
              {t("beers.eyebrow")}
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{t("beers.title")}</h2>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {beers.map((b) => (
            <article
              key={b.n}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-deep"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={b.img}
                  alt={t(b.n)}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide">{t(b.n)}</h3>
                  <span className="shrink-0 rounded-full bg-primary px-2.5 py-1 font-display text-xs font-bold tracking-wider text-primary-foreground">
                    {b.abv}%
                  </span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-widest text-primary">{t(b.s)}</p>
                <p className="mt-3 text-sm text-muted-foreground">{t(b.d)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
