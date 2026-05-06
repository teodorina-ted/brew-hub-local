import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import { Button } from "@/components/ui/button";
import taps from "@/assets/gallery-taps.jpg";
import friends from "@/assets/gallery-friends.jpg";
import interior from "@/assets/gallery-interior.jpg";
import food from "@/assets/gallery-food.jpg";

const images = [
  {
    src: interior,
    alt: "BEERLOGA pub interior",
  },
  {
    src: taps,
    alt: "Craft beer taps",
  },
  {
    src: friends,
    alt: "Friends enjoying beer",
  },
  {
    src: food,
    alt: "Pub snacks and beer",
  },
];

export const Gallery = () => {
  const { t } = useI18n();
  const [active, setActive] = useState(0);

  const goPrev = () => {
    setActive((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const goNext = () => {
    setActive((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current === images.length - 1 ? 0 : current + 1));
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="relative border-t border-border bg-muted/30 py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block font-display text-xs uppercase tracking-[0.3em] text-primary">
            {t("gallery.eyebrow")}
          </span>

          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            {t("gallery.title")}
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-deep">
            <div className="relative aspect-[16/10] w-full sm:aspect-[16/8]">
              {images.map((image, index) => (
                <img
                  key={image.alt}
                  src={image.src}
                  alt={image.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    index === active
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-display text-xs uppercase tracking-[0.25em] text-accent">
                    BEERLOGA
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
                    {t("gallery.title")}
                  </p>
                </div>

                <div className="hidden items-center gap-2 sm:flex">
                  <Button
                    type="button"
                    size="icon"
                    variant="outline"
                    onClick={goPrev}
                    aria-label="Previous image"
                    className="rounded-full border-white/30 bg-white/10 text-white backdrop-blur hover:bg-accent hover:text-accent-foreground"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>

                  <Button
                    type="button"
                    size="icon"
                    variant="outline"
                    onClick={goNext}
                    aria-label="Next image"
                    className="rounded-full border-white/30 bg-white/10 text-white backdrop-blur hover:bg-accent hover:text-accent-foreground"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur transition hover:bg-accent hover:text-accent-foreground sm:hidden"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur transition hover:bg-accent hover:text-accent-foreground sm:hidden"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {images.map((image, index) => (
              <button
                key={image.alt}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === active
                    ? "w-8 bg-accent"
                    : "w-2.5 bg-muted-foreground/35 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};