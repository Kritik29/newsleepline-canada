
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-clean-white">
      <Header />
      <HeroSection />
      <ProductGrid />
      
      {/* Contact Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text-dark mb-4">Contact Us</h2>
            <p className="text-text-light text-lg">Get in touch with us for all your furniture needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone */}
            <div className="text-center">
              <div className="bg-brand-red text-clean-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">Phone</h3>
              <p className="text-lg font-semibold text-brand-red">416-213-9512</p>
              <p className="text-text-light">Call us anytime during business hours</p>
            </div>

            {/* Address */}
            <div className="text-center">
              <div className="bg-brand-red text-clean-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">Address</h3>
              <p className="text-lg font-semibold text-text-dark">21 Signal Hill Ave</p>
              <p className="text-text-light">M9W 6V8, Toronto, ON</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="bg-brand-red text-clean-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">Email</h3>
              <p className="text-lg font-semibold text-brand-red">yourservice21@hotmail.com</p>
              <p className="text-text-light">Send us a message anytime</p>
            </div>

            {/* Hours */}
            <div className="text-center">
              <div className="bg-brand-red text-clean-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">Store Hours</h3>
              <div className="text-text-dark">
                <p className="font-semibold">Mon-Fri: 11:00 AM - 8:00 PM</p>
                <p className="font-semibold">Sat: 11:00 AM - 6:00 PM</p>
                <p className="font-semibold">Sun: 12:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-brand-red text-clean-white p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Visit?</h3>
              <p className="text-lg mb-6">Come see our furniture in person at our store location. Our friendly staff is ready to help you find the perfect pieces for your home.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:416-213-9512" 
                  className="bg-clean-white text-brand-red px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call Now
                </a>
                <a 
                  href="mailto:yourservice21@hotmail.com" 
                  className="bg-clean-white text-brand-red px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
