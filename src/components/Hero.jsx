import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Sparkles, Globe2, Zap, DollarSign } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import StatisticsSection from "./StatisticsSection";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  const features = [
    { icon: Globe2, text: "Global Talent Network", color: "text-blue-400" },
    { icon: Zap, text: "Lightning Fast Setup", color: "text-yellow-400" },
    { icon: TrendingUp, text: "Cost-Effective Solutions", color: "text-green-400" },
    { icon: Award, text: "Quality Guaranteed", color: "text-purple-400" }
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
    <section className="relative h-auto text-white overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-6 z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col justify-center py-2 lg:py-4"
        >
          {/* Main hero content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8">
            {/* Left column - Text content */}
            <motion.div variants={itemVariants} className="space-y-4 lg:space-y-6">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-primary-500/20 to-blue-500/20 text-primary-300 border border-primary-500/30 backdrop-blur-sm glass"
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Financial Matchmakers for the Digital Age
              </motion.div>
              
              {/* Main headline with more reasonable sizing */}
              <div className="space-y-2">
                <motion.h1
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                >
                  <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                    Welcome to
                  </span>
                  <span className="block bg-gradient-to-r from-primary-400 via-primary-300 to-blue-400 bg-clip-text text-transparent">
                    Accountistry!
                  </span>
                </motion.h1>
              </div>
              
              {/* Enhanced subtitle with better mobile sizing */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl"
              >
                Looking to cut costs without cutting corners? We connect you with 
                <motion.span
                  animate={{
                    color: ["#fbbf24", "#3b82f6", "#8b5cf6", "#fbbf24"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="font-semibold"
                > expert accountants worldwide</motion.span> who keep
                your books in check while you keep more cash in your pocket.
              </motion.p>
              
              {/* Value proposition with better mobile sizing */}
              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-2xl"
              >
                Think of us as your financial matchmakers, connecting you with top-notch talent 
                that meets budget-friendly pricing. Let us take the stress out of accounting so you
                can focus on what you do best—<span className="text-primary-400 font-medium">growing your business!</span>
              </motion.p>

              {/* Enhanced features list with mobile responsiveness */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-3 p-3 sm:p-4 rounded-xl glass border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 group magnetic"
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.color} flex-shrink-0 group-hover:scale-110 transition-transform`} />
                    </motion.div>
                    <span className="text-slate-300 font-medium group-hover:text-white transition-colors text-sm sm:text-base">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced CTA buttons with mobile responsiveness */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-2xl border-0 pulse-glow rounded-2xl px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold">
                    <Link to="/contactus" className="flex items-center justify-center">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-pulse" />
                      Get Started Today
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-primary-500 transition-all duration-300 rounded-2xl px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg backdrop-blur-sm glass">
                    <Link to="/services" className="flex items-center justify-center">
                      <Globe2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Explore Services
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right column - Enhanced image with mobile responsiveness */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative order-first lg:order-last"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative"
              >
                {/* Multi-layered glowing border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-40 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-400 rounded-3xl blur-xl opacity-60"></div>
                
                <Card className="relative overflow-hidden border-0 shadow-2xl rounded-3xl glass border border-slate-700/50 card-glow">
                  <CardContent className="p-0">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src="https://res.cloudinary.com/dm56xy1oj/image/upload/v1725990940/Home_krpcbs.svg"
                      alt="Professional accounting services"
                      className="w-full h-full object-cover rounded-3xl filter brightness-110 contrast-110"
                    />
                  </CardContent>
                </Card>
                
                {/* Enhanced floating elements with mobile-friendly sizes */}
                <motion.div
                  animate={{
                    y: [-8, 8, -8],
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-primary-400 to-yellow-400 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl hover-glow"
                >
                  <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [8, -8, 8],
                    rotate: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-2xl hover-glow"
                >
                  <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Statistics Section with mobile responsiveness */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 mt-8 lg:mt-12"
          >
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
                +1 951 223-1881
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