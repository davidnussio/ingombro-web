import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Screenshots } from "@/components/screenshots";
import { Features } from "@/components/features";
import { SmartClean } from "@/components/smart-clean";
import { Install } from "@/components/install";
import { TechStack } from "@/components/tech-stack";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
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
  );
}
