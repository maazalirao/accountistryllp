import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote, Headphones, Building, Users, TrendingUp, Globe, DollarSign, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import ClientsSection from '../components/ClientsSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  const testimonials = [
    {
      name: "Katerina J.",
      company: "",
      rating: 5,
      text: "I was looking for some help with tax questions and found Accountistry online. They messaged me right away and were super helpful. They offered great advice and guided me through my questions. I highly recommend them for any tax questions or tax services. Very responsive!"
    },
    {
      name: "Rahul T.",
      company: "",
      rating: 5,
      text: "Accountistry is a great and talented accounting firm. I'm not exaggerating when I say they may be one of the most punctual and efficient teams I've worked with! The whole time, they maintained open and transparent communication, addressed any issues quickly, and even went out of their way to help with an additional task that came up."
    },
    {
      name: "Craig R.",
      company: "",
      rating: 5,
      text: "Accountistry is one of the most professional accounting firms I've worked with to date. After several unsatisfactory experiences with other accountants, they were a breath of fresh air. They delivered on everything promised without any drama. I truly appreciate their service and will definitely be using them again."
    }
  ];

  const stats = [
    {
      icon: Building,
      value: "100+",
      label: "Businesses Served",
      description: "Companies trust us with their accounting needs"
    },
    {
      icon: DollarSign,
      value: "60%",
      label: "Average Savings",
      description: "Cost reduction without compromising quality"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries",
      description: "Global network of skilled professionals"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Clients Section */}
      <ClientsSection />
      
      {/* Client Logos Section */}
      <section className="py-16 sm:py-20 bg-grey-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Join other businesses that have used Accountistry to transform their accounting operations
            </h2>
          </div>
          
          {/* Moving Banner */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12 sm:space-x-16">
              {/* First set of logos */}
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white rounded-lg backdrop-blur-sm border border-white/20 p-4">
                <img 
                  src="/icons/One Ocean.png" 
                  alt="One Ocean County" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white rounded-lg backdrop-blur-sm border border-white/20 p-4">
                <img 
                  src="/icons/Mr. Rocco's.jpg" 
                  alt="Mr. Roccos 909" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white rounded-lg backdrop-blur-sm border border-white/20 p-4">
                <img 
                  src="/icons/Niki's.png" 
                  alt="Nikisha Halal Grill" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white rounded-lg backdrop-blur-sm border border-white/20 p-4">
                <img 
                  src="/icons/Balance Health.png" 
                  alt="Balance Health" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white rounded-lg backdrop-blur-sm border border-white/20 p-4">
                <img 
                  src="/icons/Florida Voices.avif" 
                  alt="Healthy FLA" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white rounded-lg backdrop-blur-sm border border-white/20 p-4">
                <img 
                  src="/icons/ICLR.png" 
                  alt="ICLR" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white rounded-lg backdrop-blur-sm border border-white/20 p-4">
                <img 
                  src="/icons/Silicon.png" 
                  alt="Silicon.net.pk" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white rounded-lg backdrop-blur-sm border border-white/20 p-4">
                <img 
                  src="/icons/One Ocean.png" 
                  alt="One Ocean County" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white rounded-lg backdrop-blur-sm border border-white/20 p-4">
                <img 
                  src="/icons/Mr. Rocco's.jpg" 
                  alt="Mr. Roccos 909" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white rounded-lg backdrop-blur-sm border border-white/20 p-4">
                <img 
                  src="/icons/Niki's.png" 
                  alt="Nikisha Halal Grill" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white rounded-lg backdrop-blur-sm border border-white/20 p-4">
                <img 
                  src="/icons/Balance Health.png" 
                  alt="Balance Health" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white rounded-lg backdrop-blur-sm border border-white/20 p-4">
                <img 
                  src="/icons/Florida Voices.avif" 
                  alt="Healthy FLA" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white rounded-lg backdrop-blur-sm border border-white/20 p-4">
                <img 
                  src="/icons/ICLR.png" 
                  alt="ICLR" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white rounded-lg backdrop-blur-sm border border-white/20 p-4">
                <img 
                  src="/icons/Silicon.png" 
                  alt="Silicon.net.pk" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-grey-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-grey-300 max-w-3xl mx-auto">
              Don't just take our word for it; see what our satisfied clients have to say about us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-grey-800 border border-grey-700 hover:border-primary-400 shadow-medium hover:shadow-large transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-primary-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-grey-300 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="border-t border-grey-700 pt-4">
                    <p className="font-semibold text-white text-sm sm:text-base mb-2">{testimonial.name}</p>
                    {testimonial.company && (
                      <p className="text-xs sm:text-sm text-grey-400 mb-2">{testimonial.company}</p>
                    )}
                    <div className="flex items-center space-x-2 bg-green-900/20 px-3 py-1 rounded-full border border-green-500/30 w-fit">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-300 font-medium">Verified Review</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-grey-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Interested in Learning More?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-grey-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Let us connect you with our team of expert accountants who will help get your accounting back on track. Contact us now!
          </p>
          

          
          <div className="flex justify-center">
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
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LandingPage;
