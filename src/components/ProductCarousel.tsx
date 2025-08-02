import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { allProducts, getProductsByCategory } from "@/data/products";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselProducts, setCarouselProducts] = useState<any[]>([]);

  // Create carousel products by taking one from each category
  useEffect(() => {
    const categories = [
      "office", "beds", "sofas", "dining", "office-furniture", 
      "living-room", "bedroom", "storage", "lighting", "decor",
      "mirrors", "coffee-tables", "console-tables", "accents", 
      "accessories", "entertainment"
    ];

    const productsFromCategories: any[] = [];
    
    categories.forEach(category => {
      const categoryProducts = getProductsByCategory(category);
      if (categoryProducts.length > 0) {
        // Take the first product from each category
        productsFromCategories.push(categoryProducts[0]);
      }
    });

    setCarouselProducts(productsFromCategories);
  }, []);

  const nextSlide = () => {
    const maxIndex = Math.max(0, carouselProducts.length - 3);
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, carouselProducts.length - 3);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  if (carouselProducts.length === 0) {
    return null;
  }

  // Get the 3 products to display
  const visibleProducts = carouselProducts.slice(currentIndex, currentIndex + 3);
  
  // If we don't have 3 products left, wrap around to the beginning
  if (visibleProducts.length < 3) {
    const remainingNeeded = 3 - visibleProducts.length;
    const wrappedProducts = carouselProducts.slice(0, remainingNeeded);
    visibleProducts.push(...wrappedProducts);
  }

  const maxIndex = Math.max(0, carouselProducts.length - 3);

  return (
    <section className="py-16 bg-clean-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-text-dark mb-4">Featured Products</h2>
          <p className="text-text-light">Explore our complete collection</p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-lg">
            <div className="flex gap-6 justify-center">
              {visibleProducts.map((product, index) => (
                <div key={`${product.id}-${currentIndex}-${index}`} className="flex-shrink-0">
                  <div className="w-80">
                    <ProductCard
                      id={product.id}
                      image={product.image}
                      title={product.title}
                      isNew={product.isNew}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(carouselProducts.length / 3) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  Math.floor(currentIndex / 3) === index
                    ? 'bg-brand-red' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel; 