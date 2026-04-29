import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { translations, type Lang, type TranslationKey } from "@/lib/translations";

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
}

const Ctx = createContext<I18nCtx | null>(null);

const detectLang = (): Lang => {
  if (typeof window === "undefined") return "ro";
  const stored = localStorage.getItem("lang") as Lang | null;
  if (stored === "ro" || stored === "ru") return stored;
  const nav = navigator.language.toLowerCase();
  if (nav.startsWith("ru")) return "ru";
  return "ro";
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(detectLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const value = useMemo<I18nCtx>(
    () => ({
      lang,
      setLang: setLangState,
      t: (key) => translations[lang][key] ?? translations.ro[key] ?? key,
    }),
    [lang],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
