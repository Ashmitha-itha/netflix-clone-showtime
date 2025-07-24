import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-movie.jpg";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Featured content"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-16 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
          Quantum Warriors
        </h1>
        <p className="text-lg md:text-xl mb-8 text-foreground leading-relaxed">
          In a dystopian future, elite warriors must master quantum technology to save humanity 
          from an interdimensional threat. An epic sci-fi adventure that redefines reality itself.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-8">
            <Play className="mr-2 h-5 w-5 fill-current" />
            Play
          </Button>
          <Button variant="secondary" size="lg" className="px-8">
            <Info className="mr-2 h-5 w-5" />
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;