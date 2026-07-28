import { motion } from 'framer-motion';
import { Target, Eye, Award } from 'lucide-react';
import MoleculeBg from '../components/MoleculeBg';
import TiltCard from '../components/TiltCard';
import aboutBg from '../assets/about.png';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#020d1f] pt-20">
      <div
        className="relative flex items-center min-h-[80vh] overflow-hidden"
        style={{ backgroundImage: `url(${aboutBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a3d]/85 via-[#0057B8]/60 to-[#001a3d]/70" />
        <MoleculeBg />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-semibold text-[#00C8FF] uppercase tracking-widest">Who We Are</span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">About <span className="gradient-text">Max Fine Chem</span></h1>
            <p className="mt-3 text-blue-200 max-w-xl text-sm sm:text-base">A decade of excellence in pharmaceutical intermediate manufacturing</p>
          </motion.div>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp(0.1)}>
            <span className="text-xs font-semibold text-[#0099FF] uppercase tracking-widest">Our Story</span>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Built on <span className="gradient-text">Chemistry & Trust</span></h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              Founded in Hyderabad, Max Fine Chem began with a singular vision: to provide pharmaceutical manufacturers with the highest quality intermediates at competitive prices. Over the years, we have grown into a trusted partner for API manufacturers across India and internationally.
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              Our expertise spans the synthesis of complex pharmaceutical intermediates including CDI, DMDOCL, CBB, and DMDO — compounds that are critical building blocks for life-saving medications including anticoagulants, antihypertensives, and antifungals.
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              Every product we manufacture undergoes rigorous quality control testing, and we provide complete documentation including Certificate of Analysis (CoA) and Material Safety Data Sheets (MSDS) with every shipment.
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 gap-4">
            {[
              { icon: '🏭', title: 'Modern Facility', desc: 'State-of-the-art manufacturing plant in Hyderabad' },
              { icon: '🔬', title: 'In-house R&D', desc: 'Dedicated research team for process optimization' },
              { icon: '📋', title: 'Full Documentation', desc: 'CoA, MSDS, and regulatory support' },
              { icon: '🌍', title: 'Global Reach', desc: 'Exporting to clients across Asia, Europe & Americas' },
            ].map((item, i) => (
              <TiltCard key={i} className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 border border-blue-100 dark:border-blue-800/30">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-bold text-sm text-gray-900 dark:text-white">{item.title}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</div>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-[#F7FAFD] dark:bg-[#030f24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Eye size={24} />, title: 'Our Vision', color: 'from-blue-500 to-cyan-500', text: 'To be the most trusted global supplier of pharmaceutical intermediates, recognized for uncompromising quality, innovation, and reliability.' },
              { icon: <Target size={24} />, title: 'Our Mission', color: 'from-purple-500 to-blue-500', text: 'To manufacture and supply high-purity pharmaceutical intermediates that enable our customers to produce life-saving medications efficiently and cost-effectively.' },
              { icon: <Award size={24} />, title: 'Quality Policy', color: 'from-cyan-500 to-green-500', text: 'We are committed to maintaining the highest standards of quality in every batch, with full traceability, documentation, and continuous improvement.' },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)}>
                <TiltCard className="p-8 rounded-2xl bg-white dark:bg-[#0a1628] border border-gray-100 dark:border-blue-900/30 shadow-sm h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">{item.title}</h3>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Facility */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-[#0099FF] uppercase tracking-widest">Infrastructure</span>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Manufacturing <span className="gradient-text">Facility</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Reactor Capacity', value: '5000 L+', icon: '⚗️' },
            { label: 'Annual Production', value: '100+ MT', icon: '🏭' },
            { label: 'QC Instruments', value: 'HPLC, GC, NMR', icon: '🔬' },
            { label: 'Storage', value: 'Climate Controlled', icon: '🌡️' },
          ].map((item, i) => (
            <motion.div key={i} {...fadeUp(i * 0.1)}>
              <TiltCard className="text-center p-6 rounded-2xl bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-[#0a1628] border border-blue-100 dark:border-blue-900/30">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold text-[#0057B8] dark:text-[#00C8FF] text-lg">{item.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.label}</div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
