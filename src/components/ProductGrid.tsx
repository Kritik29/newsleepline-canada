import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/data/products";

const ProductGrid = () => {
  const products = getFeaturedProducts(4);

  return (
    <section className="py-16 bg-clean-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              isNew={product.isNew}
              isTopSeller={product.isTopSeller}
              isCanadianMade={product.isCanadianMade}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;