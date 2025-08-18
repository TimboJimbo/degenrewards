import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const GeoRestriction = () => {
  const [isRestricted, setIsRestricted] = useState(false);
  const [userCountry, setUserCountry] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  // List of restricted countries (example - update based on actual restrictions)
  const restrictedCountries = [
    'US', 'USA', 'United States',
    'UK', 'United Kingdom', 'GB',
    'FR', 'France',
    'AU', 'Australia',
    'IT', 'Italy',
    'ES', 'Spain',
    'NL', 'Netherlands'
  ];

  useEffect(() => {
    // Simple geo-detection (in production, use a proper IP geolocation service)
    const detectLocation = async () => {
      try {
        // Using a free IP API for demonstration
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code) {
          setUserCountry(data.country_name || data.country_code);
          
          const isUserRestricted = restrictedCountries.some(country => 
            country.toLowerCase() === data.country_code.toLowerCase() ||
            country.toLowerCase() === data.country_name?.toLowerCase()
          );
          
          if (isUserRestricted) {
            setIsRestricted(true);
            setIsOpen(true);
          }
        }
      } catch (error) {
        console.log('Could not detect location:', error);
      }
    };

    detectLocation();
  }, []);

  const handleAcknowledge = () => {
    setIsOpen(false);
    // Store acknowledgment in session
    sessionStorage.setItem('geoRestrictionAcknowledged', 'true');
  };

  if (!isRestricted) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md mx-auto border-warning/20 bg-gradient-to-br from-warning/5 to-destructive/5">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center">
            <AlertTriangle className="h-8 w-8 text-warning" />
          </div>
          <DialogTitle className="text-2xl font-heading">
            Geographic Restriction Notice
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 text-center">
          <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="h-5 w-5 text-warning" />
              <span className="font-semibold">Location Detected: {userCountry}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The casino platforms we review may not be available in your region.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              This website provides information about online casinos that may not be licensed or available in your jurisdiction.
            </p>

            <div className="text-xs text-muted-foreground space-y-2">
              <p>
                <strong>Important:</strong> Always check your local laws before participating in online gambling.
              </p>
              <div className="flex justify-center gap-4">
                <Badge variant="outline" className="text-xs">
                  Information Only
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Not Legal Advice
                </Badge>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button onClick={handleAcknowledge} className="bg-secondary hover:bg-secondary/90">
                I Understand - Continue
              </Button>
              <Button variant="outline" asChild>
                <Link to="/responsible-gambling">
                  Learn About Responsible Gambling
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            <p>
              By continuing, you acknowledge that you are responsible for ensuring online gambling is legal in your jurisdiction.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GeoRestriction;