import { ExternalLink } from "lucide-react";

export const IntroSlide = () => (
  <div className="slide-inner flex flex-col justify-center items-center text-center min-h-screen">
    <div className="mb-8">
      <span className="text-6xl mb-4 block">🐘</span>
    </div>
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 max-w-3xl">
      AskRafikey
    </h1>
    <p className="text-foreground/50 text-lg md:text-xl font-light max-w-2xl mb-2">
      Kenya's first AI-powered SRHR chatbot for young people.
    </p>
    <p className="text-foreground/30 text-sm max-w-xl mb-8">
      A product case study — from research to live launch.
    </p>
    <div className="flex flex-wrap gap-3 justify-center mb-10">
      {["Product Management", "AI/LLM", "User Research", "Coalition Building"].map(tag => (
        <span key={tag} className="font-mono text-[0.6rem] uppercase tracking-wider px-3 py-1.5 rounded-full border border-input text-foreground/50">
          {tag}
        </span>
      ))}
    </div>
    <a
      href="https://askrafikey.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
    >
      <ExternalLink className="w-3.5 h-3.5" />
      Visit askrafikey.com
    </a>
  </div>
);
