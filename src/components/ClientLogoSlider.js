import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import clientsData from '../data/clientsData';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';

export default function ClientLogoSlider() {
  return (
    <section className="w-full py-20 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-0 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600 tracking-tight mb-4">
            Our Valued <span className="text-primary">Clients</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Trusted by industry leaders across Pakistan.
          </p>
        </motion.div>
      </div>

      <div className="w-full relative px-4">
        {/* Gradient overlays for smooth fade effect at edges */}
        <div className="absolute top-0 left-0 w-8 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          speed={3000} // Slow constant speed for marquee effect
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false, // Keep moving
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 60,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 70,
            },
          }}
          className="client-swiper py-10" // Add padding for shadow/hover space
        >
          {clientsData.map((logo, idx) => (
            <SwiperSlide key={idx} className="flex items-center justify-center">
              <div className="w-full h-24 flex items-center justify-center transition-all duration-500 cursor-pointer transform hover:scale-110">
                <img
                  src={logo}
                  alt="Client Logo"
                  className="max-h-16 max-w-[140px] object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }} // Hide broken images gracefully
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom easing for continuous linear motion */}
      <style jsx global>{`
        .swiper-wrapper {
          transition-timing-function: linear;
        }
      `}</style>
    </section>
  );
}
