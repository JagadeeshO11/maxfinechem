import cdiImg from '../assets/cdi.jpeg';
import cdiImg2 from '../assets/cdi.png';
import cdiImg3 from '../assets/cdi1.png';
import cdiImg4 from '../assets/cdi2.png';
import dmdoclImg from '../assets/dmdocl.jpeg';
import dmdoclImg2 from '../assets/dmdocl1.jpeg';
import cbbImg from '../assets/cbb.jpeg';
import dmdoImg from '../assets/dmdo1.png';
import dmdoImg2 from '../assets/dmdo2.png';
import dmdoImg3 from '../assets/dmdo4.png';

export const products = [
  {
    id: 1,
    name: "N,N'-Carbonyldiimidazole",
    shortName: "CDI",
    cas: "530-62-1",
    formula: "C₇H₆N₄O",
    molecularWeight: "162.15 g/mol",
    purity: "≥ 98.0%",
    appearance: "White to off-white crystalline powder",
    packaging: ["25 kg HDPE drums", "Custom packaging available"],
    endUse: "Dabigatran API",
    applications: ["Dabigatran Etexilate (anticoagulant)", "Peptide coupling reagent", "Carbamate synthesis"],
    category: "Coupling Reagents",
    image: cdiImg2,
    images: [cdiImg2, cdiImg, cdiImg3, cdiImg4],
    description: "CDI is a highly efficient coupling reagent widely used in pharmaceutical synthesis. It activates carboxylic acids to form reactive acylimidazole intermediates, making it essential in the synthesis of Dabigatran, a direct thrombin inhibitor.",
    svg: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#0057B8"/><stop offset="100%" style="stop-color:#00C8FF"/></linearGradient></defs>
      <circle cx="100" cy="80" r="12" fill="url(#g1)" opacity="0.9"/>
      <circle cx="60" cy="50" r="8" fill="#0099FF" opacity="0.8"/>
      <circle cx="140" cy="50" r="8" fill="#0099FF" opacity="0.8"/>
      <circle cx="40" cy="80" r="8" fill="#00C8FF" opacity="0.8"/>
      <circle cx="160" cy="80" r="8" fill="#00C8FF" opacity="0.8"/>
      <circle cx="60" cy="110" r="8" fill="#0057B8" opacity="0.8"/>
      <circle cx="140" cy="110" r="8" fill="#0057B8" opacity="0.8"/>
      <circle cx="100" cy="130" r="6" fill="#FF6B35" opacity="0.9"/>
      <line x1="100" y1="80" x2="60" y2="50" stroke="#0057B8" strokeWidth="2"/>
      <line x1="100" y1="80" x2="140" y2="50" stroke="#0057B8" strokeWidth="2"/>
      <line x1="60" y1="50" x2="40" y2="80" stroke="#0099FF" strokeWidth="2"/>
      <line x1="140" y1="50" x2="160" y2="80" stroke="#0099FF" strokeWidth="2"/>
      <line x1="40" y1="80" x2="60" y2="110" stroke="#00C8FF" strokeWidth="2"/>
      <line x1="160" y1="80" x2="140" y2="110" stroke="#00C8FF" strokeWidth="2"/>
      <line x1="60" y1="110" x2="100" y2="130" stroke="#0057B8" strokeWidth="2"/>
      <line x1="140" y1="110" x2="100" y2="130" stroke="#0057B8" strokeWidth="2"/>
      <text x="100" y="84" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">C</text>
      <text x="60" y="54" textAnchor="middle" fill="white" fontSize="7">N</text>
      <text x="140" y="54" textAnchor="middle" fill="white" fontSize="7">N</text>
      <text x="100" y="134" textAnchor="middle" fill="white" fontSize="7">O</text>
    </svg>`
  },
  {
    id: 2,
    name: "4-Chloromethyl-5-methyl-1,3-dioxol-2-one",
    shortName: "DMDOCL",
    cas: "80841-78-7",
    formula: "C₅H₅ClO₃",
    molecularWeight: "148.55 g/mol",
    purity: "≥ 97.0%",
    appearance: "Colorless to pale yellow liquid",
    packaging: ["25 kg drums"],
    endUse: "Olmesartan Medoxomil, Azilsartan",
    applications: ["Olmesartan Medoxomil (antihypertensive)", "Azilsartan Medoxomil synthesis", "Prodrug formation"],
    category: "Dioxolone Derivatives",
    image: dmdoclImg,
    images: [dmdoclImg, dmdoclImg2],
    description: "DMDOCL is a critical pharmaceutical intermediate used in the synthesis of Olmesartan Medoxomil and Azilsartan Medoxomil, both angiotensin II receptor blockers (ARBs) used for treating hypertension.",
    svg: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#0099FF"/><stop offset="100%" style="stop-color:#0057B8"/></linearGradient></defs>
      <polygon points="100,30 150,65 130,115 70,115 50,65" fill="none" stroke="url(#g2)" strokeWidth="2.5"/>
      <circle cx="100" cy="30" r="9" fill="#0057B8"/>
      <circle cx="150" cy="65" r="9" fill="#0099FF"/>
      <circle cx="130" cy="115" r="9" fill="#00C8FF"/>
      <circle cx="70" cy="115" r="9" fill="#0099FF"/>
      <circle cx="50" cy="65" r="9" fill="#0057B8"/>
      <circle cx="100" cy="75" r="7" fill="#FF6B35" opacity="0.9"/>
      <circle cx="170" cy="40" r="7" fill="#22C55E" opacity="0.9"/>
      <line x1="150" y1="65" x2="170" y2="40" stroke="#22C55E" strokeWidth="2"/>
      <text x="100" y="79" textAnchor="middle" fill="white" fontSize="7">O</text>
      <text x="170" y="44" textAnchor="middle" fill="white" fontSize="7">Cl</text>
      <text x="100" y="34" textAnchor="middle" fill="white" fontSize="7">C</text>
    </svg>`
  },
  {
    id: 3,
    name: "cis Bromo Benzoate",
    shortName: "CBB",
    cas: "61397-56-6",
    formula: "C₁₀H₉BrO₂",
    molecularWeight: "257.08 g/mol",
    purity: "≥ 98.0%",
    appearance: "White crystalline solid",
    packaging: ["25 kg fiber drums", "50 kg HDPE drums"],
    endUse: "Ketoconazole, Itraconazole",
    applications: ["Ketoconazole synthesis (antifungal)", "Itraconazole synthesis", "Azole antifungal intermediates"],
    category: "Benzoate Intermediates",
    image: cbbImg,
    images: [cbbImg],
    description: "CBB is an essential intermediate in the synthesis of azole antifungal agents including Ketoconazole and Itraconazole. These APIs are widely used in treating systemic and topical fungal infections.",
    svg: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#7C3AED"/><stop offset="100%" style="stop-color:#0099FF"/></linearGradient></defs>
      <polygon points="80,40 110,40 125,65 110,90 80,90 65,65" fill="none" stroke="url(#g3)" strokeWidth="2.5"/>
      <circle cx="80" cy="40" r="7" fill="#7C3AED"/>
      <circle cx="110" cy="40" r="7" fill="#7C3AED"/>
      <circle cx="125" cy="65" r="7" fill="#0099FF"/>
      <circle cx="110" cy="90" r="7" fill="#7C3AED"/>
      <circle cx="80" cy="90" r="7" fill="#7C3AED"/>
      <circle cx="65" cy="65" r="7" fill="#0099FF"/>
      <line x1="125" y1="65" x2="155" y2="65" stroke="#0057B8" strokeWidth="2"/>
      <circle cx="155" cy="65" r="8" fill="#FF6B35"/>
      <line x1="65" y1="65" x2="40" y2="50" stroke="#0057B8" strokeWidth="2"/>
      <circle cx="40" cy="50" r="7" fill="#EF4444"/>
      <line x1="40" y1="50" x2="20" y2="60" stroke="#EF4444" strokeWidth="2"/>
      <circle cx="20" cy="60" r="6" fill="#EF4444" opacity="0.8"/>
      <text x="155" y="69" textAnchor="middle" fill="white" fontSize="6">Br</text>
      <text x="40" y="54" textAnchor="middle" fill="white" fontSize="6">O</text>
    </svg>`
  },
  {
    id: 4,
    name: "4,5-Dimethyl-1,3-dioxol-2-one",
    shortName: "DMDO",
    cas: "37830-90-3",
    formula: "C₅H₆O₃",
    molecularWeight: "114.10 g/mol",
    purity: "≥ 97.0%",
    appearance: "Colorless liquid",
    packaging: ["25 kg drums", "50 kg drums"],
    endUse: "Olmesartan Medoxomil",
    applications: ["Olmesartan Medoxomil (antihypertensive)", "Cyclic carbonate synthesis", "Prodrug carrier"],
    category: "Dioxolone Derivatives",
    image: dmdoImg,
    images: [dmdoImg, dmdoImg2, dmdoImg3],
    description: "DMDO is a cyclic carbonate intermediate used in the synthesis of Olmesartan Medoxomil, a widely prescribed antihypertensive drug. It serves as the medoxomil prodrug moiety that enhances oral bioavailability.",
    svg: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#00C8FF"/><stop offset="100%" style="stop-color:#0057B8"/></linearGradient></defs>
      <polygon points="100,35 135,60 135,100 100,125 65,100 65,60" fill="none" stroke="url(#g4)" strokeWidth="2.5"/>
      <circle cx="100" cy="35" r="9" fill="#00C8FF"/>
      <circle cx="135" cy="60" r="9" fill="#0099FF"/>
      <circle cx="135" cy="100" r="9" fill="#0057B8"/>
      <circle cx="100" cy="125" r="9" fill="#00C8FF"/>
      <circle cx="65" cy="100" r="9" fill="#0057B8"/>
      <circle cx="65" cy="60" r="9" fill="#0099FF"/>
      <circle cx="100" cy="80" r="8" fill="#FF6B35" opacity="0.9"/>
      <line x1="100" y1="35" x2="100" y2="15" stroke="#22C55E" strokeWidth="2"/>
      <circle cx="100" cy="12" r="6" fill="#22C55E"/>
      <line x1="135" y1="100" x2="155" y2="115" stroke="#22C55E" strokeWidth="2"/>
      <circle cx="158" cy="117" r="6" fill="#22C55E"/>
      <text x="100" y="84" textAnchor="middle" fill="white" fontSize="7">O</text>
      <text x="100" y="16" textAnchor="middle" fill="white" fontSize="7">C</text>
    </svg>`
  }
];

