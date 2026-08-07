"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@once-ui-system/core";
import { getAlternateLocalePath, getLocaleFromPathname } from "@/lib/locale";

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const alternatePath = getAlternateLocalePath(pathname);
  const nextLocaleLabel = locale === "pt" ? "EN" : "PT";

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  return (
    <Button
      href={alternatePath}
      variant="secondary"
      size="s"
      prefixIcon="globe"
      aria-label={locale === "pt" ? "Switch site language to English" : "Mudar idioma do site para português"}
      style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 10 }}
    >
      {nextLocaleLabel}
    </Button>
  );
}
