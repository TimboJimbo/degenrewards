import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Target, TrendingUp, Shield, Calculator, Clock, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQSection from '@/components/FAQ/FAQSection';

const StrategyGuides = () => {
  const strategies = [
    {
      title: "Bankroll Management Strategy",
      description: "Essential money management techniques for long-term success",
      difficulty: "Beginner",
      timeToRead: "5 min",
      category: "Fundamentals",
      tips: [
        "Never bet more than 1-2% of your bankroll per session",
        "Set strict daily, weekly, and monthly limits",
        "Use separate accounts for gambling funds",
        "Track all deposits, withdrawals, and results"
      ],
      riskLevel: "Low",
      expectedReturn: "Consistent"
    },
    {
      title: "VIP Level Optimization",
      description: "Advanced techniques to climb VIP levels efficiently",
      difficulty: "Intermediate",
      timeToRead: "8 min",
      category: "VIP Strategy",
      tips: [
        "Focus play on high-contributing games",
        "Time your sessions around promotional periods",
        "Maintain consistent play patterns",
        "Utilize reload bonuses strategically"
      ],
      riskLevel: "Medium",
      expectedReturn: "High"
    },
    {
      title: "Bonus Hunting Methodology",
      description: "Systematic approach to maximizing bonus value",
      difficulty: "Advanced",
      timeToRead: "12 min", 
      category: "Bonus Strategy",
      tips: [
        "Calculate true bonus value including wagering",
        "Focus on bonuses with favorable terms",
        "Use bonus tracking spreadsheets",
        "Understand game contribution rates"
      ],
      riskLevel: "Medium",
      expectedReturn: "Very High"
    },
    {
      title: "Rakeback Maximization",
      description: "Techniques to earn maximum rakeback across platforms",
      difficulty: "Intermediate",
      timeToRead: "6 min",
      category: "Rakeback",
      tips: [
        "Understand each platform's rakeback calculation",
        "Time your play for optimal VIP status",
        "Choose games with 100% rakeback contribution",
        "Monitor and compare rakeback rates regularly"
      ],
      riskLevel: "Low",
      expectedReturn: "Steady"
    }
  ];

  const riskManagement = [
    {
      principle: "Set Loss Limits",
      description: "Decide your maximum loss before you start playing",
      implementation: "Use platform deposit limits and session time limits"
    },
    {
      principle: "Take Regular Breaks",
      description: "Schedule mandatory breaks to maintain clear judgment",
      implementation: "Set hourly alarms, use platform reality checks"
    },
    {
      principle: "Avoid Chasing Losses",
      description: "Never increase bets to recover previous losses",
      implementation: "Stick to predetermined bet sizes and session budgets"
    },
    {
      principle: "Track Your Results",
      description: "Keep detailed records of all gambling activity",
      implementation: "Use spreadsheets or apps to monitor win/loss patterns"
    }
  ];

  const platformStrategies = {
    roobet: {
      focus: "Rain Events & Daily Bonuses",
      optimalTimes: "Peak chat activity hours (8-11 PM EST)",
      bestGames: "Slots for rakeback, Originals for rain qualification",
      vipTips: "Consistent daily play beats sporadic large sessions"
    },
    gamdom: {
      focus: "XP System & Loyalty Rewards",
      optimalTimes: "Monday XP bonuses, Weekend tournaments",
      bestGames: "Slots for XP grinding, Live games for variety",
      vipTips: "Focus on XP multiplier events for faster progression"
    },
    duelbits: {
      focus: "Battle System & Tournaments",
      optimalTimes: "Tournament schedules, Battle challenges",
      bestGames: "PvP battles, Slots for steady rakeback",
      vipTips: "Participate in exclusive VIP tournaments"
    }
  };

  return (
    <>
      <Helmet>
        <title>Casino Strategy Guides 2024 | Expert Gambling Strategies | Degen Rewards</title>
        <meta name="description" content="Master casino strategies with our expert guides. Learn bankroll management, VIP optimization, bonus hunting, and risk management techniques for crypto casinos." />
        <meta name="keywords" content="casino strategy, gambling strategies, bankroll management, VIP optimization, bonus hunting, risk management, crypto casino tips" />
        <link rel="canonical" href="https://degenrewards.com/strategy-guides" />
      </Helmet>

      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-primary" />
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Expert <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Strategy Guides</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Master the art of strategic gambling with our comprehensive guides. Learn proven techniques from industry experts to maximize your returns and minimize risks.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Badge className="bg-primary/10 text-primary">
                <Shield className="h-3 w-3 mr-1" />
                Risk Management
              </Badge>
              <Badge className="bg-secondary/10 text-secondary">
                <TrendingUp className="h-3 w-3 mr-1" />
                Profit Optimization
              </Badge>
              <Badge className="bg-accent/10 text-accent">
                <Calculator className="h-3 w-3 mr-1" />
                Mathematical Approach
              </Badge>
            </div>
          </div>

          {/* Strategy Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {strategies.map((strategy, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{strategy.category}</Badge>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {strategy.timeToRead}
                      </Badge>
                      <Badge 
                        className={`text-xs ${
                          strategy.difficulty === 'Beginner' ? 'bg-secondary/10 text-secondary' :
                          strategy.difficulty === 'Intermediate' ? 'bg-accent/10 text-accent' :
                          'bg-destructive/10 text-destructive'
                        }`}
                      >
                        {strategy.difficulty}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl">{strategy.title}</CardTitle>
                  <p className="text-muted-foreground">{strategy.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Risk Level</p>
                      <Badge variant={strategy.riskLevel === 'Low' ? 'secondary' : strategy.riskLevel === 'Medium' ? 'default' : 'destructive'}>
                        {strategy.riskLevel}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Expected Return</p>
                      <Badge variant="outline">{strategy.expectedReturn}</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Key Tips
                    </h4>
                    <ul className="space-y-2">
                      {strategy.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full" variant="outline">
                    Read Full Guide
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Risk Management Section */}
          <Card className="mb-12 bg-gradient-to-br from-destructive/5 to-warning/5 border-destructive/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Essential Risk Management
              </CardTitle>
              <p className="text-muted-foreground">
                The foundation of successful gambling is proper risk management. These principles are non-negotiable.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {riskManagement.map((principle, index) => (
                  <div key={index} className="p-4 bg-background/50 rounded-lg border border-border/50">
                    <h4 className="font-semibold mb-2">{principle.principle}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{principle.description}</p>
                    <div className="text-xs bg-primary/10 text-primary p-2 rounded">
                      <strong>How:</strong> {principle.implementation}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Platform-Specific Strategies */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Platform-Specific Strategies</CardTitle>
              <p className="text-muted-foreground">
                Each platform has unique features that require tailored approaches for maximum effectiveness.
              </p>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="roobet">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="roobet">Roobet</TabsTrigger>
                  <TabsTrigger value="gamdom">Gamdom</TabsTrigger>
                  <TabsTrigger value="duelbits">Duelbits</TabsTrigger>
                </TabsList>

                {Object.entries(platformStrategies).map(([platform, strategy]) => (
                  <TabsContent key={platform} value={platform} className="mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Primary Focus</h4>
                          <p className="text-sm text-muted-foreground">{strategy.focus}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Optimal Play Times</h4>
                          <p className="text-sm text-muted-foreground">{strategy.optimalTimes}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Best Games</h4>
                          <p className="text-sm text-muted-foreground">{strategy.bestGames}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">VIP Tips</h4>
                          <p className="text-sm text-muted-foreground">{strategy.vipTips}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button asChild>
                        <Link to={`/${platform}`}>
                          View {platform.charAt(0).toUpperCase() + platform.slice(1)} Guide
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <FAQSection category="general" />

          {/* CTA Section */}
          <Card className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="text-center py-12">
              <h2 className="text-2xl font-heading font-bold mb-4">
                Ready to Apply These Strategies?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Put your knowledge to the test on verified platforms with the best bonuses and VIP programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/best-bonuses">
                    Find Best Bonuses
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/vip-comparison">
                    Compare VIP Programs
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default StrategyGuides;