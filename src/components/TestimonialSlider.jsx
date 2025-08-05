import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  { text: "Finding quality accounting at a reasonable price is tough, but Accountistry hits the mark." },
  { text: "The attention to detail is amazing and the quality of their work is something we really appreciate." },
  { text: "We were worried about the cost of hiring an accountant, but we received a really competitive quote." },
  { text: "The owners are approachable and really know their stuff." },
  { text: "They've made us feel like valued clients from day one." },
  { text: "Wow, going with Accountistry was a great business decision - the savings have been amazing!" },
  { text: "They genuinely care about helping small businesses like mine succeed." },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-12 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-primary relative">
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.slice(currentIndex, currentIndex + 4).map((testimonial, index) => (
            <div
              key={index}
              className={`group bg-grey-800 border border-grey-700 rounded-2xl p-6 transition-all duration-500 hover:border-primary-400 hover:bg-grey-700 
              ${index === 0 || index === 3 ? 'opacity-50 scale-90' : ''} // Half visibility for side items
              `}
            >
              <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500 group-hover:text-primary-400">
                {[...Array(1)].map((_, starIndex) => (
                  <svg key={starIndex} className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="currentColor"
                      d="M9 0l2.33 7.17H18l-5.67 4.13 2.33 7.17L9 14.34 3.33 18.47 5.67 11.3 0 7.17h6.67z"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-white leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-white">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* Arrow Buttons for Desktop */}
        <button
          onClick={prevSlide}
          className="hidden lg:block absolute left-[-10px] top-1/2 transform -translate-y-1/2 group flex justify-center items-center border-2 border-solid border-grey-700 bg-grey-800 w-12 h-12 transition-all duration-500 rounded-full hover:bg-primary-500 hover:border-primary-500"
        >
          <FaChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden lg:block absolute right-[-10px] top-1/2 transform -translate-y-1/2 group flex justify-center items-center border-2 border-solid border-grey-700 bg-grey-800 w-12 h-12 transition-all duration-500 rounded-full hover:bg-primary-500 hover:border-primary-500"
        >
          <FaChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Arrow Buttons for Mobile */}
        <div className="flex justify-center mt-6 lg:hidden">
          <button
            onClick={prevSlide}
            className="group flex justify-center items-center border-2 border-solid border-grey-700 bg-grey-800 w-12 h-12 transition-all duration-500 rounded-full hover:bg-primary-500 hover:border-primary-500 mx-2"
          >
            <FaChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="group flex justify-center items-center border-2 border-solid border-grey-700 bg-grey-800 w-12 h-12 transition-all duration-500 rounded-full hover:bg-primary-500 hover:border-primary-500 mx-2"
          >
            <FaChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
