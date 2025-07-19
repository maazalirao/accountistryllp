import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Settings, PieChart, ArrowRight, Globe, Users, DollarSign, Sparkles, Zap, Shield, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Bookkeeping & Accounting",
      subtitle: "Professional bookkeeping services",
      description: "Complete financial record management",
      features: [
        "Monthly Financial Statements",
        "Accounts Payable/Receivable",
        "General Ledger Maintenance",
        "Bank Reconciliation"
      ],
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-500"
    },
    {
      icon: Settings,
      title: "Tax Preparation",
      subtitle: "Expert tax services",
      description: "Comprehensive tax preparation and planning",
      features: [
        "Individual Tax Returns",
        "Business Tax Returns",
        "Tax Planning & Strategy",
        "IRS Representation"
      ],
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-500"
    },
    {
      icon: PieChart,
      title: "Financial Analysis",
      subtitle: "Business insights and reporting",
      description: "Data-driven financial analysis",
      features: [
        "Financial Reporting",
        "Budget Analysis",
        "Cash Flow Management",
        "Performance Metrics"
      ],
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-500"
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Global Talent Access",
      description: "Connect with skilled accountants worldwide who understand your industry and business needs.",
      color: "text-blue-600"
    },
    {
      icon: DollarSign,
      title: "Significant Cost Savings",
      description: "Save up to 60% on accounting costs while maintaining the highest quality standards.",
      color: "text-green-600"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All our accounting professionals are vetted and continuously monitored for quality.",
      color: "text-purple-600"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal account managers ensure smooth communication and project delivery.",
      color: "text-orange-600"
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
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
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
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-primary-200/30 to-blue-200/30 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
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
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-primary-100 to-blue-100 text-primary-700 border border-primary-200 mb-4 sm:mb-6"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Professional Services
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent"
            >
              Our Professional Services
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            >
              We connect you with expert accountants across the globe who provide top-notch 
              services while helping you save on costs. Focus on growing your business while 
              we handle your accounting needs.
            </motion.p>
          </motion.div>

          {/* Services grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl sm:rounded-3xl blur-xl transition-opacity duration-500`}></div>
                
                <Card className="relative bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-500 transform group-hover:scale-105 border-0 shadow-lg hover:shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden h-full">
                  {/* Header gradient */}
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  
                  <CardHeader className="text-center pb-4 pt-6 sm:pt-8">
                    {/* Animated icon */}
                    <motion.div
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 ${service.iconBg} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl relative`}
                    >
                      <service.icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />
                      
                      {/* Floating particles */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full"
                      />
                    </motion.div>
                    
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-slate-800 transition-colors">
                      {service.title}
                    </CardTitle>
                    
                    <p className="text-xs sm:text-sm text-primary-600 font-semibold mb-2">
                      {service.subtitle}
                    </p>
                    
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0 pb-6 sm:pb-8 px-4 sm:px-6">
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                          className="flex items-center text-slate-700 text-sm sm:text-base"
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: featureIndex * 0.2,
                              ease: "easeInOut"
                            }}
                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${service.iconBg} rounded-full mr-3 flex-shrink-0`}
                          ></motion.div>
                          <span className="font-medium">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className="w-full group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-primary-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 rounded-xl shadow-lg text-slate-700 border-slate-300 hover:bg-primary-500 hover:text-white hover:border-primary-500"
                        variant="outline"
                        size="default"
                      >
                        <Link to="/services" className="flex items-center justify-center w-full">
                          <span>Explore Service</span>
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="ml-2"
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits section */}
          <motion.div
            variants={containerVariants}
            className="mb-12 sm:mb-16 lg:mb-20"
          >
            <motion.div
              variants={itemVariants}
              className="text-center mb-12 sm:mb-16"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                Why Choose Our Platform?
              </h3>
              <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
                Experience the future of accounting with our innovative platform that combines 
                global talent with cutting-edge technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-slate-200"
                  >
                    <benefit.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${benefit.color}`} />
                  </motion.div>
                  
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-slate-700 transition-colors">
                    {benefit.title}
                  </h4>
                  
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced CTA with fixed button visibility */}
          <motion.div
            variants={itemVariants}
            className="text-center relative"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-100 via-blue-50 to-purple-100 rounded-2xl sm:rounded-3xl blur-3xl opacity-60"></div>
            
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-slate-200">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-primary-500 to-blue-500 text-white mb-4 sm:mb-6"
              >
                <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Ready to Transform Your Business?
              </motion.div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                Ready to Cut Costs Without Cutting Corners?
              </h3>
              
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
                Let us connect you with expert accountants who will keep your books in check 
                while you keep more cash in your pocket. Get started today!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-2xl border-0 rounded-xl px-8 sm:px-10">
                    <Link to="/contactus" className="flex items-center justify-center">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Get Started Today
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="ml-2"
                      >
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400 rounded-xl px-8 sm:px-10 transition-all duration-300">
                    <Link to="/services" className="flex items-center justify-center">
                      <Settings className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      <span>Learn More About Our Services</span>
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 