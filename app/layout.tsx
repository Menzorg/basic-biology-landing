import type { Metadata } from "next";
import { Geist, Geist_Mono, Russo_One, Arsenal } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const russoOne = Russo_One({
  weight: "400",
  variable: "--font-russo-one",
  subsets: ["cyrillic", "latin"],
});

const arsenal = Arsenal({
  weight: ["400", "700"],
  variable: "--font-arsenal",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "Nauka.life",
  description: "Образовательная платформа",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${russoOne.variable} ${arsenal.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
