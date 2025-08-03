import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface Agent {
  id: string;
  name: string;
  status: 'idle' | 'writing' | 'thinking' | 'conflicted' | 'resolved';
  position: { x: number; y: number };
  color: string;
}

export const InteractiveAgentDemo = () => {
  const [agents, setAgents] = useState<Agent[]>([
    { id: 'A1', name: 'Writer', status: 'idle', position: { x: 20, y: 50 }, color: 'hsl(180 100% 50%)' },
    { id: 'A2', name: 'Fact-Checker', status: 'idle', position: { x: 50, y: 30 }, color: 'hsl(15 100% 60%)' },
    { id: 'A3', name: 'Resolver', status: 'idle', position: { x: 80, y: 70 }, color: 'hsl(180 100% 50%)' }
  ]);
  const [demoStep, setDemoStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const demoSteps = [
    { step: 0, description: 'Click to start the demo', agents: ['idle', 'idle', 'idle'] },
    { step: 1, description: 'Agent 1 starts writing a report...', agents: ['writing', 'idle', 'idle'] },
    { step: 2, description: 'Agent 2 detects a contradiction...', agents: ['writing', 'conflicted', 'idle'] },
    { step: 3, description: 'Agent 3 begins resolution process...', agents: ['thinking', 'conflicted', 'thinking'] },
    { step: 4, description: 'Conflict resolved. Truth established.', agents: ['resolved', 'resolved', 'resolved'] }
  ];

  const runDemo = async () => {
    if (isRunning) return;
    setIsRunning(true);
    
    for (let i = 1; i < demoSteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setDemoStep(i);
      setAgents(prev => prev.map((agent, index) => ({
        ...agent,
        status: demoSteps[i].agents[index] as Agent['status']
      })));
    }
    
    setTimeout(() => {
      setDemoStep(0);
      setAgents(prev => prev.map(agent => ({ ...agent, status: 'idle' })));
      setIsRunning(false);
    }, 3000);
  };

  const getAgentColor = (status: Agent['status']) => {
    switch (status) {
      case 'writing': return 'hsl(180 100% 50%)';
      case 'thinking': return 'hsl(60 100% 50%)';
      case 'conflicted': return 'hsl(15 100% 60%)';
      case 'resolved': return 'hsl(120 100% 50%)';
      default: return 'hsl(180 30% 50%)';
    }
  };

  const getStatusIcon = (status: Agent['status']) => {
    switch (status) {
      case 'writing': return '✍️';
      case 'thinking': return '🤔';
      case 'conflicted': return '⚠️';
      case 'resolved': return '✅';
      default: return '💤';
    }
  };

  return (
    <div className="relative w-full h-96 border border-primary/30 rounded-sm bg-card/50 backdrop-blur-sm overflow-hidden">
      {/* Neural Network Background */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
        <defs>
          <pattern id="neural-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="hsl(180 100% 50% / 0.1)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-grid)" />
        
        {/* Connection Lines */}
        {agents.map((agent, i) => 
          agents.slice(i + 1).map((otherAgent, j) => (
            <line
              key={`${i}-${j}`}
              x1={`${agent.position.x}%`}
              y1={`${agent.position.y}%`}
              x2={`${otherAgent.position.x}%`}
              y2={`${otherAgent.position.y}%`}
              stroke={isRunning ? 'hsl(180 100% 50% / 0.3)' : 'hsl(180 100% 50% / 0.1)'}
              strokeWidth="2"
              className={isRunning ? 'animate-pulse' : ''}
            />
          ))
        )}
      </svg>

      {/* Agents */}
      {agents.map(agent => (
        <div
          key={agent.id}
          className="absolute w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
          style={{
            left: `${agent.position.x}%`,
            top: `${agent.position.y}%`,
          }}
        >
          <div
            className="w-full h-full rounded-full border-2 flex items-center justify-center text-lg font-bold transition-all duration-500 relative"
            style={{
              backgroundColor: `${getAgentColor(agent.status)}20`,
              borderColor: getAgentColor(agent.status),
              boxShadow: agent.status !== 'idle' ? `0 0 20px ${getAgentColor(agent.status)}40` : 'none'
            }}
          >
            <span className="text-sm font-code">{agent.id}</span>
            
            {/* Status Icon */}
            <div className="absolute -top-2 -right-2 text-xs">
              {getStatusIcon(agent.status)}
            </div>
            
            {/* Pulse Animation */}
            {agent.status !== 'idle' && (
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ backgroundColor: getAgentColor(agent.status) }}
              />
            )}
          </div>
          
          {/* Agent Name */}
          <div className="text-xs font-code text-center mt-2 text-muted-foreground">
            {agent.name}
          </div>
        </div>
      ))}

      {/* Demo Controls */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-background/80 backdrop-blur-sm border border-primary/30 rounded-sm p-4">
          <p className="text-sm font-code text-foreground mb-3">
            {demoSteps[demoStep].description}
          </p>
          
          <Button
            onClick={runDemo}
            disabled={isRunning}
            className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-code"
          >
            {isRunning ? 'Running Demo...' : 'Start Demo'}
          </Button>
        </div>
      </div>

      {/* Floating Data Points */}
      {isRunning && (
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full animate-neural-pulse"
              style={{
                left: `${Math.random() * 90 + 5}%`,
                top: `${Math.random() * 90 + 5}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};