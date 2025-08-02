import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { allProducts } from "@/data/products";

const Shop = () => {
  return (
    <div className="min-h-screen bg-clean-white">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-text-dark mb-2">All Products</h1>
        <p className="text-text-light mb-8">Browse our complete collection of premium furniture</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              isNew={product.isNew}
              isTopSeller={product.isTopSeller}
              isCanadianMade={product.isCanadianMade}
              fromAllProducts={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;