import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Clock, Shield, ExternalLink, CheckCircle } from "lucide-react";

const BestBonuses = () => {
  return (
    <>
      <Helmet>
        <title>Casino Bonuses (Aug 2025) | Roobet, Gamdom & Duelbits</title>
        <meta name="description" content="Handpicked casino bonuses for Roobet, Gamdom, and Duelbits—tested by a real player. Easy signup, clear rewards, and responsible gambling reminders." />
        <meta name="keywords" content="casino bonuses, roobet bonus, gamdom bonus, duelbits bonus, crypto casino offers" />
        <link rel="canonical" href="/best-bonuses" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Gift className="h-3 w-3 mr-1" />
              Handpicked August 2025
            </Badge>
            <h1 className="text-4xl font-heading font-bold mb-4">
              Casino Bonuses (Aug 2025)
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Handpicked casino bonuses for Roobet, Gamdom, and Duelbits—tested by a real player. 
              Easy signup, clear rewards, and responsible gambling reminders.
            </p>
          </div>

          {/* Featured Bonus */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Roobet: Daily Rakeback & Bonuses
                  </CardTitle>
                  <Badge variant="default">Featured</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Bonus Code
                    </h3>
                    <div className="bg-background/50 p-3 rounded-lg border">
                      <code className="text-lg font-mono text-primary">timboice12</code>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-secondary" />
                      Signup Time
                    </h3>
                    <p className="text-muted-foreground">Fast signup — email + password</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">What You Get:</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Daily rakeback, reloads (VIP perks vary)</li>
                    <li>Crypto payouts processed quickly in my tests</li>
                    <li>Access to Roobet originals and exclusive games</li>
                  </ul>
                </div>

                <div className="flex gap-4">
                  <Button asChild size="lg">
                    <a href="/roobet" target="_blank">
                      Join Roobet & Claim Bonus <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="/roobet">More info: Roobet Rewards</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* All Bonuses Grid */}
          <div className="max-w-6xl mx-auto mb-12">
            <h2 className="text-2xl font-heading font-bold text-center mb-8">
              All Current Bonuses
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Roobet */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Roobet</CardTitle>
                  <Badge variant="secondary" className="w-fit">Most Popular</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Bonus Code:</p>
                    <code className="bg-muted px-2 py-1 rounded text-sm">timboice12</code>
                  </div>
                  <ul className="text-sm space-y-1">
                    <li>• Daily rakeback system</li>
                    <li>• VIP reloads & bonuses</li>
                    <li>• Fast crypto withdrawals</li>
                  </ul>
                  <Button asChild className="w-full">
                    <a href="/roobet" target="_blank">
                      Join Roobet
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Gamdom */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Gamdom</CardTitle>
                  <Badge variant="outline" className="w-fit">Beginner Friendly</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Best For:</p>
                    <p className="text-sm">Frequent small rewards</p>
                  </div>
                  <ul className="text-sm space-y-1">
                    <li>• Daily free cases</li>
                    <li>• Chat rain rewards</li>
                    <li>• XP progression system</li>
                  </ul>
                  <Button asChild variant="secondary" className="w-full">
                    <a href="/gamdom" target="_blank">
                      Join Gamdom
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Duelbits */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Duelbits</CardTitle>
                  <Badge variant="outline" className="w-fit">Sports + Casino</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Unique Feature:</p>
                    <p className="text-sm">Sportsbook + Casino</p>
                  </div>
                  <ul className="text-sm space-y-1">
                    <li>• Cashback on all bets</li>
                    <li>• Sports betting promos</li>
                    <li>• Ace's Rewards system</li>
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <a href="/duelbits" target="_blank">
                      Join Duelbits
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Testing Notes */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Real Player Testing Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">My Testing Process:</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Signed up to all platforms with real accounts</li>
                    <li>Tested deposit and withdrawal speeds</li>
                    <li>Verified bonus terms and actual payouts</li>
                    <li>Played with real money to test user experience</li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground">
                  All bonuses listed have been personally tested. Terms and availability may vary by region.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Table */}
          <div className="max-w-6xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Quick Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Platform</th>
                        <th className="text-left p-2">Signup Speed</th>
                        <th className="text-left p-2">Best For</th>
                        <th className="text-left p-2">Key Bonus</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">Roobet</td>
                        <td className="p-2">2-3 minutes</td>
                        <td className="p-2">High stakes, VIP</td>
                        <td className="p-2">Daily rakeback</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">Gamdom</td>
                        <td className="p-2">1-2 minutes</td>
                        <td className="p-2">Beginners, low stakes</td>
                        <td className="p-2">Free daily cases</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-semibold">Duelbits</td>
                        <td className="p-2">2-3 minutes</td>
                        <td className="p-2">Sports + casino</td>
                        <td className="p-2">All-bet cashback</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Responsible Gambling */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-warning">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 text-center">
                  <div className="w-full">
                    <h3 className="font-semibold mb-4">Important Reminders</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="text-sm text-muted-foreground">
                        <strong>18+ Only:</strong> All gambling sites require you to be 18 or older
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <strong>Set Limits:</strong> Always gamble with money you can afford to lose
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <strong>Take Breaks:</strong> Regular breaks help maintain perspective
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <strong>Get Help:</strong> Resources available if gambling becomes a problem
                      </div>
                    </div>
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

export default BestBonuses;