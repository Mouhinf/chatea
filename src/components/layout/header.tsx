
"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from 'next/navigation'


import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/#about", label: "À propos", onHome: true },
    { href: "/cooperative", label: "Coopérative" },
    { href: "/properties", label: "Propriétés" },
    { href: "/membership", label: "Adhésion" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const getHref = (href: string) => {
    if (pathname === '/' && href.includes('/#')) {
        return href.replace('/#', '#');
    }
    if(pathname !== '/' && href.includes('/#')){
        return `/${href.slice(2)}`;
    }
    return href;
  }

  const getNavLinks = () => {
      if (pathname === '/') {
          return navLinks.filter(l => l.href !== '/cooperative');
      }
      return navLinks.filter(l => !l.onHome);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Logo />
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="p-4">
                <Logo />
                <div className="mt-8 flex flex-col space-y-4">
                  {getNavLinks().map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={getHref(link.href)}
                        className={cn("text-lg font-medium text-foreground hover:text-primary", {
                            "text-primary": pathname === link.href
                        })}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* You can add a search bar here if needed */}
          </div>
          <nav className="hidden md:flex md:items-center md:gap-6 text-sm">
            {getNavLinks().map((link) => (
              <Link
                key={link.href}
                href={getHref(link.href)}
                className={cn("font-medium text-foreground/60 transition-colors hover:text-foreground/80", {
                    "text-primary": pathname === link.href,
                })}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <Logo />
          </div>
        </div>
      </div>
    </header>
  );
}
