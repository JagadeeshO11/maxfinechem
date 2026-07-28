import { Link, useLocation } from 'react-router-dom';
import { Home, FlaskConical, Info, ShieldCheck, Phone } from 'lucide-react';

const tabs = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/products', label: 'Products', icon: FlaskConical },
  { to: '/about', label: 'About', icon: Info },
  { to: '/quality', label: 'Quality', icon: ShieldCheck },
  { to: '/contact', label: 'Contact', icon: Phone },
];

export default function BottomNav() {
  const { pathname } = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#0a1628] border-t border-gray-200 dark:border-blue-900/40 shadow-[0_-4px_20px_rgba(0,87,184,0.1)]">
      <div className="flex items-center justify-around h-16">
        {tabs.map(({ to, label, icon: Icon }) => {
          const active = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className="flex flex-col items-center justify-center flex-1 h-full gap-0.5 transition-colors"
            >
              <div className={`p-1.5 rounded-xl transition-all ${active ? 'bg-[#0057B8] dark:bg-[#00C8FF]' : ''}`}>
                <Icon
                  size={18}
                  className={active ? 'text-white' : 'text-gray-400 dark:text-gray-500'}
                />
              </div>
              <span className={`text-[10px] font-medium ${active ? 'text-[#0057B8] dark:text-[#00C8FF]' : 'text-gray-400 dark:text-gray-500'}`}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
