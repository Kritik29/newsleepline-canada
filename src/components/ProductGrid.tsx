import ProductCard from "@/components/ProductCard";
import deskBlack from "@/assets/desk-black.jpg";
import deskWood from "@/assets/desk-wood.jpg";
import deskWhite from "@/assets/desk-white.jpg";
import deskGlass from "@/assets/desk-glass.jpg";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      image: deskBlack,
      title: "Office Desk - Style 3",
      isNew: false
    },
    {
      id: 2,
      image: deskWood,
      title: "Office Desk - Style 2",
      isNew: false
    },
    {
      id: 3,
      image: deskWhite,
      title: "Office Desk - Style 1",
      isNew: false
    },
    {
      id: 4,
      image: deskGlass,
      title: "Glass Office Desk",
      isNew: true
    }
  ];

  return (
    <section className="py-16 bg-clean-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              isNew={product.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;