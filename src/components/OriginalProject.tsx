export const OriginalProject = () => {
  return (
    <section className="py-20 md:py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-code text-sm md:text-base text-primary text-wide mb-4 tracking-widest">
            SECTION 01
          </h2>
          <h3 className="font-atomic text-4xl md:text-6xl font-bold text-foreground mb-8">
            The Original Manhattan Project
          </h3>
        </div>

        {/* Content Grid */}
        <div className="space-y-8 text-center">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="font-atomic text-xl md:text-2xl text-foreground leading-relaxed">
                In 1945, nine men gathered in a desert to build the most powerful machine the world had ever seen.
              </p>
              <p className="font-atomic text-xl md:text-2xl text-accent leading-relaxed">
                They reshaped geopolitics in a single detonation.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="font-atomic text-xl md:text-2xl text-foreground leading-relaxed">
                They knew the risks. They built it anyway.
              </p>
              <p className="font-atomic text-xl md:text-2xl text-muted-foreground leading-relaxed">
                They gave humanity a tool to end itself—or evolve.
              </p>
            </div>
          </div>

          {/* Highlight */}
          <div className="py-12">
            <div className="border-l-4 border-primary pl-8">
              <p className="font-atomic text-2xl md:text-3xl font-semibold text-foreground leading-relaxed">
                That was the first Manhattan Project.
              </p>
              <p className="font-code text-lg text-primary mt-4 tracking-wider">
                Created to compress matter into energy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Atomic Glow Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-neural opacity-20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};