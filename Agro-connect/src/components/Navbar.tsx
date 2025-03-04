import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ShoppingCart, Menu, LogIn } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-green-100 p-1.5 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <span className="font-bold text-xl text-green-800">
              Local Harvest
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-green-600">
              Home
            </Link>
            <Link to="/market" className="text-gray-600 hover:text-green-600">
              Market
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-green-600">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-green-600">
              Contact
            </Link>
          </nav>

          {/* User Controls */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-green-600" />
              
              <span className="absolute top-0 right-0 bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
              
            </Link>
            
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/login">
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Link>
            </Button>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-3 pb-4 border-t">
            <Link
              to="/"
              className="block py-2 text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/market"
              className="block py-2 text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              Market
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
