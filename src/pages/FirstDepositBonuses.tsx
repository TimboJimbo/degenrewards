import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { DollarSign, Percent, Clock, Gift, ExternalLink, CheckCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FirstDepositBonuses = () => {
  const bonuses = [
    {
      platform: 'Roobet',
      title: '100% First Deposit Bonus',
      maxBonus: '$1,000',
      percentage: 100,
      minDeposit: '$20',
      wageringRequirement: '35x',
      code: 'DEGENREWARDS',
      timeLimit: '7 days',
      gameContribution: {
        slots: '100%',
        blackjack: '10%',
        roulette: '5%'
      },
      pros: ['Instant bonus credit', 'High max bonus', 'Reasonable wagering'],
      cons: ['7-day expiry', 'Limited game contribution'],
      rating: 4.5,
      color: 'bg-red-500',
      href: '/roobet',
      featured: true
    },
    {
      platform: 'Gamdom',
      title: '100% Welcome Bonus',
      maxBonus: '$5,000',
      percentage: 100,
      minDeposit: '$10',
      wageringRequirement: '40x',
      code: 'WELCOME100',
      timeLimit: '14 days',
      gameContribution: {
        slots: '100%',
        blackjack: '20%',
        roulette: '10%'
      },
      pros: ['Highest max bonus', 'Lower min deposit', 'Extended time limit'],
      cons: ['Higher wagering requirement', 'Complex terms'],
      rating: 4.3,
      color: 'bg-purple-500',
      href: '/gamdom'
    },
    {
      platform: 'Duelbits',
      title: '100% Match Bonus',
      maxBonus: '$2,500',
      percentage: 100,
      minDeposit: '$25',
      wageringRequirement: '30x',
      code: 'FIRSTBET',
      timeLimit: '10 days',
      gameContribution: {
        slots: '100%',
        blackjack: '15%',
        roulette: '8%'
      },
      pros: ['Lower wagering requirement', 'Good max bonus', 'Fair terms'],
      cons: ['Higher min deposit', 'Average time limit'],
      rating: 4.2,
      color: 'bg-blue-500',
      href: '/duelbits'
    },
    {
      platform: 'Rainbet',
      title: '100% First Deposit',
      maxBonus: '$1,000',
      percentage: 100,
      minDeposit: '$15',
      wageringRequirement: '25x',
      code: 'DEGENREWARDS',
      timeLimit: '5 days',
      gameContribution: {
        slots: '100%',
        blackjack: '25%',
        roulette: '15%'
      },
      pros: ['Lowest wagering requirement', 'Good game contribution', 'Low min deposit'],
      cons: ['Short time limit', 'Lower max bonus'],
      rating: 4.0,
      color: 'bg-cyan-500',
      href: '/rainbet'
    }
  ];

  const calculateValue = (deposit: number, bonus: any) => {
    const bonusAmount = Math.min(deposit * (bonus.percentage / 100), parseInt(bonus.maxBonus.replace(/[$,]/g, '')));
    const wageringReq = (deposit + bonusAmount) * parseInt(bonus.wageringRequirement.replace('x', ''));
    return { bonusAmount, wageringReq };
  };

  const depositExamples = [100, 250, 500, 1000];

  return (
    <>
      <Helmet>
        <title>Best First Deposit Bonuses 2024 | Casino Welcome Bonuses | Degen Rewards</title>
        <meta name="description" content="Compare the best first deposit bonuses from Roobet, Gamdom, Duelbits, and Rainbet. Find the highest welcome bonuses with the best terms and lowest wagering requirements." />
        <meta name="keywords" content="first deposit bonus, welcome bonus, casino signup bonus, Roobet bonus, Gamdom bonus, new player bonus, deposit match bonus" />
        <link rel="canonical" href="https://degenrewards.com/first-deposit-bonuses" />
      </Helmet>

      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Gift className="h-8 w-8 text-accent" />
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Best First Deposit <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Bonuses</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Start your crypto casino journey with the best welcome bonuses. We've analyzed terms, wagering requirements, and real value to find the top offers.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Badge className="bg-accent/10 text-accent">
                <DollarSign className="h-3 w-3 mr-1" />
                Up to $5,000 bonus
              </Badge>
              <Badge className="bg-secondary/10 text-secondary">
                <Percent className="h-3 w-3 mr-1" />
                100% match rates
              </Badge>
              <Badge className="bg-primary/10 text-primary">
                <Clock className="h-3 w-3 mr-1" />
                Verified terms
              </Badge>
            </div>
          </div>

          {/* Quick Comparison */}
          <Card className="mb-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center">Quick Comparison</CardTitle>
              <p className="text-center text-muted-foreground">At a glance comparison of all first deposit bonuses</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <div className="grid grid-cols-5 gap-4 min-w-[600px]">
                  <div className="font-semibold">Platform</div>
                  <div className="font-semibold text-center">Max Bonus</div>
                  <div className="font-semibold text-center">Wagering</div>
                  <div className="font-semibold text-center">Time Limit</div>
                  <div className="font-semibold text-center">Rating</div>
                  
                  {bonuses.map((bonus, index) => (
                    <React.Fragment key={index}>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${bonus.color}`} />
                        <span className="font-medium">{bonus.platform}</span>
                      </div>
                      <div className="text-center font-bold text-secondary">{bonus.maxBonus}</div>
                      <div className="text-center">{bonus.wageringRequirement}</div>
                      <div className="text-center">{bonus.timeLimit}</div>
                      <div className="text-center">⭐ {bonus.rating}</div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Bonus Cards */}
          <div className="grid gap-8 mb-12">
            {bonuses.map((bonus, index) => (
              <Card key={index} className={`relative ${bonus.featured ? 'border-accent/20 bg-gradient-to-br from-accent/5 to-transparent' : ''}`}>
                {bonus.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground">
                      ⭐ Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className={`absolute top-0 left-0 w-full h-1 ${bonus.color}`} />
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full ${bonus.color}`} />
                      <div>
                        <CardTitle className="text-2xl">{bonus.platform}</CardTitle>
                        <p className="text-muted-foreground">{bonus.title}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-accent">{bonus.maxBonus}</div>
                      <div className="text-sm text-muted-foreground">Max Bonus</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <Tabs defaultValue="overview">
                    <TabsList className="mb-6">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="calculator">Calculator</TabsTrigger>
                      <TabsTrigger value="terms">Terms</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-muted/30 rounded-lg">
                          <div className="text-2xl font-bold">{bonus.percentage}%</div>
                          <div className="text-sm text-muted-foreground">Match Rate</div>
                        </div>
                        <div className="text-center p-4 bg-muted/30 rounded-lg">
                          <div className="text-2xl font-bold">{bonus.minDeposit}</div>
                          <div className="text-sm text-muted-foreground">Min Deposit</div>
                        </div>
                        <div className="text-center p-4 bg-muted/30 rounded-lg">
                          <div className="text-2xl font-bold">{bonus.wageringRequirement}</div>
                          <div className="text-sm text-muted-foreground">Wagering</div>
                        </div>
                        <div className="text-center p-4 bg-muted/30 rounded-lg">
                          <div className="text-2xl font-bold">{bonus.timeLimit}</div>
                          <div className="text-sm text-muted-foreground">Time Limit</div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2 text-secondary">
                            <CheckCircle className="h-4 w-4" />
                            Pros
                          </h4>
                          <ul className="space-y-2">
                            {bonus.pros.map((pro, proIndex) => (
                              <li key={proIndex} className="flex items-center gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2 text-destructive">
                            <AlertTriangle className="h-4 w-4" />
                            Cons
                          </h4>
                          <ul className="space-y-2">
                            {bonus.cons.map((con, conIndex) => (
                              <li key={conIndex} className="flex items-center gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-destructive rounded-full" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-primary/5 border border-primary/20 rounded-lg">
                        <div>
                          <p className="font-semibold">Bonus Code:</p>
                          <code className="text-sm bg-muted px-2 py-1 rounded">{bonus.code}</code>
                        </div>
                        <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                          <Link to={bonus.href}>
                            Claim Bonus
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="calculator" className="space-y-6">
                      <div className="grid gap-4">
                        <h4 className="font-semibold">Bonus Value Calculator</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {depositExamples.map((deposit) => {
                            const { bonusAmount, wageringReq } = calculateValue(deposit, bonus);
                            return (
                              <div key={deposit} className="p-4 bg-muted/30 rounded-lg">
                                <div className="text-lg font-bold mb-2">${deposit} Deposit</div>
                                <div className="space-y-1 text-sm">
                                  <div className="flex justify-between">
                                    <span>Bonus Amount:</span>
                                    <span className="font-semibold text-secondary">${bonusAmount}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Total Balance:</span>
                                    <span className="font-semibold">${deposit + bonusAmount}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Wagering Required:</span>
                                    <span className="text-muted-foreground">${wageringReq.toLocaleString()}</span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="terms" className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Game Contribution Rates</h4>
                        <div className="space-y-2">
                          {Object.entries(bonus.gameContribution).map(([game, contribution]) => (
                            <div key={game} className="flex items-center justify-between">
                              <span className="capitalize">{game}:</span>
                              <div className="flex items-center gap-2">
                                <Progress value={parseInt(contribution)} className="w-20" />
                                <span className="text-sm font-medium">{contribution}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4" />
                          Important Terms
                        </h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Bonus must be wagered {bonus.wageringRequirement} before withdrawal</li>
                          <li>• Time limit: {bonus.timeLimit} from bonus activation</li>
                          <li>• Maximum bet while playing with bonus: $5 per spin/hand</li>
                          <li>• Different games contribute different percentages to wagering</li>
                          <li>• Bonus and winnings may be forfeited if terms are violated</li>
                        </ul>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Strategy Guide */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>First Deposit Bonus Strategy Guide</CardTitle>
              <p className="text-muted-foreground">
                Maximize your welcome bonus value with these expert tips
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Before You Deposit</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                      <h5 className="font-medium mb-1">1. Compare All Options</h5>
                      <p className="text-sm text-muted-foreground">
                        Don't just look at the bonus amount. Consider wagering requirements, time limits, and game restrictions.
                      </p>
                    </div>
                    <div className="p-3 bg-secondary/5 border border-secondary/20 rounded-lg">
                      <h5 className="font-medium mb-1">2. Plan Your Deposit</h5>
                      <p className="text-sm text-muted-foreground">
                        Deposit the maximum amount to get the full bonus, but only if you can afford to lose it all.
                      </p>
                    </div>
                    <div className="p-3 bg-accent/5 border border-accent/20 rounded-lg">
                      <h5 className="font-medium mb-1">3. Read All Terms</h5>
                      <p className="text-sm text-muted-foreground">
                        Understand game contributions, max bet limits, and withdrawal restrictions before claiming.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">While Playing</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                      <h5 className="font-medium mb-1">1. Track Your Progress</h5>
                      <p className="text-sm text-muted-foreground">
                        Monitor your wagering progress in your account dashboard. Know how much you have left to wager.
                      </p>
                    </div>
                    <div className="p-3 bg-secondary/5 border border-secondary/20 rounded-lg">
                      <h5 className="font-medium mb-1">2. Choose High-Contributing Games</h5>
                      <p className="text-sm text-muted-foreground">
                        Focus on slots (100% contribution) rather than table games to complete wagering faster.
                      </p>
                    </div>
                    <div className="p-3 bg-accent/5 border border-accent/20 rounded-lg">
                      <h5 className="font-medium mb-1">3. Manage Your Bankroll</h5>
                      <p className="text-sm text-muted-foreground">
                        Use smaller bet sizes to extend your play time and increase chances of completing wagering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="text-center py-12">
              <h2 className="text-2xl font-heading font-bold mb-4">
                Ready to Claim Your Welcome Bonus?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start with the platform that offers the best value for your playing style. 
                Remember to use our exclusive bonus codes for the maximum bonus amount.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link to="/gamdom">
                    Gamdom - $5,000 Bonus
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/roobet">
                    Roobet - $1,000 Bonus
                    <ExternalLink className="ml-2 h-4 w-4" />
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

export default FirstDepositBonuses;