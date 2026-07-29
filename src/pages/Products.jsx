import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, FlaskConical } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import prodBg from '../assets/prod.png';

const categories = ['All', ...new Set(products.map(p => p.category))];

export default function Products() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');

  const filtered = products.filter(p => {
    const matchCat = cat === 'All' || p.category === cat;
    const q = query.toLowerCase();
    const matchQ = !q || p.name.toLowerCase().includes(q) || p.shortName.toLowerCase().includes(q) || p.cas.includes(q) || p.endUse.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  return (
    <div className="min-h-screen bg-[#F7FAFD] dark:bg-[#020d1f] pt-20">
      {/* Header */}
      <div className="relative flex items-center min-h-[80vh] overflow-hidden bg-[#001a3d]">
        <img src={prodBg} alt="" className="absolute inset-0 w-full h-full object-cover object-right sm:object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a3d]/90 via-[#001a3d]/60 to-[#001a3d]/80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-semibold text-[#00C8FF] uppercase tracking-widest">Our Portfolio</span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Pharmaceutical <span className="gradient-text">Intermediates & Fine Chemicals</span></h1>
            <p className="mt-3 text-blue-200 max-w-xl text-sm sm:text-base">High-purity intermediates for API synthesis — with full documentation, CoA, and MSDS</p>
            <a href="/brochure" target="_blank" rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-[#0057B8] hover:bg-[#0099FF] text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-blue-900/30">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
              Download Brochure
            </a>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input value={query} onChange={e => setQuery(e.target.value)}
              placeholder="Search by name, CAS number, or application..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-blue-900/30 bg-white dark:bg-[#0a1628] text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0057B8]" />
          </div>
          <div className="flex items-center gap-2">
            <Filter size={15} className="text-gray-400" />
            <div className="flex gap-2 flex-wrap">
              {categories.map(c => (
                <button key={c} onClick={() => setCat(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${cat === c ? 'bg-[#0057B8] text-white' : 'bg-white dark:bg-[#0a1628] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-blue-900/30 hover:border-[#0057B8]'}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <Search size={40} className="mx-auto mb-3 opacity-30" />
            <p>No products found for "{query}"</p>
          </div>
        )}


      </div>
    </div>
  );
}
