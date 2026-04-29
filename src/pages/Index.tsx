import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { Beers } from "@/components/site/Beers";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Beers />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
