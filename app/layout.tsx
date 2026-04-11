import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ingombro.dambox.ch"),
  title: {
    default: "Ingombro - Disk Space Analyzer for macOS",
    template: "%s | Ingombro",
  },
  description:
    "Analyze disk space and clean up unnecessary directories. Interactive treemap visualization with Smart Clean to remove node_modules, build caches, and more.",
  keywords: [
    "disk analyzer",
    "macOS",
    "disk space",
    "node_modules",
    "cleanup",
    "treemap",
    "developer tools",
    "disk usage",
    "storage cleaner",
    "mac cleaner",
    "homebrew",
    "smart clean",
  ],
  authors: [{ name: "David Nussio" }],
  creator: "David Nussio",
  publisher: "David Nussio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ingombro - Disk Space Analyzer for macOS",
    description:
      "Analyze disk space and clean up unnecessary directories with interactive treemap visualization.",
    url: "https://ingombro.dambox.ch",
    siteName: "Ingombro",
    images: [
      {
        url: "/images/ingombro-1.png",
        width: 1200,
        height: 750,
        alt: "Ingombro - Disk Space Analyzer for macOS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ingombro - Disk Space Analyzer for macOS",
    description:
      "Analyze disk space and clean up unnecessary directories with interactive treemap visualization.",
    images: ["/images/ingombro-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/icon.png",
    apple: "/images/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
