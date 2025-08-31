"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BedDouble, Bath, Ruler, Trees } from "lucide-react";
import Link from "next/link";
import { properties_data } from "@/lib/properties-data";

const featured_properties = properties_data.filter(p => p.isNew).slice(0, 4);

export function Properties() {
  return (
    <section id="properties" className="py-16 sm:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Nos Propriétés et Terrains à la Une
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/60">
            Un aperçu de nos meilleures opportunités pour votre projet de vie.
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
            {featured_properties.map((prop) => (
              <CarouselItem key={prop.id} className="md:basis-1/2 lg:basis-1/3">
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
                      <Button asChild variant="outline">
                        <Link href={`/properties/${prop.id}`}>Voir plus</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-1rem] sm:left-[-2rem] top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-[-1rem] sm:right-[-2rem] top-1/2 -translate-y-1/2" />
        </Carousel>
        <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/properties">Voir toutes nos propriétés</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
