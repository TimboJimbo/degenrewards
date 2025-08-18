import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cookie, Settings } from "lucide-react";

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | DegenRewards</title>
        <meta name="description" content="Cookie usage on this site." />
        <meta name="keywords" content="cookies, privacy, analytics, website functionality" />
        <link rel="canonical" href="/cookie-policy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Cookie className="h-3 w-3 mr-1" />
              Privacy
            </Badge>
            <h1 className="text-4xl font-heading font-bold mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How we use cookies on this site.
            </p>
          </div>

          {/* Policy Content */}
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Cookie Usage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-muted-foreground">
                    We use cookies to enable basic site features and gather anonymized analytics. 
                    You can opt out by disabling cookies in your browser.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">What We Collect</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Basic site functionality (navigation, preferences)</li>
                    <li>Anonymous analytics data (page views, user interactions)</li>
                    <li>No personal identification information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">How to Opt Out</h3>
                  <p className="text-muted-foreground">
                    You can disable cookies in your browser settings at any time. This may affect 
                    some site functionality but will not prevent you from viewing content.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;