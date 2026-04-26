import Link from 'next/link';
import { motion } from 'framer-motion';
import servicesData from '../data/servicesData';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* ----------------------------------------------------------------------------------
         1. HERO SECTION
         ---------------------------------------------------------------------------------- */}
      <section className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] bg-gray-900 text-white overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="images/Services/Service-Page-Banner.png" // Correct path based on your public folder structure
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
            Our  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            End-to-end industrial automation and engineering services.
          </motion.p>
        </div>
      </section>

      {/* ----------------------------------------------------------------------------------
         2. SERVICES GRID
         ---------------------------------------------------------------------------------- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
            >
              {/* Image Container with Overlay */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                {/* Floating Badge/Icon Placeholder */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex-1 flex flex-col relative">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed flex-1">
                  {service.desc}
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-bold text-primary group/link hover:translate-x-1 transition-transform"
                >
                  Experience the Difference
                  <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>

                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ----------------------------------------------------------------------------------
         3. OUR PROCESS (New Section)
         ---------------------------------------------------------------------------------- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Service <span className="text-primary">Workflow</span></h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Desktop Connecting Line (Horizontal) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {[
                { step: "01", title: "Consultation", desc: "We listen to your challenges and define core requirements." },
                { step: "02", title: "Engineering", desc: "Detailed design and strategy tailored to your facility." },
                { step: "03", title: "Execution", desc: "Expert implementation with zero-compromise on safety." },
                { step: "04", title: "Performance", desc: "Post-launch support ensuring long-term operational success." }
              ].map((p, idx) => (
                <div key={idx} className="relative">
                  <motion.div
                    className="group h-full p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative z-10"
                    whileHover={{ y: -10 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-4xl font-black text-primary/10 absolute top-4 right-6 leading-none group-hover:text-primary/40 transition-colors duration-300">{p.step}</div>
                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </motion.div>

                  {/* Connectors */}
                  {idx < 3 && (
                    <>
                      {/* Mobile Arrow (Vertical) */}
                      <div className="md:hidden flex justify-center py-4">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: 32 }}
                          className="w-0.5 bg-gradient-to-b from-primary to-primary rounded-full"
                        />
                      </div>

                      {/* Desktop Arrow (Horizontal) */}
                      <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-0.5 bg-gradient-to-r from-primary to-primary -translate-y-1/2 z-20">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------------------
         4. CALL TO ACTION
         ---------------------------------------------------------------------------------- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Optimize Your Operations?</h2>
            <p className="text-blue-100 text-lg mb-12 leading-relaxed">
              Contact our engineering team today to discuss how we can tailor our services to your specific industrial needs.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-12 py-5 rounded-full font-bold text-xl hover:bg-primary hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

