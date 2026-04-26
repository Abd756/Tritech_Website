import { motion } from 'framer-motion';
import Link from 'next/link';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">

      {/* ----------------------------------------------------------------------------------
         1. HERO SECTION
         ---------------------------------------------------------------------------------- */}
      <section className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        {/* IMAGE PLACEHOLDER: Background Image of Industrial Plant or Office */}
        <div className="absolute inset-0 z-0">
          <img
            src="images/About-Page-Banner.png" // Correct path based on your public folder structure
            alt="AboutUs Background"
            className="w-full h-full object-cover"
          />
          {/* Light Overlay for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Engineering <span className="text-primary">Excellence</span> Since 2008
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Pioneering Automation & Manufacturing solutions across Pakistan and beyond.
          </motion.p>
        </div>
      </section>

      {/* ----------------------------------------------------------------------------------
         2. CORPORATE OVERVIEW (Who We Are)
         ---------------------------------------------------------------------------------- */}
      <section className="py-24 px-6 md:px-0 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="flex-1 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Who We <span className="text-primary">Are</span>
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>

            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong>TRI TECH (PVT) LIMITED</strong> is a progressive engineering and manufacturing company established in 2008, with its head office and production facility located in Lahore, Pakistan. Operating from a factory covered area of 1,360 square meters, we have developed a strong foundation in delivering reliable, efficient, and high-quality engineering solutions to industrial and commercial clients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in the design engineering of electrical systems, offering innovative and customized solutions that comply with international standards including IEC and PSQCA. Our manufacturing capabilities include Low Voltage (LV) Switchgear, PLC/DCS Control Panels, Cable Management Systems, Belt and Roller Conveyors, and allied machinery.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From initial design to final implementation, we deliver complete turnkey solutions with a focus on quality workmanship and timely project execution, ensuring dependable operation in demanding environments.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-8">
              <div className="border-l-4 border-primary pl-4">
                <span className="block text-3xl font-bold text-gray-900">15+</span>
                <span className="text-gray-500">Years of Experience</span>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <span className="block text-3xl font-bold text-gray-900">1,360</span>
                <span className="text-gray-500">Sq. Meters Facility</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 w-full h-[500px] bg-gray-100 rounded-2xl relative overflow-hidden shadow-2xl group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* IMAGE PLACEHOLDER: Company Building, Team, or High-Tech Machinery */}
            {/* IMAGE PLACEHOLDER: Company Building, Team, or High-Tech Machinery */}
            <img src="/images/officeImage.webp" alt="Tri-Tech Corporate Office" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            {/* Decorative colored overlay on hover */}
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------------------
         3. VISION & MISSION
         ---------------------------------------------------------------------------------- */}
      {/* ----------------------------------------------------------------------------------
         3. VISION & MISSION
         ---------------------------------------------------------------------------------- */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <div className="bg-gray-900 rounded-3xl md:rounded-[3rem] relative overflow-hidden px-6 py-12 md:p-24 shadow-2xl">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-[50px] md:blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[50px] md:blur-[100px] pointer-events-none"></div>

            <div className="relative z-10">
              <div className="text-center mb-12 md:mb-20">
                <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6">Our Guiding <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow">Principles</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">The core philosophies that drive our innovation and commitment to excellence.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

                {/* Vision Card */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative h-full bg-gray-800 p-6 md:p-12 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors">
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl bg-blue-900/50 text-blue-400 mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:text-blue-400 transition-colors">Our Vision</h3>
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                      To be the undisputed leader in industrial automation and manufacturing in the region, recognized for our commitment to quality, innovation, and sustainable growth.
                    </p>
                  </div>
                </motion.div>

                {/* Mission Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-yellow rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative h-full bg-gray-800 p-6 md:p-12 rounded-2xl border border-gray-700 hover:border-primary/50 transition-colors">
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary/50 text-yellow mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:text-yellow transition-colors">Our Mission</h3>
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                      To empower industries by providing cutting-edge technologies and reliable manufacturing solutions. We aim to build lasting partnerships through integrity, service excellence, and customer satisfaction.
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------------------
         4. CEO MESSAGE
         ---------------------------------------------------------------------------------- */}
      <section className="py-24 max-w-[96rem] mx-auto px-6 md:px-0">
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100 flex flex-col md:flex-row items-start gap-12 relative overflow-hidden">

          {/* Decorative Quote Icon */}
          <div className="absolute top-0 right-0 text-gray-100 text-9xl font-serif leading-none opacity-50 pointer-events-none">"</div>

          {/* CEO Image Side */}
          <motion.div
            className="w-full md:w-1/3 flex flex-col items-center text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-[300px] rounded-3xl overflow-hidden border-8 border-white shadow-2xl mb-6 relative z-10">
              <img src="/images/MianNaveed.jpg" alt="Mian Muhammad Naveed Shahzad - CEO" className="w-full h-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Mian Muhammad Naveed Shahzad</h3>
            <p className="text-primary font-medium">Chief Executive Officer, TRI TECH</p>
          </motion.div>

          {/* CEO Text Side */}
          <motion.div
            className="w-full md:w-2/3 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Message from the CEO</h2>

            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                "At TRI TECH (PVT) LIMITED, our journey since 2008 has been driven by a clear vision—to deliver reliable, innovative, and high-quality engineering solutions that contribute to the growth of industry in Pakistan. From our facility in Lahore, we have consistently worked to build trust with our clients through technical excellence, integrity, and commitment."
              </p>
              <p>
                "We believe that engineering is not just about systems and machinery, but about creating solutions that add value, improve efficiency, and ensure long-term sustainability. Our strength lies in our dedicated team of professionals who bring expertise in electrical design, manufacturing of LV switchgear and PLC/DCS control panels, and execution of complex projects with precision."
              </p>
              <p>
                "As we continue to grow, we remain focused on maintaining international standards such as IEC and PSQCA, while adapting to evolving technologies in automation and industrial systems. Our goal is to provide complete solutions—from design and manufacturing to services and supply—under one roof, ensuring convenience and reliability for our valued clients."
              </p>
              <p>
                "We are grateful for the trust our customers have placed in us and remain committed to exceeding expectations through quality, innovation, and continuous improvement."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------------------
         5. OUR JOURNEY (Timeline)
         ---------------------------------------------------------------------------------- */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-0 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Our <span className="text-primary">Journey</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              From humble beginnings to industry leadership – a timeline of our commitment to excellence.
            </p>
          </motion.div>

          <div className="relative">
            {/* Central Vertical Line (Desktop) / Left Line (Mobile) */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-primary md:-ml-0.5 rounded-full opacity-30"></div>

            <div className="space-y-12 md:space-y-24">

              {/* 1996 - Left Side */}
              <motion.div
                className="relative flex flex-col md:flex-row items-center justify-between"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="order-1 md:w-5/12 text-left pl-20 md:pl-0 md:text-right md:pr-10">
                  <span className="text-primary font-bold text-xl block mb-2 tracking-widest">2008</span>
                  <h4 className="text-3xl font-bold mb-4 text-white">Inception</h4>
                  <p className="text-gray-400 leading-relaxed bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-primary/50 transition-colors">
                    TRI TECH (PVT) LIMITED was established in Lahore, Pakistan, setting the foundation for high-quality engineering and manufacturing solutions for the industrial sector.
                  </p>
                </div>

                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 -ml-3 w-6 h-6 bg-gray-900 border-4 border-primary rounded-full z-10 shadow-[0_0_15px_rgba(192,57,43,0.6)]"></div>

                <div className="order-2 md:w-5/12"></div>
              </motion.div>

              {/* 2010 - Right Side */}
              <motion.div
                className="relative flex flex-col md:flex-row items-center justify-between"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="order-1 md:w-5/12 md:order-1"></div>

                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 -ml-3 w-6 h-6 bg-gray-900 border-4 border-primary rounded-full z-10 shadow-[0_0_15px_rgba(40,86,163,0.6)]"></div>

                <div className="order-2 md:w-5/12 text-left pl-20 md:pl-10">
                  <span className="text-primary font-bold text-xl block mb-2 tracking-widest">2010</span>
                  <h4 className="text-3xl font-bold mb-4 text-white">Manufacturing Division</h4>
                  <p className="text-gray-400 leading-relaxed bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-primary/50 transition-colors">
                    Expanded operations to include a dedicated Manufacturing Division. We began local production of high-quality cable trays and industrial parts to meet growing demand.
                  </p>
                </div>
              </motion.div>

              {/* Present - Left Side */}
              <motion.div
                className="relative flex flex-col md:flex-row items-center justify-between"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="order-1 md:w-5/12 text-left pl-20 md:pl-0 md:text-right md:pr-10">
                  <span className="text-white font-bold text-xl block mb-2 tracking-widest">TODAY</span>
                  <h4 className="text-3xl font-bold mb-4 text-white">Industry Leaders</h4>
                  <p className="text-gray-400 leading-relaxed bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-white/50 transition-colors">
                    Serving hundreds of clients globally with a robust portfolio of certifications and partnerships. TRI TECH is now a synonymous name for trust and quality in the region.
                  </p>
                </div>

                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 -ml-3 w-6 h-6 bg-gray-900 border-4 border-white rounded-full z-10 shadow-[0_0_15px_rgba(255,255,255,0.4)]"></div>

                <div className="order-2 md:w-5/12"></div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------------------
         6. CORE VALUES
         ---------------------------------------------------------------------------------- */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-0">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-bold tracking-wider uppercase">Our Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Our Core <span className="text-primary">Values</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Integrity",
              desc: "We conduct business with the highest ethical standards, ensuring transparency in all our dealings.",
              icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
              color: "blue"
            },
            {
              title: "Innovation",
              desc: "We constantly seek new technologies to provide smarter, more efficient solutions.",
              icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
              color: "orange"
            },
            {
              title: "Customer Focus",
              desc: "Our clients are at the heart of everything we do. Your success is our success.",
              icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
              color: "blue"
            }
          ].map((value, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color === 'orange' ? 'from-primary/10 to-primary/10' : 'from-blue-50 to-indigo-50'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${value.color === 'orange' ? 'bg-primary/20 text-primary' : 'bg-blue-100 text-primary'} flex items-center justify-center mb-6 text-xl shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {value.desc}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${value.color === 'orange' ? 'bg-primary/5' : 'bg-primary/5'} rounded-bl-[4rem] group-hover:scale-150 transition-transform duration-500`}></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      {/* Call to Action */}
      <section className="py-24 px-6 md:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900 to-gray-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.h2
                className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow">Transform</span> Your Industry?
              </motion.h2>

              <motion.p
                className="text-xl text-blue-100 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Join hundreds of satisfied clients who have elevated their manufacturing standards with our cutting-edge automation solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <Link href="/contact" className="group relative px-10 py-5 bg-primary rounded-full font-bold text-white text-lg overflow-hidden shadow-lg hover:shadow-primary/50 transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Us Today
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>

                <Link href="/products" className="px-10 py-5 bg-transparent border-2 border-white/20 rounded-full font-bold text-white text-lg hover:bg-white/10 transition-colors">
                  Explore Products
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
