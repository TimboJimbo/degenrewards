import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Degen Rewards
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted source for verified casino rewards, bonuses, and promotions. 
              We provide transparent, data-driven reviews to help you make informed decisions.
            </p>
            <p className="text-xs text-muted-foreground">
              Gamble responsibly. Must be 18+ to participate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Platforms</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/roobet" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Roobet Rewards
                </Link>
              </li>
              <li>
                <Link to="/gamdom" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gamdom Rewards
                </Link>
              </li>
              <li>
                <Link to="/duelbits" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Duelbits Rewards
                </Link>
              </li>
              <li>
                <Link to="/best-bonuses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Best Bonuses
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/comparison" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Platform Comparison
                </Link>
              </li>
              <li>
                <Link to="/gambling-strategies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gambling Strategies
                </Link>
              </li>
              <li>
                <Link to="/responsible-gambling" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Responsible Gambling
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/affiliate-disclosure" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="inline h-3 w-3 mr-1" />
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                All content is for informational purposes only
              </li>
              <li className="text-sm text-muted-foreground">
                Gambling can be addictive - play responsibly
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Degen Rewards. All rights reserved. | 
            <span className="ml-1">Promoting responsible gambling since 2024</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;