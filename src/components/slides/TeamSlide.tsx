interface TeamMember {
  name: string;
  title: string;
  role: string;
  desc: string;
  initials: string;
  headerColor: string;
  quote?: string;
  quoteLabel?: string;
  image?: string;
}

const team: TeamMember[] = [
  {
    name: "Naijeria Toweett", title: "Product Lead", role: "Lead Product Manager & Engineer",
    desc: "Digital media and tech professional with six years building user-driven solutions for young people across Africa. Founded Mama Tech Limited in 2019. Full-stack trained at CodeOp, Barcelona. Ruby Central board member and lead of WNB.rb Africa Chapter.",
    initials: "NT", headerColor: "bg-background",
    image: "/images/Naijeria.JPG",
  },
  {
    name: "Felix Kuria", title: "AI & ML Engineer", role: "Full Stack Developer & AI Solutions Architect",
    desc: "Builds intelligent, user-centered systems at Bayes — designing AI agents that automate workflows and support data-driven decisions. Passionate about applying AI responsibly to improve education, health, and governance.",
    initials: "FK", headerColor: "bg-accent",
    quote: "I applied prompt engineering to guide the LLM toward respectful, non-judgemental responses — and evaluated the model for bias across gender, sexuality, and cultural contexts specific to SRHR.",
    quoteLabel: "On ethical AI & standards",
    image: "/images/Felix.jpg",
  },
  {
    name: "Linah Muhonja", title: "Frontend Developer", role: "Full Stack Developer",
    desc: "Builds end-to-end web applications using React, Node.js, and PostgreSQL. Specialises in responsive design and efficient architecture. Currently expanding into AI integration to stay at the forefront of tech innovation.",
    initials: "LM", headerColor: "bg-[#1565c0]",
    quote: "Clarity in instructions, Google for research blockers, and a functioning team. My teammates were instrumental in getting the right information at the right time.",
    quoteLabel: "On what made execution possible",
    image: "/images/Linah_Crop.png",
  },
  {
    name: "Veronicah Kimani", title: "UX/UI Designer", role: "UI Design & User Experience Lead",
    desc: "Leads UI design for both the Rafikey website and chatbot back office system. Strong foundation in user-centred design — researches user needs and translates them into clean, responsive, and intuitive interfaces. Engaged on a needs basis.",
    initials: "VK", headerColor: "bg-primary",
    quote: "Working on Rafikey felt purposeful. Young people seek advice from things that don't necessarily know the real them — because that makes it easier to communicate.",
    quoteLabel: "On designing for empathy",
    image: "/images/Veronicah.jpg",
  },
  {
    name: "Gefiune Ombati", title: "Brand Designer", role: "Brand Identity Designer",
    desc: "Led the brand identity development for Rafikey — translating its mission of support and trust into a tangible visual soul. Created the logo, colour palette, and typographic standards. Passionate about using design to build trust and empower communities. Engaged on a needs basis.",
    initials: "GO", headerColor: "bg-secondary",
    quote: "How do we make an app about sexual health feel less like a medical tool and more like a trusted friend? Everything — the logo, colours, typography — had to send a message of safety from the very first glance.",
    quoteLabel: "On the brand intent",
    image: "/images/G. Ombati Profile.jpg",
  },
  {
    name: "Anthony Okoth", title: "Project Manager", role: "Project Manager",
    desc: "Oversees day-to-day coordination, task tracking, troubleshooting, and timely reporting. Over a decade of experience in communications and project management across health, human rights, and climate change — with a footprint in eight African countries, Baltimore, and the Netherlands.",
    initials: "AO", headerColor: "bg-[#2e7d32]",
    quote: "Onboarding all team members to GitHub and Notion earlier in the project cycle would have enabled seamless collaboration from the very start.",
    quoteLabel: "On process improvement",
    image: "/images/Anthony_Crop.png",
  },
  {
    name: "Ingrid Kalsvik", title: "Project Admin", role: "Personal Assistant & Project Admin",
    desc: "Personal Assistant to the founder at MamaTech. Manages schedules, streamlines workflows, and ensures smooth execution across operations and communications. Brings a growing curiosity for technology and a strong passion for social impact — particularly initiatives that uplift women and marginalised communities.",
    initials: "IK", headerColor: "bg-[#9c27b0]",
    quote: "A clear sense of direction, strong collaboration, and tools like shared folders and dashboards — plus the overall sense of purpose made it easy to stay motivated knowing what was at stake.",
    quoteLabel: "On what made execution possible",
    image: "/images/Ingrid.jpg",
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
            {m.image ? (
              <img src={m.image} alt={m.name} className="w-14 h-14 rounded-full object-cover border-2 border-foreground/25 flex-shrink-0" />
            ) : (
              <div className="w-14 h-14 rounded-full bg-foreground/20 border-2 border-foreground/25 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold">{m.initials}</span>
              </div>
            )}
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
