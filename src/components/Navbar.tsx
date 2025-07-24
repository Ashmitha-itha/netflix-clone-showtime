import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-background to-transparent px-4 md:px-16 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">NETFLIX</h1>
          <div className="hidden md:flex space-x-6">
            <button className="text-foreground hover:text-muted-foreground transition-colors">
              Home
            </button>
            <button className="text-foreground hover:text-muted-foreground transition-colors">
              TV Shows
            </button>
            <button className="text-foreground hover:text-muted-foreground transition-colors">
              Movies
            </button>
            <button className="text-foreground hover:text-muted-foreground transition-colors">
              New & Popular
            </button>
            <button className="text-foreground hover:text-muted-foreground transition-colors">
              My List
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-foreground hover:text-muted-foreground">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-muted-foreground">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-muted-foreground">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;