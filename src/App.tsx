import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Beds from "./pages/Beds";
import Sofas from "./pages/Sofas";
import Dining from "./pages/Dining";
import More from "./pages/More";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import OfficeFurniture from "./pages/OfficeFurniture";
import LivingRoom from "./pages/LivingRoom";
import Bedroom from "./pages/Bedroom";
import Storage from "./pages/Storage";
import Lighting from "./pages/Lighting";
import Decor from "./pages/Decor";
import Mirrors from "./pages/Mirrors";
import CoffeeTables from "./pages/CoffeeTables";
import ConsoleTables from "./pages/ConsoleTables";
import Accents from "./pages/Accents";
import Accessories from "./pages/Accessories";
import Entertainment from "./pages/Entertainment";
import KitchenCabinetsAppliances from "./pages/KitchenCabinetsAppliances";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/all" element={<Shop />} />
            <Route path="/beds" element={<Beds />} />
            <Route path="/sofas" element={<Sofas />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/more" element={<More />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/office-furniture" element={<OfficeFurniture />} />
            <Route path="/living-room" element={<LivingRoom />} />
            <Route path="/bedroom" element={<Bedroom />} />
            <Route path="/storage" element={<Storage />} />
            <Route path="/lighting" element={<Lighting />} />
            <Route path="/decor" element={<Decor />} />
            <Route path="/mirrors" element={<Mirrors />} />
            <Route path="/coffee-tables" element={<CoffeeTables />} />
            <Route path="/console-tables" element={<ConsoleTables />} />
            <Route path="/accents" element={<Accents />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/kitchen-cabinets-appliances" element={<KitchenCabinetsAppliances />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
