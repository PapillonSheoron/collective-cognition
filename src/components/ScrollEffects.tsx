import { useEffect, useState } from 'react';

interface ScrollEffectsProps {
  children: React.ReactNode;
}

export const ScrollEffects = ({ children }: ScrollEffectsProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Create ripple effect on click
  const handleClick = (e: React.MouseEvent) => {
    const ripple = document.createElement('div');
    const rect = e.currentTarget.getBoundingClientRect();
    const size = 60;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.className = 'ripple-effect';

    e.currentTarget.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <div
      className="relative min-h-screen"
      onClick={handleClick}
    >
      {/* Dynamic background that follows mouse */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20 transition-all duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), 0.15), transparent 50%)`
        }}
      />
      
      {/* Floating particles that react to scroll */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="fixed w-2 h-2 bg-primary/30 rounded-full pointer-events-none"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (scrollY * 0.1 * (i + 1)) % 80}%`,
            animation: `float-${i} ${3 + i}s ease-in-out infinite`,
            transform: `translateY(${Math.sin(scrollY * 0.01 + i) * 20}px)`
          }}
        />
      ))}
      
      {children}
      
      {/* Scroll indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-muted/20 rounded-full overflow-hidden z-50">
        <div 
          className="w-full bg-gradient-to-b from-primary to-accent rounded-full transition-all duration-300"
          style={{
            height: `${Math.min((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
          }}
        />
      </div>
    </div>
  );
};