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
  Target,
  Percent,
  TrendingUp,
  Calculator
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const RainbetRakeback = () => {
  return (
    <>
      <Helmet>
        <title>Rainbet Rakeback System Guide (2025) | Complete Analysis | DegenRewards</title>
        <meta name="description" content="Deep dive into Rainbet's rakeback system: rates, tiers, calculation methods, and optimization strategies. Maximize your automatic cashback rewards." />
        <meta name="keywords" content="rainbet rakeback, rainbet cashback, rainbet rewards system, crypto casino rakeback, rainbet vip" />
        <link rel="canonical" href="https://degenrewards.com/rainbet-rakeback" />
      </Helmet>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-900/90 to-cyan-600/90 rounded-lg p-12">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Rainbet Rakeback System
                </h1>
                <p className="text-xl md:text-2xl mb-6">
                  Automatic Cashback • Progressive Rates • Real-Time Credits
                </p>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <Shield className="w-5 h-5 mr-2" />
                  Verified Analysis
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Current Rakeback Overview */}
        <section className="mb-12">
          <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-800">Rainbet Rakeback at a Glance</CardTitle>
              <CardDescription>Updated August 2025 • All Rates Verified</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Percent className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Up to 20%</h3>
                  <p className="text-gray-600">Maximum rakeback rate for high-volume players</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Instant Credits</h3>
                  <p className="text-gray-600">Real-time rakeback with no waiting periods</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Progressive Tiers</h3>
                  <p className="text-gray-600">Higher rates as your wagering volume increases</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Target className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">All Games</h3>
                  <p className="text-gray-600">Rakeback applies to all casino games and sports</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3" asChild>
                  <a href="https://rainbet.com/?r=Degenrewards" target="_blank" rel="noopener noreferrer">
                    Start Earning Rakeback at Rainbet
                    <CheckCircle className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <p className="text-sm text-gray-600 mt-2">Code: DegenRewards • Instant rakeback activation</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Detailed Rakeback Guide */}
        <section className="mb-12">
          <Tabs defaultValue="how-it-works" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
              <TabsTrigger value="rate-tiers">Rate Tiers</TabsTrigger>
              <TabsTrigger value="calculations">Calculations</TabsTrigger>
              <TabsTrigger value="optimization">Optimization</TabsTrigger>
            </TabsList>

            <TabsContent value="how-it-works" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-6 h-6 mr-2 text-blue-600" />
                    How Rainbet Rakeback Works
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-4">Automatic System</h3>
                    <p className="text-gray-700 mb-4">
                      Rainbet's rakeback system is fully automated and operates in real-time. Every bet you place 
                      immediately contributes to your rakeback calculation, with cashback credits appearing 
                      instantly in your account balance.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                        <h4 className="font-medium text-blue-700 mb-2">Real-Time Processing</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Rakeback calculated per bet</li>
                          <li>• Instant credit to your balance</li>
                          <li>• No manual claims required</li>
                          <li>• 24/7 automated system</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-medium text-green-700 mb-2">Universal Coverage</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• All casino games included</li>
                          <li>• Sports betting covered</li>
                          <li>• Live dealer games eligible</li>
                          <li>• No game restrictions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3">Key Benefits</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">No Minimum</h4>
                          <p className="text-sm text-gray-700">Rakeback starts from your first bet</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">No Caps</h4>
                          <p className="text-sm text-gray-700">Unlimited rakeback potential</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">No Wagering</h4>
                          <p className="text-sm text-gray-700">Withdraw rakeback immediately</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rate-tiers" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-purple-600" />
                    Rainbet Rakeback Tiers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-4">Progressive Rate Structure</h3>
                      <p className="text-gray-700 mb-6">
                        Rainbet uses a tiered system where your rakeback percentage increases based on your 
                        total wagering volume. Higher tiers unlock better rates and additional VIP perks.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border-l-4 border-gray-400">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold text-gray-700">Starter Tier</h4>
                            <Badge variant="outline">5% Rakeback</Badge>
                          </div>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p>• Wagering requirement: $0 - $1,000</p>
                            <p>• All new players start here</p>
                            <p>• Instant activation upon signup</p>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold text-blue-700">Regular Tier</h4>
                            <Badge className="bg-blue-500 text-white">10% Rakeback</Badge>
                          </div>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p>• Wagering requirement: $1,000 - $10,000</p>
                            <p>• Enhanced daily bonuses</p>
                            <p>• Priority customer support</p>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold text-yellow-700">Gold Tier</h4>
                            <Badge className="bg-yellow-500 text-white">15% Rakeback</Badge>
                          </div>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p>• Wagering requirement: $10,000 - $50,000</p>
                            <p>• Weekly bonus packages</p>
                            <p>• Exclusive tournament access</p>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold text-purple-700">VIP Tier</h4>
                            <Badge className="bg-purple-500 text-white">20% Rakeback</Badge>
                          </div>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p>• Wagering requirement: $50,000+</p>
                            <p>• Personal account manager</p>
                            <p>• Custom bonuses and limits</p>
                            <p>• Expedited withdrawals</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="calculations" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="w-6 h-6 mr-2 text-green-600" />
                    Rakeback Calculation Examples
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-4">How Your Rakeback is Calculated</h3>
                      <p className="text-gray-700 mb-4">
                        Rakeback is calculated based on the house edge of each game and your tier percentage. 
                        Here's how it works in practice:
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg border">
                          <h4 className="font-semibold text-green-700 mb-3">Slots Example</h4>
                          <div className="text-sm space-y-2">
                            <p><strong>Your Bet:</strong> $100</p>
                            <p><strong>House Edge:</strong> 4%</p>
                            <p><strong>Your Tier:</strong> Regular (10%)</p>
                            <hr className="my-2" />
                            <p><strong>House Edge Amount:</strong> $100 × 4% = $4</p>
                            <p><strong>Your Rakeback:</strong> $4 × 10% = $0.40</p>
                            <p className="text-green-600 font-medium">Instant credit: $0.40</p>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border">
                          <h4 className="font-semibold text-green-700 mb-3">Sports Betting Example</h4>
                          <div className="text-sm space-y-2">
                            <p><strong>Your Bet:</strong> $50</p>
                            <p><strong>Typical Margin:</strong> 5%</p>
                            <p><strong>Your Tier:</strong> Gold (15%)</p>
                            <hr className="my-2" />
                            <p><strong>Margin Amount:</strong> $50 × 5% = $2.50</p>
                            <p><strong>Your Rakeback:</strong> $2.50 × 15% = $0.375</p>
                            <p className="text-green-600 font-medium">Instant credit: $0.38</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-4">Monthly Rakeback Potential</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Monthly Wagering</th>
                              <th className="text-left p-2">Tier</th>
                              <th className="text-left p-2">Rakeback Rate</th>
                              <th className="text-left p-2">Monthly Rakeback*</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-2">$1,000</td>
                              <td className="p-2">Starter</td>
                              <td className="p-2">5%</td>
                              <td className="p-2 text-green-600 font-medium">~$20</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">$5,000</td>
                              <td className="p-2">Regular</td>
                              <td className="p-2">10%</td>
                              <td className="p-2 text-green-600 font-medium">~$200</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">$20,000</td>
                              <td className="p-2">Gold</td>
                              <td className="p-2">15%</td>
                              <td className="p-2 text-green-600 font-medium">~$1,200</td>
                            </tr>
                            <tr>
                              <td className="p-2">$100,000</td>
                              <td className="p-2">VIP</td>
                              <td className="p-2">20%</td>
                              <td className="p-2 text-green-600 font-medium">~$8,000</td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="text-xs text-gray-600 mt-2">*Estimates based on 4% average house edge</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="optimization" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-6 h-6 mr-2 text-orange-600" />
                    Rakeback Optimization Strategies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-4">Smart Rakeback Strategies</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-medium text-orange-700 mb-3">Tier Progression Tips</h4>
                          <div className="space-y-3">
                            <div className="bg-white p-3 rounded-lg border-l-4 border-orange-500">
                              <h5 className="font-medium text-sm">Consistent Play</h5>
                              <p className="text-xs text-gray-600">Regular sessions help maintain momentum toward higher tiers</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg border-l-4 border-orange-500">
                              <h5 className="font-medium text-sm">Volume Focus</h5>
                              <p className="text-xs text-gray-600">Higher wagering volume unlocks better rakeback percentages</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg border-l-4 border-orange-500">
                              <h5 className="font-medium text-sm">Game Selection</h5>
                              <p className="text-xs text-gray-600">All games contribute equally - play your favorites</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-medium text-orange-700 mb-3">Bankroll Management</h4>
                          <div className="space-y-3">
                            <div className="bg-white p-3 rounded-lg border-l-4 border-red-500">
                              <h5 className="font-medium text-sm">Use Rakeback as Buffer</h5>
                              <p className="text-xs text-gray-600">Instant rakeback helps offset short-term variance</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg border-l-4 border-red-500">
                              <h5 className="font-medium text-sm">Set Clear Limits</h5>
                              <p className="text-xs text-gray-600">Never chase losses - rakeback is a bonus, not income</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg border-l-4 border-red-500">
                              <h5 className="font-medium text-sm">Track Progress</h5>
                              <p className="text-xs text-gray-600">Monitor your tier progression and rakeback earnings</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
                        Important Reminders
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Rakeback helps with variance but doesn't eliminate risk</li>
                        <li>• Higher tiers require significant wagering - play within your means</li>
                        <li>• All gaming should be for entertainment, not profit</li>
                        <li>• Set strict limits and use responsible gaming tools</li>
                        <li>• Rakeback terms can change - always check current conditions</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-4">Maximizing Your Rainbet Experience</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <Gift className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <h4 className="font-medium mb-1">Combine Bonuses</h4>
                          <p className="text-sm text-gray-600">Stack rakeback with welcome bonuses and daily rewards</p>
                        </div>
                        <div className="text-center">
                          <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                          <h4 className="font-medium mb-1">VIP Benefits</h4>
                          <p className="text-sm text-gray-600">Higher tiers unlock personal managers and custom offers</p>
                        </div>
                        <div className="text-center">
                          <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                          <h4 className="font-medium mb-1">Long-term Value</h4>
                          <p className="text-sm text-gray-600">Consistent play builds toward substantial rakeback earnings</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-12 px-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Start Earning Instant Rakeback</h2>
          <p className="text-xl mb-6">Join Rainbet today and activate automatic rakeback on all your wagers</p>
          <Button size="lg" variant="secondary" className="px-8 py-3" asChild>
            <a href="https://rainbet.com/?r=Degenrewards" target="_blank" rel="noopener noreferrer">
              Sign Up at Rainbet
            </a>
          </Button>
          <div className="mt-6 text-sm opacity-90">
            <p>Code: DegenRewards • Instant rakeback activation • 18+ only</p>
            <p>Play responsibly • Terms and conditions apply</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default RainbetRakeback;