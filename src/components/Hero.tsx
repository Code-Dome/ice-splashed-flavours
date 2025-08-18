import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ice-splash.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cool-gradient">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-ice-gradient opacity-80" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <img src={logo} alt={"Flavoured Ico Co Logo"}/>
          <p className="text-lg sm:text-xl md:text-2xl text-ice-light mb-6 sm:mb-8 animate-fade-in [animation-delay:0.2s] px-4 sm:px-0">
            Premium flavoured ice that refreshes and delights. 
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Experience pure, natural fruit flavors in every crystal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in [animation-delay:0.4s] px-4 sm:px-0">
            <Button 
              onClick={scrollToProducts}
              size="lg"
              className="bg-white text-ice-blue hover:bg-ice-light hover:text-primary transition-smooth text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-ice w-full sm:w-auto"
            >
              Explore Our Flavors
            </Button>
          </div>
          
          <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-white animate-fade-in [animation-delay:0.6s] px-4 sm:px-0">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">5+</div>
              <div className="text-ice-light text-sm sm:text-base">Flavors Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">2</div>
              <div className="text-ice-light text-sm sm:text-base">Size Options</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">100%</div>
              <div className="text-ice-light text-sm sm:text-base">Natural Flavors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">Fresh</div>
              <div className="text-ice-light text-sm sm:text-base">Daily Production</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;