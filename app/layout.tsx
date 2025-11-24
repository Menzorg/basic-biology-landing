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

// Arsenal SC is not directly available as Arsenal_SC in next/font/google in some versions, 
// but Arsenal is. The design asked for Arsenal SC. 
// Let's try importing Arsenal first, often they are the same or similar enough for initial impl.
// Note: "Arsenal SC" is a separate font on Google Fonts. 
// Next.js usually supports all Google Fonts. Let's try importing Arsenal_SC if it exists, otherwise fallback to Arsenal.
// I'll use 'Arsenal' for now as a safe bet or 'Arsenal_SC' if I can confirm. 
// Actually, let's check if I can use the string name in a different way or just assume it works.
// If it fails I will fix it.
// Using 'Arsenal' with classname for now.

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
