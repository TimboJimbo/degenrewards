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
  AlertTriangle,
  Target
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const Duelbits = () => {
  return (
    <>
      <Helmet>
        <title>Duelbits Bonus Code & Ace's Rewards Guide (2025) | DegenRewards</title>
        <meta name="description" content="Complete Duelbits guide: Ace's Rewards system, VIP tiers, Level-Up rakeback, and casino + sportsbook cashback. Step-by-step signup guide." />
        <meta name="keywords" content="duelbits bonus code, duelbits rewards, duelbits vip, duelbits cashback, crypto casino sportsbook" />
        <link rel="canonical" href="https://degenrewards.com/duelbits" />
      </Helmet>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="relative">
            <img 
              src="/api/placeholder/1200/300" 
              alt="Duelbits Casino Hero" 
              className="w-full h-[300px] object-cover rounded-lg mb-8"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-cyan-600/90 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Duelbits Rewards Guide
                </h1>
                <p className="text-xl md:text-2xl mb-6">
                  Ace's Rewards • Casino + Sportsbook • Cashback
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
          <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-800">Current Duelbits Rewards</CardTitle>
              <CardDescription>Updated August 2025 • Terms Apply</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Ace's Rewards</h3>
                  <p className="text-gray-600">Periodic bonuses & reloads linked to activity & VIP standing</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Level-Up Rakeback</h3>
                  <p className="text-gray-600">Progress by wagering; improved perks at higher levels</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Target className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Casino + Sportsbook</h3>
                  <p className="text-gray-600">Cashback applies across slots, live casino, and sports betting</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3" asChild>
                  <a href="https://duelbits.com/?a=degenrewards" target="_blank" rel="noopener noreferrer">
                    Join Duelbits with Code: degenrewards
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
              <TabsTrigger value="rewards-system">Ace's Rewards</TabsTrigger>
              <TabsTrigger value="vip-cashback">VIP & Cashback</TabsTrigger>
              <TabsTrigger value="games">Games & Sports</TabsTrigger>
            </TabsList>

            <TabsContent value="getting-started" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-6 h-6 mr-2 text-blue-600" />
                    How to Sign Up on Duelbits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Step 1: Create Account</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Sign up with your email and set a strong password</li>
                        <li>• Confirm you're 18+ and accept the terms</li>
                        <li>• Enable 2FA (recommended) for better security</li>
                        <li>• Referral code applies automatically with our link</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Step 2: Start Earning Cashback</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Deposit via supported methods (crypto commonly available)</li>
                        <li>• Cashback accrues as you play slots, live casino, and sports</li>
                        <li>• Check Rewards section for current benefits</li>
                        <li>• Sports bettors can stack odds boosts with cashback</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Pro Tip for Sports Bettors</h4>
                    <p className="text-gray-700">
                      Sports bettors can stack odds boosts with cashback for steadier value—check promos regularly. 
                      Combining casino and sportsbook activity can unlock more frequent offers.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rewards-system" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="w-6 h-6 mr-2 text-blue-600" />
                    Ace's Rewards & Level-Up System
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3">Dual Reward Tracks</h3>
                      <p className="text-gray-700 mb-4">
                        Duelbits uses two reward systems working together to maximize your returns:
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                          <h4 className="font-medium text-blue-700 mb-2">Ace's Rewards</h4>
                          <p className="text-sm text-gray-700 mb-2">Periodic bonuses & reloads</p>
                          <p className="text-xs text-gray-600">Linked to overall activity & VIP standing</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                          <h4 className="font-medium text-green-700 mb-2">Level-Up Rakeback</h4>
                          <p className="text-sm text-gray-700 mb-2">Rakeback percentage increases with levels</p>
                          <p className="text-xs text-gray-600">Progress by wagering; small bonuses at lower levels</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-4">How to Maximize Rewards</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-green-700 mb-3">Steady Play Strategy</h4>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Consistency tends to beat one-off spikes</li>
                            <li>• Regular sessions help maintain VIP status</li>
                            <li>• Track your progress in the Rewards section</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-green-700 mb-3">Cross-Platform Benefits</h4>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Combining sportsbook and casino unlocks more offers</li>
                            <li>• Cashback applies to all bet types</li>
                            <li>• Ask support about reloads if you're active</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="vip-cashback" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="w-6 h-6 mr-2 text-yellow-600" />
                    VIP Program & Cashback System
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-4">VIP Perks at a Glance</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-orange-700 mb-3">Standard Benefits</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• Cashback on all wagers (slots, live casino, sports)</li>
                            <li>• Reload bonuses and periodic promos</li>
                            <li>• Priority customer support</li>
                            <li>• Access to exclusive tournaments</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-orange-700 mb-3">Higher Tier Perks</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• Personal account manager contact</li>
                            <li>• Tailored bonus offers and limits</li>
                            <li>• Faster withdrawal processing</li>
                            <li>• Special events and promotions</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-4">Cashback System Details</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Sportsbook Cashback</h4>
                            <p className="text-gray-700 text-sm">Cashback applies to all sports betting according to on-site terms and your activity level</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Casino Cashback</h4>
                            <p className="text-gray-700 text-sm">Slots, live casino, and originals all contribute to your cashback earnings</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">VIP Progression</h4>
                            <p className="text-gray-700 text-sm">Perks scale with consistent play; check account promos regularly</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
                        Smart VIP Tips
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Cashback softens variance but doesn't remove risk—keep limits firm</li>
                        <li>• Ask support about reloads if you're active across both casino and sports</li>
                        <li>• VIP perks kick in with consistent play—check account messages regularly</li>
                        <li>• Play for entertainment, not income—cashback is a bonus, not a strategy</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="games" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-6 h-6 mr-2 text-purple-600" />
                    Casino Games & Sportsbook
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-lg mb-3">Slots & Live Casino</h3>
                        <p className="text-gray-700 mb-3">
                          Large slot catalogue and live tables with real dealers for an authentic casino experience.
                        </p>
                        <p className="text-sm text-purple-700 font-medium">
                          Tip: Check game info for RTP/volatility; start with lower stakes to learn features
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-lg mb-3">Sportsbook</h3>
                        <p className="text-gray-700 mb-3">
                          Prematch and live betting across major leagues with rotating boosts and promotions.
                        </p>
                        <p className="text-sm text-blue-700 font-medium">
                          Tip: Keep a betting log; singles are steadier than big parlays
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-4">Strategy for Combined Play</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-green-700 mb-3">Casino Strategy</h4>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Start at lower stakes and increase during winning runs</li>
                            <li>• Check RTP stats before picking games</li>
                            <li>• Use cashback to offset variance</li>
                            <li>• Avoid chasing losses across game types</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-green-700 mb-3">Sports Betting</h4>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Look for odds boosts to stack with cashback</li>
                            <li>• Singles provide steadier returns than parlays</li>
                            <li>• Track bets to identify profitable patterns</li>
                            <li>• Use VIP offers for custom odds or enhanced limits</li>
                          </ul>
                        </div>
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
              <CardDescription>Common questions about Duelbits rewards and features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Does Duelbits VIP include sportsbook cashback?</h3>
                  <p className="text-gray-700">Yes—cashback applies across slots, live casino, and sportsbook according to on-site terms and your activity level.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">How fast do VIP perks kick in?</h3>
                  <p className="text-gray-700">Perks scale with consistent play. Check your account promos regularly and ask support about reloads if you're active.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Can I browse before depositing?</h3>
                  <p className="text-gray-700">Yes. Create an account, look around, and review Rewards first. Deposit only when you're ready to play with real funds.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Is KYC required to sign up?</h3>
                  <p className="text-gray-700">Not always at signup, but verification can be requested later—especially before larger withdrawals or to meet regulatory requirements.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-12 px-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Earning Cashback?</h2>
          <p className="text-xl mb-6">Join Duelbits for casino + sportsbook cashback with code degenrewards</p>
          <Button size="lg" variant="secondary" className="px-8 py-3" asChild>
            <a href="https://duelbits.com/?a=degenrewards" target="_blank" rel="noopener noreferrer">
              Join Duelbits Now
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
            Cashback softens variance but doesn't remove risk. Keep limits firm and play for entertainment, not income. 
            All gambling has risk—set limits, take breaks, and keep it fun. 
            If gambling stops being enjoyable, seek help at <strong>BeGambleAware</strong>.
          </p>
        </section>
      </main>
    </>
  );
};

export default Duelbits;