import { Target } from "lucide-react";

interface PersonaData {
  name: string;
  subtitle: string;
  age: string;
  location: string;
  device: string;
  trait: string;
  desc: string;
  designImpact: string;
  headerColor: string;
  isMvp?: boolean;
  initials: string;
}

const personas: PersonaData[] = [
  {
    name: "TWIGA", subtitle: "Male · No/Low Tech", initials: "TW",
    age: "19 yrs", location: "Tana River", device: "Feature Phone", trait: "Married & Expecting",
    desc: "Gets SRHR info from his wife and peers. Low risk perception. Needs culturally familiar language.",
    designImpact: "Offline content · Animations · Swahili + Borana roadmap · Regional case studies",
    headerColor: "bg-background",
  },
  {
    name: "KAKA", subtitle: "Male · Smartphone", initials: "KK", isMvp: true,
    age: "22 yrs", location: "Nairobi", device: "Smartphone", trait: "Student",
    desc: "Uses TikTok and WhatsApp for health info. High digital fluency, low clinic trust.",
    designImpact: "Conversational UI · Quick replies · Privacy mode · Social-style UX",
    headerColor: "bg-accent",
  },
  {
    name: "AKOTH", subtitle: "Female · Smartphone", initials: "AK", isMvp: true,
    age: "20 yrs", location: "Kisumu", device: "Smartphone", trait: "Working",
    desc: "Searches Google for health info but doesn't trust results. Wants verified, private answers.",
    designImpact: "Verified content badges · Clinic finder · Crisis escalation · Discreet UI",
    headerColor: "bg-primary",
  },
  {
    name: "AISHA", subtitle: "Female · No/Low Tech", initials: "AI",
    age: "17 yrs", location: "Garissa", device: "Shared Phone", trait: "In School",
    desc: "No private device access. Relies on peers and teachers. Cultural barriers to discussing SRHR.",
    designImpact: "USSD channel · Offline mode · Multilingual · Community health worker integration",
    headerColor: "bg-secondary",
  },
];

export const PersonasSlide = () => (
  <div className="slide-inner-white">
    <div className="section-label">User Research</div>
    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-surface-light-foreground mb-2">
      Four personas. One platform.
    </h2>
    <p className="text-text-subtle text-sm font-light max-w-[680px] mb-3">
      Research-grounded personas representing the diversity of young Kenyans Rafikey was built to serve.
    </p>

    <div className="bg-secondary/10 border border-secondary rounded-lg px-4 py-3 flex items-start gap-3 mb-6 max-w-[680px]">
      <Target className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
      <p className="text-xs text-surface-light-foreground/80 leading-relaxed">
        <strong>MVP Design Focus:</strong> The initial product was designed primarily for <strong>Kaka</strong> and <strong>Akoth</strong> — urban, smartphone-owning young people. Twiga and Aisha represent Phase 2 expansion targets.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {personas.map(p => (
        <div
          key={p.name}
          className={`rounded-2xl overflow-hidden border flex flex-col relative ${p.isMvp ? 'border-primary shadow-[0_0_0_2px_hsl(var(--primary))]' : 'border-border-light'}`}
        >
          {p.isMvp && (
            <div className="absolute top-3 right-3 bg-primary text-primary-foreground font-mono text-[0.55rem] uppercase tracking-wider px-2 py-0.5 rounded-full z-10">
              MVP Target
            </div>
          )}
          <div className={`${p.headerColor} p-5`}>
            <div className="w-16 h-16 rounded-full bg-foreground/20 border-2 border-foreground/25 flex items-center justify-center mb-3">
              <span className="text-lg font-bold">{p.initials}</span>
            </div>
            <div className="text-base font-extrabold tracking-wide">{p.name}</div>
            <div className="font-mono text-[0.58rem] text-foreground/55 uppercase mt-0.5">{p.subtitle}</div>
          </div>
          <div className="p-4 bg-surface-light flex-1 flex flex-col gap-2">
            <div className="flex flex-wrap gap-1">
              {[p.age, p.location, p.device, p.trait].map(tag => (
                <span key={tag} className="text-[0.6rem] bg-accent/10 text-surface-light-foreground px-2 py-0.5 rounded-full">{tag}</span>
              ))}
            </div>
            <p className="text-[0.73rem] text-text-subtle leading-relaxed">{p.desc}</p>
            <div className="border-t border-border-light pt-2 mt-auto">
              <div className="text-[0.62rem] font-bold text-primary mb-1">Design Impact</div>
              <p className="text-[0.68rem] text-surface-light-foreground/80 leading-snug">{p.designImpact}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
