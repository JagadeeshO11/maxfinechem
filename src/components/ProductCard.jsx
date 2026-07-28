import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}>
      <TiltCard className="bg-white dark:bg-[#0a1628] rounded-2xl overflow-hidden border border-gray-100 dark:border-blue-900/30 cursor-pointer">
        <div className="h-48 relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
            onError={e => { e.target.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001a3d]/90 via-[#001a3d]/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-28 h-28 drop-shadow-lg" dangerouslySetInnerHTML={{ __html: product.svg }} />
          </div>
          <span className="absolute top-3 left-3 text-xs font-medium text-white bg-[#0057B8]/80 backdrop-blur-sm px-2 py-0.5 rounded-full">
            {product.shortName}
          </span>
        </div>
        <div className="p-5 relative z-20">
          <span className="text-xs font-medium text-[#0099FF] bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-full">{product.category}</span>
          <h3 className="mt-2 font-bold text-gray-900 dark:text-white text-sm leading-snug">{product.name}</h3>
          <p className="text-xs text-[#0057B8] dark:text-[#00C8FF] font-semibold mt-0.5">{product.shortName}</p>
          <div className="mt-3 space-y-1 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex justify-between"><span>CAS No.</span><span className="font-mono text-gray-700 dark:text-gray-300">{product.cas}</span></div>
            <div className="flex justify-between"><span>Formula</span><span className="font-mono text-gray-700 dark:text-gray-300">{product.formula}</span></div>
            <div className="flex justify-between"><span>Purity</span><span className="text-green-600 dark:text-green-400 font-medium">{product.purity}</span></div>
          </div>
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{product.description}</p>
          <Link to={`/products/${product.id}`}
            className="mt-4 flex items-center justify-between w-full px-4 py-2 bg-[#0057B8] hover:bg-[#0099FF] text-white text-xs font-medium rounded-lg transition-colors">
            View Details <ArrowRight size={13} />
          </Link>
        </div>
      </TiltCard>
    </motion.div>
  );
}
