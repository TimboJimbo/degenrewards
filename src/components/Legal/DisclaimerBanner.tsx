import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Clock } from 'lucide-react';

const DisclaimerBanner = () => {
  return (
    <div className="bg-warning/10 border-t border-warning/20 py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-center">
          <AlertTriangle className="h-4 w-4 text-warning flex-shrink-0" />
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Promotional Disclaimer:</span> 
            {" "}Limited time offers subject to platform terms and availability. 
            Bonuses may change or expire without notice. 
            <Badge variant="outline" className="ml-2 text-xs">
              <Clock className="h-3 w-3 mr-1" />
              Terms Apply
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerBanner;