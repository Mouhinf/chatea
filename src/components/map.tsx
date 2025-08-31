// As we cannot add new dependencies, this component acts as a placeholder
// for the interactive map requested by the user.
// It gives the visual impression of a map without the need for @vis.gl/react-google-maps.

import Image from 'next/image';
import { MapPin } from 'lucide-react';

export function Map() {
  return (
    <div className="relative w-full h-full bg-secondary overflow-hidden rounded-lg">
      <Image 
        src="https://picsum.photos/800/600"
        alt="Carte de la localisation de la coopérative"
        data-ai-hint="city map dakar"
        fill
        className="object-cover opacity-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <MapPin className="w-12 h-12 text-destructive animate-pulse" />
      </div>
      <div className="absolute bottom-4 left-4 bg-background/80 p-2 rounded-md text-sm">
        Rue 15 Vincent, Dakar Plateau
      </div>
    </div>
  );
}
