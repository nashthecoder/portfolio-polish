import { AlertTriangle } from "lucide-react";

const stats = [
  { value: "48%", label: "unmet need for family planning among 15–19 yr olds", source: "KDHS 2022" },
  { value: "29%", label: "of new HIV infections are among young people 15–24", source: "NACC 2023" },
  { value: "1 in 5", label: "Kenyan girls experience GBV before age 18", source: "DHS / UNICEF" },
  { value: "~0", label: "AI SRHR tools designed for, with, or by young Kenyans", source: "Landscape review, 2024" },
];

const partners = [
  { name: "LVCT Health", role: "Lead Partner", desc: "CSE expertise, structured referral system", color: "border-t-primary" },
  { name: "NairoBits Trust", role: "Content & Tech", desc: "iAccess hub, youth 10–24, AI expertise", color: "border-t-secondary" },
  { name: "AYARHEP", role: "HIV Advocacy", desc: "Peer educators, community health system", color: "border-t-primary" },
  { name: "PSK · TIKO", role: "Service Partners", desc: "Product delivery & direct service links", color: "border-t-accent" },
  { name: "Young People", role: "Co-Creators", desc: "5 rounds · 20 YP throughout", color: "border-t-foreground" },
];

export const ContextSlide = () => (
  <div className="slide-inner-light">
    <div className="section-label">Context & Coalition</div>
    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-surface-light-foreground mb-2">
      The problem is systemic.<br />The response had to be too.
    </h2>
    <p className="text-text-subtle text-sm font-light max-w-[680px] mb-6">
      Young Kenyans face fragmented, stigmatised access to sexual health information. Rafikey was built within a 5-org coalition to deliver AI-powered, youth-first SRHR support — grounded in local data and clinical expertise.
    </p>

    <div className="bg-secondary/10 border border-secondary/30 rounded-lg px-4 py-3 flex items-start gap-3 mb-6 max-w-[680px]">
      <AlertTriangle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
      <p className="text-xs text-surface-light-foreground leading-relaxed">
        <strong>Why this matters:</strong> Young people are 15–24 in Kenya's health system — yet they account for a disproportionate share of new HIV infections, unplanned pregnancies, and GBV cases. Most digital health tools ignore them.
      </p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
      {stats.map(s => (
        <div key={s.label} className="bg-surface-light-foreground rounded-xl p-4 text-center">
          <div className="text-2xl font-extrabold text-primary leading-none">{s.value}</div>
          <div className="text-[0.65rem] text-foreground/60 mt-2 leading-snug">{s.label}</div>
          <div className="font-mono text-[0.55rem] text-foreground/30 mt-1">{s.source}</div>
        </div>
      ))}
    </div>

    <p className="font-mono text-[0.6rem] text-primary uppercase tracking-widest mb-3">Coalition Partners</p>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
      {partners.map(p => (
        <div key={p.name} className={`bg-surface-light rounded-xl p-3 border border-border-light border-t-[3px] ${p.color}`}>
          <div className="text-xs font-bold text-surface-light-foreground mb-0.5">{p.name}</div>
          <div className="font-mono text-[0.55rem] text-primary uppercase tracking-wider mb-1">{p.role}</div>
          <div className="text-[0.65rem] text-text-subtle leading-snug">{p.desc}</div>
        </div>
      ))}
    </div>
  </div>
);
