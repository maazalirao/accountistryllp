import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Sparkles, Globe2, Headphones, DollarSign } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import StatisticsSection from "./StatisticsSection";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  const features = [
    { icon: CheckCircle, text: "Bookkeeping", color: "text-primary-400" },
    { icon: CheckCircle, text: "Personal & Business Taxes", color: "text-primary-400" },
    { icon: CheckCircle, text: "Audits & Reviews", color: "text-primary-400" },
    { icon: CheckCircle, text: "Financial Statement Compilations", color: "text-primary-400" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative h-auto text-white overflow-hidden bg-gradient-to-br from-grey-900 via-grey-800 to-primary-900">
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-6 z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col justify-center py-2"
        >
          {/* Main hero content - Better mobile layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center mb-4 sm:mb-6 lg:mb-8">
            {/* Left column - Text content */}
            <motion.div variants={itemVariants} className="space-y-4 lg:space-y-6 flex flex-col items-center lg:items-start">
              {/* Centered main headline with adjusted sizing and fixed positioning */}
              <div className="space-y-3 text-center lg:text-left pt-1">
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-relaxed pb-2"
                >
                  <span className="bg-gradient-to-r from-white via-grey-100 to-primary-200 bg-clip-text text-transparent">
                    Welcome to
                  </span>
                  <span className="block bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">
                    Accountistry!
                  </span>
                </motion.h1>
              </div>
              
              {/* Enhanced subtitle with better mobile sizing */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg lg:text-xl text-primary-100 font-medium leading-relaxed max-w-2xl mb-1 sm:mb-2 text-justify"
              >
                We are a full-service CPA firm based in Southern California, offering a comprehensive suite of accounting services tailored to meet the diverse needs of our clients. Our team is composed of 
                <motion.span
                  animate={{
                    color: ["#8bc094", "#dbede1", "#6ea878", "#8bc094"]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="font-bold"
                > experienced CPAs and seasoned accounting professionals</motion.span> who bring deep industry knowledge and a commitment to delivering high-quality, personalized service. Our services include:
              </motion.p>
              
             

              {/* Enhanced features list with uniform sizing */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto lg:mx-0 w-full max-w-2xl"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center justify-start space-x-3 p-4 h-16 rounded-xl glass border border-primary-600/30 hover:border-primary-400/80 transition-all duration-300 group magnetic bg-primary-900/20 hover:bg-primary-800/30"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: "easeInOut"
                      }}
                    >
                      <feature.icon className={`w-6 h-6 ${feature.color} flex-shrink-0 group-hover:scale-110 transition-transform`} />
                    </motion.div>
                    <span className="text-primary-200 font-medium group-hover:text-primary-100 transition-colors text-base leading-tight">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Get Started Today button - moved up after feature boxes */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center lg:justify-start pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Button size="lg" className="w-full sm:w-auto bg-primary-500 hover:bg-primary-600 text-white shadow-lg border-0 rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                    <Link to="/contactus" className="flex items-center justify-center">
                      <motion.div
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Headphones className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                      </motion.div>
                      Get Started Today
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right column - Enhanced image with mobile responsiveness */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative order-last lg:order-last mt-2 sm:mt-4 mb-4 sm:mb-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative"
              >
                {/* Multi-layered glowing border - less intense on mobile */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500 rounded-3xl blur-xl sm:blur-2xl opacity-30 sm:opacity-40 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-400 rounded-3xl blur-md sm:blur-xl opacity-40 sm:opacity-60"></div>
                
                <Card className="relative overflow-hidden border-0 shadow-xl sm:shadow-2xl rounded-2xl sm:rounded-3xl glass border border-slate-700/50 card-glow">
                  <CardContent className="p-0">
                    <motion.img
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      src="/skyscrapers-blue-sky-with-clouds.jpg"
                      alt="Modern skyscrapers reaching towards blue sky with clouds"
                      className="w-full h-full object-cover rounded-2xl sm:rounded-3xl filter brightness-105 contrast-105"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Why Choose Accountistry Section */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 mt-8 lg:mt-12 text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8"
            >
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">
                Accountistry?
              </span>
            </motion.h2>
            <StatisticsSection />
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced bottom CTA section with mobile responsiveness */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="relative glass border-t border-slate-700/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <motion.p
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-sm sm:text-base lg:text-lg text-slate-300 mb-4 sm:mb-6 leading-relaxed"
            >
              Ready to learn more? Send us a note about your accounting needs at{" "}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="mailto:info@accountistryllp.com"
                className="text-primary-400 hover:text-primary-300 underline font-medium transition-colors hover-glow"
              >
                info@accountistryllp.com
              </motion.a>{" "}
              or call{" "}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="tel:+19512231881"
                className="text-primary-400 hover:text-primary-300 underline font-medium transition-colors hover-glow"
              >
                (951) 223-1881
              </motion.a>{" "}
              for a quick conversation.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;