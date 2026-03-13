export const ResearchSlide = () => (
  <div className="slide-inner-light">
    <div className="section-label">Discovery & Research</div>
    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-surface-light-foreground mb-2">
      Research that shaped<br />every product decision.
    </h2>
    <p className="text-text-subtle text-sm font-light max-w-[680px] mb-6">
      Landscape analysis, partner workshops, and youth co-design sessions informed a platform grounded in real needs — not assumptions.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-surface-light-foreground rounded-xl p-5 text-center">
        <div className="text-3xl font-extrabold text-primary leading-none">50+</div>
        <div className="font-mono text-[0.6rem] text-foreground/55 uppercase tracking-wider mt-2">Resources reviewed</div>
        <p className="text-[0.68rem] text-foreground/45 mt-2 leading-snug">Academic papers, WHO/UNFPA guidelines, Kenya-specific SRHR reports, and existing chatbot evaluations.</p>
      </div>
      <div className="bg-surface-light-foreground rounded-xl p-5 text-center">
        <div className="text-3xl font-extrabold text-secondary leading-none">5</div>
        <div className="font-mono text-[0.6rem] text-foreground/55 uppercase tracking-wider mt-2">Coalition partners</div>
        <p className="text-[0.68rem] text-foreground/45 mt-2 leading-snug">LVCT Health, NairoBits Trust, AYARHEP, PSK, TIKO — each contributing domain expertise and clinical validation.</p>
      </div>
      <div className="bg-surface-light-foreground rounded-xl p-5 text-center">
        <div className="text-3xl font-extrabold text-primary leading-none">20</div>
        <div className="font-mono text-[0.6rem] text-foreground/55 uppercase tracking-wider mt-2">Young people co-designed</div>
        <p className="text-[0.68rem] text-foreground/45 mt-2 leading-snug">Ages 18–36, diverse backgrounds. Input shaped tone, topics, privacy features, and the chatbot's personality.</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p className="font-mono text-[0.6rem] text-primary uppercase tracking-widest mb-3">Key Insights</p>
        <div className="flex flex-col gap-2">
          {[
            { title: "Trust deficit", desc: "Young people don't trust Google for health info — they want verified, confidential sources." },
            { title: "Privacy is non-negotiable", desc: "Shared devices, cultural stigma, and fear of judgment mean privacy features are core, not optional." },
            { title: "Language matters", desc: "Clinical jargon creates distance. Conversational, warm language builds engagement." },
            { title: "Existing tools fail youth", desc: "Most SRHR chatbots are FAQ-based, not conversational. None are designed for Kenyan context." },
          ].map(item => (
            <div key={item.title} className="bug-card border-l-[3px] border-l-primary">
              <div className="text-xs font-bold text-surface-light-foreground mb-0.5">{item.title}</div>
              <div className="text-[0.67rem] text-text-subtle leading-snug">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="font-mono text-[0.6rem] text-primary uppercase tracking-widest mb-3">Research Methods</p>
        <div className="flex flex-col gap-2">
          {[
            "Systematic literature review of SRHR digital interventions",
            "Competitive analysis of 12+ existing health chatbots",
            "Partner stakeholder interviews and alignment workshops",
            "Youth focus groups and co-design sessions",
            "Expert content review with clinical health professionals",
          ].map((item, i) => (
            <div key={i} className="content-card flex items-start gap-2">
              <span className="text-[0.6rem] font-mono text-primary font-bold mt-0.5">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-xs text-text-subtle leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