export const industries = [
  { icon: "⚗️", name: "CDI", desc: "N,N'-Carbonyldiimidazole" },
  { icon: "🧪", name: "DMDOCL", desc: "4-Chloromethyl-5-methyl-1,3-dioxol-2-one" },
  { icon: "🔬", name: "CBB", desc: "cis Bromo Benzoate" },
  { icon: "💊", name: "DMDO", desc: "4,5-Dimethyl-1,3-dioxol-2-one" },
];

export const whyChooseUs = [
  { icon: "🏆", title: "GMP Certified", desc: "Manufacturing under strict GMP guidelines ensuring consistent quality" },
  { icon: "🔬", title: "Advanced R&D", desc: "In-house research facility for continuous process improvement" },
  { icon: "📦", title: "Reliable Supply", desc: "Consistent supply chain with on-time delivery worldwide" },
  { icon: "✅", title: "Quality Assurance", desc: "Rigorous QC testing with CoA and MSDS for every batch" },
  { icon: "💰", title: "Competitive Pricing", desc: "Cost-effective solutions without compromising quality" },
  { icon: "🤝", title: "Technical Support", desc: "Expert technical assistance from synthesis to scale-up" },
];

export const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "4+", label: "Core Products" },
  { value: "50+", label: "Global Clients" },
  { value: "99%", label: "Purity Standards" },
];
