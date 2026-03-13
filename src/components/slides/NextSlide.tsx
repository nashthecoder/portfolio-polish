import { ExternalLink } from "lucide-react";

const roadmap = [
  { cat: "AI", title: "RAG Integration", desc: "Retrieval-Augmented Generation pulling from a verified SRHR knowledge base. Less hallucination, more accuracy.", color: "border-t-primary", catColor: "text-primary" },
  { cat: "AI", title: "Multilingual Model", desc: "English, Swahili, and Sheng training dataset. 92.3% of YP testers requested language personalisation.", color: "border-t-primary", catColor: "text-primary" },
  { cat: "UX", title: "Gamification Layer", desc: "Fun facts, trivia unlockables, mini-scenarios, and badges. Blueprint exists. 92.3% of testers want it.", color: "border-t-secondary", catColor: "text-secondary" },
  { cat: "Access", title: "WhatsApp & USSD", desc: "Expanding beyond PWA to reach feature phone users. Session timeout and privacy mode included.", color: "border-t-accent", catColor: "text-accent" },
  { cat: "Safety", title: "Crisis & Trauma Flows", desc: "Context-aware, empathetic, action-oriented escalation — not apologetic responses.", color: "border-t-secondary", catColor: "text-secondary" },
  { cat: "Coalition", title: "Partner API Integrations", desc: "Formal data-sharing with LVCT, NairoBits, AYARHEP. Real-time referral completion tracking.", color: "border-t-accent", catColor: "text-accent" },
];

export const NextSlide = () => (
  <div className="slide-inner">
    <div className="section-label-dark">What's Next</div>
    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-2">
      The roadmap exists.<br />The coalition is ready.
    </h2>
    <p className="text-foreground/50 text-sm font-light max-w-[680px] mb-8">
      Phase 1 shipped a working, youth-tested, coalition-owned platform. Phase 2 is where Rafikey becomes truly intelligent.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {roadmap.map(r => (
        <div key={r.title} className={`content-card-dark border-t-[3px] ${r.color}`}>
          <div className={`font-mono text-[0.6rem] ${r.catColor} uppercase tracking-wider mb-1.5`}>{r.cat}</div>
          <div className="text-sm font-bold mb-1.5">{r.title}</div>
          <p className="text-xs text-foreground/50 leading-relaxed">{r.desc}</p>
        </div>
      ))}
    </div>

    <div className="bg-primary/10 border border-primary/25 rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <p className="text-sm font-bold mb-1">Want to see Rafikey in action?</p>
        <p className="text-xs text-foreground/50">The live product is available at askrafikey.com</p>
      </div>
      <a
        href="https://askrafikey.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
      >
        <ExternalLink className="w-3.5 h-3.5" />
        Visit askrafikey.com
      </a>
    </div>
  </div>
);
