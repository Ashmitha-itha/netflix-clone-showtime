import { useState } from "react";
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MovieCardProps {
  title: string;
  image: string;
  description?: string;
}

const MovieCard = ({ title, image, description }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative cursor-pointer transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[2/3] relative overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
        )}
      </div>
      
      {isHovered && (
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <h3 className="font-semibold text-sm mb-2 text-foreground">{title}</h3>
          
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-foreground text-background hover:bg-foreground/90">
                <Play className="h-4 w-4 fill-current" />
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 border border-muted-foreground text-foreground hover:bg-muted">
                <Plus className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 border border-muted-foreground text-foreground hover:bg-muted">
                <ThumbsUp className="h-4 w-4" />
              </Button>
            </div>
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 border border-muted-foreground text-foreground hover:bg-muted">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;