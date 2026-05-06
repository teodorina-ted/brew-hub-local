import { Beer, UtensilsCrossed, Lightbulb, Flame } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

export const WhyUs = () => {
  const { t } = useI18n();
  const features = [
    { icon: Beer, t: "why.f1.t", d: "why.f1.d" },
    { icon: UtensilsCrossed, t: "why.f2.t", d: "why.f2.d" },
    { icon: Lightbulb, t: "why.f3.t", d: "why.f3.d" },
    { icon: Flame, t: "why.f4.t", d: "why.f4.d" },
  ] as const;

  return (
    <section id="why" className="relative border-t border-border bg-muted/30 py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block font-display text-xs uppercase tracking-[0.3em] text-primary">
            {t("why.eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{t("why.title")}</h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.t}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-amber opacity-0 blur-2xl transition-opacity group-hover:opacity-30" />
              <f.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-xl font-semibold">{t(f.t)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(f.d)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
