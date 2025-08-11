import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Careers", href: "/careers" },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-grey-900 shadow-lg border-b border-grey-700" 
          : "bg-grey-900/95 backdrop-blur-sm shadow-md"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-3 group">
              {/* Original Logo */}
              <img
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain"
                src="https://res.cloudinary.com/dm56xy1oj/image/upload/v1725991678/Navbar_Hexa_Only_nvn1le.svg"
                loading="lazy"
                alt="Accountistry Logo"
              />

              {/* Brand text */}
              <div className="flex flex-col">
                <motion.span
                  className="text-white font-normal text-xl sm:text-xl md:text-2xl leading-tight group-hover:text-primary-400 transition-all duration-300"
                >
                  Accountistry
                </motion.span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg",
                    isActive(item.href)
                      ? "text-primary-400 bg-grey-800"
                      : "text-grey-200 hover:text-primary-400 hover:bg-grey-800"
                  )}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            
            {/* Enhanced CTA button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-primary-500 hover:bg-primary-600 text-white shadow-lg border-0 rounded-xl px-6 transition-colors duration-300">
                <Link to="/contactus" className="flex items-center space-x-2">
                  <span>Contact Us</span>
                  <motion.div
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.div
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-grey-200 hover:text-primary-400 hover:bg-grey-800 rounded-xl"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? <X className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6" /> : <Menu className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6" />}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Mobile menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 border-t border-grey-700 bg-grey-800/50 backdrop-blur-sm rounded-b-2xl">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isMobileMenuOpen ? 1 : 0, 
                    x: isMobileMenuOpen ? 0 : -20 
                  }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg mx-2",
                      isActive(item.href)
                        ? "text-primary-400 bg-grey-700 border border-primary-500"
                        : "text-grey-200 hover:text-primary-400 hover:bg-grey-700"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  y: isMobileMenuOpen ? 0 : 20 
                }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="pt-4 px-2"
              >
                <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white shadow-lg border-0 rounded-xl transition-colors duration-300">
                  <Link to="/contactus" onClick={() => setIsMobileMenuOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
