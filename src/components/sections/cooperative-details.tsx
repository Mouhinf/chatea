"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Target, Eye, Scale, FileText, Landmark, Leaf, Users } from "lucide-react";

export function CooperativeDetails() {
  return (
    <section id="cooperative-details" className="py-16 sm:py-24">
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
              <p className="text-foreground/80">Fondée en 2025, CHA-TEA est née d'une ambition commune : offrir aux travailleurs immigrés et aux Sénégalais une voie d'accès à la propriété sécurisée et communautaire. Face aux défis du marché immobilier, nous avons créé un modèle solidaire pour construire un avenir stable.</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader className="flex-row items-center gap-4">
              <Target className="w-8 h-8 text-accent" />
              <CardTitle>Notre Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">Nous nous engageons à faciliter l'accès à un logement décent et abordable. Nous proposons des terrains viabilisés de 150 à 225 m² et accompagnons nos membres dans la réalisation de leurs projets immobiliers, en favorisant l'entraide et la mutualisation des ressources.</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader className="flex-row items-center gap-4">
              <Eye className="w-8 h-8 text-accent" />
              <CardTitle>Notre Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">Devenir un modèle de référence en matière d'habitat coopératif au Sénégal, en alliant innovation sociale, respect de l'environnement et épanouissement de nos membres. Nous aspirons à bâtir des quartiers durables et inclusifs où il fait bon vivre.</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-center mb-6">Gouvernance et Statuts</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">
                  <div className="flex items-center gap-3">
                      <Landmark className="w-5 h-5" /> Gouvernance Démocratique
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pl-8">
                  Notre coopérative fonctionne sur le principe "un membre, une voix". Toutes les décisions importantes sont prises collectivement lors des assemblées générales, assurant une gestion transparente et équitable. Le conseil d'administration, élu par les membres, est le garant de la bonne gestion et de l'orientation stratégique de la coopérative.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">
                  <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5" /> Statuts de la Coopérative
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pl-8">
                  Nos statuts, conformes à la législation en vigueur, définissent les règles de fonctionnement, les droits et devoirs des membres, ainsi que les modalités d'acquisition et de gestion des biens. Ils sont le fondement de notre projet collectif et peuvent être consultés sur demande par tous les membres.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">
                   <div className="flex items-center gap-3">
                      <Scale className="w-5 h-5" /> Principes et Valeurs
                   </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pl-8">
                  Nous adhérons aux principes coopératifs internationaux : adhésion volontaire, pouvoir démocratique, participation économique, autonomie, éducation, coopération entre les coopératives et engagement envers la communauté. La solidarité, l'équité et la responsabilité sont au cœur de notre action.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
           <div>
            <h3 className="text-2xl font-bold text-center mb-6">Nos Engagements</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">
                  <div className="flex items-center gap-3">
                      <Leaf className="w-5 h-5" /> Engagement Écologique
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pl-8">
                  Nous encourageons les pratiques de construction durable et l'utilisation de matériaux locaux pour minimiser notre empreinte écologique. Nos projets intègrent des espaces verts et des solutions pour la gestion de l'eau et des déchets, créant ainsi un cadre de vie sain et respectueux de l'environnement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">
                  <div className="flex items-center gap-3">
                      <Users className="w-5 h-5" /> Engagement Social
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pl-8">
                  Au-delà du logement, CHA-TEA vise à créer du lien social. Nous organisons des activités et mettons en place des services partagés pour renforcer la cohésion et l'entraide au sein de la communauté. Nous favorisons l'inclusion et la participation de tous les membres à la vie de la coopérative.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
