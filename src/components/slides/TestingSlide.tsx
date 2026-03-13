const stats = [
  { value: "84.6%", label: "Rated Very Helpful", bg: "bg-background", valueColor: "text-primary", labelColor: "text-white/90" },
  { value: "100%", label: "Friendly & Supportive", bg: "bg-primary", valueColor: "text-primary-foreground", labelColor: "text-white/90" },
  { value: "100%", label: "Language Easy to Understand", bg: "bg-accent", valueColor: "text-accent-foreground", labelColor: "text-white/90" },
  { value: "92.3%", label: "Want Gamification", bg: "bg-surface-light", valueColor: "text-surface-light-foreground", labelColor: "text-surface-light-foreground/70" },
];

const bugs = [
  { title: "Context memory bug", desc: "Bot forgot user identified as male when they mentioned a missed period → context retention sprint", color: "border-l-destructive" },
  { title: "Emotional depth gap", desc: "Harassment response felt like apology not action → crisis/trauma flows redesigned", color: "border-l-secondary" },
  { title: "No session history", desc: "No persistence between sessions → added to Phase 2 RAG roadmap", color: "border-l-primary" },
  { title: "Language gap", desc: "Sheng and multilingual requested → added to AI training roadmap", color: "border-l-accent" },
];

const gamification = [
  { label: "Fun facts & trivia unlockables", value: 92.3 },
  { label: "Mini-scenarios & roleplay", value: 69.2 },
  { label: "Daily SRHR quizzes", value: 61.5 },
  { label: "Badges & points", value: 61.5 },
  { label: "Safety tip cheat codes", value: 46.2 },
];

export const TestingSlide = () => (
  <div className="slide-inner-white">
    <div className="section-label">Testing & Validation</div>
    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-surface-light-foreground mb-2">
      5 rounds. 20 young people.<br />Real feedback, shipped.
    </h2>
    <p className="text-surface-light-foreground/70 text-sm font-light max-w-[680px] mb-6">
      Phase 1a — 13 participants, August 2025. Ages 18–36. 100% smartphone. 18 SRHR topics tested.
    </p>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
      {stats.map(s => (
        <div key={s.label} className={`stat-card ${s.bg}`}>
          <div className={`stat-value ${s.valueColor}`}>{s.value}</div>
          <div className={`stat-label ${s.labelColor}`}>{s.label}</div>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <p className="font-mono text-[0.65rem] text-primary uppercase tracking-widest mb-3">Bugs Actioned → Product Changes</p>
        <div className="flex flex-col gap-2">
          {bugs.map(b => (
            <div key={b.title} className={`bug-card border-l-[3px] ${b.color}`}>
              <div className="text-sm font-bold text-surface-light-foreground mb-0.5">{b.title}</div>
              <div className="text-sm text-surface-light-foreground/70 leading-snug">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-mono text-[0.65rem] text-primary uppercase tracking-widest mb-3">Gamification Appetite</p>
        <div className="flex flex-col gap-2 mb-4">
          {gamification.map(g => (
            <div key={g.label} className="content-card py-2 px-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-surface-light-foreground">{g.label}</span>
                <span className="text-sm font-bold text-primary">{g.value}%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${g.value}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="content-card border-l-[3px] border-l-primary">
          <p className="text-sm italic text-surface-light-foreground/80 leading-relaxed mb-2">
            "Also in this time and age, young people seek advice from things that don't necessarily know the real them — because that makes it easier to communicate."
          </p>
          <p className="font-mono text-[0.65rem] text-primary font-semibold">— Veronicah Kimani, UX/UI Designer</p>
        </div>
      </div>
    </div>
  </div>
);
