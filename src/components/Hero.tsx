import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ice-splash.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cool-gradient">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-ice-gradient opacity-80" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Flavoured Ice Co
          </h1>
          <p className="text-xl md:text-2xl text-ice-light mb-8 animate-fade-in [animation-delay:0.2s]">
            Premium flavoured ice that refreshes and delights. 
            <br />
            Experience pure, natural fruit flavors in every crystal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:0.4s]">
            <Button 
              onClick={scrollToProducts}
              size="lg"
              className="bg-white text-ice-blue hover:bg-ice-light hover:text-primary transition-smooth text-lg px-8 py-6 shadow-ice"
            >
              Explore Our Flavors
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-ice-blue transition-smooth text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-white animate-fade-in [animation-delay:0.6s]">
            <div className="text-center">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-ice-light">Flavors Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">2</div>
              <div className="text-ice-light">Size Options</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-ice-light">Natural Flavors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">Fresh</div>
              <div className="text-ice-light">Daily Production</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;