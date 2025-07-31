import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import deskBlack from "@/assets/desk-black.jpg";
import deskWood from "@/assets/desk-wood.jpg";
import deskWhite from "@/assets/desk-white.jpg";
import deskGlass from "@/assets/desk-glass.jpg";

const Shop = () => {
  const allProducts = [
    // Office Desks
    { id: 1, image: deskBlack, title: "Office Desk - Style 3", isNew: false, category: "Office" },
    { id: 2, image: deskWood, title: "Office Desk - Style 2", isNew: false, category: "Office" },
    { id: 3, image: deskWhite, title: "Office Desk - Style 1", isNew: false, category: "Office" },
    { id: 4, image: deskGlass, title: "Glass Office Desk", isNew: true, category: "Office" },
    // Beds
    { id: 5, image: deskBlack, title: "Modern Platform Bed", isNew: true, category: "Beds" },
    { id: 6, image: deskWood, title: "Wooden Queen Bed", isNew: false, category: "Beds" },
    // Sofas
    { id: 7, image: deskWhite, title: "3-Seater Sofa", isNew: false, category: "Sofas" },
    { id: 8, image: deskGlass, title: "L-Shaped Sectional", isNew: true, category: "Sofas" },
    // Dining
    { id: 9, image: deskWood, title: "Dining Table Set", isNew: true, category: "Dining" },
    { id: 10, image: deskBlack, title: "Modern Dining Chairs", isNew: false, category: "Dining" },
    { id: 11, image: deskWhite, title: "Extendable Table", isNew: false, category: "Dining" },
    { id: 12, image: deskGlass, title: "Glass Dining Table", isNew: true, category: "Dining" },
  ];

  return (
    <div className="min-h-screen bg-clean-white">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-text-dark mb-2">Shop All Products</h1>
        <p className="text-text-light mb-8">Browse our complete collection of quality furniture</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allProducts.map((product) => (
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

export default Shop;