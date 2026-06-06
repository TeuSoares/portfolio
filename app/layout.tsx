import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio // Mateus Soares",
  description:
    "Portfólio profissional de Mateus Soares, Desenvolvedor Full Stack especialista em Next.js, TypeScript e Laravel. Confira meus projetos e especialidades.",
  keywords: [
    "Mateus Soares",
    "Desenvolvedor",
    "Full Stack",
    "Next.js",
    "React",
    "Laravel",
    "TypeScript",
    "Portfólio",
    "python",
  ],
  authors: [{ name: "Mateus Soares", url: "https://github.com/TeuSoares" }],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
