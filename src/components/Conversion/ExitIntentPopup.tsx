import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { X, Gift, Clock, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExitIntentPopup = ({ isOpen, onClose }: ExitIntentPopupProps) => {
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const { toast } = useToast();

  useEffect(() => {
    if (!isOpen) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You'll receive exclusive bonus codes in your inbox within 24 hours.",
      });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <DialogHeader className="text-center space-y-2">
          <div className="mx-auto w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-2">
            <Gift className="h-8 w-8 text-accent" />
          </div>
          <DialogTitle className="text-2xl font-heading">
            Wait! Don't Miss Out
          </DialogTitle>
          <p className="text-muted-foreground">
            Get exclusive bonus codes sent directly to your inbox
          </p>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-center">
            <Badge variant="secondary" className="mb-2">
              <Clock className="h-3 w-3 mr-1" />
              Limited Time Offer
            </Badge>
            <div className="text-2xl font-bold text-accent">
              {formatTime(timeLeft)}
            </div>
            <p className="text-sm text-muted-foreground">remaining</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>Exclusive bonus codes for Roobet, Gamdom & more</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>Weekly strategy guides & tips</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>Early access to new platform bonuses</span>
            </div>
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-3">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Get My Exclusive Bonuses
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;