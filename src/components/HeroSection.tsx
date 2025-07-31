import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-clean-white/40"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-brand-red mb-6">
            New Sleep Line Canada
          </h1>
          <p className="text-2xl text-text-dark mb-8 font-medium">
            Affordable Home Furnishing
          </p>
          <Link to="/shop">
            <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-clean-white px-8 py-4 text-lg rounded-full">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;