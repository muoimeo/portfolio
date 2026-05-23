"use client";

import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-lg border border-outline-variant/30 bg-surface/50 p-0.5 font-label-md text-sm dark:border-outline-variant/10 dark:bg-surface/20 backdrop-blur-md">
      <button
        className={`rounded-md px-2.5 py-1 font-label-md text-xs font-bold transition-all duration-200 ${
          language === "en"
            ? "bg-primary text-on-primary shadow-sm scale-100"
            : "text-secondary hover:text-primary dark:text-gray-300 dark:hover:text-primary"
        }`}
        type="button"
        onClick={() => setLanguage("en")}
      >
        EN
      </button>
      <span className="mx-0.5 text-outline/20 dark:text-gray-700">|</span>
      <button
        className={`rounded-md px-2.5 py-1 font-label-md text-xs font-bold transition-all duration-200 ${
          language === "vi"
            ? "bg-primary text-on-primary shadow-sm scale-100"
            : "text-secondary hover:text-primary dark:text-gray-300 dark:hover:text-primary"
        }`}
        type="button"
        onClick={() => setLanguage("vi")}
      >
        VI
      </button>
    </div>
  );
}
