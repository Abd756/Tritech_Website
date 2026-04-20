import Link from 'next/link';
import { motion } from 'framer-motion';
import servicesData from '../data/servicesData';

export default function HomeServicesSection() {
  return (
    <section className="w-full py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4 tracking-tight">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Providing top-tier automation and control solutions tailored to industrial needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {servicesData.slice(0, 3).map((service, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image Container with Overlay */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

                {/* Title Overlay on Image (Mobile/Design Choice) */}
                <div className="absolute bottom-4 left-6 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1 shadow-sm">{service.title}</h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed min-h-[80px]">
                  {service.desc}
                </p>

                <Link href={'/contact'} className="inline-flex items-center text-primary font-semibold group-hover:text-primary transition-colors">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Decorative top border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-orange-600 rounded-full shadow-lg hover:bg-primary hover:shadow-xl transition-all transform hover:-translate-y-1">
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
