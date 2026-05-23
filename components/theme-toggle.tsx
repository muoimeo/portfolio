"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <button
      aria-label="Toggle theme"
      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-outline-variant/30 bg-surface/50 text-secondary shadow-sm backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 dark:border-outline-variant/10 dark:bg-surface/20 dark:text-gray-300 dark:hover:text-primary"
      type="button"
      onClick={toggleTheme}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}

