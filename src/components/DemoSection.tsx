import { Button } from "@/components/ui/button";

export const DemoSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-code text-sm md:text-base text-primary text-wide mb-4 tracking-widest">
            SECTION 05
          </h2>
          <h3 className="font-atomic text-4xl md:text-6xl font-bold text-foreground mb-8">
            Demo
          </h3>
        </div>

        {/* Demo Content */}
        <div className="space-y-12">
          <div className="p-8 border border-primary/30 rounded-sm bg-card/50 backdrop-blur-sm">
            <div className="mb-8">
              <h4 className="font-atomic text-2xl md:text-3xl font-semibold text-foreground mb-4">
                🔬 Watch the Demo
              </h4>
              <p className="font-atomic text-xl text-muted-foreground leading-relaxed">
                Three agents. Two conflicting facts. One final truth.
              </p>
            </div>

            <div className="space-y-6">
              <p className="font-atomic text-lg text-foreground leading-relaxed">
                Watch agents write a report, catch a contradiction, and resolve it—without human intervention.
              </p>
              
              {/* Demo Visualization */}
              <div className="grid md:grid-cols-3 gap-6 py-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center border border-primary/50">
                    <span className="text-primary font-code font-bold">A1</span>
                  </div>
                  <p className="font-code text-sm text-muted-foreground">Agent 1: Writing</p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center border border-accent/50">
                    <span className="text-accent font-code font-bold">A2</span>
                  </div>
                  <p className="font-code text-sm text-muted-foreground">Agent 2: Contradicting</p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center animate-atomic-glow">
                    <span className="text-primary-foreground font-code font-bold">A3</span>
                  </div>
                  <p className="font-code text-sm text-foreground">Agent 3: Resolving</p>
                </div>
              </div>

              <Button 
                className="bg-primary hover:bg-primary/80 text-primary-foreground font-code text-lg px-8 py-6 shadow-nuclear"
                size="lg"
              >
                → Join Early Access
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Connection Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          <defs>
            <linearGradient id="demoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(180 100% 50%)" />
              <stop offset="50%" stopColor="hsl(15 100% 60%)" />
              <stop offset="100%" stopColor="hsl(180 100% 50%)" />
            </linearGradient>
          </defs>
          <path 
            d="M200,300 L400,300 L600,300" 
            stroke="url(#demoGradient)" 
            strokeWidth="3" 
            fill="none"
            className="animate-pulse"
          />
        </svg>
      </div>
    </section>
  );
};