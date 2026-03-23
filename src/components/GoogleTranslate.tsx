"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

export default function GoogleTranslate() {
  const [currentLang, setCurrentLang] = useState<"PT" | "EN">("PT");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // injeta CSS para esconder o banner do Google
    const style = document.createElement("style");
    style.innerHTML = `
      .goog-te-banner-frame,
      .skiptranslate,
      #goog-gt-tt { display: none !important; visibility: hidden !important; }
      body { top: 0 !important; position: static !important; }
    `;
    document.head.appendChild(style);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "pt", includedLanguages: "en,pt", autoDisplay: false },
        "google_translate_element"
      );
    };
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  const switchLang = (lang: "PT" | "EN") => {
    setCurrentLang(lang);
    setOpen(false);

    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = lang === "EN" ? "en" : "pt";
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }} />

      <div style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 9999 }}>
        {open && (
          <div
            style={{
              position: "absolute",
              bottom: "calc(100% + 8px)",
              right: 0,
              background: "var(--color-background-primary)",
              border: "0.5px solid var(--color-border-secondary)",
              borderRadius: 10,
              overflow: "hidden",
              minWidth: 130,
            }}
          >
            {[
              { code: "PT" as const, label: "Português", flag: "🇧🇷" },
              { code: "EN" as const, label: "English", flag: "🇺🇸" },
            ].map((item) => (
              <button
                key={item.code}
                onClick={() => switchLang(item.code)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 14px",
                  background: "transparent",
                  border: "none",
                  borderBottom:
                    item.code === "PT"
                      ? "0.5px solid var(--color-border-tertiary)"
                      : "none",
                  cursor: "pointer",
                  fontSize: 13,
                  color: "var(--color-text-primary)",
                  textAlign: "left",
                }}
              >
                <span style={{ fontSize: 16 }}>{item.flag}</span>
                {item.label}
              </button>
            ))}
          </div>
        )}

        <button
          onClick={() => setOpen((o) => !o)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 14px",
            background: "var(--color-background-secondary)",
            border: "0.5px solid var(--color-border-secondary)",
            borderRadius: 999,
            cursor: "pointer",
            fontSize: 12,
            color: "var(--color-text-secondary)",
            letterSpacing: "0.02em",
          }}
        >
          🌐 {currentLang}
        </button>
      </div>
    </>
  );
}