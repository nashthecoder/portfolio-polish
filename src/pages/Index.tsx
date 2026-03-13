import { useCallback, useEffect, useState } from "react";
import { SlideNav } from "@/components/SlideNav";
import { IntroSlide } from "@/components/slides/IntroSlide";
import { OverviewSlide } from "@/components/slides/OverviewSlide";
import { ContextSlide } from "@/components/slides/ContextSlide";
import { PersonasSlide } from "@/components/slides/PersonasSlide";
import { ResearchSlide } from "@/components/slides/ResearchSlide";
import { DesignSlide } from "@/components/slides/DesignSlide";
import { TestingSlide } from "@/components/slides/TestingSlide";
import { OutcomesSlide } from "@/components/slides/OutcomesSlide";
import { TeamSlide } from "@/components/slides/TeamSlide";
import { NextSlide } from "@/components/slides/NextSlide";
import { cn } from "@/lib/utils";

const slides = [
  IntroSlide,
  OverviewSlide,
  ContextSlide,
  PersonasSlide,
  ResearchSlide,
  DesignSlide,
  TestingSlide,
  OutcomesSlide,
  TeamSlide,
  NextSlide,
];

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const goTo = useCallback((n: number) => {
    if (n < 0 || n >= slides.length) return;
    setCurrentPage(n);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(currentPage + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(currentPage - 1);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, goTo]);

  return (
    <div className="h-screen overflow-hidden bg-background">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md">
        Skip to content
      </a>
      <SlideNav currentPage={currentPage} totalPages={slides.length} onNavigate={goTo} />

      <main id="main-content" role="main">
        {slides.map((SlideComponent, i) => (
          <div
            key={i}
            className={cn("page-slide", currentPage === i && "active")}
          >
            <SlideComponent />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Index;
