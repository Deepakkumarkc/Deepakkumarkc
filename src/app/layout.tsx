import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profileData } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/Deepakkumarkc"),
  title: `${profileData.name} | ${profileData.primaryTitle}`,
  description: profileData.tagline,
  keywords: [
    "Azure Data Engineer",
    "Databricks",
    "PySpark",
    "Azure Data Factory",
    "ADF",
    "SQL Server",
    "Oracle PL/SQL",
    "Medallion Architecture",
    "Data Migration",
    "Deepak Kumar KC"
  ],
  authors: [{ name: profileData.name }],
  openGraph: {
    title: `${profileData.name} - ${profileData.primaryTitle}`,
    description: profileData.tagline,
    type: "website",
    url: profileData.githubUrl,
    images: [
      {
        url: "https://raw.githubusercontent.com/Deepakkumarkc/Deepakkumarkc/main/assets/hero_banner_animated.gif",
        width: 1200,
        height: 630,
        alt: `${profileData.name} Portfolio Banner`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} - ${profileData.primaryTitle}`,
    description: profileData.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} dark`}>
      <body className="bg-background text-foreground antialiased selection:bg-azure-500/30 selection:text-azure-300">
        {children}
      </body>
    </html>
  );
}
