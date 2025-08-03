
import { Instagram, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import rkLogo from "@/assets/logos/rk_newsleepline_logo.avif";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "All Products" },
    { to: "/beds", label: "Beds" },
    { to: "/sofas", label: "Sofas" },
    { to: "/dining", label: "Dining" },
    { to: "/more", label: "More" },
  ];

  return (
    <header className="bg-clean-white border-b border-border relative">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity z-10">
            <img 
              src={rkLogo} 
              alt="New Sleep Line Canada Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-text-dark">New Sleep Line Canada</h1>
              <p className="text-sm text-text-light">Your #1 Home Furnishing Choice</p>
              <p className="text-sm text-text-light">21 Signal Hill Ave, M9W 6V8</p>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navigationLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className={`transition-colors ${location.pathname === link.to ? 'text-brand-red' : 'text-text-dark hover:text-brand-red'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button and Social */}
          <div className="flex items-center space-x-4 z-10">
            {/* Social - Desktop */}
            <div className="hidden md:flex items-center">
              <Button 
                variant="ghost" 
                size="icon"
                asChild
              >
                <a 
                  href="https://www.instagram.com/newsleepline/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              {navigationLinks.map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className={`text-lg transition-colors ${location.pathname === link.to ? 'text-brand-red' : 'text-text-dark hover:text-brand-red'}`}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
              {/* Social - Mobile */}
              <div className="pt-2">
                <Button 
                  variant="ghost" 
                  size="icon"
                  asChild
                >
                  <a 
                    href="https://www.instagram.com/newsleepline/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
