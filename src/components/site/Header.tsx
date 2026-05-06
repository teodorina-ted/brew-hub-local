import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useI18n } from "@/contexts/I18nContext";
import { SITE } from "@/lib/translations";
import logo from "@/assets/beerloga-logo.svg";

const navItems: { href: string; key: any }[] = [
  { href: "#about", key: "nav.about" },
  { href: "#why", key: "nav.why" },
  { href: "#beers", key: "nav.beers" },
  { href: "#gallery", key: "nav.gallery" },
  { href: "#contact", key: "nav.contact" },
];

export const Header = () => {
  const { theme, toggle } = useTheme();
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 font-display text-xl font-bold tracking-wider text-primary">
          <img src={logo} alt="BEERLOGA" className="h-11 w-auto" />
          <span className="hidden sm:inline">{SITE.name}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {t(n.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <div className="hidden items-center rounded-full border border-border bg-muted/50 p-0.5 sm:flex">
            {(["ro", "ru"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-3 py-1 text-xs font-bold uppercase transition-all ${
                  lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label={`Switch to ${l}`}
              >
                {l}
              </button>
            ))}
          </div>

          <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="container flex flex-col py-3">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-sm font-medium last:border-0"
              >
                {t(n.key)}
              </a>
            ))}
            <div className="mt-3 flex items-center gap-2 sm:hidden">
              {(["ro", "ru"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-sm border border-border px-3 py-1.5 text-xs font-bold uppercase ${
                    lang === l ? "bg-gradient-amber text-primary-foreground" : ""
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
