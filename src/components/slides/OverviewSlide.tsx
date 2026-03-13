import { MessageCircle, BookOpen, MapPin, Shield, Eye, Settings } from "lucide-react";

const features = [
  { icon: MessageCircle, title: "AI Chatbot", desc: "Conversational SRHR info — from contraception to mental health — powered by OpenAI with custom guardrails.", color: "text-primary" },
  { icon: BookOpen, title: "18 SRHR Topics", desc: "Contraception, STIs, HIV, mental health, GBV, consent, puberty, gender identity, and more — all verified by health partners.", color: "text-secondary" },
  { icon: MapPin, title: "Service Finder", desc: "GPS-based clinic finder for HIV testing, contraception, GBV support, and youth-friendly services across Kenya.", color: "text-primary" },
  { icon: Shield, title: "Privacy Mode", desc: "Discreet UI — quick-exit button, auto session timeout, no data stored unless user opts in.", color: "text-accent" },
  { icon: Eye, title: "Crisis Detection", desc: "Auto-detects crisis language. Escalates to verified helplines. Never just apologises — always acts.", color: "text-destructive" },
  { icon: Settings, title: "Admin CMS", desc: "Coalition staff update content without developers. Zero technical dependency post-launch.", color: "text-secondary" },
];

export const OverviewSlide = () => (
  <div className="slide-inner">
    <div className="section-label">Product Overview</div>
    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-2">
      Not a chatbot.<br />A youth health companion.
    </h2>
    <p className="text-foreground/70 text-sm font-light max-w-[680px] mb-8">
      Rafikey combines AI, verified SRHR content, and a youth-first design to give young Kenyans a private, trusted space to explore their sexual and reproductive health.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {features.map(f => (
        <div key={f.title} className="content-card-dark">
          <div className="flex items-center gap-2 mb-2">
            <f.icon className={`w-4 h-4 ${f.color}`} />
            <span className="text-sm font-bold text-white">{f.title}</span>
          </div>
          <p className="text-sm text-white/90 leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  </div>
);
