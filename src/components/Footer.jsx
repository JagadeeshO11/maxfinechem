import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/log.jpeg';

function LinkedInIcon({ size = 14, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#020d1f] text-gray-400 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Max Fine Chem" className="h-20 w-auto object-contain rounded-full border-2 border-[#0057B8] shadow-md shadow-blue-500/20" style={{ maxWidth: '220px' }} />
            </div>
            <p className="text-sm leading-relaxed">Leading manufacturer of high-purity pharmaceutical intermediates for global API manufacturers.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              {['CDI (530-62-1)', 'DMDOCL (80841-78-7)', 'CBB (61397-56-6)', 'DMDO (37830-90-3)'].map(p => (
                <li key={p}><Link to="/products" className="hover:text-[#00C8FF] transition-colors">{p}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {[['About Us', '/about'], ['Quality', '/quality'], ['Contact', '/contact'], ['Request Quote', '/contact']].map(([l, h]) => (
                <li key={l}><Link to={h} className="hover:text-[#00C8FF] transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-[#00C8FF] shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[#00C8FF] shrink-0" />
                <a href="tel:+918885716667" className="hover:text-[#00C8FF] transition-colors">+91 88857 16667</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[#00C8FF] shrink-0" />
                <a href="mailto:maxfinechem@gmail.com" className="hover:text-[#00C8FF] transition-colors">maxfinechem@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <LinkedInIcon size={14} className="text-[#00C8FF] shrink-0" />
                <a href="https://www.linkedin.com/in/max-fine-chem-0b6420415" target="_blank" rel="noreferrer" className="hover:text-[#00C8FF] transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
          <p>© {new Date().getFullYear()} Max Fine Chem. All rights reserved.</p>
          <p>Quality • Innovation • Reliability</p>
        </div>
      </div>
    </footer>
  );
}
