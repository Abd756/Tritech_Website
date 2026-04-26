import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Server, ShieldCheck, Zap, Cpu, Globe, Fan } from 'lucide-react';

const IconMap = {
  Server,
  ShieldCheck,
  Zap,
  Cpu,
  Globe,
  Fan
};

export default function ProductDetailLayout({ product }) {
  if (!product) return null;

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{product.title} | TRI TECH (PVT) LIMITED</title>
        <meta name="description" content={product.subtitle} />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gray-50">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <nav className="flex mb-8 text-sm font-medium text-gray-500">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
                <span className="mx-2">/</span>
                <span className="text-primary">{product.title}</span>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                {product.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {product.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all transform hover:-translate-y-1">
                  Request a Quote
                </Link>
                <a href="#specifications" className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
                  View Specifications
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl bg-gray-200 shadow-2xl overflow-hidden group">
                <img
                  src={product.mainImage}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-bold border border-white/30">
                    Premium Switchgear Solution
                  </span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-2xl -z-10 rotate-12"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-primary rounded-full -z-10 animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* System Range Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
                System Range
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {product.systemRange.description}
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm"
              >
                <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Compliance Standard
                </h4>
                <p className="text-sm text-gray-700 font-medium">
                  {product.standards}
                </p>
              </motion.div>
            </div>
            <motion.div
              className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.15 } }
              }}
            >
              {product.systemRange.items.map((item, idx) => {
                const themes = [
                  { border: 'hover:border-red-500', shadow: 'hover:shadow-red-500/30', iconBg: 'bg-red-50', text: 'text-red-500', groupHoverBg: 'group-hover:bg-red-500' },
                  { border: 'hover:border-yellow', shadow: 'hover:shadow-yellow/30', iconBg: 'bg-primary/10', text: 'text-yellow', groupHoverBg: 'group-hover:bg-yellow' },
                  { border: 'hover:border-blue-500', shadow: 'hover:shadow-blue-500/30', iconBg: 'bg-blue-50', text: 'text-blue-500', groupHoverBg: 'group-hover:bg-blue-500' },
                ];
                const theme = themes[idx % themes.length];
                return (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.95 },
                      show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
                    }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-8 bg-white rounded-3xl border border-gray-100 shadow-md ${theme.border} hover:shadow-xl ${theme.shadow} transition-all duration-300 group cursor-pointer`}
                  >
                    <div className={`w-14 h-14 ${theme.iconBg} rounded-2xl shadow-sm flex items-center justify-center mb-6 ${theme.groupHoverBg} group-hover:text-white transition-colors duration-300`}>
                      <span className={`font-bold text-xl ${theme.text} group-hover:text-white transition-colors duration-300`}>{idx + 1}</span>
                    </div>
                    <p className="text-gray-900 font-bold text-lg leading-tight">
                      {item}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="specifications" className="py-24 bg-slate-800 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[160px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Technical Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our modular {product.title.toLowerCase()} is engineered for maximum safety and operational flexibility.</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            {product.features.map((feature, idx) => {
              const IconComponent = IconMap[feature.icon] || Server;
              const themes = [
                { glow: 'group-hover:bg-red-500/30', text: 'group-hover:text-red-400', border: 'hover:border-t-red-500' },
                { glow: 'group-hover:bg-yellow-400/30', text: 'group-hover:text-yellow-400', border: 'hover:border-t-yellow-400' },
                { glow: 'group-hover:bg-blue-500/30', text: 'group-hover:text-blue-400', border: 'hover:border-t-blue-500' },
              ];
              const theme = themes[idx % themes.length];
              
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 20 },
                    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 350, damping: 25 } }
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-8 bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-transparent rounded-3xl hover:bg-white/10 transition-all cursor-pointer shadow-lg hover:shadow-2xl relative group overflow-hidden ${theme.border}`}
                >
                  {/* Glossy reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                  
                  <div className={`w-12 h-12 bg-white/10 text-gray-300 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 shadow-inner ${theme.glow} ${theme.text}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 relative z-10">{feature.title}</h3>
                  <p className="text-gray-400 font-medium leading-relaxed relative z-10 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Configurations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-gray-900 to-primary p-12 rounded-[3rem] text-white shadow-3xl flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Available Configurations</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We provide a wide array of configurations tailored to specific operational needs, from incomer feeders to ATS panels.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.configurations.map((config, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-semibold">{config}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 h-[300px] bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center">
              <span className="text-gray-400 font-italic">[Product Configuration Diagram Placeholder]</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">Ready to enhance your infrastructure?</h2>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-3xl hover:shadow-primary/40 transition-all transform hover:-translate-y-1">
            Get a Customized Proposal
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
