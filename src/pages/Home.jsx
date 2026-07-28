import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, CheckCircle, Beaker, Award, Globe, Microscope } from 'lucide-react';
import { products, industries, whyChooseUs, stats } from '../data/products';
import ProductCard from '../components/ProductCard';
import MoleculeBg from '../components/MoleculeBg';
import TiltCard from '../components/TiltCard';

function Counter({ target, suffix, inView }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!inView || !ref.current) { return; }
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      if (ref.current) { ref.current.textContent = Math.floor(start) + suffix; }
    }, step);
    return () => { clearInterval(timer); };
  }, [inView, target, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

function AnimatedStat({ value, label, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : '';
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}>
      <TiltCard className="rounded-xl px-4 py-3" intensity={8}>
        <div className="text-4xl font-extrabold">
          <Counter target={target} suffix={suffix} inView={inView} />
        </div>
        <div className="text-sm text-blue-200 mt-1">{label}</div>
      </TiltCard>
    </motion.div>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const processSteps = [
  { icon: <Beaker size={22} />, title: 'Raw Material Sourcing', desc: 'Certified high-purity raw materials from verified global suppliers' },
  { icon: <Microscope size={22} />, title: 'Synthesis & Reaction', desc: 'Controlled multi-step synthesis under GMP conditions' },
  { icon: <CheckCircle size={22} />, title: 'Quality Control', desc: 'HPLC, GC, NMR analysis for every batch' },
  { icon: <Award size={22} />, title: 'Certification', desc: 'CoA, MSDS documentation with every shipment' },
  { icon: <Globe size={22} />, title: 'Global Dispatch', desc: 'Compliant packaging and worldwide logistics' },
];

// Transparent overlay bg image helper
function SectionBg({ url, opacity = 0.06, className = '' }) {
  return (
    <div
      className={`absolute inset-0 bg-cover bg-center pointer-events-none ${className}`}
      style={{
        backgroundImage: `url(${url})`,
        opacity,
        backgroundBlendMode: 'luminosity',
      }}
    />
  );
}

export default function Home() {
  return (
    <div className="dark:bg-[#020d1f]">

      {/* Hero */}
      <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden">
        <MoleculeBg />
        {/* Lab glassware hero bg */}
        <SectionBg url="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=80&auto=format&fit=crop" opacity={0.45} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001a3d]/70 via-[#001a3d]/40 to-[#020d1f]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs text-[#00C8FF] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C8FF] animate-pulse" />
              GMP Certified Pharmaceutical Intermediates
            </motion.div>
            <motion.h1 {...fadeUp(0.2)} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              MAX FINE <span className="gradient-text">CHEM</span>
            </motion.h1>
            <motion.p {...fadeUp(0.3)} className="mt-3 text-lg text-blue-200 font-light tracking-wide">
              Quality • Innovation • Reliability
            </motion.p>
            <motion.p {...fadeUp(0.4)} className="mt-5 text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
              Leading manufacturer of high-purity pharmaceutical intermediates — CDI, DMDOCL, CBB & DMDO — trusted by API manufacturers worldwide.
            </motion.p>
            <motion.div {...fadeUp(0.5)} className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="flex items-center gap-2 px-6 py-3 bg-[#0057B8] hover:bg-[#0099FF] text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-900/40">
                Explore Products <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="hidden flex items-center gap-2 px-6 py-3 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all border border-white/20">
                Request Quote
              </Link>

            </motion.div>
            <motion.div {...fadeUp(0.6)} className="mt-10 flex flex-wrap gap-3">
              {['CDI', 'DMDOCL', 'CBB', 'DMDO'].map(p => (
                <span key={p} className="px-3 py-1 glass text-xs text-[#00C8FF] rounded-full border border-[#00C8FF]/20">{p}</span>
              ))}
            </motion.div>
            </div>
            <motion.div {...fadeUp(0.3)} className="hidden lg:flex items-center justify-center">
              <img src="/src/assets/log.jpeg" alt="Max Fine Chem" className="w-72 h-72 object-contain rounded-3xl shadow-2xl shadow-blue-900/40 border border-white/10" />
            </motion.div>
          </div>
        </div>
        <a href="#stats" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ChevronDown size={24} />
        </a>
      </section>

      {/* Stats */}
      <section id="stats" className="relative bg-[#0057B8]/80 py-12 overflow-hidden">
        <SectionBg url="https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=1600&q=80&auto=format&fit=crop" opacity={0.9} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map((s, i) => (
              <AnimatedStat key={i} value={s.value} label={s.label} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative py-20 bg-transparent overflow-hidden">
        <SectionBg url="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1600&q=80&auto=format&fit=crop" opacity={0.9} />
        <div className="absolute inset-0 bg-white/30 dark:bg-[#020d1f]/40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-xs font-semibold text-[#0099FF] uppercase tracking-widest">About Us</span>
              <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">Precision Chemistry for <span className="gradient-text">Global Pharma</span></h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                Max Fine Chem is a Hyderabad-based manufacturer specializing in pharmaceutical intermediates. With over a decade of expertise, we supply critical building blocks to API manufacturers across India and globally.
              </p>
              <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                Our state-of-the-art facility operates under strict GMP guidelines, ensuring every batch meets the highest purity standards required by the pharmaceutical industry.
              </p>
              <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-[#0057B8] dark:text-[#00C8FF] font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4">
              {[
                { label: 'GMP Certified', sub: 'Manufacturing facility' },
                { label: 'ISO Standards', sub: 'Quality management' },
                { label: '≥98% Purity', sub: 'Consistent quality' },
                { label: 'Global Export', sub: 'Worldwide delivery' },
              ].map((item, i) => (
                <TiltCard key={i} className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 border border-blue-100 dark:border-blue-800/30">
                  <div className="font-bold text-[#0057B8] dark:text-[#00C8FF]">{item.label}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.sub}</div>
                </TiltCard>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="relative py-20 bg-transparent overflow-hidden">
        <SectionBg url="https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=1600&q=80&auto=format&fit=crop" opacity={0.9} />
        <div className="absolute inset-0 bg-[#F7FAFD]/30 dark:bg-[#030f24]/40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#0099FF] uppercase tracking-widest">Our Products</span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">Flagship <span className="gradient-text">Pharmaceutical Intermediates</span></h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">High-purity intermediates for cardiovascular, antifungal, and anticoagulant API synthesis</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0057B8] text-[#0057B8] dark:text-[#00C8FF] dark:border-[#00C8FF] font-semibold rounded-xl hover:bg-[#0057B8] hover:text-white dark:hover:bg-[#00C8FF] dark:hover:text-[#020d1f] transition-all">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative py-20 bg-transparent overflow-hidden">
        <SectionBg url="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80&auto=format&fit=crop" opacity={0.9} />
        <div className="absolute inset-0 bg-white/25 dark:bg-[#020d1f]/40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#0099FF] uppercase tracking-widest">Industries Served</span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">Powering <span className="gradient-text">Global Healthcare</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="h-full">
                <TiltCard className="h-full text-center p-5 rounded-2xl bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-[#0a1628] border border-blue-100 dark:border-blue-900/30">
                  <div className="text-3xl mb-2">{ind.icon}</div>
                  <div className="font-semibold text-sm text-gray-800 dark:text-white">{ind.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{ind.desc}</div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 bg-transparent overflow-hidden">
        <SectionBg url="https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=1600&q=80&auto=format&fit=crop" opacity={0.9} />
        <div className="absolute inset-0 bg-[#F7FAFD]/25 dark:bg-[#030f24]/40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#0099FF] uppercase tracking-widest">Why Choose Us</span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">The <span className="gradient-text">Max Fine Chem</span> Advantage</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <TiltCard className="flex gap-4 p-6 bg-white dark:bg-[#0a1628] rounded-2xl border border-gray-100 dark:border-blue-900/30 shadow-sm">
                  <div className="text-2xl shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="relative py-20 bg-transparent overflow-hidden">
        <SectionBg url="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1600&q=80&auto=format&fit=crop" opacity={0.9} />
        <div className="absolute inset-0 bg-white/25 dark:bg-[#020d1f]/40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#0099FF] uppercase tracking-widest">Our Process</span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">Manufacturing <span className="gradient-text">Excellence</span></h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0057B8] to-[#00C8FF] mx-16" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                  className="relative text-center">
                  <TiltCard className="rounded-2xl p-4" intensity={8}>
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#0057B8] to-[#00C8FF] flex items-center justify-center text-white shadow-lg shadow-blue-500/20 relative z-10">
                    {step.icon}
                  </div>
                  <div className="mt-3 font-semibold text-sm text-gray-900 dark:text-white">{step.title}</div>
                  <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{step.desc}</div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 hero-gradient overflow-hidden">
        <MoleculeBg />
        {/* Research lab CTA bg */}
        <SectionBg url="https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=1600&q=80&auto=format&fit=crop" opacity={0.35} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a3d]/70 to-[#0057B8]/50 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl font-bold text-white">Ready to Partner with <span className="gradient-text">Max Fine Chem?</span></motion.h2>
          <p className="mt-4 text-blue-200">Get competitive pricing, CoA, MSDS and technical support for all our pharmaceutical intermediates.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact#quote-form" className="px-8 py-3 bg-white text-[#0057B8] font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg">
              Request a Quote
            </Link>
            <a href="mailto:maxfinechem@gmail.com" className="px-8 py-3 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all border border-white/20">
              Email Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
