import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { products, productCategories } from '../data/productsData';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* ----------------------------------------------------------------------------------
         1. HERO SECTION
         ---------------------------------------------------------------------------------- */}
      <section className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] bg-gray-900 text-white overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Products/Products-Page-Banner.png" // Correct path based on your public folder structure
            alt="Products Background"
            className="w-full h-full object-cover"
          />
          {/* Light Overlay for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 blur-[2px] pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Our Industrial <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow">Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Explore our comprehensive range of automation and mechanical products designed for manufacturing excellence.
          </motion.p>
        </div>
      </section>

      {/* ----------------------------------------------------------------------------------
         2. CATEGORY FILTERS
         ---------------------------------------------------------------------------------- */}
      <section className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-start md:justify-center overflow-x-auto gap-3 md:gap-4 no-scrollbar">
          {productCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-xl whitespace-nowrap font-bold text-sm transition-all duration-300 ${activeCategory === cat
                ? "bg-primary text-white shadow-lg shadow-blue-500/20"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------------------------------
         3. PRODUCTS GRID
         ---------------------------------------------------------------------------------- */}
      <section className="py-16 max-w-7xl mx-auto px-6 w-full flex-grow">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-bold text-primary shadow-sm border border-blue-50">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {product.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <Link href="/contact" className="text-primary font-bold text-sm flex items-center gap-2 group/btn">
                      Request Quote
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
                </div>

                {/* Decorative Accent */}
                <div className="absolute bottom-0 left-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left w-full"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-400">No products found for this category.</h3>
          </div>
        )}
      </section>
    </div>
  );
}
