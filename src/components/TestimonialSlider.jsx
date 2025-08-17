import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaCheckCircle } from 'react-icons/fa';

const testimonials = [
  { text: "Finding quality accounting at a reasonable price is tough, but Accountistry hits the mark.", name: "Katerina J." },
  { text: "The attention to detail is amazing and the quality of their work is something we really appreciate.", name: "Rahul T." },
  { text: "We were worried about the cost of hiring an accountant, but we received a really competitive quote.", name: "Craig R." },
  { text: "The owners are approachable and really know their stuff.", name: "Maria S." },
  { text: "They've made us feel like valued clients from day one.", name: "David L." },
  { text: "Wow, going with Accountistry was a great business decision - the savings have been amazing!", name: "Jennifer K." },
  { text: "They genuinely care about helping small businesses like mine succeed.", name: "Michael P." },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getItemsPerView = () => {
    if (window.innerWidth >= 1024) return 4; // lg screens
    if (window.innerWidth >= 640) return 2;  // sm screens
    return 1; // mobile
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], originalIndex: index });
    }
    return visible;
  };

  return (
    <section className="py-12 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-primary relative">
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${testimonial.originalIndex}-${currentIndex}`}
              className={`group bg-grey-800 border border-grey-700 rounded-2xl p-6 transition-all duration-500 hover:border-primary-400 hover:bg-grey-700 
              ${(itemsPerView === 4 && (index === 0 || index === 3)) ? 'opacity-50 scale-90' : ''} // Half visibility for side items on desktop
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
              <p className="text-lg text-white leading-8 h-24 transition-all duration-500 mb-4 group-hover:text-white">
                {testimonial.text}
              </p>
              <div className="mt-auto">
                <p className="text-white font-semibold mb-3">{testimonial.name}</p>
                <div className="flex items-center space-x-2 bg-green-900/20 px-3 py-1 rounded-full border border-green-500/30">
                  <FaCheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-300 font-medium">Verified Review</span>
                </div>
              </div>
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

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-primary-500 scale-125'
                  : 'bg-grey-600 hover:bg-grey-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Testimonial Counter */}
        <div className="text-center mt-4">
          <span className="text-sm text-grey-400">
            Showing {Math.min(currentIndex + itemsPerView, testimonials.length)} of {testimonials.length} testimonials
          </span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
