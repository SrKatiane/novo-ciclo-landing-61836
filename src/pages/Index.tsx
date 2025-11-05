import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ForWhom from "@/components/ForWhom";
import Formations from "@/components/Formations";
import Benefits from "@/components/Benefits";
import BonusSection from "@/components/BonusSection";
import Testimonials from "@/components/Testimonials";
import Investment from "@/components/Investment";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ForWhom />
      <Formations />
      <Benefits />
      <BonusSection />
      <Testimonials />
      <Investment />
      <AboutUs />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
