import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const slides = [
  {
    image: '/images/corousel/corousel-1.png',
    title: 'Superior ',
    highlight: 'LV Switchgear',
    highlightColor: 'text-primary',
    subtitle: 'TRI TECH (PVT) LTD specializes in high-quality low voltage panels, ensuring safety and reliability for industrial systems up to 6300A.',
    badge: 'TRI TECH (PVT) LIMITED',
  },
  {
    image: '/images/corousel/corousel-2.png',
    title: 'Advanced ',
    highlight: 'Automation Solutions',
    highlightColor: 'text-yellow',
    subtitle: 'Providing custom-engineered PLC & DCS systems to optimize productivity and operational efficiency across diverse sectors.',
    badge: 'TRI TECH (PVT) LIMITED',
  },
  {
    image: '/images/corousel/corousel-3.png',
    title: 'Specialist ',
    highlight: 'Plant Services',
    highlightColor: 'text-accent',
    subtitle: 'Comprehensive shutdown services, site installation, and commissioning delivered with stringent safety standards and minimal downtime.',
    badge: 'TRI TECH (PVT) LIMITED',
  },
  {
    image: '/images/corousel/corousel-4.png',
    title: 'Delivering Quality ',
    highlight: 'With Might and Main',
    highlightColor: 'text-primary',
    subtitle: 'Since 2008, TRI TECH has built a solid reputation for excellence in electrical and mechanical engineering throughout Pakistan.',
    badge: 'TRI TECH (PVT) LIMITED',
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
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden shadow-lg border-b-4 border-primary">
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
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-[2px] bg-primary"></div>
                <span className="text-xs md:text-sm font-bold text-white tracking-widest uppercase drop-shadow-lg">{slide.badge}</span>
              </div>
            )}
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg mb-2">
              {slide.title}
              <span className={slide.highlightColor}>{slide.highlight}</span>
            </h1>
            <p className="mt-2 text-white text-base md:text-lg font-semibold drop-shadow-lg max-w-2xl whitespace-pre-line animate-fade-in-up">
              {slide.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up">
              <Link href="/products" className="bg-primary hover:bg-accent text-white px-6 md:px-8 py-3 rounded-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg flex items-center gap-2 group">
                Explore Products
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link href="/services" className="bg-yellow hover:bg-accent text-gray-900 hover:text-white px-6 md:px-8 py-3 rounded-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg flex items-center gap-2 group">
                Our Services
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
      {/* Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-primary hover:text-white text-primary rounded-full p-2 shadow-md transition-all duration-300 z-20 group"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg className="h-6 w-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-primary hover:text-white text-primary rounded-full p-2 shadow-md transition-all duration-300 z-20 group"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 transition-all duration-300 rounded-full ${idx === current ? 'w-8 bg-primary' : 'w-2 bg-white/50 hover:bg-white'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
