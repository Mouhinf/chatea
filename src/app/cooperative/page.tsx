import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CooperativeDetails } from "@/components/sections/cooperative-details";

export default function CooperativePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <CooperativeDetails />
      </main>
      <Footer />
    </div>
  );
}
