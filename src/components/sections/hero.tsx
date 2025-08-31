import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-3.5rem)] w-full">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Vue aérienne d'un quartier résidentiel à Dakar"
        data-ai-hint="residential neighborhood dakar"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Votre Avenir Commence Ici.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/80 sm:text-xl">
          CHA-TEA : La coopérative qui rapproche votre foyer.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#properties">
              Voir nos propriétés
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">
              Nous contacter
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
