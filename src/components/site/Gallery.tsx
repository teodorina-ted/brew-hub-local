import { useI18n } from "@/contexts/I18nContext";
import taps from "@/assets/gallery-taps.jpg";
import friends from "@/assets/gallery-friends.jpg";
import interior from "@/assets/gallery-interior.jpg";
import food from "@/assets/gallery-food.jpg";

export const Gallery = () => {
  const { t } = useI18n();
  const items = [
    { src: interior, alt: "Industrial pub interior", className: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
    { src: taps, alt: "Beer taps row", className: "aspect-square" },
    { src: friends, alt: "Friends cheers", className: "aspect-square" },
    { src: food, alt: "Charcuterie board", className: "aspect-[2/1] md:col-span-2" },
  ];

  return (
    <section id="gallery" className="relative border-t border-border bg-muted/30 py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block font-display text-xs uppercase tracking-[0.3em] text-primary">
            {t("gallery.eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{t("gallery.title")}</h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
          {items.map((it) => (
            <div key={it.alt} className={`group relative overflow-hidden rounded-sm bg-card ${it.className}`}>
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
