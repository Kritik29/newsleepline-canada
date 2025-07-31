import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import deskBlack from "@/assets/desk-black.jpg";
import deskWood from "@/assets/desk-wood.jpg";
import deskWhite from "@/assets/desk-white.jpg";
import deskGlass from "@/assets/desk-glass.jpg";

const Sofas = () => {
  const sofaProducts = [
    { id: 1, image: deskWood, title: "3-Seater Sofa", isNew: false },
    { id: 2, image: deskWhite, title: "L-Shaped Sectional", isNew: true },
    { id: 3, image: deskGlass, title: "Leather Recliner", isNew: false },
    { id: 4, image: deskBlack, title: "Modern Loveseat", isNew: false },
    { id: 5, image: deskWood, title: "Corner Sofa Set", isNew: true },
    { id: 6, image: deskWhite, title: "Fabric Armchair", isNew: false },
  ];

  return (
    <div className="min-h-screen bg-clean-white">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-text-dark mb-2">Sofas</h1>
        <p className="text-text-light mb-8">Comfortable seating solutions for your living room</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sofaProducts.map((product) => (
            <ProductCard
              key={product.id}
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

export default Sofas;