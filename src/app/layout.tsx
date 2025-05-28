import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from '../components/nav';
import Footer from '../components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Pedro Portela",
  description: "Meu portfólio profissional e projetos pessoais",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body
        className={`flex flex-col min-h-screen font-sans ${geistSans.variable} ${geistMono.variable}`}
      >
        <Nav />
        <main className="flex-grow p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
