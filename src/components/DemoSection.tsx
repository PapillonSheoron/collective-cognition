import { Button } from "@/components/ui/button";
import { InteractiveAgentDemo } from "./InteractiveAgentDemo";
import { ScrollTriggerAnimation } from "./ScrollTriggerAnimation";

export const DemoSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 relative parallax-section">
      <div className="parallax-content">
        <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <ScrollTriggerAnimation>
          <div className="mb-16">
            <h2 className="font-code text-sm md:text-base text-primary text-wide mb-4 tracking-widest">
              SECTION 05
            </h2>
            <h3 className="font-atomic text-4xl md:text-6xl font-bold text-foreground mb-8 hover-lift">
              Demo
            </h3>
          </div>
        </ScrollTriggerAnimation>

        {/* Demo Content */}
        <ScrollTriggerAnimation delay={200}>
          <div className="space-y-12">
            <div className="p-8 border border-primary/30 rounded-sm bg-card/50 backdrop-blur-sm hover-lift">
              <div className="mb-8">
                <h4 className="font-atomic text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  🔬 Watch the Demo
                </h4>
                <p className="font-atomic text-xl text-muted-foreground leading-relaxed">
                  Three agents. Two conflicting facts. One final truth.
                </p>
              </div>

              <div className="space-y-8">
                <p className="font-atomic text-lg text-foreground leading-relaxed">
                  Watch agents write a report, catch a contradiction, and resolve it—without human intervention.
                </p>
                
                {/* Interactive Demo */}
                <InteractiveAgentDemo />

                <Button 
                  className="btn-nuclear text-primary-foreground font-code text-lg px-8 py-6 shadow-nuclear ripple-effect w-full md:w-auto"
                  size="lg"
                >
                  → Join Early Access
                </Button>
              </div>
            </div>
          </div>
        </ScrollTriggerAnimation>
        </div>
      </div>

      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          <defs>
            <linearGradient id="demoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(180 100% 50%)" />
              <stop offset="50%" stopColor="hsl(15 100% 60%)" />
              <stop offset="100%" stopColor="hsl(180 100% 50%)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Multiple flowing paths */}
          <path 
            d="M100,200 Q400,100 700,300 Q400,500 100,400" 
            stroke="url(#demoGradient)" 
            strokeWidth="2" 
            fill="none"
            filter="url(#glow)"
            className="animate-pulse"
          />
          <path 
            d="M200,300 L400,300 L600,300" 
            stroke="url(#demoGradient)" 
            strokeWidth="3" 
            fill="none"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <path 
            d="M150,150 Q400,250 650,200" 
            stroke="url(#demoGradient)" 
            strokeWidth="2" 
            fill="none"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: '2s' }}
          />
        </svg>
      </div>
    </section>
  );
};