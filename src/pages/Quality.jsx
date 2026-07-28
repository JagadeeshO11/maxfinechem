import { motion } from 'framer-motion';
import { CheckCircle, Shield, Award, Microscope } from 'lucide-react';
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

const qcTests = [
  { test: 'HPLC Analysis', purpose: 'Purity determination and impurity profiling' },
  { test: 'GC Analysis', purpose: 'Residual solvents and volatile impurities' },
  { test: 'NMR Spectroscopy', purpose: 'Structural confirmation and identity testing' },
  { test: 'IR Spectroscopy', purpose: 'Functional group identification' },
  { test: 'Melting Point', purpose: 'Physical characterization' },
  { test: 'Water Content (KF)', purpose: 'Moisture determination' },
  { test: 'Heavy Metals', purpose: 'Elemental impurity testing' },
  { test: 'Microbial Testing', purpose: 'Bioburden and sterility assurance' },
];

export default function Quality() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#020d1f] pt-20">
      <div
        className="relative flex items-center min-h-[80vh] overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a3d]/85 via-[#0057B8]/60 to-[#001a3d]/70" />
        <MoleculeBg />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-semibold text-[#00C8FF] uppercase tracking-widest">Standards & Compliance</span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Quality <span className="gradient-text">Assurance</span></h1>
            <p className="mt-3 text-blue-200 max-w-xl text-sm sm:text-base">Every batch tested, every shipment certified — our commitment to quality is absolute</p>
          </motion.div>
        </div>
      </div>

      {/* Certifications */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-[#0099FF] uppercase tracking-widest">Certifications</span>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Our <span className="gradient-text">Credentials</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Award size={28} />, title: 'GMP Certified', desc: 'Good Manufacturing Practice compliance for pharmaceutical-grade production', color: 'from-blue-500 to-cyan-500' },
            { icon: <Shield size={28} />, title: 'ISO 9001:2015', desc: 'International quality management system certification', color: 'from-purple-500 to-blue-500' },
            { icon: <CheckCircle size={28} />, title: 'CoA Provided', desc: 'Certificate of Analysis with every batch shipment', color: 'from-green-500 to-cyan-500' },
            { icon: <Microscope size={28} />, title: 'MSDS Available', desc: 'Material Safety Data Sheets for all products', color: 'from-orange-500 to-red-500' },
          ].map((cert, i) => (
            <motion.div key={i} {...fadeUp(i * 0.1)}>
              <TiltCard className="p-6 rounded-2xl bg-white dark:bg-[#0a1628] border border-gray-100 dark:border-blue-900/30 shadow-sm text-center h-full">
                <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white mb-4`}>
                  {cert.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{cert.title}</h3>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{cert.desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Documents */}
      <section className="pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={isoPdf} target="_blank" rel="noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-[#0a1628] border border-gray-100 dark:border-blue-900/30 shadow-sm hover:border-[#0057B8] transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-purple-600 dark:fill-purple-400"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900 dark:text-white">ISO 9001:2015</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">View Certificate</div>
            </div>
          </a>
          <a href={gstPdf} target="_blank" rel="noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-[#0a1628] border border-gray-100 dark:border-blue-900/30 shadow-sm hover:border-[#0057B8] transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-600 dark:fill-green-400"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900 dark:text-white">GST Certificate</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">View Certificate</div>
            </div>
          </a>
        </div>
      </section>

      {/* QC Tests */}
      <section className="py-16 bg-[#F7FAFD] dark:bg-[#030f24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#0099FF] uppercase tracking-widest">Testing</span>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Quality Control <span className="gradient-text">Testing Suite</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {qcTests.map((t, i) => (
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
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-[#0099FF] uppercase tracking-widest">Process</span>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Quality <span className="gradient-text">Workflow</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { step: '01', title: 'Raw Material Testing', desc: 'All incoming raw materials are tested for identity, purity, and compliance before use in production.' },
            { step: '02', title: 'In-Process Controls', desc: 'Continuous monitoring of reaction parameters, yield, and intermediate quality throughout synthesis.' },
            { step: '03', title: 'Finished Product Testing', desc: 'Comprehensive analysis of final product against specifications using HPLC, GC, NMR, and other methods.' },
            { step: '04', title: 'Batch Release', desc: 'QA review and approval of all batch records before product release, with full traceability.' },
          ].map((item, i) => (
            <motion.div key={i} {...fadeUp(i * 0.1)}>
              <TiltCard className="flex gap-5 p-6 rounded-2xl bg-white dark:bg-[#0a1628] border border-gray-100 dark:border-blue-900/30" intensity={8}>
                <div className="text-3xl font-extrabold text-[#0057B8]/20 dark:text-[#00C8FF]/20 shrink-0 leading-none">{item.step}</div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
