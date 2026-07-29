import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import MoleculeBg from '../components/MoleculeBg';
import TiltCard from '../components/TiltCard';
import aboutBg from '../assets/about.png';

const WA_NUMBER = '918885716667';

function LinkedInIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

const WaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', product: '', message: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const msg =
      `Hi Max Fine Chem,\n\n` +
      `*Name:* ${form.name}\n` +
      (form.company ? `*Company:* ${form.company}\n` : '') +
      (form.email ? `*Email:* ${form.email}\n` : '') +
      (form.phone ? `*Phone:* ${form.phone}\n` : '') +
      (form.product ? `*Product of Interest:* ${form.product}\n` : '') +
      `\n*Message:*\n${form.message}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const contactItems = [
    { icon: <Phone size={18} />, label: 'Phone', value: '+91 88857 16667', href: 'tel:+918885716667' },
    { icon: <Mail size={18} />, label: 'Email', value: 'maxfinechem@gmail.com', href: 'mailto:maxfinechem@gmail.com' },
    { icon: <MapPin size={18} />, label: 'Location', value: 'Plot No. 281, Subhash Nagar, IDA, Jeedimetla, Medchal-Malkajgiri, Hyderabad, Telangana 500055, India', href: null },
    { icon: <LinkedInIcon size={18} />, label: 'LinkedIn', value: 'Max Fine Chem', href: 'https://www.linkedin.com/in/max-fine-chem-0b6420415' },
  ];

  return (
    <div className="min-h-screen bg-[#F7FAFD] dark:bg-[#020d1f] pt-20">
      {/* Header */}
      <div className="relative flex items-center min-h-[80vh] overflow-hidden bg-[#001a3d]">
        <img src={aboutBg} alt="" className="absolute inset-0 w-full h-full object-cover object-right sm:object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a3d]/90 via-[#001a3d]/60 to-[#001a3d]/80" />
        <MoleculeBg />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-semibold text-[#00C8FF] uppercase tracking-widest">Get In Touch</span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Contact <span className="gradient-text">Us</span></h1>
            <p className="mt-3 text-blue-200 max-w-xl text-sm sm:text-base">Request a quote, ask for technical support, or inquire about our products</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10 lg:items-stretch">

          {/* Contact Info + Map */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex flex-col space-y-3 order-2 lg:order-1">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
            {contactItems.map((item, i) => (
              <TiltCard key={i} intensity={8} className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-[#0a1628] border border-gray-100 dark:border-blue-900/30">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0057B8] to-[#00C8FF] flex items-center justify-center text-white shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                      className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#0057B8] dark:hover:text-[#00C8FF] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{item.value}</span>
                  )}
                </div>
              </TiltCard>
            ))}
            {/* Map — inside col 1 on desktop, fills remaining height */}
            <div className="hidden lg:block rounded-2xl overflow-hidden border border-gray-100 dark:border-blue-900/30 flex-1 min-h-[160px]">
              <iframe
                title="Max Fine Chem Location"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15219.442877319128!2d78.44989215123256!3d17.514160934314187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1splot%20no.%20281%20subhash%20nagar%20ida%20jeedimetla%20hyderabad%20telangana%20500055!5e0!3m2!1sen!2sin!4v1785306364998!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white dark:bg-[#0a1628] rounded-2xl border border-gray-100 dark:border-blue-900/30 p-8 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-6" id="quote-form">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Send an Inquiry</h2>
                <span className="flex items-center gap-1.5 text-xs text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                  <WaIcon /> via WhatsApp
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: 'name', label: 'Full Name *', type: 'text', required: true },
                    { name: 'company', label: 'Company Name', type: 'text', required: false },
                    { name: 'email', label: 'Email Address', type: 'email', required: false },
                    { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
                  ].map(field => (
                    <div key={field.name}>
                      <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">{field.label}</label>
                      <input name={field.name} type={field.type} required={field.required} value={form[field.name]} onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-200 dark:border-blue-900/30 bg-gray-50 dark:bg-[#0d1e3a] text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0057B8] transition" />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Product of Interest</label>
                  <select name="product" value={form.product} onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 dark:border-blue-900/30 bg-gray-50 dark:bg-[#0d1e3a] text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0057B8]">
                    <option value="">Select a product</option>
                    <option>CDI - N,N'-Carbonyldiimidazole (530-62-1)</option>
                    <option>DMDOCL - 4-Chloromethyl-5-methyl-1,3-dioxol-2-one (80841-78-7)</option>
                    <option>CBB - cis Bromo Benzoate (61397-56-6)</option>
                    <option>DMDO - 4,5-Dimethyl-1,3-dioxol-2-one (37830-90-3)</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Message *</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                    placeholder="Please include quantity required, delivery timeline, and any specific requirements..."
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 dark:border-blue-900/30 bg-gray-50 dark:bg-[#0d1e3a] text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0057B8] resize-none" />
                </div>

                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-green-500/20">
                  <WaIcon /> Send via WhatsApp
                </button>
                <p className="text-center text-xs text-gray-400">Clicking will open WhatsApp with your message pre-filled</p>
              </form>
            </div>
          </motion.div>

        </div>

        {/* Map — mobile only (after form) */}
        <div className="lg:hidden mt-8 rounded-2xl overflow-hidden border border-gray-100 dark:border-blue-900/30 h-64 sm:h-80">
          <iframe
            title="Max Fine Chem Location"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15219.442877319128!2d78.44989215123256!3d17.514160934314187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1splot%20no.%20281%20subhash%20nagar%20ida%20jeedimetla%20hyderabad%20telangana%20500055!5e0!3m2!1sen!2sin!4v1785306364998!5m2!1sen!2sin"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
        </div>
      </div>
    </div>
  );
}
