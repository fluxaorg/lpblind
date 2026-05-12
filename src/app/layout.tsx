import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blindadora CRM | O Padrão Ouro em Gestão Automotiva",
  description: "A Blindagem do Futuro é Transparente. O primeiro CRM especializado que conecta sua oficina ao seu cliente.",
  icons: {
    icon: "/favicon.png?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn("h-full", "antialiased", "dark", inter.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-zinc-400 font-sans selection:bg-blue-500/30">
        {children}
      </body>
    </html>
  );
}
