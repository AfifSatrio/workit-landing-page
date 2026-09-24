import Hero from "@/components/Hero"
import BenefitSection from "@/components/BenefitSection"
import Header from "@/components/Header"
import ClosureSection from "@/components/ClosureSection"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BenefitSection />
        <ClosureSection />
      </main>
      <Footer />
    </>
  );
}
