import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Target, DollarSign, AlertTriangle, ExternalLink } from "lucide-react";

const GamblingStrategies = () => {
  return (
    <>
      <Helmet>
        <title>Gambling Strategies & Casino Tips (2025) | DegenRewards</title>
        <meta name="description" content="Proven bankroll-friendly gambling strategies for Crash, slots, and sports betting from a VIP player on Roobet, Gamdom, and Duelbits. Tips for managing risk and maximizing perks." />
        <meta name="keywords" content="gambling strategies, casino tips, crash game, slots strategy, sports betting, bankroll management, VIP programs" />
        <link rel="canonical" href="/gambling-strategies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <TrendingUp className="h-3 w-3 mr-1" />
              VIP Player Insights
            </Badge>
            <h1 className="text-4xl font-heading font-bold mb-4">
              Gambling Strategies for Crash, Slots & Sports Betting (2025)
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Proven bankroll-friendly gambling strategies from a VIP player on Roobet, Gamdom, and Duelbits. 
              Tips for managing risk and maximizing perks.
            </p>
            <Button asChild size="lg">
              <a href="https://gamdom.com" target="_blank" rel="noopener noreferrer">
                Visit Gamdom <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Strategy Tabs */}
          <div className="max-w-6xl mx-auto mb-12">
            <Tabs defaultValue="crash" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="crash">Crash Games</TabsTrigger>
                <TabsTrigger value="slots">Slots</TabsTrigger>
                <TabsTrigger value="sports">Sports Betting</TabsTrigger>
                <TabsTrigger value="vip">VIP Programs</TabsTrigger>
              </TabsList>

              <TabsContent value="crash" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Crash Game Approach
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      I play Crash on both <strong>Roobet</strong> and <strong>Gamdom</strong>.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">My main habit:</h4>
                      <p className="text-muted-foreground">
                        Aim for small multipliers like 1.2x–1.5x early in a session. Splitting a bet 
                        and cashing out half early can reduce volatility.
                      </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Button asChild variant="outline">
                        <a href="/roobet" target="_blank">Try Roobet Crash</a>
                      </Button>
                      <Button asChild variant="outline">
                        <a href="/gamdom" target="_blank">Try Gamdom Crash</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="slots" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Slots Strategy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      I start at lower stakes and increase gradually during winning runs. Both Roobet 
                      and Duelbits have extensive slot selections.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Key Tips:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Check RTP stats before picking a game</li>
                        <li>Avoid chasing losses</li>
                        <li>Start with lower stakes</li>
                        <li>Increase gradually during winning runs</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sports" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sports Betting</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      On Duelbits, I use odds boosts and cashback offers. Parlays can be fun, but I 
                      stick to singles for steadier returns.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Proven Approach:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Keep a betting log</li>
                        <li>Singles are steadier than big parlays</li>
                        <li>Use odds boosts and cashback offers</li>
                        <li>VIP players can request custom odds or rewards</li>
                      </ul>
                    </div>
                    <Button asChild>
                      <a href="/duelbits" target="_blank">Try Duelbits Sportsbook</a>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="vip" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      VIP Programs & Bankroll Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      VIP programs like Roobet's reloads, Gamdom's daily cases, and Duelbits' cashback 
                      can add value over time.
                    </p>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Roobet VIP</h4>
                        <p className="text-sm text-muted-foreground">Reloads and exclusive bonuses</p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Gamdom VIP</h4>
                        <p className="text-sm text-muted-foreground">Daily cases and frequent rewards</p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Duelbits VIP</h4>
                        <p className="text-sm text-muted-foreground">Cashback across all bets</p>
                      </div>
                    </div>
                    <div className="bg-warning/10 border border-warning/20 p-4 rounded-lg">
                      <p className="text-sm">
                        <strong>Remember:</strong> Always set a budget, and take breaks during losing streaks.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Platform Links */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Direct Links to Tested Sites</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <Button asChild size="lg" className="h-auto py-4">
                    <a href="/roobet" target="_blank" className="flex flex-col">
                      <span className="font-semibold">Roobet</span>
                      <span className="text-sm opacity-80">VIP Reloads & Fast Crypto</span>
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="h-auto py-4">
                    <a href="/gamdom" target="_blank" className="flex flex-col">
                      <span className="font-semibold">Gamdom</span>
                      <span className="text-sm opacity-80">Daily Cases & XP</span>
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-auto py-4">
                    <a href="/duelbits" target="_blank" className="flex flex-col">
                      <span className="font-semibold">Duelbits</span>
                      <span className="text-sm opacity-80">Sportsbook & Cashback</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Gambling Strategies FAQ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">What's the safest gambling strategy?</h3>
                  <p className="text-muted-foreground">
                    No strategy removes risk entirely. Focus on small bets, low variance games, and strict bankroll limits.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Do VIP programs actually help?</h3>
                  <p className="text-muted-foreground">
                    They can. Cashback, reloads, and bonuses add value over time, but they don't change the house edge.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Can I use the same strategy for Crash, slots, and sports?</h3>
                  <p className="text-muted-foreground">
                    No. Each game type has its own variance and practices—adapt per game.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Warning */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-warning">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">Final Thoughts</h3>
                    <p className="text-muted-foreground">
                      Gambling should remain an enjoyable pastime. These strategies are based on personal 
                      experience and are not a guarantee of results. Always gamble responsibly.
                    </p>
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

export default GamblingStrategies;