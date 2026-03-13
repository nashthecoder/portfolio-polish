import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NAV_LABELS = [
  "Intro", "Overview", "Context", "Personas", "Research",
  "Design", "Testing", "Outcomes", "Team", "Next"
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e5e7eb] h-[52px] px-4 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/images/Rafikey-logo-C9jbExiv (1).png" alt="Rafikey" className="h-20 w-auto" />
        </div>

        <div className="hidden md:flex overflow-hidden rounded-lg border border-[#e5e7eb]">
          {NAV_LABELS.map((label, i) => (
            <button
              key={label}
              onClick={() => onNavigate(i)}
              className={cn(
                "bg-transparent border-none text-[#374151] font-mono text-[0.65rem] uppercase tracking-wider px-3 py-2 cursor-pointer transition-all border-r border-[#e5e7eb] last:border-r-0 whitespace-nowrap hover:bg-[#f3f4f6]",
                currentPage === i && "bg-[#0f172a] text-white hover:bg-[#0f172a]"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="font-mono text-[0.65rem] text-[#6b7280]">
          {currentPage + 1} / {totalPages}
        </div>
      </nav>

      {/* Bottom Nav */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
        <button
          onClick={() => onNavigate(currentPage - 1)}
          disabled={currentPage === 0}
          aria-label="Previous slide"
          className="w-9 h-9 rounded-full bg-white border border-[#e5e7eb] shadow-sm flex items-center justify-center transition-all hover:bg-[#f3f4f6] hover:border-[#d1d5db] disabled:opacity-20 disabled:cursor-default"
        >
          <ChevronLeft className="w-4 h-4 text-[#374151]" />
        </button>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => onNavigate(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={currentPage === i ? "step" : undefined}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 border-0 cursor-pointer p-0",
                currentPage === i
                  ? "w-4 bg-[#0f172a]"
                  : "w-1.5 bg-[#d1d5db] hover:bg-[#9ca3af]"
              )}
            />
          ))}
        </div>

        <button
          onClick={() => onNavigate(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          aria-label="Next slide"
          className="w-9 h-9 rounded-full bg-white border border-[#e5e7eb] shadow-sm flex items-center justify-center transition-all hover:bg-[#f3f4f6] hover:border-[#d1d5db] disabled:opacity-20 disabled:cursor-default"
        >
          <ChevronRight className="w-4 h-4 text-[#374151]" />
        </button>
      </div>
    </>
  );
};
