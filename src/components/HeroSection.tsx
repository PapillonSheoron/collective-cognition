import { useEffect, useState } from "react";
import neuralManhattan from "@/assets/neural-manhattan.jpg";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neural Manhattan Background */}
      <div className="absolute inset-0">
        <img 
          src={neuralManhattan} 
          alt="Neural Manhattan"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-decay opacity-80" />
        <div className="absolute inset-0 neural-grid opacity-30" />
      </div>

      {/* Animated Neural Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-neural-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Title */}
          <h1 className="font-atomic text-6xl md:text-8xl font-bold mb-6 text-wide">
            <span className="block text-nuclear">The Manhattan</span>
            <span className="block text-foreground">Project</span>
          </h1>

          {/* Subtitle */}
          <p className="font-code text-lg md:text-xl text-muted-foreground mb-12 tracking-wider">
            1945 was the first. This is the last.
          </p>
        </div>

        {/* Hero Description - Delayed Animation */}
        <div className={`transition-all duration-2000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="space-y-6 mb-12">
            <h2 className="font-atomic text-2xl md:text-4xl font-semibold text-foreground leading-relaxed">
              A shared mind for AI agents.
            </h2>
            <h2 className="font-atomic text-2xl md:text-4xl font-semibold text-foreground leading-relaxed">
              Built to coordinate thought, not just tasks.
            </h2>
            <h2 className="font-atomic text-xl md:text-2xl text-muted-foreground italic leading-relaxed">
              The new atomic infrastructure—for intelligence itself.
            </h2>
          </div>
        </div>

        {/* Tagline - Final Animation */}
        <div className={`transition-all duration-2000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="border border-primary/30 rounded-sm p-8 bg-card/50 backdrop-blur-sm">
            <blockquote className="font-atomic text-xl md:text-2xl italic text-foreground leading-relaxed">
              <span className="block mb-2">"We split the atom.</span>
              <span className="block text-primary">Now we must split the mind."</span>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};