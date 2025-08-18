import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";

const AffiliateDisclosure = () => {
  return (
    <>
      <Helmet>
        <title>Affiliate Disclosure | DegenRewards</title>
        <meta name="description" content="We use affiliate links and may earn commissions when you sign up through our referral links." />
        <meta name="keywords" content="affiliate disclosure, referral links, commission, transparency" />
        <link rel="canonical" href="/affiliate-disclosure" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Transparency First
            </Badge>
            <h1 className="text-4xl font-heading font-bold mb-4">
              Affiliate Disclosure
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparency matters to us.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Our Commitment to Transparency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-muted-foreground mb-4">
                    Some links on <strong>degenrewards.com</strong> are affiliate or referral links. 
                    If you click these links and sign up or make a qualifying action, we may earn a 
                    commission or receive rewards at no extra cost to you.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Our Editorial Standards</h3>
                  <p className="text-muted-foreground">
                    Our opinions are based on personal play experience and testing. Compensation does 
                    not influence our commitment to provide straightforward, honest notes and to 
                    highlight responsible gambling practices.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Your Support</h3>
                  <p className="text-muted-foreground">
                    Using our links helps support the site and keeps guides free. Thank you.
                  </p>
                </div>

                <div className="pt-6 border-t">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>Questions? Email: </span>
                    <a href="mailto:degenrewards@gmail.com" className="text-primary hover:underline">
                      degenrewards@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default AffiliateDisclosure;