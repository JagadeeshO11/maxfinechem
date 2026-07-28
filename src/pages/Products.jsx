import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

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
      <div className="hero-gradient py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-semibold text-[#00C8FF] uppercase tracking-widest">Our Portfolio</span>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Pharmaceutical <span className="gradient-text">Intermediates</span></h1>
            <p className="mt-3 text-blue-200 max-w-xl text-sm">High-purity intermediates for API synthesis — with full documentation, CoA, and MSDS</p>
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

        {/* Table View */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Product Specifications Overview</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 dark:border-blue-900/30">
            <table className="w-full text-sm">
              <thead className="bg-[#0057B8] text-white">
                <tr>
                  {['Product', 'Short Name', 'CAS No.', 'Formula', 'MW', 'Purity', 'End Use'].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-semibold text-xs">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {products.map((p, i) => (
                  <tr key={p.id} className={`border-t border-gray-100 dark:border-blue-900/20 ${i % 2 === 0 ? 'bg-white dark:bg-[#0a1628]' : 'bg-blue-50/30 dark:bg-[#0d1e3a]'}`}>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{p.name}</td>
                    <td className="px-4 py-3 text-[#0057B8] dark:text-[#00C8FF] font-semibold">{p.shortName}</td>
                    <td className="px-4 py-3 font-mono text-gray-600 dark:text-gray-400">{p.cas}</td>
                    <td className="px-4 py-3 font-mono text-gray-600 dark:text-gray-400">{p.formula}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{p.molecularWeight}</td>
                    <td className="px-4 py-3 text-green-600 dark:text-green-400 font-medium">{p.purity}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{p.endUse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
