import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Screenshots } from "@/components/screenshots";
import { Features } from "@/components/features";
import { SmartClean } from "@/components/smart-clean";
import { Install } from "@/components/install";
import { TechStack } from "@/components/tech-stack";
import { Footer } from "@/components/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ingombro",
  description:
    "Disk space analyzer for macOS with interactive treemap visualization and Smart Clean to remove node_modules, build caches, and more.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "macOS",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "David Nussio",
    url: "https://github.com/davidnussio",
  },
  downloadUrl:
    "https://github.com/davidnussio/ingombro/releases/download/v1.0.0/stable-macos-arm64-Ingombro.dmg",
  softwareVersion: "1.0.0",
  url: "https://ingombro.dev",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Screenshots />
        <Features />
        <SmartClean />
        <Install />
        <TechStack />
        <Footer />
      </main>
    </>
  );
}
