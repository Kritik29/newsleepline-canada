import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import deskBlack from "@/assets/desk-black.jpg";
import deskWood from "@/assets/desk-wood.jpg";
import deskWhite from "@/assets/desk-white.jpg";
import deskGlass from "@/assets/desk-glass.jpg";

const Beds = () => {
  const bedProducts = [
    { id: 1, image: deskBlack, title: "Modern Platform Bed", isNew: true },
    { id: 2, image: deskWood, title: "Wooden Queen Bed", isNew: false },
    { id: 3, image: deskWhite, title: "Upholstered King Bed", isNew: false },
    { id: 4, image: deskGlass, title: "Storage Bed Frame", isNew: true },
    { id: 5, image: deskBlack, title: "Minimalist Bed", isNew: false },
    { id: 6, image: deskWood, title: "Classic Oak Bed", isNew: false },
  ];

  return (
    <div className="min-h-screen bg-clean-white">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-text-dark mb-2">Beds</h1>
        <p className="text-text-light mb-8">Comfortable and stylish beds for every bedroom</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bedProducts.map((product) => (
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

export default Beds;