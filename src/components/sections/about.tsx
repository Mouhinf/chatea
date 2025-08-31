import Link from "next/link";
import { Button } from "@/components/ui/button";
import { History, Target, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Découvrez <span className="text-primary">CHA-TEA</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/60">
            Plus qu'un simple logement, une véritable communauté.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
           <Card className="bg-card/50">
            <CardHeader className="flex-row items-center gap-4">
              <History className="w-8 h-8 text-accent" />
              <CardTitle>Notre Histoire</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">La coopérative est fondée en 2025, CHA-TEA est née de la volonté de créer une alternative durable et solidaire au marché immobilier traditionnel pour les Sénégalais et immigrés.</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader className="flex-row items-center gap-4">
              <Target className="w-8 h-8 text-accent" />
              <CardTitle>Notre Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">Faciliter l'accès au logement et proposer des terrains de 150 à 225 m² pour des projets immobiliers.</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader className="flex-row items-center gap-4">
              <Eye className="w-8 h-8 text-accent" />
              <CardTitle>Notre Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">Devenir un modèle de référence en matière d'habitat coopératif, en alliant innovation sociale et bien-être.</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
            <Button asChild size="lg">
                <Link href="/cooperative">En savoir plus</Link>
            </Button>
        </div>

      </div>
    </section>
  );
}
