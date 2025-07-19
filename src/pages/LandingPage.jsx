import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Quote, Star, ArrowRight, Building, Users, TrendingUp, Globe, DollarSign, Shield } from "lucide-react";

const LandingPage = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Tech Startup Inc.",
      rating: 5,
      text: "Accountistry helped us reduce our accounting costs by 50% while maintaining excellent quality. Their global talent network is impressive!"
    },
    {
      name: "David Chen",
      company: "Growth Manufacturing",
      rating: 5,
      text: "The professional accountants they connected us with understand our business better than our previous local firm. Highly recommended!"
    },
    {
      name: "Sarah Williams",
      company: "Digital Marketing Agency",
      rating: 5,
      text: "Outstanding service and significant cost savings. They truly are financial matchmakers - found us the perfect accounting partner."
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
      
      {/* Statistics & Success Metrics Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              Join hundreds of successful businesses that have transformed their accounting 
              operations with our global talent network.
            </p>
          </div>
          
          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-medium hover:shadow-large transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                    {stat.value}
                  </CardTitle>
                  <p className="text-base sm:text-lg font-semibold text-primary-600">
                    {stat.label}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-slate-600">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say 
              about our professional services and cost savings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-medium hover:shadow-large transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-primary-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-slate-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Cut Costs Without Cutting Corners?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Let us be your financial matchmakers. We'll connect you with expert accountants 
            who will keep your books in check while you keep more cash in your pocket.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span className="text-sm sm:text-base text-slate-300">Global Talent Network</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span className="text-sm sm:text-base text-slate-300">Up to 60% Cost Savings</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span className="text-sm sm:text-base text-slate-300">Quality Guaranteed</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="w-full sm:w-auto bg-primary-500 hover:bg-primary-600 px-8 sm:px-10">
              <Link to="/contactus" className="flex items-center justify-center">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-slate-900 px-8 sm:px-10">
              <Link to="/services">
                Learn More About Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LandingPage;
