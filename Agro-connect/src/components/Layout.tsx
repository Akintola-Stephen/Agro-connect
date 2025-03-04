import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Local Harvest</h3>
              <p className="text-green-100 text-sm">
                Connecting local farmers with consumers for fresher, healthier
                food and a more sustainable food system.
              </p>
              <div className="flex mt-4 space-x-4">
                <a href="#" className="text-green-200 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-green-200 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-green-200 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-green-200 hover:text-white">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-green-100 text-sm">
                <li className="hover:text-white">All Products</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Information</h3>
              <ul className="space-y-2 text-green-100 text-sm">
                <li>
                  <Link to="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/farmers" className="hover:text-white">
                    Our Farmers
                  </Link>
                </li>
                <li>
                  <Link to="/delivery" className="hover:text-white">
                    Delivery Information
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-white">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-green-100 text-sm mb-4">
                Subscribe to receive updates on new harvests, seasonal produce,
                and special offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full text-gray-800 rounded-l-md focus:outline-none"
                />
                <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-r-md transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Local Harvest. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
