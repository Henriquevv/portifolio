import type { Metadata } from "next";
import { baseURL } from "@/resources";
import { about } from "@/resources/content.en";

export const metadata: Metadata = {
  title: about.title,
  description: about.description,
  alternates: {
    canonical: "/en",
    languages: {
      "pt-BR": "/",
      en: "/en",
    },
  },
  openGraph: {
    title: about.title,
    description: about.description,
    url: `${baseURL}/en`,
    locale: "en_US",
    alternateLocale: "pt_BR",
  },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
