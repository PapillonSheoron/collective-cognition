import { useEffect, useState, useCallback } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

export const InteractiveParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const createParticle = useCallback((x: number, y: number) => {
    return {
      id: Math.random(),
      x,
      y,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      life: 100,
      maxLife: 100,
    };
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const rect = document.documentElement.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / window.innerWidth) * 100;
    const y = ((e.clientY - rect.top) / window.innerHeight) * 100;
    
    setMousePos({ x, y });

    // Create particles on mouse movement
    if (Math.random() < 0.3) {
      setParticles(prev => [...prev.slice(-20), createParticle(x, y)]);
    }
  }, [createParticle]);

  const handleClick = useCallback((e: MouseEvent) => {
    const rect = document.documentElement.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / window.innerWidth) * 100;
    const y = ((e.clientY - rect.top) / window.innerHeight) * 100;
    
    // Create burst of particles on click
    const burstParticles = Array.from({ length: 8 }, () => createParticle(x, y));
    setParticles(prev => [...prev.slice(-15), ...burstParticles]);
  }, [createParticle]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, [handleMouseMove, handleClick]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            life: particle.life - 1,
            vx: particle.vx * 0.99,
            vy: particle.vy * 0.99,
          }))
          .filter(particle => particle.life > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Mouse follower */}
      <div
        className="absolute w-4 h-4 rounded-full border border-primary/50 pointer-events-none transition-all duration-100"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Interactive particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.life / particle.maxLife,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};