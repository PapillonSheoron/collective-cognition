export const FeatureTable = () => {
  const features = [
    {
      icon: "🧠",
      feature: "Real-time memory",
      description: "Multiple AI agents read/write simultaneously"
    },
    {
      icon: "🔄",
      feature: "Conflict resolution",
      description: "Operational transform logic resolves overlapping edits"
    },
    {
      icon: "🌐",
      feature: "Graph + vector hybrid",
      description: "Reasoning meets retrieval"
    },
    {
      icon: "🧬",
      feature: "Provenance",
      description: "Every edit traceable by who, when, and why"
    },
    {
      icon: "🧑‍🤝‍🧑",
      feature: "Multi-agent native",
      description: "Not designed for humans. Designed for swarms."
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 relative bg-secondary/10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-code text-sm md:text-base text-accent text-wide mb-4 tracking-widest">
            SECTION 04
          </h2>
          <h3 className="font-atomic text-4xl md:text-6xl font-bold text-foreground mb-8">
            What It Does
          </h3>
        </div>

        {/* Feature Table */}
        <div className="space-y-4">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 p-6 border-b border-primary/30">
            <div className="col-span-1"></div>
            <div className="col-span-4">
              <h4 className="font-code text-primary text-wide tracking-wider text-sm">
                FEATURE
              </h4>
            </div>
            <div className="col-span-7">
              <h4 className="font-code text-primary text-wide tracking-wider text-sm">
                DESCRIPTION
              </h4>
            </div>
          </div>

          {/* Table Rows */}
          {features.map((item, index) => (
            <div 
              key={index}
              className="grid grid-cols-12 gap-4 p-6 border-b border-border/30 hover:bg-card/30 transition-colors duration-300 group"
            >
              <div className="col-span-1 flex items-center">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
              </div>
              <div className="col-span-4 flex items-center">
                <h5 className="font-atomic text-lg text-foreground font-semibold">
                  {item.feature}
                </h5>
              </div>
              <div className="col-span-7 flex items-center">
                <p className="font-atomic text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};