import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import ClientsSection from "../components/ClientsSection";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Quote, Star, ArrowRight, Building, Users, TrendingUp, Globe, DollarSign, Shield } from "lucide-react";

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
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-white font-bold text-lg">One Ocean County</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-white font-bold text-lg">Mr. Roccos 909</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-white font-bold text-lg">Nikisha Halal Grill</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-white font-bold text-lg">Balance Health</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-white font-bold text-lg">Healthy FLA</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-white font-bold text-lg">ICLR</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-white font-bold text-lg">Silicon.net.pk</span>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-white font-bold text-lg">One Ocean County</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-white font-bold text-lg">Mr. Roccos 909</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-white font-bold text-lg">Nikisha Halal Grill</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-white font-bold text-lg">Balance Health</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-white font-bold text-lg">Healthy FLA</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-white font-bold text-lg">ICLR</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-white font-bold text-lg">Silicon.net.pk</span>
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
                    <p className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</p>
                    {testimonial.company && (
                      <p className="text-xs sm:text-sm text-grey-400">{testimonial.company}</p>
                    )}
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
          
          <div className="flex justify-center">
            <Button size="lg" className="w-full sm:w-auto bg-primary-500 hover:bg-primary-600 text-white shadow-lg border-0 px-8 sm:px-10">
              <Link to="/contactus" className="flex items-center justify-center">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
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
