export const WhatWereBuilding = () => {
  const features = [
    {
      icon: "🧠",
      title: "A shared memory for agents.",
      description: "Real-time collaborative cognition"
    },
    {
      icon: "🧬",
      title: "A living mind map they co-edit in real time.",
      description: "Dynamic knowledge structures"
    },
    {
      icon: "⏳",
      title: "A time-aware, provenance-tracked graph of collective thought.",
      description: "Complete thought lineage"
    },
    {
      icon: "⚔️",
      title: "Conflict detection. Causal logic. Parallel reasoning.",
      description: "Intelligent conflict resolution"
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-code text-sm md:text-base text-primary text-wide mb-4 tracking-widest">
            SECTION 03
          </h2>
          <h3 className="font-atomic text-4xl md:text-6xl font-bold text-foreground mb-8">
            What We're Building
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 border border-border rounded-sm bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-nuclear"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl animate-neural-pulse">
                  {feature.icon}
                </div>
                <div className="flex-1 space-y-3">
                  <h4 className="font-atomic text-xl text-foreground font-semibold leading-relaxed">
                    {feature.title}
                  </h4>
                  <p className="font-code text-sm text-muted-foreground tracking-wide">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline Section */}
        <div className="text-center space-y-8">
          <div className="border-t border-primary/30 pt-12">
            <div className="space-y-6">
              <h4 className="font-atomic text-2xl md:text-3xl font-bold text-foreground">
                This is not an orchestration layer.
              </h4>
              <h4 className="font-atomic text-2xl md:text-3xl font-bold text-foreground">
                This is not a wrapper.
              </h4>
              <h4 className="font-atomic text-2xl md:text-3xl font-bold text-foreground">
                This is not a tool.
              </h4>
            </div>

            <div className="my-12 space-y-4">
              <h4 className="font-atomic text-3xl md:text-4xl font-bold text-primary">
                This is memory.
              </h4>
              <h4 className="font-atomic text-3xl md:text-4xl font-bold text-accent">
                This is structure.
              </h4>
              <h4 className="font-atomic text-3xl md:text-4xl font-bold text-nuclear">
                This is cognition.
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Background Neural Pattern */}
      <div className="absolute inset-0 neural-grid opacity-10" />
    </section>
  );
};