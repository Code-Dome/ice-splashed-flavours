import {Button} from "@/components/ui/button";
import heroImage from "@/assets/hero-ice-splash.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
    const scrollToProducts = () => {
        document.getElementById('products')?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cool-gradient">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[2]"
                style={{backgroundImage: `url(${heroImage})`}}
            />
            <div className="absolute inset-0 bg-ice-gradient opacity-80"/>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <img
                        src={logo}
                        alt={"Flavoured Ico Co Logo"}
                        className="w-64 sm:w-72 md:w-80 lg:w-[650px] mx-auto mb-6"
                    />
                    <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 animate-fade-in [animation-delay:0.2s] px-4 sm:px-0">
                        Premium flavoured ice that refreshes and delights.
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in [animation-delay:0.4s] px-4 sm:px-0">
                        <Button
                            onClick={scrollToProducts}
                            size="lg"
                            className="
      relative overflow-hidden
      bg-gradient-to-r from-white via-ice-light to-ice-blue
      text-ice-dark font-bold
      hover:from-ice-light hover:via-white hover:to-ice-blue
      border border-ice-blue/50
      rounded-2xl
      px-6 sm:px-8 py-4 sm:py-6
      text-[#21698a] sm:text-lg
      shadow-lg shadow-ice-blue/30
      w-full sm:w-auto
      transition-all duration-300
      before:absolute before:inset-0
      before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent
      before:-translate-x-full hover:before:translate-x-full
      before:transition-transform before:duration-500 before:opacity-70
    "
                        >
                            ❄️  Explore Our Flavors
                        </Button>
                    </div>

                    <div
                        className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-[#21698a] animate-fade-in [animation-delay:0.6s] px-4 sm:px-0  mb-2">
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold">5</div>
                            <div className="text-[#21698a]/80 text-sm sm:text-base">Flavours Available</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold">2</div>
                            <div className="text-[#21698a]/80 text-sm sm:text-base">Size Options</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold">ZERO</div>
                            <div className="text-[#21698a]/80 text-sm sm:text-base">Added sugars or preservatives</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold">Fresh</div>
                            <div className="text-[#21698a]/80 text-sm sm:text-base">Daily Production</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;