import { Link } from "react-router-dom";
import { SITE } from "@/lib/translations";

const Privacy = () => {
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
            Politica de confidențialitate
          </h1>

          <p className="mt-4 text-sm text-muted-foreground">
            Ultima actualizare: Mai 2026
          </p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                1. Cine suntem
              </h2>
              <p className="mt-2">
                {SITE.name} utilizează acest website pentru prezentarea pubului, a programului,
                meniului, evenimentelor și metodelor de contact.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                2. Date pe care le putem primi
              </h2>
              <p className="mt-2">
                Putem primi date personale atunci când ne contactați prin telefon, email sau WhatsApp,
                precum nume, număr de telefon, adresă de email, mesajul transmis și detalii despre
                rezervare.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                3. Scopul utilizării datelor
              </h2>
              <p className="mt-2">
                Folosim aceste date pentru a răspunde solicitărilor, pentru rezervări, pentru comunicare
                cu clienții și pentru administrarea serviciilor noastre.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                4. Temei legal
              </h2>
              <p className="mt-2">
                Prelucrarea datelor se face în baza solicitării dumneavoastră, a interesului legitim
                de a răspunde clienților și, unde este cazul, a obligațiilor legale aplicabile în
                Republica Moldova.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                5. Partajarea datelor
              </h2>
              <p className="mt-2">
                Nu vindem date personale. Datele pot fi procesate prin servicii externe precum email,
                WhatsApp, hosting, Google Maps sau alte instrumente tehnice necesare funcționării
                website-ului.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                6. Păstrarea datelor
              </h2>
              <p className="mt-2">
                Datele sunt păstrate doar atât timp cât este necesar pentru scopurile pentru care au
                fost colectate, pentru gestionarea rezervărilor, comunicării sau pentru respectarea
                obligațiilor legale aplicabile.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                7. Drepturile dumneavoastră
              </h2>
              <p className="mt-2">
                Puteți solicita acces, corectare sau ștergere a datelor personale, în condițiile
                legislației aplicabile. Pentru solicitări, contactați-ne la{" "}
                <a className="text-primary hover:text-accent" href={SITE.emailHref}>
                  {SITE.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                8. Contact
              </h2>
              <p className="mt-2">
                Email contact:{" "}
                <a className="text-primary hover:text-accent" href={SITE.emailHref}>
                  {SITE.email}
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;