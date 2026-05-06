import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

const Ctx = createContext<{ theme: Theme; toggle: () => void } | null>(null);

// BREAKING CHANGE — new key so old browser preferences do not force light mode.
// Default theme is now DARK unless the visitor manually switches to light.
const STORAGE_KEY = "theme.beerloga.v3";

const detect = (): Theme => {
  if (typeof window === "undefined") return "dark";

  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "dark" || stored === "light") return stored;

  return "dark";
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(detect);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <Ctx.Provider
      value={{
        theme,
        toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
      }}
    >
      {children}
    </Ctx.Provider>
  );
};

export const useTheme = () => {
  const c = useContext(Ctx);

  if (!c) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return c;
};