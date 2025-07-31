import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";

const More = () => {
  const categories = [
    { title: "Office Furniture", description: "Desks, chairs, and storage solutions" },
    { title: "Living Room", description: "Coffee tables, TV stands, and decor" },
    { title: "Bedroom", description: "Nightstands, dressers, and wardrobes" },
    { title: "Storage", description: "Shelving units and organizers" },
    { title: "Lighting", description: "Lamps and light fixtures" },
    { title: "Decor", description: "Rugs, cushions, and accessories" },
  ];

  return (
    <div className="min-h-screen bg-clean-white">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-text-dark mb-2">More Categories</h1>
        <p className="text-text-light mb-8">Explore our complete furniture collection</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-text-dark mb-2">{category.title}</h3>
                <p className="text-text-light">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default More;