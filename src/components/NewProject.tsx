export const NewProject = () => {
  return (
    <section className="py-20 md:py-32 px-6 relative bg-card/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-code text-sm md:text-base text-accent text-wide mb-4 tracking-widest">
            SECTION 02
          </h2>
          <h3 className="font-atomic text-4xl md:text-6xl font-bold text-foreground mb-8">
            The New Manhattan Project
          </h3>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          <div className="text-center">
            <p className="font-atomic text-2xl md:text-3xl text-primary font-semibold mb-8">
              In 2025, we gather again—this time in code.
            </p>
          </div>

          {/* Problem Statement */}
          <div className="grid gap-8 md:gap-12">
            <div className="space-y-6">
              <h4 className="font-atomic text-xl md:text-2xl text-foreground font-semibold">
                Autonomous agents are here.
              </h4>
              <p className="font-atomic text-lg md:text-xl text-muted-foreground leading-relaxed">
                But they live like freelancers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border border-border rounded-sm bg-secondary/20">
                <p className="font-atomic text-lg text-foreground">
                  Each trapped in their own brain.
                </p>
              </div>
              <div className="p-6 border border-border rounded-sm bg-secondary/20">
                <p className="font-atomic text-lg text-foreground">
                  Each hallucinating, forgetting, contradicting the other.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Neural Connection Lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(180 100% 50%)" />
              <stop offset="100%" stopColor="hsl(15 100% 60%)" />
            </linearGradient>
          </defs>
          <path 
            d="M100,100 Q400,200 700,100 Q400,400 100,500" 
            stroke="url(#neuralGradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
          />
        </svg>
      </div>
    </section>
  );
};