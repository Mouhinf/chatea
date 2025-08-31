import { ContactForm } from "@/components/contact-form";
import { Map } from "@/components/map";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contactez-Nous
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/60">
            Une question ? Un projet ? Nous sommes à votre écoute.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h3>
            <ContactForm />
          </div>

          <div className="flex flex-col gap-8">
            <div>
                <h3 className="text-2xl font-semibold mb-4">Nos Coordonnées</h3>
                <div className="space-y-4 text-foreground/80">
                    <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-foreground">Adresse</h4>
                            <p>Rue 15 Vincent, Dakar Plateau</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-foreground">Téléphone</h4>
                            <p>+221 77 512 74 92</p>
                            <p>+221 77 421 78 71</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-foreground">Email</h4>
                            <p>contact@chatea.coop</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
