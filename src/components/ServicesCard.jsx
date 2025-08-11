import React from "react";
import { motion } from "framer-motion";

const ServicesCard = ({ title, description, buttonText, onButtonClick, delay = 0, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -15, 
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative bg-gradient-to-br from-grey-800/90 via-grey-800/80 to-grey-900/90 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-grey-600/50 hover:border-primary-400/60 transition-all duration-500 overflow-hidden h-full flex flex-col"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Decorative corner elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Icon section - Centered */}
      {icon && (
        <motion.div 
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="relative mb-3 flex justify-center"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-primary-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-primary-400/25 transition-shadow duration-500">
            <div className="text-white text-2xl">{icon}</div>
          </div>
          <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/20 to-primary-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>
      )}
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-3">
        <motion.h3 
          className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-slate-300 leading-relaxed text-sm group-hover:text-slate-200 transition-colors duration-300"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {description}
        </motion.p>
        
        {buttonText && onButtonClick && (
          <motion.button
            onClick={onButtonClick}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2.5 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-semibold shadow-lg overflow-hidden group/button text-sm mt-2"
          >
            {/* Button background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
            
            {/* Button text */}
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>{buttonText}</span>
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </span>
          </motion.button>
        )}
      </div>
      
      {/* Subtle shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
