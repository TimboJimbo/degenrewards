import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, ExternalLink, Gift, Users, Zap, AlertTriangle } from "lucide-react";
import roobetHero from "@/assets/roobet-hero.jpg";

const Roobet = () => {
  const rewards = [
    {
      type: "Daily Bonus",
      amount: "Up to $1,000",
      description: "Daily reload bonus based on your VIP level",
      requirements: "Min $10 deposit",
      verified: true
    },
    {
      type: "Rain Events",
      amount: "$50-$500",
      description: "Random crypto rain drops in chat",
      requirements: "Active chat participation",
      verified: true
    },
    {
      type: "VIP Rewards",
      amount: "Up to 25%",
      description: "Exclusive cashback and reload bonuses",
      requirements: "VIP level 2+",
      verified: true
    },
    {
      type: "Level Up Bonus",
      amount: "$10-$5,000",
      description: "One-time bonus for reaching new levels",
      requirements: "Wagering progress",
      verified: true
    }
  ];

  const faqs = [
    {
      question: "Is Roobet legitimate and safe?",
      answer: "Yes, Roobet is a licensed casino operating under a Curaçao gaming license. They use provably fair technology and have been operating since 2019 with a strong reputation in the crypto gambling community."
    },
    {
      question: "How do I claim Roobet rewards?",
      answer: "Most rewards are automatically credited to your account. Daily bonuses appear in your account dashboard, while VIP rewards are distributed based on your level. Rain events require active chat participation."
    },
    {
      question: "What are the wagering requirements?",
      answer: "Bonus wagering requirements typically range from 35x to 40x. The exact requirement depends on the specific promotion. Always check the terms before claiming any bonus."
    },
    {
      question: "Can I use Roobet in the US?",
      answer: "Roobet restricts access from several countries including the United States. Always check local gambling laws and Roobet's terms of service for your jurisdiction."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${roobetHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-black/40" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-red-500/10 text-red-500 border-red-500/20">
              <CheckCircle className="h-3 w-3 mr-1" />
              Verified Platform
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Roobet Rewards Guide: <span className="text-red-500">Maximize Your Crypto Casino Bonuses</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Complete guide to Roobet's reward system including daily bonuses, VIP perks, rain events, and level-up rewards. 
              Learn how to legitimately maximize your bonuses while gambling responsibly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white" asChild>
                <a href="https://roobet.com/?ref=degenrewards" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Roobet
                  <span className="text-xs ml-2 bg-white/20 px-2 py-1 rounded">(Affiliate Link)</span>
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

      {/* Rewards Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Roobet Rewards Breakdown</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All current Roobet rewards and bonuses verified as of {new Date().toLocaleDateString()}. 
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
                  <div className="text-2xl font-bold text-red-500">{reward.amount}</div>
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="getting-started" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="vip-system">VIP System</TabsTrigger>
              <TabsTrigger value="strategies">Strategies</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
            </TabsList>
            
            <TabsContent value="getting-started" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-red-500" />
                    Getting Started with Roobet Rewards
                  </CardTitle>
                  <CardDescription>
                    Step-by-step guide to claiming your first Roobet bonuses
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <div>
                        <h4 className="font-semibold">Create Your Account</h4>
                        <p className="text-sm text-muted-foreground">Sign up with a valid email address and verify your account</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <div>
                        <h4 className="font-semibold">Make Your First Deposit</h4>
                        <p className="text-sm text-muted-foreground">Minimum $10 deposit to unlock daily bonus eligibility</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <div>
                        <h4 className="font-semibold">Start Playing & Level Up</h4>
                        <p className="text-sm text-muted-foreground">Play games to earn experience points and unlock higher VIP levels</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                      <div>
                        <h4 className="font-semibold">Join the Community</h4>
                        <p className="text-sm text-muted-foreground">Participate in chat to be eligible for rain events and community giveaways</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="vip-system" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-red-500" />
                    VIP Level Benefits
                  </CardTitle>
                  <CardDescription>
                    Unlock exclusive rewards as you progress through VIP levels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-3">
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <div className="font-semibold">Bronze (Level 2-10)</div>
                          <div className="text-sm text-muted-foreground">Daily bonus: 5-10%</div>
                        </div>
                        <Badge variant="outline">Entry Level</Badge>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <div className="font-semibold">Silver (Level 11-25)</div>
                          <div className="text-sm text-muted-foreground">Daily bonus: 10-15%</div>
                        </div>
                        <Badge variant="secondary">Enhanced Rewards</Badge>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <div className="font-semibold">Gold (Level 26-50)</div>
                          <div className="text-sm text-muted-foreground">Daily bonus: 15-20%</div>
                        </div>
                        <Badge className="bg-yellow-500 text-white">Premium</Badge>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <div className="font-semibold">Platinum (Level 51+)</div>
                          <div className="text-sm text-muted-foreground">Daily bonus: 20-25%</div>
                        </div>
                        <Badge className="bg-purple-500 text-white">Elite</Badge>
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
                    Legitimate methods to maximize your Roobet rewards
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Daily Bonus Timing</h4>
                      <p className="text-sm text-muted-foreground">
                        Claim your daily bonus every 24 hours to maintain your streak. 
                        Higher VIP levels receive larger daily bonuses.
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Chat Participation</h4>
                      <p className="text-sm text-muted-foreground">
                        Stay active in chat to be eligible for rain events. 
                        Be genuine and follow chat rules - spam will get you banned.
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Wagering Strategy</h4>
                      <p className="text-sm text-muted-foreground">
                        Focus on games with lower house edge to stretch your bankroll longer. 
                        This helps you level up more efficiently.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="safety" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-yellow-500" />
                    Safety & Responsible Gambling
                  </CardTitle>
                  <CardDescription>
                    Important information about gambling safely on Roobet
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Risk Warning</h4>
                    <p className="text-sm text-yellow-700">
                      Gambling involves significant risk of loss. Never gamble with money you cannot afford to lose. 
                      Set strict limits and stick to them.
                    </p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>• Set daily, weekly, and monthly loss limits</div>
                    <div>• Take regular breaks from gambling</div>
                    <div>• Never chase losses with bigger bets</div>
                    <div>• Use Roobet's built-in responsible gambling tools</div>
                    <div>• Seek help if gambling becomes problematic</div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Start Playing?</CardTitle>
              <CardDescription>
                Join thousands of players earning rewards on Roobet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white" asChild>
                <a href="https://roobet.com/?ref=degenrewards" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Play on Roobet Now
                  <span className="text-xs ml-2 bg-white/20 px-2 py-1 rounded">(Affiliate Link)</span>
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                By clicking this link, you support our site through affiliate commissions at no extra cost to you.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Roobet;