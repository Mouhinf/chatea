// As we cannot add new dependencies, this component acts as a placeholder
// for the interactive map requested by the user.
// It gives the visual impression of a map without the need for @vis.gl/react-google-maps.

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

export function Map() {
  return (
    <Link href="https://maps.app.goo.gl/Xof5KBNumodChyTY7" target="_blank" rel="noopener noreferrer" className="block w-full h-full group">
      <div className="relative w-full h-full bg-secondary overflow-hidden rounded-lg">
        <Image 
          src="https://picsum.photos/800/600"
          alt="Carte de la localisation de la coopérative"
          data-ai-hint="city map dakar"
          fill
          className="object-cover opacity-50 group-hover:opacity-60 transition-opacity"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
          <div className="flex flex-col items-center text-center text-white">
            <MapPin className="w-12 h-12 text-destructive drop-shadow-lg" />
            <p className="mt-2 font-semibold drop-shadow-lg">Afficher sur Google Maps</p>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 bg-background/80 p-2 rounded-md text-sm shadow-md">
          Rue 15 Vincent, Dakar Plateau
        </div>
      </div>
    </Link>
  );
}
