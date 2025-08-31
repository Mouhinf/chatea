"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
