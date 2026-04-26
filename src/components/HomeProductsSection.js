import Link from 'next/link';
import { motion } from 'framer-motion';
import productsDetailData from '../data/productsDetailData';

export default function HomeProductsSection() {
  const products = Object.entries(productsDetailData).map(([slug, data]) => ({
    slug,
    ...data
  }));

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
            Our <span className="text-primary">Products</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            World-class electrical manufacturing solutions engineered for reliability and safety.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.slug}
              className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image Container with Overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.mainImage}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

                {/* Title Overlay on Image */}
                <div className="absolute bottom-4 left-6 right-4">
                  <h3 className="text-xl font-bold text-white mb-1 shadow-sm leading-tight">{product.title}</h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 text-sm h-[60px]">
                  {product.subtitle}
                </p>

                <Link href={`/products/${product.slug}`} className="inline-flex items-center px-5 py-2.5 bg-primary/10 text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition-all group/btn">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Decorative top border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
