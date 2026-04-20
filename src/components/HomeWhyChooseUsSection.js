import { motion } from 'framer-motion';
import { ExperienceIcon, TeamIcon, TechIcon, SupportIcon } from './WhyChooseUsIcons';

const features = [
  {
    icon: <ExperienceIcon />,
    title: '30+ Years Experience',
    desc: 'Decades of expertise in industrial automation solutions.'
  },
  {
    icon: <TeamIcon />,
    title: 'Certified Engineers',
    desc: 'Skilled, certified professionals for every project.'
  },
  {
    icon: <TechIcon />,
    title: 'Cutting-Edge Technology',
    desc: 'We use the latest technology for maximum efficiency.'
  },
  {
    icon: <SupportIcon />,
    title: '24/7 Support',
    desc: 'Reliable support whenever you need it.'
  }
];

export default function HomeWhyChooseUsSection() {
  return (
    <section className="relative w-full py-24 px-4 md:px-0 bg-gradient-to-br from-[#2856a3] to-[#1e4483] overflow-hidden">

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 p-12 opacity-10">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" />
          <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="2" />
          <path d="M50 10 L50 90 M10 50 L90 50" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col items-center z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
            Why Choose <span className="text-orange-400">Us</span>
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Empowering industries with reliability, innovation, and expertise.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl p-8 flex flex-col items-start hover:bg-orange-50 transition-colors duration-300 shadow-2xl group cursor-default h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-6 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 text-2xl shadow-inner group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <span className="w-8 h-8 flex items-center justify-center child-svg-full">
                  {feature.icon}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700">
                {feature.desc}
              </p>

              <div className="w-full h-1 bg-gray-100 mt-auto rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .child-svg-full svg {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </section>
  );
}
