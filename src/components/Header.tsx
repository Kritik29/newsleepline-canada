import { Search, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header className="bg-clean-white border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="bg-text-dark text-clean-white font-bold text-xl px-3 py-2 transform -skew-x-12">
              RK
            </div>
            <div>
              <h1 className="text-xl font-bold text-text-dark">New Sleep Line Canada</h1>
              <p className="text-sm text-text-light">Your #1 Home Furnishing Choice</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${location.pathname === '/' ? 'text-brand-red' : 'text-text-dark hover:text-brand-red'}`}
            >
              Home
            </Link>
            <Link 
              to="/beds" 
              className={`transition-colors ${location.pathname === '/beds' ? 'text-brand-red' : 'text-text-dark hover:text-brand-red'}`}
            >
              Beds
            </Link>
            <Link 
              to="/sofas" 
              className={`transition-colors ${location.pathname === '/sofas' ? 'text-brand-red' : 'text-text-dark hover:text-brand-red'}`}
            >
              Sofas
            </Link>
            <Link 
              to="/dining" 
              className={`transition-colors ${location.pathname === '/dining' ? 'text-brand-red' : 'text-text-dark hover:text-brand-red'}`}
            >
              Dining
            </Link>
            <Link 
              to="/more" 
              className={`transition-colors ${location.pathname === '/more' ? 'text-brand-red' : 'text-text-dark hover:text-brand-red'}`}
            >
              More
            </Link>
            <Link 
              to="/shop" 
              className={`transition-colors ${location.pathname === '/shop' ? 'text-brand-red' : 'text-text-dark hover:text-brand-red'}`}
            >
              Shop
            </Link>
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