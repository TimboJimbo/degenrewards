import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, ExternalLink, Gift, Users, Zap, AlertTriangle, Shield, DollarSign, Trophy, Target } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Rainbet = () => {
  const rewards = [
    {
      type: "Welcome Bonus",
      amount: "Up to $1,000",
      description: "Matched deposit bonus for new players",
      requirements: "Min $20 deposit",
      verified: true
    },
    {
      type: "Daily Rewards",
      amount: "$10-$500",
      description: "Daily bonuses based on activity level",
      requirements: "Active account status",
      verified: true
    },
    {
      type: "Rakeback System",
      amount: "Up to 20%",
      description: "Automatic cashback on all wagers",
      requirements: "Minimum wagering activity",
      verified: true
    },
    {
      type: "VIP Perks",
      amount: "Custom Limits",
      description: "Exclusive bonuses and personal manager",
      requirements: "VIP tier qualification",
      verified: true
    }
  ];

  const faqs = [
    {
      question: "Is Rainbet safe and legitimate?",
      answer: "Yes, Rainbet operates under proper licensing and uses advanced security measures. They feature provably fair games and have established a strong reputation in the crypto gambling community."
    },
    {
      question: "How do I claim Rainbet bonuses?",
      answer: "Most bonuses are automatically credited when you meet the requirements. Welcome bonuses activate on your first deposit, while daily rewards appear in your account dashboard based on your activity."
    },
    {
      question: "What is the Rainbet rakeback system?",
      answer: "Rainbet's rakeback system automatically returns a percentage of your wagers as cashback. The percentage increases based on your VIP level and wagering volume."
    },
    {
      question: "Can I access Rainbet from anywhere?",
      answer: "Rainbet has regional restrictions. Always check local gambling laws and Rainbet's terms of service to ensure the platform is available in your jurisdiction."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Rainbet Bonus Guide & Rakeback System (2025) | DegenRewards</title>
        <meta name="description" content="Complete Rainbet guide: welcome bonuses, daily rewards, rakeback system, and VIP perks. Learn how to maximize your crypto casino rewards." />
        <meta name="keywords" content="rainbet bonus, rainbet rakeback, rainbet rewards, crypto casino bonuses, rainbet vip" />
        <link rel="canonical" href="https://degenrewards.com/rainbet" />
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20" />
          
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl">
              <Badge className="mb-4 bg-blue-500/10 text-blue-500 border-blue-500/20">
                <CheckCircle className="h-3 w-3 mr-1" />
                Verified Platform
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                Rainbet Rewards Guide: <span className="text-blue-500">Complete Bonus & Rakeback System</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
                Comprehensive guide to Rainbet's reward system including welcome bonuses, daily rewards, automatic rakeback, 
                and exclusive VIP perks. Learn how to maximize your crypto casino experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white" asChild>
                  <a href="https://rainbet.com/?r=Degenrewards" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Join Rainbet
                    <span className="text-xs ml-2 bg-white/20 px-2 py-1 rounded">Code: Degenrewards</span>
                  </a>
                </Button>
                <Button size="lg" variant="outline">
                  <Gift className="mr-2 h-4 w-4" />
                  View Current Promotions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Current Rewards Overview */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-blue-800">Current Rainbet Rewards</CardTitle>
                <CardDescription>Updated August 2025 • Terms Apply</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Gift className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2">Welcome Bonus</h3>
                    <p className="text-gray-600">Up to $1,000 matched bonus for new players</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2">Daily Rewards</h3>
                    <p className="text-gray-600">Consistent daily bonuses based on activity</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Trophy className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2">Rakeback System</h3>
                    <p className="text-gray-600">Automatic cashback up to 20% on all wagers</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Target className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2">VIP Perks</h3>
                    <p className="text-gray-600">Exclusive bonuses and personal account manager</p>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3" asChild>
                    <a href="https://rainbet.com/?r=Degenrewards" target="_blank" rel="noopener noreferrer">
                      Join Rainbet with Code: Degenrewards
                      <CheckCircle className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                  <p className="text-sm text-gray-600 mt-2">Code auto-applies • 18+ only • Terms apply</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Rewards Breakdown */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">Rainbet Rewards Breakdown</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                All current Rainbet rewards and bonuses verified as of {new Date().toLocaleDateString()}. 
                Terms and conditions apply to all offers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rewards.map((reward, index) => (
                <Card key={index} className="relative">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {reward.verified && <CheckCircle className="h-3 w-3 mr-1" />}
                        Verified
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{reward.type}</CardTitle>
                    <div className="text-2xl font-bold text-blue-500">{reward.amount}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{reward.description}</p>
                    <div className="text-xs text-muted-foreground">
                      <strong>Requirements:</strong> {reward.requirements}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Guide */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="getting-started" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                <TabsTrigger value="rakeback-system">Rakeback System</TabsTrigger>
                <TabsTrigger value="vip-program">VIP Program</TabsTrigger>
                <TabsTrigger value="strategies">Strategies</TabsTrigger>
              </TabsList>
              
              <TabsContent value="getting-started" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-blue-500" />
                      Getting Started with Rainbet
                    </CardTitle>
                    <CardDescription>
                      Step-by-step guide to claiming your first Rainbet bonuses
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Step 1: Account Setup</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Create account with valid email address</li>
                          <li>• Verify your account through email confirmation</li>
                          <li>• Set up two-factor authentication for security</li>
                          <li>• Use code "DegenRewards" for bonus eligibility</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Step 2: First Deposit</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Minimum $20 deposit to qualify for welcome bonus</li>
                          <li>• Choose from various crypto payment options</li>
                          <li>• Welcome bonus is automatically credited</li>
                          <li>• Rakeback system activates immediately</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">Pro Tip for New Players</h4>
                      <p className="text-gray-700">
                        Start with smaller bets to understand the platform and rakeback system. 
                        The automatic cashback helps offset variance while you learn the games.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="rakeback-system" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DollarSign className="h-5 w-5 mr-2 text-green-500" />
                      Rainbet Rakeback System
                    </CardTitle>
                    <CardDescription>
                      Automatic cashback on all your wagers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-lg mb-3">How Rakeback Works</h3>
                        <p className="text-gray-700 mb-4">
                          Rainbet's rakeback system automatically returns a percentage of your wagers as cashback. 
                          The more you wager, the higher your rakeback percentage becomes.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                            <h4 className="font-medium text-green-700 mb-2">Instant Cashback</h4>
                            <p className="text-sm text-gray-700 mb-2">Real-time rakeback credited to your account</p>
                            <p className="text-xs text-gray-600">No waiting periods or manual claims required</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                            <h4 className="font-medium text-blue-700 mb-2">Progressive Rates</h4>
                            <p className="text-sm text-gray-700 mb-2">Rakeback percentage increases with wagering</p>
                            <p className="text-xs text-gray-600">Higher volume players earn up to 20% rakeback</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-lg mb-4">Rakeback Tiers</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                            <div>
                              <div className="font-semibold">Starter (0-$1,000 wagered)</div>
                              <div className="text-sm text-gray-600">5% rakeback</div>
                            </div>
                            <Badge variant="outline">Entry Level</Badge>
                          </div>
                          
                          <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                            <div>
                              <div className="font-semibold">Regular ($1,000-$10,000 wagered)</div>
                              <div className="text-sm text-gray-600">10% rakeback</div>
                            </div>
                            <Badge variant="secondary">Standard</Badge>
                          </div>
                          
                          <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                            <div>
                              <div className="font-semibold">High Roller ($10,000+ wagered)</div>
                              <div className="text-sm text-gray-600">15-20% rakeback</div>
                            </div>
                            <Badge className="bg-blue-500 text-white">Premium</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="vip-program" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-purple-500" />
                      VIP Program Benefits
                    </CardTitle>
                    <CardDescription>
                      Exclusive perks for dedicated players
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-lg mb-4">VIP Tier Benefits</h3>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium">Personal Account Manager</h4>
                              <p className="text-gray-700 text-sm">Dedicated support for VIP players with custom assistance</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium">Enhanced Rakeback</h4>
                              <p className="text-gray-700 text-sm">Higher rakeback percentages and exclusive bonuses</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium">Priority Withdrawals</h4>
                              <p className="text-gray-700 text-sm">Faster processing times for all withdrawal requests</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium">Exclusive Events</h4>
                              <p className="text-gray-700 text-sm">Access to VIP-only tournaments and special promotions</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="strategies" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Reward Optimization Strategies</CardTitle>
                    <CardDescription>
                      Maximize your Rainbet rewards effectively
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">Consistent Play Strategy</h4>
                        <p className="text-sm text-muted-foreground">
                          Regular gameplay helps maintain higher rakeback tiers and unlocks consistent daily rewards. 
                          Steady sessions are better than sporadic large deposits.
                        </p>
                      </div>
                      
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">Rakeback Optimization</h4>
                        <p className="text-sm text-muted-foreground">
                          Focus on games that contribute fully to wagering requirements. 
                          The automatic rakeback system rewards all legitimate gameplay.
                        </p>
                      </div>
                      
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">VIP Progression</h4>
                        <p className="text-sm text-muted-foreground">
                          Combine regular deposits with consistent wagering to progress through VIP tiers. 
                          Higher tiers unlock significantly better perks and personal service.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
                        Responsible Gaming Tips
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Set strict daily and weekly limits before playing</li>
                        <li>• Use rakeback as a bonus, not a primary income strategy</li>
                        <li>• Take regular breaks and avoid extended gaming sessions</li>
                        <li>• Never chase losses by increasing bet sizes</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-12 px-6 rounded-lg max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
              <p className="text-xl mb-6">Join Rainbet for automatic rakeback and exclusive bonuses</p>
              <Button size="lg" variant="secondary" className="px-8 py-3" asChild>
                <a href="https://rainbet.com/?r=Degenrewards" target="_blank" rel="noopener noreferrer">
                  Join Rainbet Now
                </a>
              </Button>
              <div className="mt-6 text-sm opacity-90">
                <p>18+ only • Play responsibly • Terms and conditions apply</p>
                <p>Code: DegenRewards auto-applies • Always verify current terms on site</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Rainbet;