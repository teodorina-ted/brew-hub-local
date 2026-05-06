import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useI18n } from "@/contexts/I18nContext";
import { SITE } from "@/lib/translations";

const logo = "/logo-transparent.png";

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

  const menuHref = lang === "ru" ? "/beerloga-menu-ru.pdf" : "/beerloga-menu-ro.pdf";
  const menuLabel = lang === "ru" ? "Посмотреть меню" : "Descarcă meniul";

  // BREAKING NEWS BAR — edit this text to change the opening announcement.
  // To hide the breaking news bar after 1 June 2026, remove the block marked below.
  const openingText =
    lang === "ru"
      ? "Официальное открытие BEERLOGA — 1 июня 2026"
      : "Deschiderea oficială BEERLOGA — 1 iunie 2026";

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-[#C6922E]/35 bg-[#061827]/92 text-[#F5EAD6] backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="flex items-center gap-3 font-display text-xl font-bold tracking-wider text-[#F5EAD6] transition-colors hover:text-[#E8C46A]"
        >
          <img
            src={logo}
            alt="BEERLOGA"
            className="h-12 w-auto object-contain"
          />
          <span className="hidden sm:inline">{SITE.name}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-[#F5EAD6]/80 transition-colors hover:text-[#E8C46A]"
            >
              {t(n.key)}
            </a>
          ))}

          <a
            href={menuHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#C6922E]/70 bg-[#C6922E]/15 px-3 py-1.5 font-display text-xs uppercase tracking-wider text-[#E8C46A] transition-all hover:bg-[#C6922E] hover:text-[#061827]"
          >
            <Download className="h-3.5 w-3.5" />
            {menuLabel}
          </a>
        </nav>

        <div className="flex items-center gap-1.5">
          <div className="hidden items-center rounded-full border border-[#C6922E]/40 bg-[#04111D]/80 p-0.5 sm:flex">
            {(["ro", "ru"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-3 py-1 text-xs font-bold uppercase transition-all ${
                  lang === l
                    ? "bg-[#C6922E] text-[#061827]"
                    : "text-[#F5EAD6]/70 hover:text-[#E8C46A]"
                }`}
                aria-label={`Switch to ${l}`}
              >
                {l}
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label="Toggle theme"
            className="text-[#F5EAD6] hover:bg-[#C6922E]/15 hover:text-[#E8C46A]"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-[#F5EAD6] hover:bg-[#C6922E]/15 hover:text-[#E8C46A] md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* BREAKING NEWS BAR — official opening message */}
      {/* To hide it after 1 June 2026, delete or comment this whole block */}
      {/* To modify the text, edit the openingText variable above */}
      <div className="overflow-hidden border-t border-[#E8C46A]/60 bg-[#C6922E] py-2 text-[#061827]">
        <div className="marquee-track flex w-max gap-10 font-display text-xs font-bold uppercase tracking-[0.25em]">
          {[...Array(6)].map((_, index) => (
            <span key={index} className="whitespace-nowrap">
              🍺 {openingText}
            </span>
          ))}
        </div>
      </div>

      {open && (
        <nav className="border-t border-[#C6922E]/35 bg-[#061827]/98 text-[#F5EAD6] backdrop-blur-xl md:hidden">
          <div className="container flex flex-col py-3">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-[#C6922E]/20 py-3 text-sm font-medium text-[#F5EAD6]/85 last:border-0 hover:text-[#E8C46A]"
              >
                {t(n.key)}
              </a>
            ))}

            <a
              href={menuHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-[#C6922E]/70 bg-[#C6922E]/15 px-4 py-2 font-display text-xs uppercase tracking-wider text-[#E8C46A] hover:bg-[#C6922E] hover:text-[#061827]"
            >
              <Download className="h-3.5 w-3.5" />
              {menuLabel}
            </a>

            <div className="mt-3 flex items-center gap-2 sm:hidden">
              {(["ro", "ru"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-sm border border-[#C6922E]/40 px-3 py-1.5 text-xs font-bold uppercase ${
                    lang === l
                      ? "bg-[#C6922E] text-[#061827]"
                      : "text-[#F5EAD6]/80"
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