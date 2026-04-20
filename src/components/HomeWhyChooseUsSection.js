import { motion } from 'framer-motion';
import { ExperienceIcon, TeamIcon, TechIcon, SupportIcon } from './WhyChooseUsIcons';

const features = [
  {
    icon: <ExperienceIcon />,
    title: '15+ Years Excellence',
    desc: 'Founded in 2008, TRI TECH (PVT) LTD has built a solid reputation for quality and reliability in electrical engineering.',
    color: 'text-primary'
  },
  {
    icon: <TechIcon />,
    title: 'IEC Standards',
    desc: 'Our switchgear is manufactured according to international IEC 60439 standards for maximum safety and performance.',
    color: 'text-yellow'
  },
  {
    icon: <TeamIcon />,
    title: 'Expert Task Force',
    desc: 'Highly skilled engineering professionals dedicated to safe execution and minimizing industrial downtime.',
    color: 'text-accent'
  },
  {
    icon: <SupportIcon />,
    title: 'Tailored Solutions',
    desc: 'We engineer custom electrical and mechanical solutions specifically designed for your unique industrial requirements.',
    color: 'text-primary'
  }
];

export default function HomeWhyChooseUsSection() {
  return (
    <section className="relative w-full py-24 px-4 md:px-0 bg-[#0f172a] overflow-hidden">
      
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 opacity-30 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col items-center z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Proven Strengths</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
            Why Partner with <span className="text-primary">TRI TECH</span>
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Delivering high-performance electrical and mechanical solutions with a commitment to might and main.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="relative group h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Glass Card */}
              <div className="h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-start transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(192,57,43,0.15)]">
                
                {/* Icon Container */}
                <div className={`w-14 h-14 mb-8 rounded-xl bg-slate-900/50 flex items-center justify-center ${feature.color} border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(192,57,43,0.4)]`}>
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                  {feature.desc}
                </p>

                {/* Bottom Highlight Line */}
                <div className="w-full h-1 bg-white/5 mt-8 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: 0.5 + (idx * 0.2) }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
