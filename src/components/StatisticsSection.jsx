import React from "react";
import { motion } from "framer-motion";
import { Shield, DollarSign, Globe } from "lucide-react";

const StatisticsSection = () => {
  const stats = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensure accuracy and compliance in all our services",
      color: "from-primary-400 to-primary-600",
      bgColor: "bg-primary-900/30",
      iconColor: "text-primary-400"
    },
    {
      icon: DollarSign,
      title: "Significant Cost Savings",
      description: "Reduce operational costs while maintaining high-quality accounting standards",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-900/30",
      iconColor: "text-green-400"
    },
    {
      icon: Globe,
      title: "Global Talent Access",
      description: "Access to experienced professionals worldwide with diverse expertise",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-900/30",
      iconColor: "text-blue-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gradient-to-br from-grey-800/50 via-grey-900/50 to-primary-900/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border border-primary-600/20 backdrop-blur-sm"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            className="text-center relative group"
          >
            {/* Background glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 rounded-xl sm:rounded-2xl blur-xl group-hover:opacity-20 transition-opacity duration-500`}></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${stat.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg border border-primary-600/30`}
              >
                <stat.icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${stat.iconColor}`} />
              </motion.div>
              
              {/* Title */}
              <div className="mb-3 sm:mb-4">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2"
                >
                  {stat.title}
                </motion.h3>
              </div>
              
              {/* Description */}
              <div className="space-y-1">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                  className="text-primary-100 font-medium text-sm sm:text-base leading-relaxed"
                >
                  {stat.description}
                </motion.p>
              </div>
            </div>
            
            {/* Vertical divider (except for last item) */}
            {index < stats.length - 1 && (
              <div className="hidden md:block absolute top-6 bottom-6 lg:top-8 lg:bottom-8 -right-4 w-px bg-gradient-to-b from-transparent via-primary-400/30 to-transparent"></div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default StatisticsSection;