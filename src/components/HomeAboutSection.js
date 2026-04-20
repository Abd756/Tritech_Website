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
          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-6 tracking-tight">
            About <span className="text-primary">Interlink Enterprises</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
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
              <strong className="text-gray-900">INTERLINK ENTERPRISES</strong> was established in 1996 with a single powerful belief: that professionally implemented Automation and Control solutions, backed by comprehensive after-sale services, can transform the process industry.
            </p>
            <p>
              We have built long-term relationships with world-famous manufacturers to provide high-quality, <span className="font-semibold text-primary">100% original products</span> at competitive prices. From Asia to Europe and the US, we source advanced industrial products for our customers across Pakistan.
            </p>
            <p>
              With over <span className="font-bold text-gray-900">24 years of experience</span>, we are pioneers in manufacturing Orifice Assemblies and supplying Automation, Control, and Instrumentation to major sectors including Oil & Gas, Power Plants, Cement, and Textiles.
            </p>

            {/* Highlights/Stats roughly based on text */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500 hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className="block text-2xl font-bold text-gray-800">1996</span>
                <span className="text-sm text-gray-500">Established</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500 hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className="block text-2xl font-bold text-gray-800">2010</span>
                <span className="text-sm text-gray-500">Manufacturing Expansion</span>
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
                src="/images/3D-logo.png"
                alt="About Interlink Enterprises"
                className="w-full h-auto max-h-80 object-contain"
              />
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 space-y-4">
              <p className="text-gray-600 leading-relaxed">
                In 2010, we expanded significantly as a leading manufacturer of cable trays and industrial parts. Our quality products are approved by major Engineering Organizations & Project Consultants, fueling growth across large and intermediate industries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we serve a variety of clients—from FMCG to Power Production Projects. <strong>INTERLINK ENTERPRISES</strong> stands at the forefront, ready to provide quality products, innovative solutions, and exceptional services.
              </p>
              <div className="pt-4">
                <Link href="/about" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-primary md:text-lg transition shadow-md hover:shadow-xl">
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
