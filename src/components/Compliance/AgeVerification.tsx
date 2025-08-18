import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, Calendar } from 'lucide-react';

const AgeVerification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasVerified, setHasVerified] = useState(false);

  useEffect(() => {
    // Check if user has already verified in this session
    const verified = sessionStorage.getItem('ageVerified');
    if (!verified) {
      setIsOpen(true);
    } else {
      setHasVerified(true);
    }
  }, []);

  const handleVerify = (isOver18: boolean) => {
    if (isOver18) {
      sessionStorage.setItem('ageVerified', 'true');
      setHasVerified(true);
      setIsOpen(false);
    } else {
      // Redirect to responsible gambling resources
      window.location.href = '/responsible-gambling';
    }
  };

  if (hasVerified) return null;

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-md mx-auto border-warning/20 bg-gradient-to-br from-warning/5 to-destructive/5">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center">
            <AlertTriangle className="h-8 w-8 text-warning" />
          </div>
          <DialogTitle className="text-2xl font-heading">
            Age Verification Required
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 text-center">
          <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calendar className="h-5 w-5 text-warning" />
              <span className="font-semibold">You must be 18 or older</span>
            </div>
            <p className="text-sm text-muted-foreground">
              This website contains content related to gambling and is restricted to adults only.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              Are you 18 years of age or older?
            </p>

            <div className="flex gap-3">
              <Button 
                onClick={() => handleVerify(true)}
                className="flex-1 bg-secondary hover:bg-secondary/90"
              >
                <Shield className="h-4 w-4 mr-2" />
                Yes, I'm 18+
              </Button>
              <Button 
                onClick={() => handleVerify(false)}
                variant="outline"
                className="flex-1 border-destructive/20 hover:bg-destructive/10"
              >
                No, I'm under 18
              </Button>
            </div>
          </div>

          <div className="text-xs text-muted-foreground space-y-2">
            <p>
              By clicking "Yes, I'm 18+", you confirm that you are of legal gambling age in your jurisdiction.
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="outline" className="text-xs">
                18+ Only
              </Badge>
              <Badge variant="outline" className="text-xs">
                Responsible Gaming
              </Badge>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgeVerification;