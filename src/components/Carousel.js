import { useState, useEffect, useRef } from 'react';

const slides = [
  {
    image: '/images/corousel/corousel-1.png',
    title: 'Empowering Industries with ',
    highlight: 'Automation',
    subtitle: 'At Interlink Enterprises, we specialize in delivering cutting-edge automation solutions, transforming industries across Pakistan with our high-quality products and services.',
    badge: 'INTERLINK GROUP OF COMPANIES',
  },
  {
    image: '/images/corousel/corousel-2.png',
    title: 'Over Three Decades of ',
    highlight: 'Excellence',
    subtitle: 'Established Since 1996\nInterlink Enterprises has been at the forefront of automation in Pakistan, offering state-of-the-art solutions to diverse industries, from oil & gas to FMCG and power plants.',
    badge: '',
  },
  {
    image: '/images/corousel/corousel-3.png',
    title: 'Your Trusted Partner in ',
    highlight: 'Industrial Solutions',
    subtitle: 'Industry Leaders in Automation\nOur mission is to provide cost-effective, reliable, and innovative automation solutions that enhance productivity and operational efficiency across a wide range of sectors.',
    badge: '',
  },
  {
    image: '/images/corousel/corousel-4.png',
    title: 'Over ',
    highlight: 'Two Decades',
    subtitle: 'A Legacy of Innovation\nInterlink Enterprises is proud to be a pioneer in industrial automation, offering a wide range of solutions for the oil & gas, cement, power, chemical, and textile industries in Pakistan.',
    badge: '',
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden shadow-lg">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-6 md:px-16 lg:px-24">
            {slide.badge && (
              <span className="text-xs md:text-sm font-bold text-white mb-2 tracking-widest uppercase drop-shadow-lg">{slide.badge}</span>
            )}
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg mb-2">
              {slide.title}
              <span className="text-accent">{slide.highlight}</span>
            </h1>
            <p className="mt-2 text-white text-base md:text-lg font-semibold drop-shadow-lg max-w-2xl whitespace-pre-line">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}
      {/* Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-accent hover:text-white text-primary rounded-full p-2 shadow-md transition-colors duration-200 z-20"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-accent hover:text-white text-primary rounded-full p-2 shadow-md transition-colors duration-200 z-20"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
