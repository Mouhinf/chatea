import Link from "next/link";
import { Home } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <div className="p-1.5 bg-primary rounded-md">
        <Home className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="font-bold text-lg text-foreground">CHA-TEA</span>
    </Link>
  );
}
