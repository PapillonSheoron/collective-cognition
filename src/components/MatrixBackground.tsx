import { useEffect, useState } from 'react';

export const MatrixBackground = () => {
  const [chars, setChars] = useState<Array<{
    id: number;
    char: string;
    x: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const characters = '01AGENT_MINDαβγδεζηθικλμνξοπρστυφχψω∞∆∇∴∵∶∷≡≈≠≤≥⊂⊃⊆⊇⊕⊗⊙⌈⌉⌊⌋⟨⟩';
    const newChars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      char: characters[Math.floor(Math.random() * characters.length)],
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }));

    setChars(newChars);

    const interval = setInterval(() => {
      setChars(prev => prev.map(char => ({
        ...char,
        char: characters[Math.floor(Math.random() * characters.length)],
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="matrix-bg">
      {chars.map((char) => (
        <div
          key={char.id}
          className="matrix-char"
          style={{
            left: `${char.x}%`,
            animationDelay: `${char.delay}s`,
            animationDuration: `${char.duration}s`,
          }}
        >
          {char.char}
        </div>
      ))}
    </div>
  );
};