"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "vi";

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  mounted: boolean;
}>({
  language: "en",
  setLanguage: () => undefined,
  mounted: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      const saved = window.localStorage.getItem("language") as Language | null;
      if (saved) {
        setLanguage(saved);
      }
      setMounted(true);
    });
  }, []);

  useEffect(() => {
    if (mounted) {
      window.localStorage.setItem("language", language);
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      mounted,
    }),
    [language, mounted]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
