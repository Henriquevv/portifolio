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
    // detecta idioma do navegador
    const browserLang = navigator.language || navigator.languages?.[0] || "pt";
    const isEnglish = browserLang.toLowerCase().startsWith("en");

    if (isEnglish) {
      setCurrentLang("EN");
    }

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

      // após o widget carregar, auto-traduz se navegador for EN
      if (isEnglish) {
        const tryAutoTranslate = setInterval(() => {
          const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
          if (select) {
            select.value = "en";
            select.dispatchEvent(new Event("change"));
            clearInterval(tryAutoTranslate);
          }
        }, 200);

        // segurança: para de tentar após 5s
        setTimeout(() => clearInterval(tryAutoTranslate), 5000);
      }
    };

    // ==========================================
    // LÓGICA DO CURRÍCULO DINÂMICO
    // ==========================================
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const linkElement = target.closest("a");

      // Se clicou em um link que termina em #cv
      if (linkElement && linkElement.href.includes("#cv")) {
        e.preventDefault(); // Impede o redirecionamento padrão

        // Lê o cookie do Google para saber o idioma atual de forma confiável
        const translateCookie = document.cookie.split("; ").find((row) => row.startsWith("googtrans="));
        const isEnglish = translateCookie && translateCookie.includes("/en");

        const linkPT = "/curriculo.pdf";
        const linkEN = "/curriculo-en.pdf"; // Lembre-se de ter este arquivo na pasta public

        window.open(isEnglish ? linkEN : linkPT, "_blank");
      }
    };

    // Começa a ouvir os cliques na tela
    document.addEventListener("click", handleLinkClick);

    const script = document.createElement("script");
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
      document.removeEventListener("click", handleLinkClick); // Limpa o evento de clique
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