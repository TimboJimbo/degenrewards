import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Zap, ExternalLink, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    // Remember dismissal for this session
    sessionStorage.setItem('floatingCTADismissed', 'true');
  };

  useEffect(() => {
    const dismissed = sessionStorage.getItem('floatingCTADismissed');
    if (dismissed) {
      setIsDismissed(true);
    }
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-2xl shadow-2xl max-w-sm relative">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleDismiss}
          className="absolute top-2 right-2 h-6 w-6 p-0 text-white/70 hover:text-white hover:bg-white/20"
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="text-white space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Gift className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Limited Time!</h3>
              <p className="text-white/80 text-sm">Exclusive bonus codes</p>
            </div>
          </div>

          <div className="space-y-2">
            <Badge className="bg-white/20 text-white hover:bg-white/30">
              <Zap className="h-3 w-3 mr-1" />
              Up to $5,000 bonus
            </Badge>
            <p className="text-sm text-muted-foreground">
              Don't miss out on the best casino bonuses available right now!*
            </p>
            <p className="text-xs text-white/60 mt-1">
              *Offers subject to platform terms and availability
            </p>
          </div>

          <div className="flex gap-2">
            <Button 
              size="sm" 
              className="bg-white text-primary hover:bg-white/90 flex-1" 
              asChild
            >
              <Link to="/best-bonuses">
                Claim Now
                <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </div>

          <p className="text-xs text-white/60 text-center">
            Offer expires soon • 18+ only • *Terms apply - offers subject to change
          </p>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;