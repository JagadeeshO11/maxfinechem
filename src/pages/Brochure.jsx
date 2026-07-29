import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import logo from '../assets/log.jpeg';

export default function Brochure() {
  const ref = useRef();
  const navigate = useNavigate();

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pb-10 print:pb-0 print:bg-white">

      {/* Print Button - hidden on print */}
      <div className="max-w-4xl mx-auto px-4 mb-6 flex justify-between print:hidden">
        <button onClick={() => window.close()}
          className="flex items-center gap-2 px-5 py-2.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold rounded-xl transition-all text-sm">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
          Back
        </button>
        <button onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-2.5 bg-[#0057B8] hover:bg-[#0099FF] text-white font-semibold rounded-xl transition-all shadow-lg text-sm">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
          Download / Print Brochure
        </button>
      </div>

      {/* Brochure */}
      <div ref={ref} className="max-w-4xl mx-auto bg-white shadow-2xl print:shadow-none">

        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #001a3d 0%, #0057B8 60%, #0099FF 100%)' }} className="p-10 text-white">
          <div className="flex items-center gap-5">
            <img src={logo} alt="Max Fine Chem" className="w-20 h-20 object-contain rounded-2xl border-2 border-white/30 bg-white/10 p-1" />
            <div>
              <h1 className="text-3xl font-extrabold tracking-wide">MAX FINE CHEM</h1>
              <p className="text-blue-200 text-sm font-medium tracking-widest uppercase mt-0.5">Pharma Intermediates & Fine Chemicals</p>
              <p className="text-blue-300 text-xs mt-1">Manufacturer · Supplier · Importer · Exporter</p>
            </div>
          </div>
          <div className="mt-6 border-t border-white/20 pt-5 grid grid-cols-3 gap-4 text-center text-xs">
            <div><div className="text-2xl font-extrabold text-white">15+</div><div className="text-blue-200 mt-0.5">Years Experience</div></div>
            <div><div className="text-2xl font-extrabold text-white">4+</div><div className="text-blue-200 mt-0.5">Core Products</div></div>
            <div><div className="text-2xl font-extrabold text-white">99%</div><div className="text-blue-200 mt-0.5">Purity Standards</div></div>
          </div>
        </div>

        {/* About Strip */}
        <div className="bg-[#F7FAFD] px-10 py-5 border-b border-gray-200">
          <p className="text-gray-600 text-sm leading-relaxed text-center max-w-2xl mx-auto">
            Established in <strong className="text-[#0057B8]">2022</strong>, headquartered in <strong className="text-[#0057B8]">Hyderabad, Telangana, India</strong> — MAX FINE CHEM is a trusted manufacturer and supplier of high-purity pharmaceutical intermediates and specialty chemicals, serving API manufacturers across India and globally.
          </p>
        </div>

        {/* Products */}
        <div className="px-10 py-8">
          <h2 className="text-lg font-bold text-[#0057B8] uppercase tracking-widest mb-6 border-b-2 border-[#0057B8] pb-2">Our Products</h2>
          <div className="space-y-8">
            {products.map((p, i) => (
              <div key={p.id} className="grid grid-cols-3 gap-6 pb-8 border-b border-gray-100 last:border-0">
                {/* Image */}
                <div className="col-span-1 flex items-center justify-center bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <img src={p.image} alt={p.name} className="w-full h-32 object-contain" />
                </div>
                {/* Info */}
                <div className="col-span-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-xs font-semibold text-white bg-[#0057B8] px-2 py-0.5 rounded-full">{p.shortName}</span>
                      <h3 className="mt-1.5 text-base font-bold text-gray-900">{p.name}</h3>
                    </div>
                    <span className="text-xs text-gray-400 shrink-0">CAS: {p.cas}</span>
                  </div>
                  <p className="mt-2 text-xs text-gray-500 leading-relaxed">{p.description}</p>
                  <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs">
                    {[
                      ['Formula', p.formula],
                      ['Mol. Weight', p.molecularWeight],
                      ['Purity', p.purity],
                      ['Appearance', p.appearance],
                      ['Packaging', p.packaging.join(', ')],
                      ['End Use', p.endUse],
                    ].map(([label, val]) => val && (
                      <div key={label} className="flex gap-1.5">
                        <span className="text-gray-400 shrink-0">{label}:</span>
                        <span className="font-semibold text-gray-700">{val}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3">
                    <span className="text-xs text-gray-400">Applications: </span>
                    <span className="text-xs text-gray-600">{p.applications.join(' · ')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-[#F7FAFD] px-10 py-7 border-t border-gray-200">
          <h2 className="text-lg font-bold text-[#0057B8] uppercase tracking-widest mb-5 border-b-2 border-[#0057B8] pb-2">Why Choose MAX FINE CHEM?</h2>
          <div className="grid grid-cols-3 gap-4 text-xs">
            {[
              ['✅', 'High-quality products with consistent specifications'],
              ['💰', 'Competitive pricing for all order sizes'],
              ['📦', 'Reliable and timely deliveries worldwide'],
              ['🤝', 'Customer-focused service & technical support'],
              ['🔬', 'CoA & MSDS provided with every shipment'],
              ['🌍', 'Lab quantities to bulk industrial supply'],
            ].map(([icon, text], i) => (
              <div key={i} className="flex items-start gap-2 text-gray-600">
                <span>{icon}</span><span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ background: 'linear-gradient(135deg, #001a3d 0%, #0057B8 100%)' }} className="px-10 py-6 text-white">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-4">Contact Us</h2>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[#00C8FF]">📍</span>
                <span className="text-blue-100">Plot No. 281, Subhash Nagar, IDA, Jeedimetla,<br />Opposite to Bodhi Vriksha Olympiad School,<br />Medchal-Malkajgiri, Hyderabad, Telangana 500055, India</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2"><span className="text-[#00C8FF]">📞</span><span className="text-blue-100">+91 88857 16667</span></div>
              <div className="flex items-center gap-2"><span className="text-[#00C8FF]">✉️</span><span className="text-blue-100">maxfinechem@gmail.com</span></div>
              <div className="flex items-center gap-2"><span className="text-[#00C8FF]">🔗</span><span className="text-blue-100">linkedin.com/in/max-fine-chem-0b6420415</span></div>
            </div>
          </div>
          <div className="mt-5 border-t border-white/20 pt-4 text-center text-blue-300 text-xs">
            © {new Date().getFullYear()} MAX FINE CHEM · Quality • Innovation • Reliability
          </div>
        </div>

      </div>

      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}
