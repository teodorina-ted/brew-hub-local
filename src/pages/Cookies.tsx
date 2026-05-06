import { Link } from "react-router-dom";
import { SITE } from "@/lib/translations";

const Cookies = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container py-16 sm:py-24">
        <Link
          to="/"
          className="font-display text-sm uppercase tracking-widest text-primary hover:text-accent"
        >
          ← BEERLOGA
        </Link>

        <div className="mt-10 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-deep sm:p-10">
          <h1 className="font-display text-4xl font-bold text-primary sm:text-5xl">
            Politica cookie
          </h1>

          <p className="mt-4 text-sm text-muted-foreground">
            Ultima actualizare: Mai 2026
          </p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                1. Ce sunt cookie-urile
              </h2>
              <p className="mt-2">
                Cookie-urile sunt fișiere mici salvate pe dispozitivul dumneavoastră atunci când
                vizitați un website. Ele pot ajuta website-ul să funcționeze corect sau să rețină
                anumite preferințe.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                2. Ce cookie-uri folosim
              </h2>
              <p className="mt-2">
                Website-ul poate folosi cookie-uri strict necesare pentru funcționare, preferințe
                precum limba sau tema, și eventual instrumente externe precum hărți, fonturi sau
                servicii de analiză, dacă sunt activate.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                3. Servicii externe
              </h2>
              <p className="mt-2">
                Website-ul poate încărca servicii externe precum Google Maps, WhatsApp, Google Fonts
                sau rețele sociale. Aceste servicii pot seta propriile cookie-uri sau tehnologii
                similare.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                4. Cum puteți controla cookie-urile
              </h2>
              <p className="mt-2">
                Puteți bloca sau șterge cookie-urile din setările browserului. Dezactivarea anumitor
                cookie-uri poate afecta funcționarea unor părți ale website-ului.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                5. Modificări
              </h2>
              <p className="mt-2">
                Această politică poate fi actualizată periodic pentru a reflecta schimbări tehnice,
                legale sau operaționale.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                6. Contact
              </h2>
              <p className="mt-2">
                Pentru întrebări despre cookie-uri, contactați-ne la{" "}
                <a className="text-primary hover:text-accent" href={SITE.emailHref}>
                  {SITE.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cookies;