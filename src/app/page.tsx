import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Properties } from "@/components/sections/properties";
import { Membership } from "@/components/sections/membership";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Properties />
        <Membership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
