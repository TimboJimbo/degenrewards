import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  Gift, 
  Trophy, 
  DollarSign, 
  Zap,
  Star,
  Clock,
  Users,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const Gamdom = () => {
  return (
    <>
      <Helmet>
        <title>Gamdom Bonus Code & Rakeback Guide (2025) | DegenRewards</title>
        <meta name="description" content="Complete Gamdom guide: bonus code kimboslice, rakeback system, VIP rewards, and step-by-step signup. Get XP progression and daily bonuses." />
        <meta name="keywords" content="gamdom bonus code, gamdom rakeback, gamdom rewards, gamdom vip, crypto casino" />
        <link rel="canonical" href="https://degenrewards.com/gamdom" />
      </Helmet>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="relative">
            <img 
              src="/api/placeholder/1200/300" 
              alt="Gamdom Casino Hero" 
              className="w-full h-[300px] object-cover rounded-lg mb-8"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-600/90 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Gamdom Rewards Guide
                </h1>
                <p className="text-xl md:text-2xl mb-6">
                  XP Progression • Daily Bonuses • Chat Rain
                </p>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Shield className="w-5 h-5 mr-2" />
                  Verified Platform
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Current Rewards Overview */}
        <section className="mb-12">
          <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-purple-800">Current Gamdom Rewards</CardTitle>
              <CardDescription>Updated August 2025 • Terms Apply</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Gift className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">XP Progression</h3>
                  <p className="text-gray-600">Level up through consistent play and unlock recurring perks</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Rakeback System</h3>
                  <p className="text-gray-600">Earn percentage back on eligible wagers based on your level</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Chat Rain</h3>
                  <p className="text-gray-600">Random giveaways in chat while you're active</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3" asChild>
                  <a href="https://gamdom.com/r/kimboslice" target="_blank" rel="noopener noreferrer">
                    Join Gamdom with Code: kimboslice
                    <CheckCircle className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <p className="text-sm text-gray-600 mt-2">Code auto-applies • 18+ only • Terms apply</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Detailed Guide Tabs */}
        <section className="mb-12">
          <Tabs defaultValue="getting-started" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="rewards-system">Rewards System</TabsTrigger>
              <TabsTrigger value="vip-program">VIP Program</TabsTrigger>
              <TabsTrigger value="games-strategy">Games & Strategy</TabsTrigger>
            </TabsList>

            <TabsContent value="getting-started" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-6 h-6 mr-2 text-purple-600" />
                    How to Sign Up on Gamdom
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Step 1: Create Account</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Sign up with email or use Google/Steam login</li>
                        <li>• Confirm you're 18+ and accept terms</li>
                        <li>• Enable 2FA for account security</li>
                        <li>• Code "kimboslice" auto-applies with our link</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Step 2: Start Earning</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Explore games and Rewards section first</li>
                        <li>• Deposit when ready (crypto supported)</li>
                        <li>• Stay logged into chat for rain drops</li>
                        <li>• Consistent play builds XP faster</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rewards-system" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="w-6 h-6 mr-2 text-yellow-600" />
                    XP & Rakeback System
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3">How Rakeback Works</h3>
                      <p className="text-gray-700 mb-4">
                        Gamdom ties rewards to your play activity and XP level. As you wager and level up, 
                        you unlock more frequent and larger bonuses based on your tier progression.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                          <strong className="text-purple-600">Levels 1-10 (Bronze→Silver)</strong>
                          <p className="text-sm text-gray-600">~6-7% rakeback, basic weekly bonuses</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <strong className="text-purple-600">Levels 11-20 (Gold→Emerald)</strong>
                          <p className="text-sm text-gray-600">~7-8% rakeback, improved rewards</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <strong className="text-purple-600">Levels 21+ (Sapphire+)</strong>
                          <p className="text-sm text-gray-600">~8%+ rakeback, monthly bonuses unlock</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <strong className="text-purple-600">Royalty Tiers</strong>
                          <p className="text-sm text-gray-600">~11-14% rakeback, premium perks</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">Tips to Maximize Rakeback</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Play Consistently:</strong> Frequent sessions level you up faster than occasional big wagers</li>
                        <li>• <strong>Stay for Rain:</strong> Keep chat window open for random drops while active</li>
                        <li>• <strong>Choose Games Wisely:</strong> Check RTP and volatility to stretch bankroll and maximize XP</li>
                        <li>• <strong>Track Progress:</strong> Open Rewards/XP tab regularly to claim available bonuses</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="vip-program" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="w-6 h-6 mr-2 text-yellow-600" />
                    VIP Program & Perks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-4">Expected VIP Perks</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-purple-700 mb-3">Standard Benefits</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• Boosted rakeback rates</li>
                            <li>• Weekly and monthly bonuses</li>
                            <li>• Reload offers and surprise promos</li>
                            <li>• Priority customer support</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-purple-700 mb-3">Higher Tier Perks</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• Personal account manager</li>
                            <li>• Exclusive events and tournaments</li>
                            <li>• Tailored bonus offers</li>
                            <li>• Higher withdrawal limits</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
                        Smart VIP Tips
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Set Limits:</strong> Don't overspend chasing a higher tier</li>
                        <li>• <strong>Time Claims:</strong> Align bonus claims with longer planned sessions</li>
                        <li>• <strong>Ask Politely:</strong> If you're active, request reloads—they may say yes</li>
                        <li>• <strong>Stay Consistent:</strong> Regular play beats sporadic large sessions for progression</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="games-strategy" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-6 h-6 mr-2 text-blue-600" />
                    Games & Playing Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-lg mb-3">Originals (Crash, Mines, etc.)</h3>
                        <p className="text-gray-700 mb-3">
                          Simple mechanics, fast rounds, and provably fair verification.
                        </p>
                        <p className="text-sm text-blue-700 font-medium">
                          Tip: Decide target cashout before rounds start to avoid chasing
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-lg mb-3">Slots</h3>
                        <p className="text-gray-700 mb-3">
                          Large library from known providers with bonus buy options.
                        </p>
                        <p className="text-sm text-green-700 font-medium">
                          Tip: Check RTP and volatility info before spinning
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-lg mb-3">Live Casino</h3>
                        <p className="text-gray-700 mb-3">
                          Blackjack, roulette, baccarat, and game shows with real hosts.
                        </p>
                        <p className="text-sm text-purple-700 font-medium">
                          Tip: Start with lower table limits until comfortable
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-lg mb-3">Sportsbook</h3>
                        <p className="text-gray-700 mb-3">
                          Odds, live betting, and seasonal promotional offers.
                        </p>
                        <p className="text-sm text-orange-700 font-medium">
                          Tip: Track bets; singles are steadier than parlays
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Common questions about Gamdom rewards and gameplay</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Does Gamdom have provably fair games?</h3>
                  <p className="text-gray-700">Yes—Gamdom's original games like Crash and Mines are provably fair, meaning results can be verified for fairness.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">How do I get invited to Gamdom VIP?</h3>
                  <p className="text-gray-700">Invites are based on activity over time. Consistent wagering helps; check your account messages and email for offers.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Does every game contribute to rakeback?</h3>
                  <p className="text-gray-700">Most games do, but some categories may contribute less or be excluded. Check the Rewards page and bonus terms for specifics.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Can I play all game types with one account?</h3>
                  <p className="text-gray-700">Yes—your Gamdom account covers slots, originals, live casino, and sportsbook under one login.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12 px-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Earning on Gamdom?</h2>
          <p className="text-xl mb-6">Join with code kimboslice for instant XP and regular bonuses</p>
          <Button size="lg" variant="secondary" className="px-8 py-3" asChild>
            <a href="https://gamdom.com/r/kimboslice" target="_blank" rel="noopener noreferrer">
              Join Gamdom Now
            </a>
          </Button>
          <div className="mt-6 text-sm opacity-90">
            <p>18+ only • Play responsibly • Terms and conditions apply</p>
            <p>Availability varies by region • Always verify current terms on site</p>
          </div>
        </section>

        {/* Responsible Gambling */}
        <section className="mt-8 p-6 bg-gray-50 rounded-lg text-center">
          <Clock className="w-8 h-8 text-gray-600 mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Responsible Gambling</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Keep it fun and within limits. XP progression and VIP perks are bonuses, not profit plans. 
            Set strict budgets, take breaks during losing streaks, and never chase losses. 
            If gambling stops being enjoyable, seek help at <strong>BeGambleAware</strong>.
          </p>
        </section>
      </main>
    </>
  );
};

export default Gamdom;