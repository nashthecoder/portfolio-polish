import { AlertTriangle } from "lucide-react";

const stats = [
  { value: "48%", label: "unmet need for family planning among 15–19 yr olds", source: "KDHS 2022" },
  { value: "29%", label: "of new HIV infections are among young people 15–24", source: "NACC 2023" },
  { value: "1 in 5", label: "Kenyan girls experience GBV before age 18", source: "DHS / UNICEF" },
  { value: "~0", label: "AI SRHR tools designed for, with, or by young Kenyans", source: "Landscape review, 2024" },
];

const partners = [
  { name: "Africa Media Trust (AMT)", role: "Media Partner", desc: "Youth-focused media engagement & outreach", color: "border-t-primary" },
  { name: "SRHR Kenya", role: "SRHR Advocacy", desc: "Sexual reproductive health rights expertise", color: "border-t-secondary" },
  { name: "Imara TV", role: "Media Partner", desc: "Digital content & youth storytelling", color: "border-t-accent" },
  { name: "LVCT Health", role: "Lead Partner", desc: "CSE expertise, structured referral system", color: "border-t-primary" },
  { name: "PSK", role: "Service Partner", desc: "Product delivery & direct service links", color: "border-t-secondary" },
  { name: "TIKO", role: "Service Partner", desc: "Digital health service platform", color: "border-t-accent" },
  { name: "AYARHEP", role: "HIV Advocacy", desc: "Peer educators, community health system", color: "border-t-primary" },
];

export const ContextSlide = () => (
  <div className="slide-inner-light">
    <div className="section-label">Context & Coalition</div>
    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-surface-light-foreground mb-2">
      The problem is systemic.<br />The response had to be too.
    </h2>
    <p className="text-gray-600 text-base font-light max-w-[680px] mb-6">
      Young Kenyans face fragmented, stigmatised access to sexual health information. Rafikey was built within a 7-org coalition to deliver AI-powered, youth-first SRHR support — grounded in local data and clinical expertise.
    </p>

    <div className="bg-secondary/10 border border-secondary/30 rounded-lg px-4 py-3 flex items-start gap-3 mb-6 max-w-[680px]">
      <AlertTriangle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
      <p className="text-sm text-gray-700 leading-relaxed">
        <strong>Why this matters:</strong> Young people are 15–24 in Kenya's health system — yet they account for a disproportionate share of new HIV infections, unplanned pregnancies, and GBV cases. Most digital health tools ignore them.
      </p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
      {stats.map(s => (
        <div key={s.label} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200">
          <div className="text-2xl font-extrabold text-primary leading-none">{s.value}</div>
          <div className="text-base text-gray-800 mt-2 leading-snug font-medium">{s.label}</div>
          <div className="font-mono text-[0.75rem] text-gray-500 mt-1">{s.source}</div>
        </div>
      ))}
    </div>

    <p className="font-mono text-[0.75rem] text-primary uppercase tracking-widest mb-3 font-bold">Coalition Partners</p>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
      {partners.map(p => (
        <div key={p.name} className={`bg-white rounded-xl p-3 border border-gray-200 shadow-sm border-t-[3px] ${p.color}`}>
          <div className="text-sm font-bold text-gray-900 mb-0.5">{p.name}</div>
          <div className="font-mono text-[0.75rem] text-primary uppercase tracking-wider mb-1">{p.role}</div>
          <div className="text-sm text-gray-600 leading-snug">{p.desc}</div>
        </div>
      ))}
    </div>
  </div>
);
