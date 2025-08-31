"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Target, Eye, Scale, FileText, Landmark, Leaf, Users, ShieldCheck, Handshake, ArrowRight } from "lucide-react";

const ValueCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
    <div className="flex items-start gap-4">
        <div className="mt-1 text-accent">{icon}</div>
        <div>
            <h4 className="font-semibold text-lg text-foreground">{title}</h4>
            <p className="text-foreground/80">{children}</p>
        </div>
    </div>
);

const TimelineItem = ({ year, title, children }: { year: string; title: string; children: React.ReactNode }) => (
    <div className="relative pl-8">
        <div className="absolute left-0 top-1.5 h-full border-l-2 border-primary"></div>
        <div className="absolute left-[-9px] top-1.5 h-4 w-4 rounded-full bg-primary border-2 border-background"></div>
        <p className="font-bold text-primary">{year}</p>
        <h4 className="font-semibold text-lg mt-1">{title}</h4>
        <p className="mt-2 text-foreground/80">{children}</p>
    </div>
);


export function CooperativeDetails() {
  return (
    <section id="cooperative-details" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Découvrez <span className="text-primary">CHA-TEA</span> en Détail
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/60">
            CHA-TEA : <span className="font-semibold">C</span>oopérative d'<span className="font-semibold">Ha</span>bitat des <span className="font-semibold">T</span>ravailleurs <span className="font-semibold">I</span>mmigrés d'<span className="font-semibold">E</span>urope et d'<span className="font-semibold">A</span>mérique. Plus qu'un simple logement, une véritable communauté pour construire un avenir solide.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Notre Parcours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <TimelineItem year="2024" title="L'Idée Fondatrice">
                    Un groupe de travailleurs immigrés et de Sénégalais partageant les mêmes défis face au marché immobilier se réunit. L'idée d'une coopérative pour mutualiser les ressources et créer une force collective prend racine.
                </TimelineItem>
                <TimelineItem year="2025" title="La Naissance de CHA-TEA">
                    La coopérative est officiellement fondée. Les statuts sont déposés et les premiers membres fondateurs posent les bases d'une structure solidaire et démocratique pour un accès à la propriété juste et sécurisé.
                </TimelineItem>
                <TimelineItem year="2026" title="Premières Acquisitions">
                   Grâce à la mise en commun des parts sociales, CHA-TEA réalise ses premières acquisitions de terrains stratégiques dans des zones d'avenir, marquant le début concret de notre mission de construction.
                </TimelineItem>
                <TimelineItem year="Aujourd'hui" title="Une Communauté en Croissance">
                    CHA-TEA est une communauté grandissante, engagée dans le développement de projets immobiliers durables et la création de quartiers où il fait bon vivre, ensemble.
                </TimelineItem>
            </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card/50 flex flex-col">
            <CardHeader className="flex-row items-center gap-4">
              <Target className="w-8 h-8 text-accent" />
              <CardTitle>Notre Mission</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-foreground/80">Nous nous engageons à faciliter l'accès à un logement décent et abordable. Nous proposons des terrains viabilisés de 150 à 225 m² et accompagnons nos membres dans la réalisation de leurs projets immobiliers, en favorisant l'entraide, la transparence et la mutualisation des ressources pour bâtir un patrimoine durable.</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 flex flex-col">
            <CardHeader className="flex-row items-center gap-4">
              <Eye className="w-8 h-8 text-accent" />
              <CardTitle>Notre Vision</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-foreground/80">Devenir un modèle de référence en matière d'habitat coopératif au Sénégal, en alliant innovation sociale, respect de l'environnement et épanouissement de nos membres. Nous aspirons à bâtir des quartiers durables, inclusifs et connectés, où chaque membre se sent chez lui et participe activement à la vie communautaire.</p>
            </CardContent>
          </Card>
           <Card className="bg-card/50 flex flex-col">
            <CardHeader className="flex-row items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-accent" />
                <CardTitle>Nos Valeurs Fondamentales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
                <ValueCard icon={<Users className="w-5 h-5"/>} title="Solidarité">L'entraide est notre moteur. Nous nous soutenons mutuellement pour atteindre nos objectifs communs.</ValueCard>
                <ValueCard icon={<Scale className="w-5 h-5"/>} title="Équité">Chaque membre a le même pouvoir de décision, garantissant une gouvernance juste et transparente.</ValueCard>
                <ValueCard icon={<Handshake className="w-5 h-5"/>} title="Engagement">Nous sommes dédiés à la réussite de nos membres et au bien-être de notre communauté.</ValueCard>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
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
                  Notre coopérative fonctionne sur le principe fondamental "un membre, une voix". Toutes les décisions stratégiques, des acquisitions foncières aux budgets annuels, sont prises collectivement lors des assemblées générales. Cela assure une gestion transparente, équitable et alignée avec les intérêts de tous. Le conseil d'administration, élu par les membres, est le garant de la bonne exécution des décisions et de la santé financière de la coopérative.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">
                  <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5" /> Statuts de la Coopérative
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pl-8">
                  Nos statuts, rigoureusement conformes à l'acte uniforme de l'OHADA sur le droit des sociétés coopératives, définissent les règles de notre vie commune. Ils précisent les droits et devoirs des membres, les modalités d'adhésion et de retrait, ainsi que les mécanismes de gestion et de contrôle des biens. Ils sont le socle de notre projet collectif et sont consultables à tout moment par nos membres pour une transparence totale.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">
                   <div className="flex items-center gap-3">
                      <Scale className="w-5 h-5" /> Principes Coopératifs
                   </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pl-8">
                  Nous adhérons pleinement aux principes coopératifs internationaux : adhésion volontaire et ouverte à tous, pouvoir démocratique exercé par les membres, participation économique, autonomie et indépendance, éducation, formation et information, coopération entre les coopératives, et engagement envers la communauté. Ces principes ne sont pas de simples idéaux, mais le guide pratique de chacune de nos actions.
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
                  La durabilité est au cœur de nos projets. Nous encourageons activement les pratiques de construction bioclimatique et l'utilisation de matériaux locaux et écologiques pour minimiser notre empreinte carbone. Nos plans d'aménagement intègrent systématiquement des espaces verts, des systèmes de récupération d'eau de pluie et des solutions pour la gestion durable des déchets, afin de créer un cadre de vie sain pour nos membres et pour la planète.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">
                  <div className="flex items-center gap-3">
                      <Users className="w-5 h-5" /> Engagement Social et Communautaire
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pl-8">
                  Au-delà du logement, CHA-TEA vise à tisser des liens sociaux forts et durables. Nous organisons des événements réguliers, des ateliers et mettons en place des services partagés (comme des achats groupés ou des espaces communs) pour renforcer la cohésion et l'entraide. Nous favorisons l'inclusion, la diversité et la participation active de chaque membre à la vie de la coopérative, créant un véritable sentiment d'appartenance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="bg-secondary p-8 sm:p-12 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Comment nous rejoindre ?</h3>
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-center">
                <div className="flex-1">
                    <p className="font-semibold text-lg">1. Prise de Contact</p>
                    <p className="text-foreground/80 text-sm">Contactez-nous pour exprimer votre intérêt et recevoir le dossier d'information complet.</p>
                </div>
                <ArrowRight className="w-6 h-6 text-primary shrink-0 hidden md:block" />
                <div className="flex-1">
                    <p className="font-semibold text-lg">2. Session d'Information</p>
                    <p className="text-foreground/80 text-sm">Participez à une réunion (en ligne ou en personne) pour comprendre notre fonctionnement et poser vos questions.</p>
                </div>
                 <ArrowRight className="w-6 h-6 text-primary shrink-0 hidden md:block" />
                <div className="flex-1">
                    <p className="font-semibold text-lg">3. Adhésion</p>
                    <p className="text-foreground/80 text-sm">Remplissez le formulaire d'adhésion et acquittez-vous des frais et parts sociales pour devenir membre officiel.</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
