import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";

const Accents = () => {
  const accentProducts = getProductsByCategory("accents");

  return (
    <div className="min-h-screen bg-clean-white">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-text-dark mb-2">Accents</h1>
        <p className="text-text-light mb-8">Accent chairs</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accentProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              isNew={product.isNew}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accents; 