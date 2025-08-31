import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const benefits = [
  "Accès à un logement abordable et de qualité",
  "Participation à une communauté solidaire",
  "Cadre de vie écologique et durable",
  "Décisions collectives et démocratiques",
  "Stabilité et sécurité résidentielle",
];

export function Membership() {
  return (
    <section id="membership" className="py-16 sm:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Devenez Membre de la Coopérative <span className="text-accent">CHA-TEA</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/80">
              Rejoindre notre coopérative, c'est investir dans un projet de vie qui a du sens. En devenant membre, vous bénéficiez de nombreux avantages tout en contribuant à un modèle d'habitat plus juste et durable.
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.slice(0,3).map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-10 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/membership">
                En savoir plus sur l'adhésion
              </Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="https://picsum.photos/600/700"
              alt="Membres de la communauté travaillant ensemble"
              data-ai-hint="community people"
              width={600}
              height={700}
              className="rounded-xl shadow-2xl aspect-[6/7] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
