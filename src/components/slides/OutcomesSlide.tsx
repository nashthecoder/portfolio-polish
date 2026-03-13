import { Smartphone, Settings, Shield, Calendar, Server, CheckCircle } from "lucide-react";

const outcomes = [
  { value: "84.6%", label: "Youth Satisfaction", color: "text-primary" },
  { value: "0", label: "Developer Dependency Post-Launch", color: "text-secondary" },
  { value: "7.5 mo", label: "Zero to Live Product", color: "text-primary" },
  { value: "18", label: "SRHR Topics at Launch", color: "text-secondary" },
];

const sustainability = [
  { icon: Smartphone, text: "PWA — no app store, no download, low-data accessible" },
  { icon: Settings, text: "Admin CMS — coalition staff update content without developers" },
  { icon: Shield, text: "GDPR-compliant — user data controls, anonymised analytics" },
  { icon: Calendar, text: "Bi-annual content audit workflow built into admin system" },
  { icon: Server, text: "OpenAI + Render + GitHub stack — fully documented for handover" },
  { icon: CheckCircle, text: "Free support committed through 31 October 2025" },
];

const learnings = [
  { title: "GitHub & Notion onboarding should be Day 1", desc: "Team onboarding to shared tools should happen before kickoff, not mid-sprint.", color: "border-l-secondary" },
  { title: "Context memory is non-negotiable for SRHR", desc: "A bot that forgets user context mid-conversation breaks trust in a sensitive space.", color: "border-l-primary" },
  { title: "Emotional safety is a feature, not a nice-to-have", desc: "Crisis and trauma response flows need the same rigour as information accuracy.", color: "border-l-secondary" },
  { title: "Coalition buy-in ≠ coalition capacity", desc: "Partners want to contribute. Structured workflows make it possible.", color: "border-l-primary" },
];

export const OutcomesSlide = () => (
  <div className="slide-inner" style={{ background: "linear-gradient(135deg, hsl(241 37% 17%) 0%, hsl(270 30% 20%) 60%, hsl(301 42% 27%) 100%)" }}>
    <div className="section-label-dark">Outcomes & Sustainability</div>
    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-2">
      What we shipped.<br />What lasts after us.
    </h2>
    <p className="text-foreground/50 text-sm font-light max-w-[680px] mb-6">
      The goal wasn't just to build a chatbot. It was to hand over a platform the coalition could own, operate, and grow without calling a developer.
    </p>

    <div className="flex gap-px bg-foreground/10 rounded-xl overflow-hidden mb-6">
      {outcomes.map(o => (
        <div key={o.label} className="flex-1 bg-foreground/5 p-5 text-center">
          <div className={`stat-value ${o.color}`}>{o.value}</div>
          <div className="stat-label text-foreground/55">{o.label}</div>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <p className="font-mono text-[0.6rem] text-foreground/40 uppercase tracking-widest mb-3">Sustainability Features Shipped</p>
        <div className="flex flex-col gap-2">
          {sustainability.map((s, i) => (
            <div key={i} className="content-card-dark flex items-start gap-3">
              <s.icon className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-xs text-foreground/70">{s.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-mono text-[0.6rem] text-foreground/40 uppercase tracking-widest mb-3">4 Honest Learnings</p>
        <div className="flex flex-col gap-2">
          {learnings.map(l => (
            <div key={l.title} className={`content-card-dark border-l-[3px] ${l.color}`}>
              <div className="text-xs font-bold mb-0.5">{l.title}</div>
              <div className="text-[0.67rem] text-foreground/50 leading-snug">{l.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
