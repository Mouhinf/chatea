import { Logo } from "@/components/logo";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
)

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path></svg>
)

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.217.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122s-.013 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.554.555-1.112.9-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06s-3.056-.013-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.013-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg>
)

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start space-y-4">
            <Logo />
            <p className="text-sm text-foreground/60">
              La coopérative qui rapproche votre foyer.
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link href="/cooperative" className="text-sm text-foreground/60 hover:text-primary">Coopérative</Link></li>
                <li><Link href="/properties" className="text-sm text-foreground/60 hover:text-primary">Propriétés</Link></li>
                <li><Link href="/membership" className="text-sm text-foreground/60 hover:text-primary">Adhésion</Link></li>
                <li><Link href="/contact" className="text-sm text-foreground/60 hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />Rue 15 Vincent, Dakar Plateau</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" />+221 77 512 74 92</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" />contact@chatea.coop</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-foreground/60 hover:text-primary"><TwitterIcon className="w-6 h-6" /></Link>
              <Link href="#" className="text-foreground/60 hover:text-primary"><FacebookIcon className="w-6 h-6" /></Link>
              <Link href="#" className="text-foreground/60 hover:text-primary"><InstagramIcon className="w-6 h-6" /></Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} CHA-TEA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
