import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";

const KitchenCabinetsAppliances = () => {
  return (
    <div className="min-h-screen bg-clean-white">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-text-dark mb-2">Kitchen Cabinets and Appliances</h1>
        <p className="text-text-light mb-8">Custom solutions for your kitchen</p>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-50 border-2 border-brand-red">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-text-dark mb-4">
                  Custom Kitchen Solutions
                </h2>
                <p className="text-lg text-text-dark leading-relaxed">
                  Custom kitchen cabinetry and small kitchen appliances available upon request.
                </p>
              </div>
              
              <div className="bg-brand-red text-clean-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Interested in Kitchen Solutions?</h3>
                <p className="mb-6">
                  Contact us to discuss your kitchen cabinet and appliance needs. 
                  We offer custom solutions tailored to your space and requirements.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:416-213-9512" 
                    className="flex items-center justify-center gap-2 bg-clean-white text-brand-red px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call 416-213-9512
                  </a>
                  <a 
                    href="mailto:yourservice21@hotmail.com" 
                    className="flex items-center justify-center gap-2 bg-clean-white text-brand-red px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KitchenCabinetsAppliances; 