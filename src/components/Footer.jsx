import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contactus" }
  ];

  const resources = [
    { name: "FASB", href: "https://www.fasb.org/", external: true },
    { name: "AICPA", href: "https://www.aicpa-cima.com/home", external: true },
    { name: "PCAOB", href: "https://pcaobus.org/", external: true },
    { name: "IRS", href: "https://www.irs.gov/", external: true }
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61563816361606", external: true },
    { name: "Yelp", href: "https://www.yelp.com/biz/accountistry-lake-elsinore-2", external: true }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 overflow-hidden flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dm56xy1oj/image/upload/v1725991678/Navbar_Hexa_Only_nvn1le.svg"
                  className="w-full h-full object-contain"
                  alt="Accountistry Logo"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">
                  Accountistry
                </span>
              </div>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Your financial matchmakers, connecting you with expert accountants across the globe. 
              We help you cut costs without cutting corners, so you can focus on growing your business.
            </p>
            
            <p className="text-primary-400 font-medium mb-4">
              Professional Accounting Services Worldwide
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 border-b border-primary-500 pb-2">
              Quick Links
            </h3>
            
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <div key={index}>
                  <Link 
                    to={link.href}
                    className="text-slate-300 hover:text-primary-400 transition-colors block"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Resources & Social */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 border-b border-primary-500 pb-2">
              Resources
            </h3>
            
            <div className="space-y-3 mb-8">
              {resources.map((resource, index) => (
                <div key={index}>
                  <Link 
                    to={resource.href}
                    className="text-slate-300 hover:text-primary-400 transition-colors block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resource.name}
                  </Link>
                </div>
              ))}
            </div>

            <h4 className="text-lg font-semibold mb-4 text-primary-400">
              Follow Us
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <div key={index}>
                  <Link 
                    to={social.href}
                    className="text-slate-300 hover:text-primary-400 transition-colors block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 border-b border-primary-500 pb-2">
              Contact Us
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+19512231881" className="text-slate-300 hover:text-primary-400 transition-colors">
                  +1 951 223-1881
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@accountistryllp.com" className="text-slate-300 hover:text-primary-400 transition-colors">
                  info@accountistryllp.com
                </a>
              </div>
              
              <div className="pt-4">
                <p className="text-slate-300 leading-relaxed">
                  Ready to learn more? Send us a note about your accounting needs or 
                  call us for a quick conversation about how we can help your business grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 sm:mb-0">
              © 2024 Accountistry™ All Rights Reserved.
            </div>
            
            <div className="flex space-x-6">
              <Link to="#" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="#" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
