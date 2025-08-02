import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { getProductById, categoryNames, getProductsByCategory } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = getProductById(id || "");
  const currentCategory = product?.category || "";
  const categoryProducts = getProductsByCategory(currentCategory);
  const currentIndex = categoryProducts.findIndex(p => p.id === id);
  
  const prevProduct = currentIndex > 0 ? categoryProducts[currentIndex - 1] : null;
  const nextProduct = currentIndex < categoryProducts.length - 1 ? categoryProducts[currentIndex + 1] : null;

  const handlePrevProduct = () => {
    if (prevProduct) {
      navigate(`/product/${prevProduct.id}`);
    }
  };

  const handleNextProduct = () => {
    if (nextProduct) {
      navigate(`/product/${nextProduct.id}`);
    }
  };

  const handleBackToProducts = () => {
    // Navigate to the category page based on the current product's category
    const categoryRoute = getCategoryRoute(currentCategory);
    navigate(categoryRoute);
  };

  const getCategoryRoute = (category: string): string => {
    const routeMap: { [key: string]: string } = {
      "office": "/shop", // Office products go to main shop page
      "beds": "/beds",
      "sofas": "/sofas", 
      "dining": "/dining",
      "office-furniture": "/office-furniture",
      "living-room": "/living-room",
      "bedroom": "/bedroom",
      "storage": "/storage",
      "lighting": "/lighting",
      "decor": "/decor",
      "mirrors": "/mirrors",
      "coffee-tables": "/coffee-tables",
      "console-tables": "/console-tables",
      "accents": "/accents",
      "accessories": "/accessories",
      "entertainment": "/entertainment"
    };
    
    return routeMap[category] || "/shop";
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-clean-white">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-text-dark mb-4">Product Not Found</h1>
            <p className="text-text-light">The product you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-clean-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={handleBackToProducts}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Navigation Arrows */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-text-dark mb-2">{product.title}</h1>
                <p className="text-text-light text-lg">Category: {categoryNames[product.category as keyof typeof categoryNames]}</p>
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevProduct}
                  disabled={!prevProduct}
                  className="w-10 h-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <span className="text-sm text-text-light px-2">
                  {currentIndex + 1} of {categoryProducts.length}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNextProduct}
                  disabled={!nextProduct}
                  className="w-10 h-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Product Description */}
            {product.description && (
              <div className="bg-gray-50 p-6 rounded-lg border border-border">
                <h2 className="text-xl font-semibold text-text-dark mb-4">Product Description</h2>
                <p className="text-text-dark leading-relaxed">{product.description}</p>
              </div>
            )}

            {/* Contact to Purchase Section */}
            <div className="bg-gray-50 p-6 rounded-lg border border-border">
              <h2 className="text-xl font-semibold text-text-dark mb-4">Contact Us to Purchase</h2>
              
              {/* Phone Number */}
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="w-5 h-5 text-brand-red" />
                <div>
                  <p className="text-sm text-text-light">Phone</p>
                  <p className="text-lg font-semibold text-text-dark">416-213-9512</p>
                </div>
              </div>

              {/* Store Address */}
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className="w-5 h-5 text-brand-red mt-1" />
                <div>
                  <p className="text-sm text-text-light">Store Address</p>
                  <p className="text-lg font-semibold text-text-dark">21 Signal Hill Ave, M9W 6V8</p>
                  <p className="text-text-light">Toronto, ON, Canada</p>
                </div>
              </div>

              {/* Store Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-brand-red mt-1" />
                <div>
                  <p className="text-sm text-text-light">Store Hours</p>
                  <div className="text-text-dark">
                    <p className="font-semibold">Monday - Friday: 11:00 AM - 8:00 PM</p>
                    <p className="font-semibold">Saturday: 11:00 AM - 6:00 PM</p>
                    <p className="font-semibold">Sunday: 12:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-brand-red text-clean-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Ready to Purchase?</h3>
              <p>Call us at <span className="font-bold">416-213-9512</span> to place your order or visit our store to see this product in person!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 