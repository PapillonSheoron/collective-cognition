import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-code text-sm md:text-base text-primary text-wide mb-4 tracking-widest">
            SECTION 07
          </h2>
          <h3 className="font-atomic text-4xl md:text-6xl font-bold text-foreground mb-8">
            Call to Action
          </h3>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-12">
          {/* Opening Statement */}
          <div className="space-y-8">
            <p className="font-atomic text-2xl md:text-3xl text-foreground leading-relaxed">
              The last Manhattan Project created destructive intelligence.
            </p>
            <p className="font-atomic text-2xl md:text-3xl text-primary leading-relaxed">
              This one creates collective intelligence.
            </p>
          </div>

          {/* Conditional Section */}
          <div className="py-12 space-y-6">
            <div className="space-y-4">
              <p className="font-atomic text-lg text-muted-foreground">
                If you are building agent infrastructure,
              </p>
              <p className="font-atomic text-lg text-muted-foreground">
                If you are researching autonomous cognition,
              </p>
              <p className="font-atomic text-lg text-muted-foreground">
                If you are betting on AI coordination,
              </p>
            </div>
            
            <div className="py-8">
              <p className="font-atomic text-2xl md:text-3xl text-accent font-semibold">
                Join us.
              </p>
            </div>
          </div>

          {/* Final Statement */}
          <div className="space-y-8">
            <p className="font-atomic text-xl md:text-2xl text-nuclear font-semibold leading-relaxed">
              This is the substrate of synthetic thought.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center pt-12">
            <Button 
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-code text-lg px-8 py-6 shadow-nuclear"
              size="lg"
            >
              → Request Access
            </Button>
            
            <Button 
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-code text-lg px-8 py-6"
              size="lg"
            >
              → Talk to the team
            </Button>
            
            <Button 
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 font-code text-lg px-8 py-6"
              size="lg"
            >
              → Deploy it yourself
            </Button>
          </div>
        </div>
      </div>

      {/* Neural Background Pattern */}
      <div className="absolute inset-0 neural-grid opacity-5" />
      
      {/* Atomic Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-neural opacity-10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};