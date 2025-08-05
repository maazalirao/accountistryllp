
import { useEffect } from 'react';

const Statistic = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    const speed = 100; // Adjust this to control the speed of the animation

    counters.forEach(counter => {
      const animate = () => {
        const target = +counter.getAttribute('data-target');
        let count = +counter.innerText.replace(/[%/,]/g, ''); // Remove $, %, and , signs for calculation
        const increment = target / speed;

        if (count < target) {
          count = Math.ceil(count + increment);
          if (counter.getAttribute('data-target') === '30') {
            counter.innerText = `$${count}/hour`;
          } else if (counter.getAttribute('data-target') === '50') {
            counter.innerText = `${count}%`;
          } else if (counter.getAttribute('data-target') === '10') {
            counter.innerText = `${count}/${target}`;
          }
          setTimeout(animate, 10);
        } else {
          if (counter.getAttribute('data-target') === '30') {
            counter.innerText = `$${target.toLocaleString()}/hour`;
          } else if (counter.getAttribute('data-target') === '50') {
            counter.innerText = `${target}%`;
          } else if (counter.getAttribute('data-target') === '10') {
            counter.innerText = `${target}/${target}`;
          }
        }
      };

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate();
            observer.unobserve(counter);
          }
        });
      }, { threshold: 0.1 });

      observer.observe(counter);
    });
  }, []);

  return (
    <div className="px-4 py-12 rounded-xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
      <div className="max-w-xl mb-10 md:mx-auto md:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block py-px mb-4 text-2xl font-semibold font-primary text-white tracking-wider uppercase rounded-full">
            Our Elevator Pitch
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold font-primary leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">The Accountistry Advantage</span>
          </span>{' '}
        </h2>
        <p className="text-base font-primary text-white md:text-lg">
          Accountistry helps connect you to skilled professionals abroad, allowing your business to maximize savings without compromising on quality.
        </p>
      </div>
      <div className="relative bg-grey-800 w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 border border-grey-700 rounded lg:mb-8 lg:max-w-4xl group hover:shadow-xl hover:border-primary-400">
        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-primary-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-primary-400 group-hover:scale-y-100" />
        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-primary-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-primary-400 group-hover:scale-y-100" />
        <div className="relative flex flex-col sm:flex-row items-center justify-around h-full py-6 transition-colors duration-300 rounded-sm space-y-6 sm:space-y-0">
          <div className="flex-1 px-8 py-6 mt-[2%] text-center">
            <h6 className="text-4xl font-bold text-primary-400 sm:text-5xl counter mb-4" data-target="30">
              $0
            </h6>
            <p className="text-center font-primary md:text-base text-white">
              Average hourly rate for <br/>staff accountant or bookkeeper
            </p>
          </div>
          
          <div className="w-[80%] h-1 sm:w-1 sm:h-48 transition duration-300 transform bg-primary-400 rounded-full group-hover:scale-[1.2]" />

          <div className="flex-1 px-8 py-6 text-center">
            <h6 className="text-4xl font-bold text-primary-400 sm:text-5xl counter mb-4" data-target="50">
              0%
            </h6>
            <p className="text-center font-primary md:text-base text-white">
              Average savings with Accountistry
            </p>
          </div>
          
          <div className="w-[80%] h-1 sm:w-1 sm:h-48 transition duration-300 transform bg-primary-400 rounded-full group-hover:scale-[1.2]" />

          <div className="flex-1 px-8 py-6 text-center">
            <div className="flex items-center justify-center">
              <h6 className="text-4xl font-bold text-primary-400 sm:text-5xl counter mb-4" data-target="10">
                0/10
              </h6>
              <img src="https://res.cloudinary.com/dm56xy1oj/image/upload/v1725991736/5staricon_igo5dh.png" alt='5 Star Icon' className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] ml-2 animate-bounceOnce" />
            </div>
            <p className="text-center font-primary md:text-base text-white">
              Client satisfaction ratings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
