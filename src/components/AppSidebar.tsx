import { Home, Bed, Sofa, UtensilsCrossed, MoreHorizontal, ShoppingBag } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Beds", url: "/beds", icon: Bed },
  { title: "Sofas", url: "/sofas", icon: Sofa },
  { title: "Dining", url: "/dining", icon: UtensilsCrossed },
  { title: "More", url: "/more", icon: MoreHorizontal },
  { title: "Shop", url: "/shop", icon: ShoppingBag },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-brand-red text-clean-white font-medium" : "hover:bg-secondary text-text-dark";

  return (
    <Sidebar className="w-64">
      <SidebarContent>
        {/* Store Info */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="bg-text-dark text-clean-white font-bold text-lg px-2 py-1 transform -skew-x-12">
              RK
            </div>
            <div>
              <h2 className="font-bold text-text-dark text-sm">New Sleep Line Canada</h2>
              <p className="text-xs text-text-light">21 Signal Hill Ave</p>
            </div>
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="mr-3 h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}