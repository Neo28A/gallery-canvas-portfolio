import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Projects", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-32">
          <Link 
            to="/" 
            className="text-xl font-serif font-medium tracking-tight"
          >
            Portfolio
          </Link>
          
          {/* Mobile Navigation */}
          <nav className="md:hidden">
            <ul className="flex items-center space-x-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={cn(
                      "text-sm nav-link relative py-1 px-0",
                      location.pathname === item.path 
                        ? "active text-[#FF4D00] font-medium after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-[#FF4D00]" 
                        : "text-gray-300 hover:text-[#FF4D00] transition-colors after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#FF4D00] after:transition-all hover:after:w-full"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={cn(
                    "nav-link relative py-1 px-0",
                    location.pathname === item.path 
                      ? "active text-[#FF4D00] font-medium after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-[#FF4D00]" 
                      : "text-gray-300 hover:text-[#FF4D00] transition-colors after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#FF4D00] after:transition-all hover:after:w-full"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
