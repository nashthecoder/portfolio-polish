import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NAV_LABELS = [
  "Intro", "Overview", "Context", "Personas", "Research",
  "Strategy", "Design", "Testing", "Outcomes", "Team", "Next"
];

interface SlideNavProps {
  currentPage: number;
  totalPages: number;
  onNavigate: (page: number) => void;
}

export const SlideNav = ({ currentPage, totalPages, onNavigate }: SlideNavProps) => {
  return (
    <>
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border h-[52px] px-4 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-extrabold tracking-tight">🐘</span>
          <span className="font-mono text-xs font-bold tracking-wide">AskRafikey</span>
        </div>

        <div className="hidden md:flex overflow-hidden rounded-lg border border-input">
          {NAV_LABELS.map((label, i) => (
            <button
              key={label}
              onClick={() => onNavigate(i)}
              className={cn(
                "bg-transparent border-none text-foreground/45 font-mono text-[0.6rem] uppercase tracking-wider px-3 py-2 cursor-pointer transition-all border-r border-input last:border-r-0 whitespace-nowrap hover:bg-foreground/5 hover:text-foreground/80",
                currentPage === i && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="font-mono text-[0.6rem] text-foreground/30">
          {currentPage + 1} / {totalPages}
        </div>
      </nav>

      {/* Bottom Nav */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
        <button
          onClick={() => onNavigate(currentPage - 1)}
          disabled={currentPage === 0}
          className="w-9 h-9 rounded-full bg-foreground/5 border border-input backdrop-blur-md flex items-center justify-center transition-all hover:bg-primary/40 hover:border-primary disabled:opacity-20 disabled:cursor-default"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5 pointer-events-none">
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                currentPage === i
                  ? "w-4 bg-primary"
                  : "w-1.5 bg-foreground/20"
              )}
            />
          ))}
        </div>

        <button
          onClick={() => onNavigate(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          className="w-9 h-9 rounded-full bg-foreground/5 border border-input backdrop-blur-md flex items-center justify-center transition-all hover:bg-primary/40 hover:border-primary disabled:opacity-20 disabled:cursor-default"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </>
  );
};
