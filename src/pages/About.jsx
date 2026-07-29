import { motion } from 'framer-motion';
import { Target, Eye, Award, CheckCircle, Package, Handshake, TrendingUp } from 'lucide-react';
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

      {/* Hero */}
      <div className="relative flex items-center min-h-[80vh] overflow-hidden bg-[#001a3d]">
        <img src={aboutBg} alt="" className="absolute inset-0 w-full h-full object-cover object-right sm:object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a3d]/90 via-[#001a3d]/60 to-[#001a3d]/80" />
        <MoleculeBg />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-semibold text-[#00C8FF] uppercase tracking-widest">Who We Are</span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">About <span className="gradient-text">Max Fine Chem</span></h1>
            <p className="mt-3 text-blue-200 max-w-xl text-sm sm:text-base">Trusted manufacturer, supplier & exporter of fine chemicals and pharmaceutical intermediates since 2022</p>
          </motion.div>
        </div>
      </div>

      {/* Who We Are */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp(0.1)}>
            <span className="text-xs font-semibold text-[#0099FF] uppercase tracking-widest">Our Story</span>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Built on <span className="gradient-text">Chemistry & Trust</span></h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              <strong className="text-gray-900 dark:text-white">MAX FINE CHEM</strong> is a trusted manufacturer, supplier, importer, and exporter of high-quality fine chemicals, pharmaceutical intermediates, and specialty chemicals. Established in <strong className="text-[#0057B8] dark:text-[#00C8FF]">2022</strong> and headquartered in <strong className="text-[#0057B8] dark:text-[#00C8FF]">Hyderabad, Telangana, India</strong>, we are committed to delivering reliable chemical solutions that meet the highest standards of quality, consistency, and customer satisfaction.
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              We specialize in products such as <strong className="text-gray-900 dark:text-white">N,N'-Carbonyldiimidazole (CDI)</strong>, <strong className="text-gray-900 dark:text-white">DMDOCL</strong>, <strong className="text-gray-900 dark:text-white">CBB</strong>, and <strong className="text-gray-900 dark:text-white">DMDO</strong>, serving pharmaceutical, chemical, and research industries across India and international markets.
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              At MAX FINE CHEM, we believe in building long-term relationships through competitive pricing, timely delivery, technical support, and ethical business practices. Our experienced team works closely with customers to understand their requirements and provide customized solutions that add value to their business.
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 gap-4">
            {[
              { icon: '🏭', title: 'Est. 2022', desc: 'Headquartered in Hyderabad, Telangana' },
              { icon: '🌍', title: 'Global Reach', desc: 'Exporting to clients across India & international markets' },
              { icon: '📋', title: 'Full Documentation', desc: 'CoA, MSDS, and regulatory support with every shipment' },
              { icon: '🤝', title: 'Customer First', desc: 'Customized solutions and dedicated technical support' },
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
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-[#0099FF] uppercase tracking-widest">Our Purpose</span>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Vision, <span className="gradient-text">Mission & Values</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Eye size={24} />,
                title: 'Our Vision',
                color: 'from-blue-500 to-cyan-500',
                text: 'To become a globally recognized supplier of fine chemicals by delivering innovative, high-quality products and exceptional customer service.',
              },
              {
                icon: <Target size={24} />,
                title: 'Our Mission',
                color: 'from-purple-500 to-blue-500',
                points: [
                  'Supply premium-quality fine chemicals and pharmaceutical intermediates',
                  'Maintain consistent product quality and reliable supply',
                  'Build long-term partnerships through trust and transparency',
                  'Continuously improve products and services to meet evolving industry needs',
                ],
              },
              {
                icon: <Award size={24} />,
                title: 'Quality Policy',
                color: 'from-cyan-500 to-green-500',
                text: 'We are committed to maintaining the highest standards of quality in every batch, with full traceability, documentation, and continuous improvement across all our operations.',
              },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)}>
                <TiltCard className="p-8 rounded-2xl bg-white dark:bg-[#0a1628] border border-gray-100 dark:border-blue-900/30 shadow-sm h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">{item.title}</h3>
                  {item.points ? (
                    <ul className="mt-3 space-y-2">
                      {item.points.map((p, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0057B8] dark:bg-[#00C8FF] shrink-0 mt-1.5" />{p}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</p>
                  )}
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-[#0099FF] uppercase tracking-widest">Our Advantage</span>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Why Choose <span className="gradient-text">MAX FINE CHEM?</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: <CheckCircle size={20} />, title: 'High-Quality Products', desc: 'Consistent specifications and purity standards across every batch' },
            { icon: <TrendingUp size={20} />, title: 'Competitive Pricing', desc: 'Cost-effective solutions without compromising on quality' },
            { icon: <Package size={20} />, title: 'Reliable Deliveries', desc: 'On-time dispatch with compliant packaging for domestic and global shipments' },
            { icon: <Handshake size={20} />, title: 'Customer-Focused', desc: 'Dedicated service team providing technical support and customized supply solutions' },
            { icon: <Award size={20} />, title: 'Quality & Integrity', desc: 'Strong commitment to ethical business practices and transparent operations' },
            { icon: <Target size={20} />, title: 'Flexible Supply', desc: 'From laboratory quantities to bulk industrial supply — we scale with your needs' },
          ].map((item, i) => (
            <motion.div key={i} {...fadeUp(i * 0.08)}>
              <TiltCard className="flex gap-4 p-6 bg-white dark:bg-[#0a1628] rounded-2xl border border-gray-100 dark:border-blue-900/30 shadow-sm h-full">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0057B8] to-[#00C8FF] flex items-center justify-center text-white shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-16 bg-[#F7FAFD] dark:bg-[#030f24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-[#0099FF] uppercase tracking-widest">What We Offer</span>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Our <span className="gradient-text">Product Range</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: '⚗️', name: 'CDI', desc: "N,N'-Carbonyldiimidazole" },
              { icon: '🧪', name: 'DMDOCL', desc: '4-Chloromethyl-5-methyl-1,3-dioxol-2-one' },
              { icon: '🔬', name: 'CBB', desc: 'cis Bromo Benzoate' },
              { icon: '💊', name: 'DMDO', desc: '4,5-Dimethyl-1,3-dioxol-2-one' },
              { icon: '🧬', name: 'Specialty', desc: 'Fine & Specialty Chemicals' },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}>
                <TiltCard className="text-center p-5 rounded-2xl bg-white dark:bg-[#0a1628] border border-blue-100 dark:border-blue-900/30 h-full">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-bold text-sm text-[#0057B8] dark:text-[#00C8FF]">{item.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</div>
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
