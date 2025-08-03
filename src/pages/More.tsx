import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const More = () => {
  const navigate = useNavigate();
  
  const categories = [
    { 
      title: "Mirrors", 
      description: "Wall mirrors and decorative mirrors",
      route: "/mirrors"
    },
    { 
      title: "Coffee Tables", 
      description: "Coffee tables and side tables",
      route: "/coffee-tables"
    },
    { 
      title: "Console Tables", 
      description: "Console tables and entryway furniture",
      route: "/console-tables"
    },
    { 
      title: "Accents", 
      description: "Accent chairs to spice up your space",
      route: "/accents"
    },
    { 
      title: "Accessories", 
      description: "Home accessories and decor items",
      route: "/accessories"
    },
    { 
      title: "Entertainment", 
      description: "TV stands and entertainment centers",
      route: "/entertainment"
    },
    { 
      title: "Office Furniture", 
      description: "Desks, chairs, and storage solutions",
      route: "/office-furniture"
    },
    { 
      title: "Kitchen Cabinets and Appliances", 
      description: "Custom kitchen cabinetry and small kitchen appliances available upon request.",
      route: "/kitchen-cabinets-appliances"
    },
  ];

  const handleCategoryClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-clean-white">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-text-dark mb-2">More Categories</h1>
        <p className="text-text-light mb-8">Explore our complete furniture collection</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => handleCategoryClick(category.route)}
            >
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