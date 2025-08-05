import React from "react";
import { motion } from "framer-motion";
import { Calculator, FileText, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: "Bookkeeping Services",
      items: [
        "General Ledger Maintenance",
        "Bank Reconciliations", 
        "Accounts Receivable / Accounts Payable",
        "QuickBooks and Other ERP Cleanup"
      ]
    },
    {
      icon: FileText,
      title: "Tax Services",
      items: [
        "Personal Tax Returns",
        "Business Tax Returns (Partnerships, LLCs, S-Corps)",
        "Payroll and Sales Tax Filings",
        "IRS Representations"
      ]
    },
    {
      icon: Search,
      title: "Financial Statement and Assurance Services",
      items: [
        "Audits",
        "Reviews",
        "Compilations",
        "CPA Verification Letters"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-grey-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-primary-500/30 to-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white bg-gradient-to-r from-white via-grey-100 to-primary-200 bg-clip-text text-transparent mb-4"
            >
              Services We Offer
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-grey-300 max-w-3xl mx-auto"
            >
              Comprehensive accounting solutions tailored to meet your business needs
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 justify-items-center"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-grey-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-grey-700 hover:border-primary-400 text-center w-full max-w-sm"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl mb-6 mx-auto">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
                    {service.title}
                  </h3>
                  
                  <ul className="space-y-2 sm:space-y-3 text-left">
                    {service.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-grey-300 leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Explore Services Button */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Complete List of Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;