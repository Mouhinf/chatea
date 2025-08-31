
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BedDouble, Bath, Ruler, Trees, Check, Phone } from "lucide-react";
import type { Property } from "@/lib/properties-data";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M16.75 13.96c.25.13.41.2.52.32.11.12.18.28.18.48s-.05.39-.15.52c-.1.13-.24.23-.42.31-.18.08-.41.13-.69.13-.43 0-.83-.09-1.2-.28s-.68-.45-.92-.77c-.24-.32-.4-.61-.48-.86s-.12-.48-.12-.68c0-.22.04-.43.12-.61s.19-.34.32-.48.29-.26.47-.35c.18-.09.38-.14.59-.14.21 0 .4-.04.56-.13.16-.09.28-.2.38-.32s.15-.25.15-.4c0-.1-.02-.19-.05-.26-.03-.07-.08-.13-.14-.18-.06-.05-.13-.09-.2-.11-.07-.02-.15-.04-.24-.04-.18 0-.36.05-.54.14l-.12.07c-.18.1-.36.2-.54.29s-.35.18-.51.26c-.16.08-.32.15-.48.21-.16.06-.32.1-.48.13-.16.03-.32.05-.48.05s-.3-.02-.44-.06-.27-.1-.39-.18c-.12-.08-.23-.17-.32-.28s-.16-.22-.22-.34c-.06-.12-.09-.24-.09-.36s.03-.23.08-.34.13-.2.22-.28.2-.15.34-.2c.14-.05.28-.09.43-.11s.3-.03.46-.03c.2,0,.4,0,.6,.02s.38,.05,.54,.1c.16,.05,.3,.11,.43,.19s.24,.17,.34,.29c.1,.12,.18,.25,.24,.41s.09,.32,.09,.51c0,.23-.05,.45-.14,.66-.09,.21-.22,.4-.39,.56-.17,.16-.38,.3-.62,.41-.24,.11-.5,.16-.78,.16-.4,0-.78-.07-1.12-.22s-.6-.36-.78-.63c-.18-.27-.27-.58-.27-.92s.09-.65,.27-.92c.18-.27,.43-.48,.75-.63s.69-.22,1.1-.22c.13,0,.26,0,.39,.02s.26,.05,.38,.09c.12,.04,.24,.1,.36,.16.12,.06,.23,.14,.34,.22.11,.08,.22,.17,.32,.28s.18,.22,.24,.34c.06,.12,.09,.25,.09,.41s-.03,.3-.09,.44c-.06,.14-.15,.26-.26,.36s-.25,.18-.41,.24c-.16,.06-.34,.09-.54,.09-.11,0-.22-.01-.33-.04s-.22-.07-.33-.13c-.11-.06-.21-.13-.31-.21s-.18-.18-.25-.29c-.07-.11-.11-.24-.11-.39s.03-.28,.09-.4c.06-.12,.15-.23,.26-.31.11-.08,.25-.15,.41-.2.16-.05,.34-.08,.55-.08,.45,0,.83,.1,1.14,.31s.55,.5,.71,.86c.16,.36,.24,.78,.24,1.26,0,.4-.08,.77-.23,1.11s-.36,.63-.62,.88c-.26,.25-.57,.45-.94,.59-.37,.14-.78,.21-1.22,.21-.53,0-1.02-.1-1.47-.3s-.83-.49-1.14-.87c-.31-.38-.54-.82-.69-1.32s-.22-1.03-.22-1.58c0-.58,.08-1.14,.23-1.66s.38-1,.68-1.41c.3-.41,.68-.74,1.12-1a3.29,3.29,0,0,1,1.6-.36c.2,0,.39,0,.58,.02s.37,.05,.54,.09.33,.1,.48,.16.29,.14,.41,.24c.12,.1,.23,.22,.32,.35s.16,.28,.2,.45.06,.35,.06,.53a.92.92,0,0,1-.19,.58c-.12,.21-.3,.38-.51,.51-.21,.13-.45,.2-.72,.2-.18,0-.36-.02-.53-.06s-.33-.1-.48-.18c-.15-.08-.29-.17-.42-.28-.13-.11-.24-.23-.34-.37s-.18-.29-.24-.45c-.06-.16-.09-.33-.09-.51,0,.31,.08,.58,.24,.82s.38,.42,.66,.54.59,.18,.94,.18c.36,0-71,0,.55-.06.18-.06.35-.14.51-.24s.3-.22,.42-.36.22-.3.3-.48c.08-.18.12-.38.12-.59,0,.3-.07,.57-.21,.81s-.33,.43-.57,.57-.51,.21-.81,.21c-.2,0-.39-.02-.57-.07s-.35-.11-.51-.19c-.16-.08-.3-.18-.43-.29s-.24-.24-.34-.39c-.1-.15-.17-.31-.22-.48s-.08-.35-.08-.53c0-.2,0,.39,.06,.56s.14,.33,.24,.48.22,.28,.35,.4c.13,.12,.27,.22,.42,.31s.3,.16,.46,.22.32,.09,.48,.09c.21,0,.4-.03,.57-.09s.32-.14,.45-.24.24-.22,.31-.36c.07-.14,.11-.29,.11-.45,0-.13-.02-.25-.06-.36s-.1-.21-.18-.3c-.08-.09-.17-.16-.27-.22s-.2-.1-.31-.13-.23-.05-.35-.05c-.19,0,"/></svg>
)

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

            <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto flex-1 sm:flex-none">
                    <a href="tel:+221775127492">
                        <Phone className="w-4 h-4 mr-2" />
                        Appeler maintenant
                    </a>
                </Button>
                <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto flex-1 sm:flex-none bg-green-500 hover:bg-green-600 text-white">
                    <a href="https://wa.me/221775127492" target="_blank" rel="noopener noreferrer">
                        <WhatsappIcon className="w-5 h-5 mr-2" />
                        Contacter sur WhatsApp
                    </a>
                </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
