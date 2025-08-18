import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Phone, ExternalLink, AlertTriangle, Heart, Clock } from "lucide-react";

const ResponsibleGambling = () => {
  const helpResources = [
    {
      name: "Gamblers Anonymous",
      website: "https://www.gamblersanonymous.org",
      phone: "International Directory Available",
      description: "Support groups for problem gamblers"
    },
    {
      name: "National Council on Problem Gambling",
      website: "https://www.ncpgambling.org",
      phone: "1-800-522-4700",
      description: "24/7 helpline and resources"
    },
    {
      name: "GamCare (UK)",
      website: "https://www.gamcare.org.uk",
      phone: "0808 8020 133",
      description: "Free gambling support service"
    },
    {
      name: "Gambling Therapy",
      website: "https://www.gamblingtherapy.org",
      phone: "Online chat available",
      description: "Global online support service"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Responsible Gambling Resources & Help | DegenRewards</title>
        <meta name="description" content="Comprehensive responsible gambling resources, warning signs, and help services. If gambling is causing problems, support is available." />
        <meta name="keywords" content="responsible gambling, gambling addiction, help resources, problem gambling, support" />
        <link rel="canonical" href="/responsible-gambling" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Shield className="h-3 w-3 mr-1" />
              Support & Resources
            </Badge>
            <h1 className="text-4xl font-heading font-bold mb-4">
              Responsible Gambling Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Gambling should be fun and entertaining. If it's causing problems in your life, 
              help is available. You're not alone.
            </p>
          </div>

          {/* Emergency Alert */}
          <div className="max-w-4xl mx-auto mb-12">
            <Alert className="border-destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-center">
                <strong>Need immediate help?</strong> Call the National Problem Gambling Helpline: 
                <a href="tel:1-800-522-4700" className="ml-2 font-semibold underline">1-800-522-4700</a>
                <br />
                <span className="text-sm text-muted-foreground">Available 24/7, confidential, and free</span>
              </AlertDescription>
            </Alert>
          </div>

          {/* Warning Signs */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  Warning Signs of Problem Gambling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold mb-3">Financial Signs</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Borrowing money to gamble</li>
                      <li>• Hiding gambling losses</li>
                      <li>• Unable to pay bills due to gambling</li>
                      <li>• Selling possessions to fund gambling</li>
                      <li>• Taking cash advances or loans</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Behavioral Signs</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Gambling longer than planned</li>
                      <li>• Lying about gambling activities</li>
                      <li>• Neglecting work, family, or friends</li>
                      <li>• Feeling anxious when not gambling</li>
                      <li>• Chasing losses with bigger bets</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Help Resources */}
          <div className="max-w-6xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-secondary" />
                  Get Help & Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  {helpResources.map((resource, index) => (
                    <Card key={index} className="border border-muted">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{resource.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                        <div className="space-y-2">
                          {resource.phone && (
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="h-4 w-4" />
                              <span>{resource.phone}</span>
                            </div>
                          )}
                          <Button asChild variant="outline" size="sm" className="w-full">
                            <a href={resource.website} target="_blank" rel="noopener noreferrer">
                              Visit Website <ExternalLink className="ml-2 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Self-Help Tools */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Self-Help Tools & Strategies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Set Clear Limits</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Decide how much money you can afford to lose before you start</li>
                    <li>Set time limits for gambling sessions</li>
                    <li>Never gamble with money needed for essentials</li>
                    <li>Use deposit limits offered by gambling sites</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Healthy Habits</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Take regular breaks during gambling sessions</li>
                    <li>Don't gamble when upset, depressed, or under the influence</li>
                    <li>Balance gambling with other activities and hobbies</li>
                    <li>Keep track of time and money spent gambling</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Get Support</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Talk to family and friends about your concerns</li>
                    <li>Consider joining a support group</li>
                    <li>Seek professional counseling if needed</li>
                    <li>Use gambling blocking software if helpful</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Platform Tools */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Platform Safety Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Most reputable gambling platforms offer built-in responsible gambling tools:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Deposit Limits</h4>
                    <p className="text-sm text-muted-foreground">
                      Set daily, weekly, or monthly deposit limits
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Session Time Limits</h4>
                    <p className="text-sm text-muted-foreground">
                      Automatically log out after a set time
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Self-Exclusion</h4>
                    <p className="text-sm text-muted-foreground">
                      Temporarily or permanently block your account
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Reality Checks</h4>
                    <p className="text-sm text-muted-foreground">
                      Regular reminders of time spent gambling
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Final Message */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Remember: You're Not Alone</h3>
                <p className="text-muted-foreground mb-6">
                  Problem gambling affects millions of people worldwide. Seeking help is a sign of 
                  strength, not weakness. Recovery is possible with the right support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <a href="tel:1-800-522-4700">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Helpline: 1-800-522-4700
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="https://www.ncpgambling.org" target="_blank" rel="noopener noreferrer">
                      Find Local Resources <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsibleGambling;