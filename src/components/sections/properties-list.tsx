"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BedDouble, Bath, Ruler, Trees } from "lucide-react";
import Link from "next/link";
import { properties_data } from "@/lib/properties-data";


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
            {properties_data.map((prop) => (
              <div key={prop.id} className="p-1">
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
            ))}
        </div>
      </div>
    </section>
  );
}
