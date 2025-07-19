import React from "react";
import { motion } from "framer-motion";
import { DollarSign, TrendingDown, Star } from "lucide-react";

const StatisticsSection = () => {
  const stats = [
    {
      icon: DollarSign,
      value: "$30",
      suffix: "/hour",
      label: "Average hourly rate for",
      sublabel: "staff accountant or bookkeeper",
      color: "from-emerald-400 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      icon: TrendingDown,
      value: "50",
      suffix: "%",
      label: "Average savings with",
      sublabel: "Accountistry",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Star,
      value: "10",
      suffix: "/10",
      label: "Client satisfaction",
      sublabel: "ratings",
      color: "from-amber-400 to-amber-600",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      sparkle: true
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
      className="bg-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border border-slate-700/50 backdrop-blur-sm"
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
                className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${stat.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg`}
              >
                <stat.icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${stat.iconColor}`} />
              </motion.div>
              
              {/* Value */}
              <div className="mb-3 sm:mb-4">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5, type: "spring" }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white relative"
                >
                  {stat.value}
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-300">{stat.suffix}</span>
                  {stat.sparkle && (
                    <motion.span
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 text-amber-400 text-lg sm:text-xl lg:text-2xl"
                    >
                      ✨
                    </motion.span>
                  )}
                </motion.span>
              </div>
              
              {/* Labels */}
              <div className="space-y-1">
                <p className="text-slate-300 font-medium text-sm sm:text-base lg:text-lg">
                  {stat.label}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm lg:text-base">
                  {stat.sublabel}
                </p>
              </div>
            </div>
            
            {/* Vertical divider (except for last item) */}
            {index < stats.length - 1 && (
              <div className="hidden md:block absolute top-6 bottom-6 lg:top-8 lg:bottom-8 -right-4 w-px bg-gradient-to-b from-transparent via-slate-600 to-transparent"></div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default StatisticsSection; 