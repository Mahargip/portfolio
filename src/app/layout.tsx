import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahargi Anugerahwan Pamungkas — Mobile Developer",
  description:
    "Portfolio of Mahargi Anugerahwan Pamungkas — Flutter Mobile Developer, Informatics Engineering Student, and NLP Researcher based in Sidoarjo, Indonesia.",
  keywords: [
    "Mobile Developer",
    "Flutter",
    "Dart",
    "Clean Architecture",
    "Informatics Engineering",
    "Indonesia",
    "NLP",
    "Machine Learning",
  ],
  authors: [{ name: "Mahargi Anugerahwan Pamungkas" }],
  openGraph: {
    title: "Mahargi Anugerahwan Pamungkas — Mobile Developer",
    description:
      "Flutter Mobile Developer & NLP Researcher based in Sidoarjo, Indonesia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
