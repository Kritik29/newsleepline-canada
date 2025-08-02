import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  isNew?: boolean;
}

const ProductCard = ({ id, image, title, isNew = false }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleQuickView = () => {
    navigate(`/product/${id}`);
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 border-border">
      <CardContent className="p-0">
        <div className="relative overflow-hidden cursor-pointer" onClick={handleQuickView}>
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isNew && (
            <div className="absolute top-4 right-4 bg-brand-red text-clean-white px-3 py-1 text-sm font-semibold rounded">
              New Arrival
            </div>
          )}
          <div className="absolute inset-0 bg-text-dark/0 group-hover:bg-text-dark/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-clean-white/90 text-text-dark px-4 py-2 rounded-lg font-semibold">
              Quick View
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-text-dark">{title}</h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;