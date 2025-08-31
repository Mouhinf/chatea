
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BedDouble, Bath, Ruler, Trees, Check } from "lucide-react";
import type { Property } from "@/lib/properties-data";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";

export function PropertyDetails({ property }: { property: Property }) {
  
  // Create a few more image variants from the base image
  const image_variants = [
    property.image,
    property.image.replace("?random", "?grayscale&random"),
    property.image.replace("?random", "?blur=2&random"),
  ]

  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Carousel className="w-full rounded-lg overflow-hidden">
              <CarouselContent>
                {image_variants.map((src, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={src}
                      alt={`Vue ${index + 1} de ${property.title}`}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-cover aspect-video"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>

          <div>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <Badge variant="default" className="mb-2">{property.type}</Badge>
                    {property.isNew && <Badge variant="destructive" className="ml-2">Nouveau</Badge>}
                    <h1 className="text-3xl sm:text-4xl font-bold">{property.title}</h1>
                </div>
                <div className="text-right flex-shrink-0">
                     <p className="text-3xl font-bold text-primary whitespace-nowrap">{property.price}</p>
                     { property.price !== 'Nous consulter' && property.type !== 'Terrain' && <p className="text-sm text-foreground/70">par mois</p> }
                </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-lg text-foreground/80 my-6">
                {property.bedrooms && (
                  <div className="flex items-center gap-2">
                    <BedDouble className="w-5 h-5 text-accent" />
                    <span>{property.bedrooms} {property.bedrooms > 1 ? 'chambres' : 'chambre'}</span>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-accent" />
                    <span>{property.bathrooms} {property.bathrooms > 1 ? 'salles de bain' : 'salle de bain'}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  {property.type === 'Terrain' ? <Trees className="w-5 h-5 text-accent" /> : <Ruler className="w-5 h-5 text-accent" />}
                  <span>{property.area} m²</span>
                </div>
            </div>

            <p className="text-foreground/80 text-base leading-relaxed mb-8">{property.description}</p>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Caractéristiques principales</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/#contact">
                    Contacter un agent
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
