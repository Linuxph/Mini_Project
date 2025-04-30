import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; 
import  { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-yellow-500 text-white shadow-lg w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a 
            href="/" 
            className="text-2xl font-bold tracking-wide"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            🍕 Foodoz
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Home", "Browse", "Order","Help"].map((item, index) => (
              <motion.a
                key={index}
                href={`/${item.toLowerCase()}`}
                className="relative text-lg font-medium after:block after:content-[''] after:h-[2px] after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden absolute top-16 left-0 w-full bg-yellow-600 transition-transform transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isOpen ? 0 : -100, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <ul className="py-4 space-y-4 text-center">
          {["Home", "Menu", "Order", "Help"].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block text-xl font-semibold py-2 hover:bg-yellow-700 transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
