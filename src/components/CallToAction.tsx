import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ContactModal } from '@/components/ContactModal';

export const CallToAction = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'access' | 'talk_to_team' | 'deploy';
    title: string;
  }>({
    isOpen: false,
    type: 'access',
    title: ''
  });

  const openModal = (type: 'access' | 'talk_to_team' | 'deploy', title: string) => {
    setModalState({ isOpen: true, type, title });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };
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
              onClick={() => openModal('access', 'Request Access')}
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-code text-lg px-8 py-6 shadow-nuclear hover:shadow-nuclear-lg transform hover:scale-105 transition-all duration-300"
              size="lg"
            >
              → Request Access
            </Button>
            
            <Button 
              onClick={() => openModal('talk_to_team', 'Talk to the Team')}
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-code text-lg px-8 py-6 hover:shadow-atomic transform hover:scale-105 transition-all duration-300"
              size="lg"
            >
              → Talk to the team
            </Button>
            
            <Button 
              onClick={() => openModal('deploy', 'Deploy it Yourself')}
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 font-code text-lg px-8 py-6 hover:shadow-glow transform hover:scale-105 transition-all duration-300"
              size="lg"
            >
              → Deploy it yourself
            </Button>
          </div>

          <ContactModal
            isOpen={modalState.isOpen}
            onClose={closeModal}
            requestType={modalState.type}
            title={modalState.title}
          />
        </div>
      </div>

      {/* Neural Background Pattern */}
      <div className="absolute inset-0 neural-grid opacity-5 pointer-events-none" />
      
      {/* Atomic Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-neural opacity-10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};