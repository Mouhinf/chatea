import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Target, Eye, Scale, FileText, Landmark } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Découvrez <span className="text-primary">CHA-TEA</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/60">
            CHA-TEA : <span className="font-semibold">C</span>oopérative d'<span className="font-semibold">Ha</span>bitat des <span className="font-semibold">T</span>ravailleurs <span className="font-semibold">I</span>mmigrés d'<span className="font-semibold">E</span>urope et d'<span className="font-semibold">A</span>mérique. Plus qu'un simple logement, une véritable communauté.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card/50">
            <CardHeader className="flex-row items-center gap-4">
              <History className="w-8 h-8 text-accent" />
              <CardTitle>Notre Histoire</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">Fondée en 2020, CHA-TEA est née de la volonté de créer une alternative durable et solidaire au marché immobilier traditionnel pour les Sénégalais et immigrés.</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader className="flex-row items-center gap-4">
              <Target className="w-8 h-8 text-accent" />
              <CardTitle>Notre Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">Faciliter l'accès au logement et proposer des terrains de 150 à 225 m² pour des projets immobiliers destinés aux Sénégalais et immigrés.</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader className="flex-row items-center gap-4">
              <Eye className="w-8 h-8 text-accent" />
              <CardTitle>Notre Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">Devenir un modèle de référence en matière d'habitat coopératif, en alliant innovation sociale, respect de l'environnement et bien-être des résidents.</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">Gouvernance et Statuts</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                <div className="flex items-center gap-3">
                    <Landmark className="w-5 h-5" /> Gouvernance Démocratique
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 pl-8">
                Notre coopérative fonctionne sur le principe "un membre, une voix". Toutes les décisions importantes sont prises collectivement lors des assemblées générales, assurant une gestion transparente et équitable. Le conseil d'administration est élu par les membres et pour les membres.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5" /> Statuts de la Coopérative
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 pl-8">
                Nos statuts définissent les règles de fonctionnement, les droits et devoirs des membres, ainsi que les modalités d'acquisition et de gestion des biens. Ils sont le garant de notre projet collectif et peuvent être consultés sur demande par tous les membres.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">
                 <div className="flex items-center gap-3">
                    <Scale className="w-5 h-5" /> Principes et Valeurs
                 </div>
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 pl-8">
                Nous adhérons aux principes coopératifs internationaux : adhésion volontaire et ouverte, pouvoir démocratique exercé par les membres, participation économique, autonomie et indépendance, éducation, formation et information, coopération entre les coopératives et engagement envers la communauté.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
