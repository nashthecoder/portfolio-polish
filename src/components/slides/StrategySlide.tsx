export const StrategySlide = () => {
  const phases = [
    {
      phase: "Phase 1a", label: "MVP", period: "Aug 2024 – Mar 2025",
      items: ["Core chatbot (18 SRHR topics)", "Privacy mode + quick-exit", "Service finder (GPS)", "Admin CMS for coalition", "PWA deployment"],
      color: "border-t-primary",
    },
    {
      phase: "Phase 1b", label: "Iterate", period: "Apr – Jun 2025",
      items: ["User testing (5 rounds)", "Context memory fixes", "Crisis/trauma flow redesign", "Content accuracy audit", "Performance optimisation"],
      color: "border-t-secondary",
    },
    {
      phase: "Phase 2", label: "Scale", period: "Jul 2025+",
      items: ["RAG integration", "Multilingual (Swahili, Sheng)", "WhatsApp & USSD channels", "Gamification layer", "Partner API integrations"],
      color: "border-t-accent",
    },
  ];

  return (
    <div className="slide-inner">
      <div className="section-label-dark">Product Strategy</div>
      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-2">
        Ship fast. Learn faster.<br />Scale with evidence.
      </h2>
      <p className="text-foreground/90 text-sm font-light max-w-[680px] mb-8">
        A phased approach: get a working product into young people's hands, test rigorously, then expand channels and intelligence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {phases.map(p => (
          <div key={p.phase} className={`content-card-dark border-t-[3px] ${p.color}`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[0.75rem] text-primary uppercase tracking-wider">{p.phase}</span>
              <span className="bg-foreground/10 text-foreground/90 text-[0.75rem] px-2 py-0.5 rounded-full">{p.label}</span>
            </div>
            <div className="font-mono text-[0.75rem] text-foreground/80 mb-3">{p.period}</div>
            <ul className="space-y-1.5">
              {p.items.map(item => (
                <li key={item} className="text-sm text-foreground/90 flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="content-card-dark border-l-[3px] border-l-primary max-w-2xl">
        <p className="text-sm text-foreground/80 italic leading-relaxed mb-2">
          "The goal wasn't perfection — it was getting something real into the hands of real young people, fast enough to learn from them before we scaled."
        </p>
        <div className="font-mono text-[0.75rem] text-primary uppercase tracking-wider">On the product philosophy</div>
      </div>
    </div>
  );
};
