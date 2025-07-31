import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import deskBlack from "@/assets/desk-black.jpg";
import deskWood from "@/assets/desk-wood.jpg";
import deskWhite from "@/assets/desk-white.jpg";
import deskGlass from "@/assets/desk-glass.jpg";

const Dining = () => {
  const diningProducts = [
    { id: 1, image: deskWood, title: "Dining Table Set", isNew: true },
    { id: 2, image: deskBlack, title: "Modern Dining Chairs", isNew: false },
    { id: 3, image: deskWhite, title: "Extendable Table", isNew: false },
    { id: 4, image: deskGlass, title: "Glass Dining Table", isNew: true },
    { id: 5, image: deskWood, title: "Bar Stool Set", isNew: false },
    { id: 6, image: deskBlack, title: "Buffet Cabinet", isNew: false },
  ];

  return (
    <div className="min-h-screen bg-clean-white">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-text-dark mb-2">Dining</h1>
        <p className="text-text-light mb-8">Beautiful dining furniture for memorable meals</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diningProducts.map((product) => (
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

export default Dining;