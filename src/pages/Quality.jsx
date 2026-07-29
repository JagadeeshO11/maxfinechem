import { motion } from 'framer-motion';
import { CheckCircle, Shield, Award, Microscope, ShieldCheck, FileCheck, Beaker, TrendingUp, Users } from 'lucide-react';
import MoleculeBg from '../components/MoleculeBg';
import TiltCard from '../components/TiltCard';
import heroBg from '../assets/hero.png';
import isoPdf from '../assets/ISO-MAX FINE CHEM.pdf';
import gstPdf from '../assets/MAX NEW CERTIFICATE_GST.pdf';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export default function Quality() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#020d1f] pt-20">

      {/* Hero */}
      <div className="relative flex items-center min-h-[80vh] overflow-hidden bg-[#001a3d]">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover object-right sm:object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a3d]/90 via-[#001a3d]/60 to-[#001a3d]/80" />
        <MoleculeBg />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-semibold text-[#00C8FF] uppercase tracking-widest">Standards & Compliance</span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Quality <span className="gradient-text">Assurance</span></h1>
            <p className="mt-3 text-blue-200 max-w-xl text-sm sm:text-base">Every batch tested, every shipment certified — our commitment to quality is absolute</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Intro */}
        <motion.div {...fadeUp(0.1)} className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold text-[#0099FF] uppercase tracking-widest">Our Philosophy</span>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Quality is the <span className="gradient-text">Foundation</span></h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            At <strong className="text-gray-900 dark:text-white">MAX FINE CHEM</strong>, quality is not a checkpoint — it's embedded in every process. From sourcing raw materials to final dispatch, every batch undergoes rigorous evaluation to ensure consistency, purity, and full compliance with customer specifications and industry standards.
          </p>
          <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
            Our quality assurance process covers every stage of the supply chain — from raw material sourcing to final product dispatch — so you can rely on us for consistent, dependable results every time.
          </p>
        </motion.div>

        {/* Quality Commitment */}
        <section>
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-[#0099FF] uppercase tracking-widest">Our Commitment</span>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Quality <span className="gradient-text">at Every Stage</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <ShieldCheck size={20} />, title: 'Strict QC at Every Stage', desc: 'Quality control applied at every step of procurement and supply — no exceptions.' },
              { icon: <Beaker size={20} />, title: 'Reliable Raw Material Sourcing', desc: 'High-quality raw materials sourced from verified and approved suppliers only.' },
              { icon: <FileCheck size={20} />, title: 'Batch-wise Documentation', desc: 'Every batch is individually inspected and documented for full traceability.' },
              { icon: <Award size={20} />, title: 'Certificate of Analysis (CoA)', desc: 'CoA provided with every shipment, confirming product specifications are met.' },
              { icon: <CheckCircle size={20} />, title: 'Compliant Packaging', desc: 'Proper packaging standards maintained to preserve product integrity during storage and transit.' },
              { icon: <TrendingUp size={20} />, title: 'Continuous Improvement', desc: 'We continuously review and improve our quality systems to meet evolving industry needs.' },
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

        {/* QC + Customer Satisfaction */}
        <section className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeUp(0.1)}>
            <TiltCard className="p-8 rounded-2xl bg-white dark:bg-[#0a1628] border border-gray-100 dark:border-blue-900/30 shadow-sm h-full">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0057B8] to-[#00C8FF] flex items-center justify-center text-white mb-4">
                <Microscope size={22} />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">Quality Control</h3>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Our QC procedures include verification of key product parameters — purity, appearance, and specification compliance — before every shipment. We work closely with approved manufacturing partners and accredited testing laboratories to maintain consistent, reliable product quality.
              </p>
              <ul className="mt-4 space-y-2">
                {['HPLC & GC analysis', 'NMR verification', 'Specification compliance checks', 'Third-party lab testing'].map((p, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0057B8] dark:bg-[#00C8FF] shrink-0" />{p}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </motion.div>

          <motion.div {...fadeUp(0.2)}>
            <TiltCard className="p-8 rounded-2xl bg-white dark:bg-[#0a1628] border border-gray-100 dark:border-blue-900/30 shadow-sm h-full">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white mb-4">
                <Users size={22} />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">Customer Satisfaction</h3>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Customer satisfaction is our highest priority. We focus on delivering products that meet quality requirements, providing timely technical support, and ensuring prompt delivery. Feedback from our customers helps us continuously improve our products and services.
              </p>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                At MAX FINE CHEM, we are dedicated to building long-term business relationships through quality, reliability, integrity, and exceptional customer service.
              </p>
            </TiltCard>
          </motion.div>
        </section>

        {/* QC Tests */}
        <section className="py-4">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-[#0099FF] uppercase tracking-widest">Testing</span>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Quality Control <span className="gradient-text">Testing Suite</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { test: 'HPLC Analysis', purpose: 'Purity determination and impurity profiling' },
              { test: 'GC Analysis', purpose: 'Residual solvents and volatile impurities' },
              { test: 'NMR Spectroscopy', purpose: 'Structural confirmation and identity testing' },
              { test: 'IR Spectroscopy', purpose: 'Functional group identification' },
              { test: 'Melting Point', purpose: 'Physical characterization' },
              { test: 'Water Content (KF)', purpose: 'Moisture determination' },
              { test: 'Heavy Metals', purpose: 'Elemental impurity testing' },
              { test: 'Microbial Testing', purpose: 'Bioburden and sterility assurance' },
            ].map((t, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)}>
                <TiltCard className="p-5 rounded-xl bg-white dark:bg-[#0a1628] border border-gray-100 dark:border-blue-900/30 flex gap-3" intensity={8}>
                  <CheckCircle size={16} className="text-[#0057B8] dark:text-[#00C8FF] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm text-gray-900 dark:text-white">{t.test}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{t.purpose}</div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Closing Statement */}
        <motion.div {...fadeUp(0.1)} className="rounded-2xl bg-gradient-to-r from-[#0057B8] to-[#0099FF] p-10 text-center text-white">
          <ShieldCheck size={36} className="mx-auto mb-4 opacity-90" />
          <h3 className="text-xl font-bold">Your Trusted Chemical Partner</h3>
          <p className="mt-3 text-blue-100 max-w-2xl mx-auto text-sm leading-relaxed">
            At <strong>MAX FINE CHEM</strong>, we are dedicated to supporting pharmaceutical and chemical manufacturers with dependable products and professional service. Whether your requirement is for laboratory quantities or bulk industrial supply, we are committed to building long-term business relationships through quality, reliability, integrity, and exceptional customer service.
          </p>
        </motion.div>

        {/* Certifications */}
        <section>
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-[#0099FF] uppercase tracking-widest">Certifications</span>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Our <span className="gradient-text">Credentials</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              { icon: <Award size={28} />, title: 'ISO Certified', desc: 'ISO quality management certification ensuring consistent manufacturing standards', color: 'from-blue-500 to-cyan-500', pdf: isoPdf, label: 'Download ISO Certificate' },
              { icon: <FileCheck size={28} />, title: 'GST Registered', desc: 'Fully GST registered business entity compliant with Indian tax regulations', color: 'from-green-500 to-teal-500', pdf: gstPdf, label: 'Download GST Certificate' },
            ].map((cert, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)}>
                <TiltCard className="p-8 rounded-2xl bg-white dark:bg-[#0a1628] border border-gray-100 dark:border-blue-900/30 shadow-sm text-center h-full flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                    {cert.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">{cert.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{cert.desc}</p>
                  <a href={cert.pdf} download className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0057B8] to-[#00C8FF] text-white text-xs font-semibold rounded-xl hover:opacity-90 transition-all shadow-md">
                    {cert.label}
                  </a>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
