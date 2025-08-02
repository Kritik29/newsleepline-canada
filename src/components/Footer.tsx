
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const storeAddress = "21 Signal Hill Ave, Etobicoke, ON, M9W 6V8, Canada";
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(storeAddress)}`;

  return (
    <footer className="bg-text-dark text-clean-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Store Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Visit Our Store</h3>
            <div className="flex items-start space-x-3 mb-6">
              <MapPin className="w-5 h-5 mt-1 text-brand-red" />
              <div>
                <p className="text-lg font-medium">New Sleep Line Canada</p>
                <p className="text-clean-white/80">{storeAddress}</p>
              </div>
            </div>
            <Button 
              asChild 
              className="bg-brand-red hover:bg-brand-red/90 text-clean-white"
            >
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                Open in Maps
              </a>
            </Button>
          </div>

          {/* Google Maps Embed */}
          <div className="h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=21+Signal+Hill+Ave,+Etobicoke,+ON+M9W+6V8,+Canada"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-clean-white/20 text-center">
          <p className="text-clean-white/60">
            © 2024 New Sleep Line Canada. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
