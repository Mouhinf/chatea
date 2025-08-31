import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MembershipDetails } from "@/components/sections/membership-details";

export default function MembershipPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <MembershipDetails />
      </main>
      <Footer />
    </div>
  );
}
