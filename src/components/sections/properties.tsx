"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BedDouble, Bath, Ruler, Trees } from "lucide-react";

const properties = [
  {
    title: "Maison Familiale Moderne",
    type: "Maison",
    image: "https://picsum.photos/600/400?random=1",
    hint: "modern house",
    price: "450 000 €",
    bedrooms: 4,
    bathrooms: 2,
    area: 180,
    isNew: true,
  },
  {
    title: "Terrain Viabilisé 'Les Chênes'",
    type: "Terrain",
    image: "https://picsum.photos/600/400?random=2",
    hint: "land plot",
    price: "120 000 €",
    area: 2500,
    isNew: false,
  },
  {
    title: "Appartement T3 Centre-Ville",
    type: "Appartement",
    image: "https://picsum.photos/600/400?random=3",
    hint: "apartment interior",
    price: "280 000 €",
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    isNew: false,
  },
  {
    title: "Maison de Campagne Rénovée",
    type: "Maison",
    image: "https://picsum.photos/600/400?random=4",
    hint: "country house",
    price: "375 000 €",
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    isNew: true,
  },
  {
    title: "Parcelle Forestière",
    type: "Terrain",
    image: "https://picsum.photos/600/400?random=5",
    hint: "forest land",
    price: "95 000 €",
    area: 10000,
    isNew: false,
  },
];

export function Properties() {
  return (
    <section id="properties" className="py-16 sm:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Nos Propriétés et Terrains Disponibles
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/60">
            Trouvez le lieu idéal pour votre projet de vie au sein de notre coopérative.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {properties.map((prop, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
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
                            <BedDouble className="w-4 h-4 text-primary" />
                            <span>{prop.bedrooms} ch.</span>
                          </div>
                        )}
                        {prop.bathrooms && (
                          <div className="flex items-center gap-2">
                            <Bath className="w-4 h-4 text-primary" />
                            <span>{prop.bathrooms} sdb.</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          {prop.type === 'Terrain' ? <Trees className="w-4 h-4 text-primary" /> : <Ruler className="w-4 h-4 text-primary" />}
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-1rem] sm:left-[-2rem] top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-[-1rem] sm:right-[-2rem] top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
