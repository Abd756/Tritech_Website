import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layers, AlignVerticalJustifyStart, Grid3X3, MoveVertical, Hexagon } from 'lucide-react';

const IconMap = {
  Layers,
  AlignVerticalJustifyStart,
  Grid3X3,
  MoveVertical
};

export default function ServiceDetailLayout({ service }) {
  if (!service) return null;

  const themes = [
    { bg: 'bg-red-50', border: 'border-red-200', text: 'text-primary', iconBg: 'bg-red-100', accentBg: 'bg-primary', shadowGlow: 'hover:shadow-primary/30', hoverBorder: 'hover:border-primary/50', pillBg: 'bg-primary/10', pillBorder: 'border-primary/20', pillHoverBg: 'hover:bg-primary', pillHoverText: 'group-hover/pill:text-white' },
    { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-accent', iconBg: 'bg-blue-100', accentBg: 'bg-accent', shadowGlow: 'hover:shadow-accent/30', hoverBorder: 'hover:border-accent/50', pillBg: 'bg-accent/10', pillBorder: 'border-accent/20', pillHoverBg: 'hover:bg-accent', pillHoverText: 'group-hover/pill:text-white' },
    { bg: 'bg-yellow/10', border: 'border-yellow/30', text: 'text-yellow', iconBg: 'bg-yellow/20', accentBg: 'bg-yellow', shadowGlow: 'hover:shadow-yellow/40', hoverBorder: 'hover:border-yellow/50', pillBg: 'bg-yellow/20', pillBorder: 'border-yellow/40', pillHoverBg: 'hover:bg-yellow', pillHoverText: 'group-hover/pill:text-gray-900' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Head>
        <title>{service.title} | TRI TECH (PVT) LIMITED</title>
        <meta name="description" content={service.subtitle} />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white shadow-sm">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 -skew-x-12 transform origin-top-right"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <nav className="flex mb-6 text-sm font-semibold text-gray-400">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-accent">{service.title}</span>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                {service.subtitle}
              </p>
              <Link href="/contact" className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-primary transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                Consult With Our Experts
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl bg-gray-200 shadow-2xl overflow-hidden group">
                <img
                  src={service.mainImage}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow rounded-full -z-10 blur-2xl opacity-50"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-full -z-10 blur-2xl opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alternating Categories Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            animate={{ y: [0, -12, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="text-center mb-20 relative"
          >
            {/* Soft glowing orb behind the header */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 bg-primary/10 rounded-full blur-3xl"></div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 relative z-10 tracking-tight">Service Capabilities</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full relative z-10 shadow-[0_0_15px_rgba(192,57,43,0.6)]"></div>
          </motion.div>

          <div className="space-y-24">
            {service.categories.map((category, idx) => {
              const isEven = idx % 2 === 0;
              const theme = themes[idx % themes.length];
              const IconComponent = IconMap[category.icon] || Layers;

              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`flex flex-col lg:flex-row gap-12 items-start ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Title & Description Block */}
                  <div className="lg:w-1/2">
                    <div className={`w-16 h-16 ${theme.iconBg} ${theme.text} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {category.description}
                    </p>
                    
                    {/* Items List */}
                    <div className="space-y-4 mb-8">
                      {category.items.map((item, i) => (
                        <motion.div 
                          key={i} 
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-4 group cursor-default"
                        >
                          <Hexagon className={`w-5 h-5 mt-0.5 ${theme.text} drop-shadow-md group-hover:scale-110 transition-transform`} strokeWidth={2.5} />
                          <span className="text-gray-700 font-medium text-lg">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Finishes/Add-ons Block (Glassmorphism Card) */}
                  <div className="lg:w-1/2 w-full">
                    {category.finishes && category.finishes.length > 0 ? (
                      <div className={`p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] relative overflow-hidden group/card`}>
                        <div className={`absolute -top-20 -right-20 w-64 h-64 ${theme.accentBg} opacity-[0.08] rounded-full blur-3xl group-hover/card:opacity-[0.15] transition-opacity duration-700`}></div>
                        
                        <h4 className={`text-xl font-bold ${theme.text} mb-8 flex items-center gap-3 tracking-wide`}>
                          <svg className="w-5 h-5 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          Available Finishes
                        </h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {category.finishes.map((finish, i) => (
                            <motion.div 
                              key={i} 
                              whileHover={{ y: -6, scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              className={`backdrop-blur-md px-6 py-5 rounded-2xl shadow-sm border ${theme.pillBg} ${theme.pillBorder} hover:border-transparent ${theme.shadowGlow} ${theme.pillHoverBg} transition-all duration-300 cursor-pointer flex items-center text-center group/pill`}
                            >
                              <span className={`${theme.text} ${theme.pillHoverText} font-bold text-sm w-full leading-snug transition-colors duration-300`}>{finish}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className={`aspect-[16/9] rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] flex items-center justify-center relative overflow-hidden group hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] transition-shadow duration-500`}>
                        <div className={`absolute -top-20 -right-20 w-64 h-64 ${theme.accentBg} opacity-20 rounded-full blur-3xl group-hover:opacity-40 transition-opacity duration-700`}></div>
                        <div className={`absolute -bottom-20 -left-20 w-48 h-48 ${theme.accentBg} opacity-10 rounded-full blur-2xl group-hover:opacity-30 transition-opacity duration-700`}></div>
                        <div className="text-center px-8 relative z-10">
                          <Hexagon className={`w-14 h-14 mx-auto mb-5 ${theme.text} drop-shadow-md`} strokeWidth={1.5} />
                          <span className="text-gray-600 font-medium italic tracking-wide">Detailed specifications built to standard</span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
