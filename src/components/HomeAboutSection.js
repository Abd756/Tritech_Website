import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomeAboutSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 px-6 md:px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">

        {/* Header Content */}
        <motion.div
          className="text-center max-w-4xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight uppercase">
            About <span className="text-accent">TRI TECH (PVT) LIMITED</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left Column: Text Content */}
          <motion.div
            className="flex-1 space-y-6 text-gray-700 leading-relaxed text-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              Established in 2008, <strong className="text-gray-900 uppercase">TRI TECH (PVT) LTD</strong> has emerged as a leading manufacturer and service provider in the field of low voltage (LV) panels and allied mechanical machinery.
            </p>
            <p>
              With a spacious facility covering an area of <span className="font-semibold text-primary">1360 square meters</span>, our company is equipped with state-of-the-art technology and skilled professionals dedicated to delivering high-quality products and services.
            </p>
            <p>
              With over <span className="font-bold text-gray-900 uppercase">15 years of industry excellence</span>, we have built a solid reputation for quality, reliability, and customer satisfaction across major sectors including Oil & Gas, Power, and Textiles.
            </p>

            {/* Highlights/Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className="block text-2xl font-bold text-gray-800">2008</span>
                <span className="text-sm text-gray-500 uppercase font-semibold">Established</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className="block text-2xl font-bold text-gray-800 uppercase">1360 m²</span>
                <span className="text-sm text-gray-500 uppercase font-semibold">Facility Area</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image & Second Half of Text */}
          <motion.div
            className="flex-1 w-full flex flex-col gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-full flex justify-center">
              <img
                src="/Factory_image.jpg"
                alt="TRI TECH (PVT) LTD Factory"
                className="w-full h-auto max-h-80 object-cover rounded-xl shadow-2xl border-2 border-gray-100"
              />
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 space-y-4">
              <p className="text-gray-600 leading-relaxed">
                At TRI TECH, we specialize in the design and manufacturing of low voltage panels that ensure safety, reliability, and efficiency in electrical systems. Our team of experts provides tailored solutions in electrification, instrumentation, and plant services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are committed to delivering exceptional value while contributing to the advancement of electrical engineering. <strong>TRI TECH (PVT) LTD</strong> stands ready to optimize your industrial performance with might and main.
              </p>
              <div className="pt-4">
                <Link href="/about" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-black md:text-lg transition shadow-md hover:shadow-xl">
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
