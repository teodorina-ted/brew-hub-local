import { Link } from "react-router-dom";
import { SITE } from "@/lib/translations";

const Terms = () => {
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
            Termeni și condiții
          </h1>

          <p className="mt-4 text-sm text-muted-foreground">
            Ultima actualizare: Mai 2026
          </p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                1. Informații generale
              </h2>
              <p className="mt-2">
                Acest website aparține brandului {SITE.name}. Website-ul oferă informații despre pub,
                program, adresă, meniuri, evenimente și metode de contact.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                2. Vârsta legală și consum responsabil
              </h2>
              <p className="mt-2">
                Conținutul website-ului poate face referire la băuturi alcoolice. Accesarea și
                utilizarea informațiilor se face cu respectarea legislației aplicabile privind
                consumul responsabil de alcool. Servirea alcoolului este permisă doar persoanelor
                care au vârsta legală conform legislației Republicii Moldova.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                3. Rezervări și contact
              </h2>
              <p className="mt-2">
                Rezervările sau solicitările trimise prin telefon, email sau WhatsApp sunt considerate
                cereri de contact. Confirmarea rezervării depinde de disponibilitate și se face direct
                de către echipa {SITE.name}.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                4. Meniu, prețuri și disponibilitate
              </h2>
              <p className="mt-2">
                Produsele, prețurile, disponibilitatea și programul pot fi modificate fără notificare
                prealabilă. Informațiile de pe website au caracter informativ.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                5. Linkuri externe
              </h2>
              <p className="mt-2">
                Website-ul poate conține linkuri către servicii externe, inclusiv WhatsApp, Google Maps,
                Instagram, Facebook sau TikTok. Utilizarea acestor servicii este supusă termenilor și
                politicilor lor proprii.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                6. Limitarea răspunderii
              </h2>
              <p className="mt-2">
                Depunem eforturi pentru ca informațiile afișate să fie corecte, dar nu garantăm lipsa
                completă a erorilor. {SITE.name} nu răspunde pentru eventuale pierderi rezultate din
                folosirea informațiilor afișate pe website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                7. Contact
              </h2>
              <p className="mt-2">
                Pentru întrebări, ne puteți contacta la{" "}
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

export default Terms;