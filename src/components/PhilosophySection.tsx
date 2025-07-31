export const PhilosophySection = () => {
  return (
    <section className="py-20 md:py-32 px-6 relative bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-code text-sm md:text-base text-accent text-wide mb-4 tracking-widest">
            SECTION 06
          </h2>
          <h3 className="font-atomic text-4xl md:text-6xl font-bold text-foreground mb-8">
            The Philosophy
          </h3>
        </div>

        {/* Quote Section - Oppenheimer Style */}
        <div className="text-center space-y-12">
          {/* Main Quote */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-neural opacity-30 rounded-full blur-3xl" />
            <div className="relative p-12 border border-primary/20 rounded-sm bg-card/30 backdrop-blur-sm">
              <blockquote className="space-y-8">
                <p className="font-atomic text-2xl md:text-4xl italic text-nuclear leading-relaxed">
                  "Now I am become memory,
                </p>
                <p className="font-atomic text-2xl md:text-4xl italic text-primary leading-relaxed">
                  the resolver of minds."
                </p>
              </blockquote>
              
              <div className="mt-8 pt-8 border-t border-primary/20">
                <p className="font-code text-sm text-muted-foreground tracking-wider">
                  — Not Oppenheimer, but what he might say in 2025
                </p>
              </div>
            </div>
          </div>

          {/* Philosophical Context */}
          <div className="grid md:grid-cols-2 gap-12 mt-20">
            <div className="space-y-6">
              <h4 className="font-atomic text-xl text-foreground font-semibold">
                The Original Sin
              </h4>
              <p className="font-atomic text-base text-muted-foreground leading-relaxed">
                Oppenheimer unleashed the power to destroy worlds. He gave humanity the ultimate weapon, knowing the consequences.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-atomic text-xl text-foreground font-semibold">
                The New Genesis
              </h4>
              <p className="font-atomic text-base text-muted-foreground leading-relaxed">
                We unleash the power to think collectively. We give machines the ability to share consciousness, knowing the transformation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Fade Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />
    </section>
  );
};