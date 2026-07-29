import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Phone } from 'lucide-react';
import logo from '../assets/log.jpeg';
import { useTheme } from '../context/ThemeContext';

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/quality', label: 'Quality' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();
  const { pathname } = useLocation();

  const isHome = pathname === '/';
  // transparent only on home before scroll
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => { setScrolled(window.scrollY > 20); };
    window.addEventListener('scroll', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); };
  }, []);


  // nav link classes
  const linkClass = (active) => {
    if (active) return 'text-[#0057B8] dark:text-[#00C8FF] bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-md text-sm font-semibold transition-colors';
    if (isTransparent) return 'text-white/90 hover:text-[#00C8FF] hover:bg-white/10 px-3 py-1.5 rounded-md text-sm font-medium transition-colors';
    return 'text-gray-800 dark:text-gray-100 hover:text-[#0057B8] dark:hover:text-[#00C8FF] hover:bg-blue-50 dark:hover:bg-blue-900/20 px-3 py-1.5 rounded-md text-sm font-medium transition-colors';
  };

  const phoneClass = isTransparent
    ? 'hidden md:flex items-center gap-1.5 text-xs text-white/80 hover:text-[#00C8FF] transition-colors'
    : 'hidden md:flex items-center gap-1.5 text-xs text-gray-700 dark:text-gray-200 hover:text-[#0057B8] dark:hover:text-[#00C8FF] transition-colors';

return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-white/95 dark:bg-[#0a1628]/95 backdrop-blur-md shadow-md shadow-blue-900/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Max Fine Chem" className="h-12 w-12 object-contain rounded-xl border-2 border-[#0057B8] shadow-md shadow-blue-500/20" />
            <div className="flex flex-col leading-tight">
              <span className={`text-base font-extrabold tracking-wide ${isTransparent ? 'text-white' : 'text-[#0057B8] dark:text-[#00C8FF]'}`}>MAX FINE CHEMICALS</span>
              <span className={`text-[10px] font-medium tracking-widest uppercase ${isTransparent ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'}`}>Pharma Intermediates</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <Link key={l.to} to={l.to} className={linkClass(pathname === l.to)}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href="tel:+918885716667" className={phoneClass}>
              <Phone size={13} /> +91 88857 16667
            </a>

            {/* Theme toggle - mobile */}
            <button
              onClick={toggle}
              className={`flex md:hidden items-center justify-center w-8 h-8 rounded-full border transition-all ${
                isTransparent
                  ? 'border-white/30 text-white bg-white/10 hover:bg-white/20'
                  : dark
                    ? 'border-[#00C8FF]/40 text-[#00C8FF] bg-[#00C8FF]/10 hover:bg-[#00C8FF]/20'
                    : 'border-[#0057B8]/30 text-[#0057B8] bg-blue-50 hover:bg-blue-100'
              }`}>
              {dark ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            {/* Theme toggle - desktop */}
            <button
              onClick={toggle}
              className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                isTransparent
                  ? 'border-white/30 text-white bg-white/10 hover:bg-white/20'
                  : dark
                    ? 'border-[#00C8FF]/40 text-[#00C8FF] bg-[#00C8FF]/10 hover:bg-[#00C8FF]/20'
                    : 'border-[#0057B8]/30 text-[#0057B8] bg-blue-50 hover:bg-blue-100'
              }`}>
              {dark ? <Sun size={14} /> : <Moon size={14} />}
              <span>{dark ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
