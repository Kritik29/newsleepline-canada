
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const storeAddress = "21 Signal Hill Ave, St. John's, NL, Canada";
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2816.5!2d-52.7!3d47.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0ca38e6b0f6b6b%3A0x6b6b6b6b6b6b6b6b!2s21%20Signal%20Hill%20Ave%2C%20St.%20John's%2C%20NL%2C%20Canada!5e0!3m2!1sen!2sca!4v1234567890"
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
