import { ExternalLink, Shield, Brain, Gamepad2, Globe, AlertTriangle, Sparkles, Star, Phone, Database, HeartPulse } from "lucide-react";

const roadmap = {
  must: {
    title: "MUST",
    subtitle: "Safety & Safeguarding",
    icon: Shield,
    color: "text-emerald-400",
    borderColor: "border-emerald-500",
    items: [
      "Crisis & safeguarding escalation flows",
      "Verified emergency hotline integration",
      "Inclusive LGBT+ service finder",
      "Safeguarding content review workflow"
    ]
  },
  should: {
    title: "SHOULD",
    subtitle: "AI & Intelligence",
    icon: Brain,
    color: "text-amber-400",
    borderColor: "border-amber-500",
    items: [
      "RAG knowledge engine for SRHR datasets",
      "Multilingual AI (English, Swahili, Sheng)",
      "Crisis keyword detection for chatbot",
      "AARRR analytics dashboard metrics"
    ]
  },
  could: {
    title: "COULD",
    subtitle: "Engagement",
    icon: Gamepad2,
    color: "text-pink-400",
    borderColor: "border-pink-500",
    items: [
      "Gamification layer for youth engagement",
      "Feedback / report issue button",
      "Push notifications for new games",
      "Pictorial responses for low literacy users"
    ]
  },
  future: {
    title: "FUTURE",
    subtitle: "Scale & Access",
    icon: Globe,
    color: "text-purple-400",
    borderColor: "border-purple-500",
    items: [
      "WhatsApp chatbot integration",
      "USSD access for feature phones",
      "Multilingual voice interaction",
      "AI personalisation"
    ]
  }
};

export const NextSlide = () => (
  <div className="slide-inner">
    <div className="section-label-dark">What's Next</div>
    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-2">
      Rafikey Product Roadmap
    </h2>
    <p className="text-foreground/80 text-base font-light max-w-[800px] mb-4">
      Prioritised using the MoSCoW framework to ensure safety, AI reliability, and youth engagement scale responsibly.
    </p>
    
    <div className="flex flex-wrap gap-3 mb-8">
      <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1.5">
        <span className="text-emerald-400 font-bold text-sm">Must</span>
        <span className="text-emerald-300/70 text-xs">critical for launch</span>
      </div>
      <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-3 py-1.5">
        <span className="text-amber-400 font-bold text-sm">Should</span>
        <span className="text-amber-300/70 text-xs">next release priorities</span>
      </div>
      <div className="flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-3 py-1.5">
        <span className="text-pink-400 font-bold text-sm">Could</span>
        <span className="text-pink-300/70 text-xs">engagement improvements</span>
      </div>
      <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-3 py-1.5">
        <span className="text-purple-400 font-bold text-sm">Future</span>
        <span className="text-purple-300/70 text-xs">platform expansion</span>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {/* MUST - Top Left - Larger */}
      <div className="md:row-span-1 bg-gradient-to-br from-emerald-900/50 to-emerald-950/50 rounded-2xl p-5 border-t-4 border-emerald-500 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <Shield className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <span className="text-emerald-400 font-bold text-lg">MUST</span>
            <span className="text-emerald-300/60 text-sm ml-2">Safety & Safeguarding</span>
          </div>
        </div>
        <ul className="space-y-2">
          {roadmap.must.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-emerald-100/90">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* SHOULD - Top Right */}
      <div className="bg-gradient-to-br from-amber-900/50 to-amber-950/50 rounded-2xl p-5 border-t-4 border-amber-500 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
            <Brain className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <span className="text-amber-400 font-bold text-lg">SHOULD</span>
            <span className="text-amber-300/60 text-sm ml-2">AI & Intelligence</span>
          </div>
        </div>
        <ul className="space-y-2">
          {roadmap.should.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-amber-100/90">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* COULD - Bottom Left */}
      <div className="bg-gradient-to-br from-pink-900/50 to-pink-950/50 rounded-2xl p-5 border-t-4 border-pink-500 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
            <Gamepad2 className="w-5 h-5 text-pink-400" />
          </div>
          <div>
            <span className="text-pink-400 font-bold text-lg">COULD</span>
            <span className="text-pink-300/60 text-sm ml-2">Engagement</span>
          </div>
        </div>
        <ul className="space-y-2">
          {roadmap.could.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-pink-100/90">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* FUTURE - Bottom Right */}
      <div className="bg-gradient-to-br from-purple-900/50 to-purple-950/50 rounded-2xl p-5 border-t-4 border-purple-500 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <Globe className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <span className="text-purple-400 font-bold text-lg">FUTURE</span>
            <span className="text-purple-300/60 text-sm ml-2">Scale & Access</span>
          </div>
        </div>
        <ul className="space-y-2">
          {roadmap.future.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-purple-100/90">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="bg-primary/10 border border-primary/25 rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <p className="text-sm font-bold mb-1">Want to see Rafikey in action?</p>
        <p className="text-sm text-foreground/90">The live product is available at askrafikey.com</p>
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