import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PropertiesList } from "@/components/sections/properties-list";

export default function PropertiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PropertiesList />
      </main>
      <Footer />
    </div>
  );
}
