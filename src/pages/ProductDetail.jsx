import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Package, FlaskConical, CheckCircle } from 'lucide-react';
import { products } from '../data/products';
import TiltCard from '../components/TiltCard';
import prodBg from '../assets/prod.png';

const WA_NUMBER = '918885716667';

function openWhatsApp(product) {
  const msg = `Hi Max Fine Chem,\n\nI'm interested in the following product:\n\n*Product:* ${product.name} (${product.shortName})\n*CAS No:* ${product.cas}\n*Formula:* ${product.formula}\n*End Use:* ${product.endUse}\n\nPlease share pricing, availability, and CoA details.\n\nThank you.`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const [activeImg, setActiveImg] = useState(0);

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center dark:bg-[#020d1f]">
      <div className="text-center">
        <p className="text-gray-500 dark:text-gray-400">Product not found.</p>
        <Link to="/products" className="mt-4 inline-block text-[#0057B8] dark:text-[#00C8FF]">← Back to Products</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F7FAFD] dark:bg-[#020d1f] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-[#0057B8] dark:hover:text-[#00C8FF] mb-8 transition-colors">
          <ArrowLeft size={15} /> Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Visual */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            {/* Main image */}
            <div className="rounded-3xl overflow-hidden relative h-64 sm:h-80 lg:h-96 bg-white dark:bg-[#0a1628]">
              <img
                src={product.images?.[activeImg] ?? product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-contain p-4"
                onError={e => { e.target.src = prodBg; }}
              />
            </div>
            {/* Thumbnails */}
            {product.images?.length > 1 && (
              <div className="mt-3 flex gap-2 flex-wrap">
                {product.images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImg(i)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all bg-white dark:bg-[#0a1628] ${
                      activeImg === i ? 'border-[#0057B8] dark:border-[#00C8FF] shadow-md' : 'border-gray-200 dark:border-blue-900/30 opacity-60 hover:opacity-100'
                    }`}>
                    <img src={img} alt={`${product.shortName} ${i + 1}`} className="w-full h-full object-contain p-1" />
                  </button>
                ))}
              </div>
            )}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a href="https://wa.me/918885716667?text=Hi%20Max%20Fine%20Chem%2C%20I%20would%20like%20to%20request%20the%20CoA%20for%20${encodeURIComponent(product.shortName)}.%20CAS%3A%20${encodeURIComponent(product.cas)}" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-[#0057B8] text-[#0057B8] dark:text-[#00C8FF] dark:border-[#00C8FF] text-sm font-semibold hover:bg-[#0057B8] hover:text-white dark:hover:bg-[#00C8FF] dark:hover:text-[#020d1f] transition-all">
                Request CoA
              </a>
              <a href="https://wa.me/918885716667?text=Hi%20Max%20Fine%20Chem%2C%20I%20would%20like%20to%20request%20the%20MSDS%20for%20${encodeURIComponent(product.shortName)}.%20CAS%3A%20${encodeURIComponent(product.cas)}" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 text-sm font-semibold hover:border-[#0057B8] hover:text-[#0057B8] transition-all">
                Request MSDS
              </a>
            </div>
          </motion.div>

          {/* Right: Details */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-semibold text-[#0099FF] bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-full">{product.category}</span>
            <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{product.name}</h1>
            <p className="text-[#0057B8] dark:text-[#00C8FF] font-bold text-lg">{product.shortName}</p>
            <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{product.description}</p>

            {/* Specs */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { label: 'CAS Number', value: product.cas, icon: <FlaskConical size={14} /> },
                { label: 'Molecular Formula', value: product.formula, icon: <FlaskConical size={14} /> },
                { label: 'Molecular Weight', value: product.molecularWeight, icon: <FlaskConical size={14} /> },
                { label: 'Purity', value: product.purity, icon: <CheckCircle size={14} /> },
                { label: 'Appearance', value: product.appearance, icon: <FlaskConical size={14} /> },
                { label: 'End Use', value: product.endUse, icon: <FlaskConical size={14} /> },
              ].map(spec => (
                <TiltCard key={spec.label} className="p-3 rounded-xl bg-white dark:bg-[#0a1628] border border-gray-100 dark:border-blue-900/30" intensity={8}>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">{spec.icon}{spec.label}</div>
                  <div className="font-semibold text-sm text-gray-900 dark:text-white font-mono">{spec.value}</div>
                </TiltCard>
              ))}
            </div>

            {/* Applications */}
            <div className="mt-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2"><CheckCircle size={16} className="text-[#0057B8]" /> Applications</h3>
              <ul className="space-y-2">
                {product.applications.map((app, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0057B8] dark:bg-[#00C8FF] shrink-0" />{app}
                  </li>
                ))}
              </ul>
            </div>

            {/* Packaging */}
            <div className="mt-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2"><Package size={16} className="text-[#0057B8]" /> Packaging Options</h3>
              <div className="flex flex-wrap gap-2">
                {product.packaging.map((pkg, i) => (
                  <span key={i} className="px-3 py-1 text-xs bg-blue-50 dark:bg-blue-900/20 text-[#0057B8] dark:text-[#00C8FF] rounded-full border border-blue-100 dark:border-blue-800/30">{pkg}</span>
                ))}
              </div>
            </div>

            <button onClick={() => openWhatsApp(product)}
              className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-green-500/20">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Inquiry for {product.shortName}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
