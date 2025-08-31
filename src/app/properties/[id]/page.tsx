import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PropertyDetails } from "@/components/sections/property-details";
import { properties }_data from "@/lib/properties-data";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return properties_data.map((property) => ({
    id: property.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const property = properties_data.find((p) => p.id === params.id);

  if (!property) {
    return {
      title: "Propriété non trouvée",
      description: "La propriété que vous cherchez n'existe pas.",
    };
  }

  return {
    title: `${property.title} | CHA-TEA`,
    description: `Détails de la propriété: ${property.title}`,
  };
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = properties_data.find((p) => p.id === params.id);

  if (!property) {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Propriété non trouvée</h1>
                    <p className="mt-4 text-lg text-foreground/60">Désolé, la propriété que vous recherchez n'a pas pu être trouvée.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
  }
  
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PropertyDetails property={property} />
      </main>
      <Footer />
    </div>
  );
}
