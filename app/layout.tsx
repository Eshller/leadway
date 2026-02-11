import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leadway",
  description: "Lead management system built with Eshway design system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply theme before paint (prevents flash) - defaults to dark */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(() => {
  try {
    const saved = localStorage.getItem("theme");
    const theme = saved || "dark";
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  } catch (_) {}
})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
