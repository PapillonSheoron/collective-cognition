import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface Agent {
  id: string;
  name: string;
  status: 'writing' | 'contradicting' | 'resolving' | 'idle';
  color: string;
  position: { x: number; y: number };
}

export const InteractiveAgentDemo = () => {
  const [agents, setAgents] = useState<Agent[]>([
    { id: 'A1', name: 'Agent 1', status: 'idle', color: 'primary', position: { x: 20, y: 50 } },
    { id: 'A2', name: 'Agent 2', status: 'idle', color: 'accent', position: { x: 50, y: 30 } },
    { id: 'A3', name: 'Agent 3', status: 'idle', color: 'secondary', position: { x: 80, y: 70 } },
  ]);

  const [isRunning, setIsRunning] = useState(false);
  const [connections, setConnections] = useState<Array<{ from: string; to: string; active: boolean }>>([]);

  const runDemo = () => {
    setIsRunning(true);
    
    // Phase 1: Agent 1 starts writing
    setTimeout(() => {
      setAgents(prev => prev.map(agent => 
        agent.id === 'A1' ? { ...agent, status: 'writing' } : agent
      ));
      setConnections([{ from: 'A1', to: 'A2', active: true }]);
    }, 500);

    // Phase 2: Agent 2 contradicts
    setTimeout(() => {
      setAgents(prev => prev.map(agent => 
        agent.id === 'A2' ? { ...agent, status: 'contradicting' } : agent
      ));
      setConnections(prev => [...prev, { from: 'A2', to: 'A3', active: true }]);
    }, 2000);

    // Phase 3: Agent 3 resolves
    setTimeout(() => {
      setAgents(prev => prev.map(agent => 
        agent.id === 'A3' ? { ...agent, status: 'resolving' } : agent
      ));
      setConnections(prev => [...prev, { from: 'A3', to: 'A1', active: true }]);
    }, 3500);

    // Reset
    setTimeout(() => {
      setAgents(prev => prev.map(agent => ({ ...agent, status: 'idle' })));
      setConnections([]);
      setIsRunning(false);
    }, 6000);
  };

  return (
    <div className="relative w-full h-96 border border-primary/30 rounded-sm bg-card/50 backdrop-blur-sm overflow-hidden">
      {/* SVG for connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {connections.map((conn, i) => {
          const fromAgent = agents.find(a => a.id === conn.from);
          const toAgent = agents.find(a => a.id === conn.to);
          if (!fromAgent || !toAgent) return null;

          return (
            <line
              key={i}
              x1={fromAgent.position.x}
              y1={fromAgent.position.y}
              x2={toAgent.position.x}
              y2={toAgent.position.y}
              stroke={`hsl(var(--primary))`}
              strokeWidth="0.5"
              strokeDasharray="2,2"
              className={conn.active ? 'animate-pulse' : ''}
              opacity={conn.active ? 0.8 : 0.3}
            />
          );
        })}
      </svg>

      {/* Agents */}
      {agents.map((agent) => (
        <div
          key={agent.id}
          className={`absolute transition-all duration-500 hover-glow group`}
          style={{
            left: `${agent.position.x}%`,
            top: `${agent.position.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div 
            className={`w-16 h-16 rounded-full border-2 flex items-center justify-center font-code font-bold text-sm transition-all duration-300 cursor-pointer ${
              agent.status === 'writing' ? 'bg-primary/20 border-primary animate-atomic-glow' :
              agent.status === 'contradicting' ? 'bg-accent/20 border-accent animate-neural-pulse' :
              agent.status === 'resolving' ? 'bg-primary border-primary bg-primary text-primary-foreground animate-atomic-glow' :
              'bg-card border-border'
            }`}
            onClick={() => {
              if (!isRunning) runDemo();
            }}
          >
            {agent.id}
          </div>
          
          {/* Status indicator */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-code text-center min-w-max">
            <div className={`transition-opacity duration-300 ${agent.status !== 'idle' ? 'opacity-100' : 'opacity-50'}`}>
              {agent.status === 'writing' && '✍️ Writing'}
              {agent.status === 'contradicting' && '⚠️ Contradiction'}
              {agent.status === 'resolving' && '🧠 Resolving'}
              {agent.status === 'idle' && 'Ready'}
            </div>
          </div>
        </div>
      ))}

      {/* Demo controls */}
      <div className="absolute bottom-4 left-4 space-y-2">
        <Button
          onClick={runDemo}
          disabled={isRunning}
          className="bg-primary hover:bg-primary/80 text-primary-foreground text-sm"
          size="sm"
        >
          {isRunning ? 'Running...' : 'Start Demo'}
        </Button>
        <div className="text-xs font-code text-muted-foreground">
          Click agents or button to run
        </div>
      </div>

      {/* Floating data packets */}
      {isRunning && (
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full animate-neural-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};