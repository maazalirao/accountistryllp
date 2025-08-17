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
    { name: "Contact Us", href: "/contactus" }
  ];

  const resources = [
    { name: "FASB", href: "https://www.fasb.org/", external: true },
    { name: "AICPA", href: "https://www.aicpa-cima.com/home", external: true },
    { name: "PCAOB", href: "https://pcaobus.org/", external: true },
    { name: "IRS", href: "https://www.irs.gov/", external: true }
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61563816361606", external: true },
    { name: "Instagram", href: "https://www.instagram.com/accountistry.llp/", external: true },
        { name: "Twitter/X", href: "https://x.com/AccountistryLLP", external: true },
    { name: "Yelp", href: "https://www.yelp.com/biz/accountistry-lake-elsinore-2", external: true }
  ];

  return (
    <footer className="bg-grey-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company info */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 overflow-hidden flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dm56xy1oj/image/upload/v1725991678/Navbar_Hexa_Only_nvn1le.svg"
                  className="w-full h-full object-contain"
                  alt="Accountistry Logo"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl leading-tight">
                  Accountistry
                </span>
              </div>
            </div>
            
            <p className="text-grey-300 mb-6 leading-relaxed text-sm">
              We are a full-service CPA firm based in Southern California, offering a comprehensive suite of accounting services tailored to meet the diverse needs of our clients. Our team is composed of experienced CPAs and seasoned accounting professionals who bring deep industry knowledge and a commitment to delivering high-quality, personalized service.
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
                    className="text-grey-300 hover:text-primary-400 transition-colors block"
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
                    className="text-grey-300 hover:text-primary-400 transition-colors block"
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
                    className="text-grey-300 hover:text-primary-400 transition-colors block"
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
            
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <a href="tel:+19512231881" className="text-grey-300 hover:text-primary-400 transition-colors">
                  (951) 223-1881
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@accountistryllp.com" className="text-grey-300 hover:text-primary-400 transition-colors">
                  info@accountistryllp.com
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-grey-300">
                  Southern California
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-grey-300">
                  Serving clients nationwide
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-grey-300">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-grey-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-grey-400 text-sm mb-4 sm:mb-0">
              © 2024 Accountistry™ All Rights Reserved.
            </div>
            
            <div className="flex space-x-6">
              <Link to="#" className="text-grey-400 hover:text-primary-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="#" className="text-grey-400 hover:text-primary-400 transition-colors text-sm">
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
