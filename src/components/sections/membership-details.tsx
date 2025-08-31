import { Button } from "@/components/ui/button";
import { CheckCircle2, UserPlus, FileText, HandCoins, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  "Accès à un logement abordable et de qualité, loin de la spéculation immobilière.",
  "Participation à une communauté solidaire où l'entraide et le partage sont des valeurs clés.",
  "Un cadre de vie pensé pour le bien-être, avec des projets écologiques et durables.",
  "Le pouvoir de décision à travers le principe 'un membre, une voix' pour une gouvernance démocratique.",
  "La stabilité et la sécurité résidentielle en devenant collectivement propriétaire du patrimoine.",
  "L'opportunité d'investir intelligemment dans la pierre et de construire un patrimoine pour l'avenir.",
  "Des formations et un accompagnement personnalisé pour la réalisation de votre projet immobilier."
];

const StepCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
    <div className="flex flex-col items-center text-center p-6 bg-card/50 rounded-lg">
        <div className="p-4 bg-accent rounded-full text-accent-foreground mb-4">{icon}</div>
        <h4 className="font-semibold text-lg mb-2">{title}</h4>
        <p className="text-foreground/80 text-sm">{children}</p>
    </div>
);


export function MembershipDetails() {
  return (
    <section id="membership-details" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Rejoignez l'Aventure <span className="text-primary">CHA-TEA</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/60">
            Adhérer à CHA-TEA, c'est bien plus que trouver un logement. C'est choisir un mode de vie collaboratif, investir dans un avenir durable et faire partie d'une communauté qui vous ressemble.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Les Avantages d'être Membre</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>
        </div>
        
        <div className="bg-secondary p-8 sm:p-12 rounded-lg mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Comment Devenir Membre ?</h3>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <StepCard icon={<UserPlus className="w-8 h-8"/>} title="1. Prise de Contact et Information">
                    Contactez-nous via notre formulaire pour exprimer votre intérêt. Vous recevrez un dossier d'information complet et serez invité(e) à une session d'information pour découvrir en détail notre fonctionnement et poser toutes vos questions.
                </StepCard>
                 <StepCard icon={<FileText className="w-8 h-8"/>} title="2. Soumission du Dossier">
                    Après la session, si vous êtes convaincu(e), vous pourrez soumettre votre dossier de candidature. Celui-ci sera examiné par le comité d'adhésion pour s'assurer de l'alignement de votre projet avec les valeurs de la coopérative.
                </StepCard>
                 <StepCard icon={<HandCoins className="w-8 h-8"/>} title="3. Adhésion et Intégration">
                    Une fois votre dossier validé, vous finalisez votre adhésion en vous acquittant des frais et en souscrivant à vos parts sociales. Félicitations, vous êtes officiellement membre de CHA-TEA et pouvez participer pleinement à la vie de la coopérative !
                </StepCard>
            </div>
        </div>
        
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <Card>
                <CardHeader>
                    <CardTitle>Frais et Parts Sociales</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground/80 mb-4">L'adhésion à CHA-TEA est un investissement dans votre avenir et dans celui de la communauté. Elle se compose de :</p>
                    <ul className="space-y-2 text-sm list-disc pl-5">
                        <li><strong>Frais d'adhésion uniques :</strong> 250€, couvrant les frais de dossier et administratifs.</li>
                        <li><strong>Acquisition de parts sociales :</strong> Votre véritable investissement dans le patrimoine commun. Le montant est défini en assemblée générale et peut être libéré progressivement.</li>
                    </ul>
                     <p className="text-xs text-foreground/60 mt-4">Contactez-nous pour connaître les modalités précises et les options de financement.</p>
                </CardContent>
            </Card>
             <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">Prêt à nous rejoindre ?</h3>
                <p className="text-foreground/80 mb-6">Faites le premier pas vers votre projet de vie. Contactez-nous dès aujourd'hui pour démarrer le processus.</p>
                <Button asChild size="lg">
                    <Link href="/#contact">
                        Contacter-nous
                    </Link>
                </Button>
            </div>
        </div>

      </div>
    </section>
  );
}
