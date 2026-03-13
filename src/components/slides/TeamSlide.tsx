interface TeamMember {
  name: string;
  title: string;
  role: string;
  desc: string;
  initials: string;
  headerColor: string;
  quote?: string;
  quoteLabel?: string;
}

const team: TeamMember[] = [
  {
    name: "Naijeria Toweett", title: "Project Lead", role: "Lead Product Manager & Engineer",
    desc: "Digital media and tech professional with six years building user-driven solutions for young people across Africa. Founded Mama Tech Limited in 2019.",
    initials: "NT", headerColor: "bg-background",
  },
  {
    name: "Maxwell Ochieng", title: "AI/ML Engineer", role: "AI Engineer & Prompt Architect",
    desc: "Architected the chatbot's conversational AI layer — from prompt engineering and guardrail design to context memory and crisis detection logic.",
    initials: "MO", headerColor: "bg-accent",
    quote: "The hardest part wasn't making the AI respond — it was making it respond like someone who cares.",
    quoteLabel: "On designing empathy into AI",
  },
  {
    name: "Veronicah Kimani", title: "UX/UI Designer", role: "UX/UI & Research Designer",
    desc: "Designed the full chatbot experience — from persona development and user flows to the final interface. Led user testing sessions with young people in Nairobi.",
    initials: "VK", headerColor: "bg-primary",
    quote: "We had to design for trust before we could design for engagement.",
    quoteLabel: "On the design approach",
  },
  {
    name: "Gefiune Ombati", title: "Brand Designer", role: "Brand Identity Designer",
    desc: "Led the brand identity development for Rafikey — translating its mission of support and trust into a tangible visual soul.",
    initials: "GO", headerColor: "bg-secondary",
    quote: "How do we make an app about sexual health feel less like a medical tool and more like a trusted friend?",
    quoteLabel: "On the brand intent",
  },
  {
    name: "Anthony Okoth", title: "Project Manager", role: "Project Manager",
    desc: "Oversees day-to-day coordination, task tracking, troubleshooting, and timely reporting. Over a decade of experience across health and human rights.",
    initials: "AO", headerColor: "bg-[#2e7d32]",
    quote: "Onboarding all team members to GitHub and Notion earlier would have enabled seamless collaboration from the very start.",
    quoteLabel: "On process improvement",
  },
  {
    name: "Loise Mwangi", title: "Content Strategist", role: "Content Strategist & SRHR Writer",
    desc: "Wrote the verified SRHR content across all 18 topics — ensuring clinical accuracy while maintaining a warm, youth-friendly tone.",
    initials: "LM", headerColor: "bg-[#1565c0]",
    quote: "Every word had to earn trust. In SRHR, a wrong phrase doesn't just confuse — it can harm.",
    quoteLabel: "On content standards",
  },
];

export const TeamSlide = () => (
  <div className="slide-inner-light">
    <div className="section-label">The Team</div>
    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-surface-light-foreground mb-2">
      The people who built it.
    </h2>
    <p className="text-text-subtle text-sm font-light max-w-[680px] mb-8">
      Engineers, designers, researchers, and coordinators — each bringing craft and purpose to Kenya's first youth-focused AI SRHR chatbot.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {team.map(m => (
        <div key={m.name} className="rounded-2xl overflow-hidden border border-border-light bg-surface-light flex flex-col">
          <div className={`${m.headerColor} p-5 flex items-center gap-3`}>
            <div className="w-14 h-14 rounded-full bg-foreground/20 border-2 border-foreground/25 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold">{m.initials}</span>
            </div>
            <div>
              <div className="text-sm font-extrabold leading-tight">{m.name}</div>
              <div className="font-mono text-[0.58rem] text-foreground/60 uppercase tracking-wider mt-0.5">{m.title}</div>
            </div>
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <div className="font-mono text-[0.58rem] text-primary uppercase tracking-wider mb-1">Role on Rafikey</div>
            <div className="text-xs font-semibold text-surface-light-foreground mb-2">{m.role}</div>
            <p className="text-xs text-text-subtle leading-relaxed flex-1">{m.desc}</p>
            {m.quote && (
              <div className="border-t border-border-light pt-3 mt-3">
                <p className="text-xs text-surface-light-foreground/70 italic leading-relaxed mb-1">"{m.quote}"</p>
                <div className="font-mono text-[0.58rem] text-primary uppercase tracking-wider">{m.quoteLabel}</div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);
