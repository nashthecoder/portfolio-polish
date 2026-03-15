import { Smartphone, Shield, Globe, Settings } from "lucide-react";

const features = [
  { icon: Smartphone, title: "PWA-First", desc: "No app store, no download, low-data accessible. Works on any smartphone browser.", color: "text-primary" },
  { icon: Shield, title: "Privacy Mode", desc: "Quick-exit button, session timeout, discreet UI. No data stored unless explicitly opted in.", color: "text-accent" },
  { icon: Globe, title: "Multilingual Ready", desc: "English live at launch. Swahili and Sheng in the AI training roadmap.", color: "text-primary" },
  { icon: Settings, title: "Admin CMS", desc: "Coalition staff update content, add topics, and review analytics without developer support.", color: "text-secondary" },
];

export const DesignSlide = () => (
  <div className="slide-inner-white">
    <div className="section-label">Design & Architecture</div>
    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-surface-light-foreground mb-2">
      Designed for trust.<br />Built for independence.
    </h2>
    <p className="text-surface-light-foreground/70 text-sm font-light max-w-[680px] mb-6">
      Every design decision was shaped by one question: will this make a young person feel safe enough to ask their real question?
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {features.map(f => (
        <div key={f.title} className="content-card border-l-[3px] border-l-primary">
          <div className="flex items-center gap-2 mb-2">
            <f.icon className={`w-4 h-4 ${f.color}`} />
            <span className="text-sm font-bold text-surface-light-foreground">{f.title}</span>
          </div>
          <p className="text-sm text-surface-light-foreground/70 leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>

    {/* Video placeholders */}
    <p className="font-mono text-[0.65rem] text-primary uppercase tracking-widest mb-3">Product Walkthroughs</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="rounded-xl overflow-hidden border border-border-light">
        <iframe
          src="https://drive.google.com/file/d/1ySP74wCWKq7FTUzaAHY42PiVyUJICeYH/preview"
          className="w-full aspect-video"
          allow="autoplay"
          allowFullScreen
          title="Landing Page Walkthrough"
        />
        <div className="bg-surface-light p-3 border-t border-border-light">
          <p className="text-sm font-bold text-surface-light-foreground">App Walkthrough</p>
          <p className="text-sm text-surface-light-foreground/70 leading-snug">Full walkthrough of the Rafikey chatbot — topic selection, service finder, and privacy mode.</p>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden border border-border-light">
        <iframe
          src="https://drive.google.com/file/d/17TNt35CkR-pn1wF9QJW5dmDgJPienuKZ/preview"
          className="w-full aspect-video"
          allow="autoplay"
          allowFullScreen
          title="Admin Dashboard Walkthrough"
        />
        <div className="bg-surface-light p-3 border-t border-border-light">
          <p className="text-sm font-bold text-surface-light-foreground">Admin Dashboard</p>
          <p className="text-sm text-surface-light-foreground/70 leading-snug">Coalition team using the admin back office — updating content, viewing analytics, and managing the chatbot without a developer.</p>
        </div>
      </div>
    </div>

    {/* Tech stack */}
    <div className="bg-gray-100 rounded-xl p-4 border border-gray-200">
      <div className="font-mono text-[0.75rem] text-gray-600 uppercase tracking-wider mb-3 font-bold">Tech Stack</div>
      <div className="flex flex-wrap gap-2">
        {["Python", "Vue.js", "PostgreSQL 17", "OpenAI API", "Render", "GitHub", "PWA"].map(t => (
          <span key={t} className="text-sm bg-gray-800 text-white px-3 py-1.5 rounded-md font-medium">{t}</span>
        ))}
      </div>
    </div>
  </div>
);
