import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/integrations/firebase/client";
import { useToast } from '@/hooks/use-toast';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  requestType: 'access' | 'talk_to_team' | 'deploy';
  title: string;
}

export const ContactModal = ({ isOpen, onClose, requestType, title }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "contact_requests"), {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        request_type: requestType,
        created_at: new Date().toISOString(),
      });

      toast({
        title: "Request submitted successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: '', email: '', company: '', message: '' });
      onClose();
    } catch (error) {
      console.error('Error submitting request:', error);
      toast({
        title: "Error submitting request",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPlaceholderMessage = () => {
    switch (requestType) {
      case 'access':
        return 'Tell us about your use case and why you need access to our platform...';
      case 'talk_to_team':
        return 'What would you like to discuss with our team?';
      case 'deploy':
        return 'Describe your deployment requirements and technical setup...';
      default:
        return 'Your message...';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-background/95 backdrop-blur-sm border-primary/20 max-w-md">
        <DialogHeader>
          <DialogTitle className="font-atomic text-2xl text-foreground">
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-code text-muted-foreground">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background/50 border-primary/30 focus:border-primary"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="font-code text-muted-foreground">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background/50 border-primary/30 focus:border-primary"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company" className="font-code text-muted-foreground">Company (Optional)</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="bg-background/50 border-primary/30 focus:border-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="font-code text-muted-foreground">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={getPlaceholderMessage()}
              className="bg-background/50 border-primary/30 focus:border-primary min-h-[100px]"
              required
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-muted-foreground/30 text-muted-foreground hover:bg-background/80"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary hover:bg-primary/80 text-primary-foreground"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
