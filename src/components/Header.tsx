import { Search, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-clean-white border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-text-dark text-clean-white font-bold text-xl px-3 py-2 transform -skew-x-12">
              RK
            </div>
            <div>
              <h1 className="text-xl font-bold text-text-dark">New Sleep Line Canada</h1>
              <p className="text-sm text-text-light">Your #1 Home Furnishing Choice</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-text-dark hover:text-brand-red transition-colors">Home</a>
            <a href="#" className="text-text-dark hover:text-brand-red transition-colors">Beds</a>
            <a href="#" className="text-text-dark hover:text-brand-red transition-colors">Sofas</a>
            <a href="#" className="text-text-dark hover:text-brand-red transition-colors">Dining</a>
            <a href="#" className="text-text-dark hover:text-brand-red transition-colors">More</a>
            <a href="#" className="text-text-dark hover:text-brand-red transition-colors">Shop</a>
          </nav>

          {/* Search and Social */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light w-4 h-4" />
              <Input 
                placeholder="Search..." 
                className="pl-10 w-48"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Instagram className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;