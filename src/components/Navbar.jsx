import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileTopBar, setShowMobileTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 640; // Matching sm: breakpoint in Tailwind
      
      // For main navbar background
      setIsScrolled(currentScrollY > 50);
      
      // Only apply special scroll behavior on mobile
      if (isMobile) {
        // For mobile top bar visibility (show initially, hide on scroll down, show on scroll up)
        if (currentScrollY < 10) {
          // Always show at top of page
          setShowMobileTopBar(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and not near the top
          setShowMobileTopBar(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up
          setShowMobileTopBar(true);
        }
      } else {
        // Always show on larger screens
        setShowMobileTopBar(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Careers", href: "/careers" },
  ];

  const isActive = (href) => location.pathname === href;

    return (
    <>
      {/* Top contact bar - Scroll behavior on mobile */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-b border-slate-700/50 transition-all duration-300 
          ${showMobileTopBar 
            ? 'py-2 sm:py-3 px-3 sm:px-4 max-h-24 sm:max-h-none opacity-100 translate-y-0' 
            : 'py-0 px-3 sm:py-3 sm:px-4 max-h-0 sm:max-h-none opacity-0 sm:opacity-100 -translate-y-full sm:translate-y-0 overflow-hidden'}`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 lg:space-x-8 space-y-1 sm:space-y-0 mb-1 sm:mb-0">
            <motion.a
              href="tel:+19512231881"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-1 sm:space-x-2 hover:text-primary-400 transition-colors cursor-pointer"
            >
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary-400" />
              <span>+1 951 223-1881</span>
            </motion.a>
            <motion.a
              href="mailto:info@accountistryllp.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-1 sm:space-x-2 hover:text-primary-400 transition-colors cursor-pointer"
            >
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary-400" />
              <span>info@accountistryllp.com</span>
            </motion.a>
          </div>
          <motion.div
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-primary-400 font-medium flex items-center space-x-1 sm:space-x-2"
          >
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Professional Accounting Services</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Main navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={cn(
          "sticky z-50 transition-all duration-300",
          isScrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-slate-200" 
            : "bg-white/90 backdrop-blur-lg shadow-lg",
          showMobileTopBar ? "top-0" : "top-0"  // Always at top
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/" className="flex items-center space-x-4 group">
                {/* Logo with enhanced styling */}
                <div className="relative">
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-blue-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  
                  {/* Logo container */}
                  <div className="relative w-14 h-14 bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl flex items-center justify-center shadow-xl border-2 border-slate-600 group-hover:border-primary-500 transition-all duration-300">
                    <img
                      className="w-10 h-10 object-contain filter brightness-150 contrast-125 group-hover:scale-110 transition-transform duration-300"
                                src="https://res.cloudinary.com/dm56xy1oj/image/upload/v1725991678/Navbar_Hexa_Only_nvn1le.svg"
                                loading="lazy"
                      alt="Accountistry Logo"
                    />
                    
                    {/* Animated accent */}
                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary-400 to-yellow-400 rounded-full opacity-80"
                            />
                        </div>
                </div>

                {/* Brand text */}
                <div className="flex flex-col">
                  <motion.span
                    className="text-slate-900 font-bold text-2xl leading-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-primary-600 group-hover:to-blue-600 transition-all duration-300"
                  >
                    Accountistry
                  </motion.span>
                  <motion.span
                    className="text-primary-600 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Financial Matchmakers
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
                        ? "text-primary-600 bg-primary-50"
                        : "text-slate-700 hover:text-primary-600 hover:bg-slate-50"
                    )}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"
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
                <Button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg border-0 rounded-xl px-6">
                  <Link to="/contactus" className="flex items-center space-x-2">
                    <span>Get Started</span>
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
                  className="text-slate-700 hover:text-primary-600 hover:bg-slate-100 rounded-xl"
                >
                  <motion.div
                    animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            <div className="py-4 border-t border-slate-200 bg-white/50 backdrop-blur-sm rounded-b-2xl">
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
                          ? "text-primary-600 bg-primary-50 border border-primary-200"
                          : "text-slate-700 hover:text-primary-600 hover:bg-slate-50"
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
                  <Button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg border-0 rounded-xl">
                    <Link to="/contactus" onClick={() => setIsMobileMenuOpen(false)}>
                      Get Started
                        </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
                </div>
      </motion.nav>
    </>
    );
};

export default Navbar;
