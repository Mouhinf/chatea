"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BedDouble, Bath, Ruler, Trees } from "lucide-react";

const properties = [
  {
    title: "Terrain Viabilisé à Diamniadio",
    type: "Terrain",
    image: "https://picsum.photos/600/400?random=1",
    hint: "serviced land plot",
    price: "15 000 000 FCFA",
    area: 150,
    isNew: true,
  },
  {
    title: "Terrain Résidentiel à Lac Rose",
    type: "Terrain",
    image: "https://picsum.photos/600/400?random=2",
    hint: "residential land",
    price: "22 000 000 FCFA",
    area: 200,
    isNew: false,
  },
  {
    title: "Appartement T3 à Dakar",
    type: "Appartement",
    image: "https://picsum.photos/600/400?random=3",
    hint: "modern apartment dakar",
    price: "Nous consulter",
    bedrooms: 2,
    bathrooms: 2,
    area: 100,
    isNew: false,
  },
  {
    title: "Villa 4 Chambres à Saly",
    type: "Maison",
    image: "https://picsum.photos/600/400?random=4",
    hint: "villa saly senegal",
    price: "Nous consulter",
    bedrooms: 4,
    bathrooms: 3,
    area: 225,
    isNew: true,
  },
  {
    title: "Terrain d'Avenir à Yenne",
    type: "Terrain",
    image: "https://picsum.photos/600/400?random=5",
    hint: "land plot ocean",
    price: "18 500 000 FCFA",
    area: 180,
    isNew: false,
  },
   {
    title: "Studio moderne à Ngor",
    type: "Appartement",
    image: "https://picsum.photos/600/400?random=6",
    hint: "modern studio ngor",
    price: "Nous consulter",
    bedrooms: 1,
    bathrooms: 1,
    area: 50,
    isNew: true,
  },
  {
    title: "Terrain avec vue sur mer",
    type: "Terrain",
    image: "https://picsum.photos/600/400?random=7",
    hint: "land sea view",
    price: "35 000 000 FCFA",
    area: 250,
    isNew: false,
  },
    {
    title: "Maison familiale à Ouakam",
    type: "Maison",
    image: "https://picsum.photos/600/400?random=8",
    hint: "family house ouakam",
    price: "Nous consulter",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    isNew: false,
  },
];

export function PropertiesList() {
  return (
    <section id="properties-list" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Toutes Nos Propriétés et Terrains
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/60">
            Découvrez l'ensemble de nos offres, pensées pour chaque projet de vie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((prop, index) => (
              <div key={index} className="p-1">
                 <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                    <CardHeader className="p-0 relative">
                      <Image
                        src={prop.image}
                        alt={`Image de ${prop.title}`}
                        data-ai-hint={prop.hint}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover"
                      />
                      {prop.isNew && <Badge className="absolute top-2 right-2" variant="destructive">Nouveau</Badge>}
                       <Badge className="absolute top-2 left-2" variant="default">{prop.type}</Badge>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                      <CardTitle className="mb-2 text-xl">{prop.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-foreground/80 mt-4">
                        {prop.bedrooms && (
                          <div className="flex items-center gap-2">
                            <BedDouble className="w-4 h-4 text-accent" />
                            <span>{prop.bedrooms} ch.</span>
                          </div>
                        )}
                        {prop.bathrooms && (
                          <div className="flex items-center gap-2">
                            <Bath className="w-4 h-4 text-accent" />
                            <span>{prop.bathrooms} sdb.</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          {prop.type === 'Terrain' ? <Trees className="w-4 h-4 text-accent" /> : <Ruler className="w-4 h-4 text-accent" />}
                          <span>{prop.area} m²</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 flex justify-between items-center">
                      <p className="text-xl font-bold text-primary">{prop.price}</p>
                      <Button variant="outline">Voir plus</Button>
                    </CardFooter>
                  </Card>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
