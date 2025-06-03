import { Button } from "@/components/ui/button";
import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">L</span>
            </div>
            <span className="text-2xl font-bold">ROYAl PLACE</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="hover:text-amber-400 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-amber-400 transition-colors font-medium"
            >
              Rooms
            </a>
            <a
              href="#"
              className="hover:text-amber-400 transition-colors font-medium"
            >
              Amenities
            </a>
            <a
              href="#"
              className="hover:text-amber-400 transition-colors font-medium"
            >
              Gallery
            </a>
            <a
              href="#"
              className="hover:text-amber-400 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>
          <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
            Book Now
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
