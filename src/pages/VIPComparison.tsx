import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { Crown, Star, TrendingUp, Users, Gift, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import BonusCalculator from '@/components/Tools/BonusCalculator';

const VIPComparison = () => {
  const vipPrograms = [
    {
      platform: 'Roobet',
      levels: 10,
      maxRakeback: '10%',
      monthlyBonus: '$2,000',
      requirements: '$50,000/month',
      specialPerks: ['Priority support', 'Exclusive tournaments', 'Rain bonuses'],
      rating: 4.2,
      color: 'bg-red-500',
      href: '/roobet'
    },
    {
      platform: 'Gamdom',
      levels: 12,
      maxRakeback: '15%',
      monthlyBonus: '$5,000',
      requirements: '$100,000/month',
      specialPerks: ['Personal manager', 'Higher deposit limits', 'Exclusive games'],
      rating: 4.5,
      color: 'bg-purple-500',
      href: '/gamdom'
    },
    {
      platform: 'Duelbits',
      levels: 8,
      maxRakeback: '12%',
      monthlyBonus: '$2,500',
      requirements: '$75,000/month',
      specialPerks: ['Custom challenges', 'Faster withdrawals', 'VIP events'],
      rating: 4.1,
      color: 'bg-blue-500',
      href: '/duelbits'
    },
    {
      platform: 'Rainbet',
      levels: 6,
      maxRakeback: '8%',
      monthlyBonus: '$1,000',
      requirements: '$25,000/month',
      specialPerks: ['Weekly bonuses', 'Dedicated support', 'Early access'],
      rating: 3.8,
      color: 'bg-cyan-500',
      href: '/rainbet'
    }
  ];

  const comparisonData = [
    {
      feature: 'Max Rakeback Rate',
      roobet: '10%',
      gamdom: '15%',
      duelbits: '12%',
      rainbet: '8%'
    },
    {
      feature: 'VIP Levels',
      roobet: '10 levels',
      gamdom: '12 levels',
      duelbits: '8 levels',
      rainbet: '6 levels'
    },
    {
      feature: 'Monthly Requirement (Top Tier)',
      roobet: '$50,000',
      gamdom: '$100,000',
      duelbits: '$75,000',
      rainbet: '$25,000'
    },
    {
      feature: 'Monthly Bonus (Max)',
      roobet: '$2,000',
      gamdom: '$5,000',
      duelbits: '$2,500',
      rainbet: '$1,000'
    },
    {
      feature: 'Personal Manager',
      roobet: 'Tier 8+',
      gamdom: 'Tier 6+',
      duelbits: 'Tier 6+',
      rainbet: 'Tier 5+'
    },
    {
      feature: 'Withdrawal Priority',
      roobet: 'Tier 5+',
      gamdom: 'Tier 4+',
      duelbits: 'Tier 3+',
      rainbet: 'Tier 4+'
    }
  ];

  const levelBreakdown = {
    roobet: [
      { level: 1, requirement: '$500', rakeback: '0.05%', bonus: '$10' },
      { level: 5, requirement: '$5,000', rakeback: '5%', bonus: '$250' },
      { level: 10, requirement: '$50,000', rakeback: '10%', bonus: '$2,000' }
    ],
    gamdom: [
      { level: 1, requirement: '$1,000', rakeback: '0.1%', bonus: '$25' },
      { level: 6, requirement: '$10,000', rakeback: '7.5%', bonus: '$1,000' },
      { level: 12, requirement: '$100,000', rakeback: '15%', bonus: '$5,000' }
    ],
    duelbits: [
      { level: 1, requirement: '$750', rakeback: '0.08%', bonus: '$15' },
      { level: 4, requirement: '$7,500', rakeback: '6%', bonus: '$500' },
      { level: 8, requirement: '$75,000', rakeback: '12%', bonus: '$2,500' }
    ],
    rainbet: [
      { level: 1, requirement: '$300', rakeback: '0.02%', bonus: '$5' },
      { level: 3, requirement: '$3,000', rakeback: '4%', bonus: '$200' },
      { level: 6, requirement: '$25,000', rakeback: '8%', bonus: '$1,000' }
    ]
  };

  return (
    <>
      <Helmet>
        <title>VIP Program Comparison 2024 | Casino Loyalty Programs | Degen Rewards</title>
        <meta name="description" content="Compare VIP programs across Roobet, Gamdom, Duelbits, and Rainbet. Find the best loyalty program with maximum rakeback rates, bonuses, and exclusive perks." />
        <meta name="keywords" content="VIP program comparison, casino loyalty programs, rakeback rates, VIP bonuses, Roobet VIP, Gamdom VIP, casino rewards comparison" />
        <link rel="canonical" href="https://degenrewards.com/vip-comparison" />
      </Helmet>

      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Crown className="h-8 w-8 text-accent" />
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              VIP Program <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Comparison</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Compare loyalty programs across all major crypto casinos. Find the best VIP benefits, rakeback rates, and exclusive perks for your playing style.
            </p>

            <Badge className="mb-8 bg-accent/10 text-accent border-accent/20">
              <TrendingUp className="h-3 w-3 mr-1" />
              Updated Monthly
            </Badge>
          </div>

          {/* Platform Overview Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {vipPrograms.map((program, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 ${program.color}`} />
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full ${program.color}`} />
                      {program.platform}
                    </CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-semibold">{program.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Max Rakeback</p>
                      <p className="text-2xl font-bold text-secondary">{program.maxRakeback}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Monthly Bonus</p>
                      <p className="text-2xl font-bold text-accent">{program.monthlyBonus}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">VIP Levels</p>
                    <div className="flex items-center gap-2">
                      <Progress value={(program.levels / 12) * 100} className="flex-1" />
                      <span className="text-sm font-medium">{program.levels} levels</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Top Tier Requirements</p>
                    <Badge variant="outline">{program.requirements}</Badge>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Exclusive Perks</p>
                    <div className="flex flex-wrap gap-1">
                      {program.specialPerks.map((perk, perkIndex) => (
                        <Badge key={perkIndex} variant="secondary" className="text-xs">
                          {perk}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" asChild>
                    <Link to={program.href}>
                      Join {program.platform} VIP
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Comparison Table */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Feature Comparison
              </CardTitle>
              <p className="text-muted-foreground">
                Detailed side-by-side comparison of VIP program features
              </p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="min-w-[200px]">Feature</TableHead>
                      <TableHead className="text-center">Roobet</TableHead>
                      <TableHead className="text-center">Gamdom</TableHead>
                      <TableHead className="text-center">Duelbits</TableHead>
                      <TableHead className="text-center">Rainbet</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-center">{row.roobet}</TableCell>
                        <TableCell className="text-center font-semibold text-secondary">{row.gamdom}</TableCell>
                        <TableCell className="text-center">{row.duelbits}</TableCell>
                        <TableCell className="text-center">{row.rainbet}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Level Progression Examples */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Level Progression Examples
                </CardTitle>
                <p className="text-muted-foreground">
                  Sample progression through VIP levels with requirements and rewards
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Object.entries(levelBreakdown).map(([platform, levels]) => (
                    <div key={platform}>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${vipPrograms.find(p => p.platform.toLowerCase() === platform)?.color}`} />
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </h4>
                      <div className="space-y-2">
                        {levels.map((level, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                            <div>
                              <Badge variant="outline" className="text-xs mb-1">
                                Level {level.level}
                              </Badge>
                              <p className="text-sm text-muted-foreground">
                                {level.requirement} wagered
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold">{level.rakeback} rakeback</p>
                              <p className="text-sm text-secondary">{level.bonus} monthly</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="h-5 w-5" />
                    VIP Strategy Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h4 className="font-semibold mb-2">🎯 Choose Your Platform Wisely</h4>
                    <p className="text-sm text-muted-foreground">
                      If you're a high-volume player, Gamdom offers the highest rakeback rates. 
                      For moderate players, Roobet provides the best balance of requirements and rewards.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-secondary/5 border border-secondary/20 rounded-lg">
                    <h4 className="font-semibold mb-2">📈 Progressive Wagering</h4>
                    <p className="text-sm text-muted-foreground">
                      Start small and work your way up. Each VIP level unlocks better perks, 
                      so consistency is more important than massive single deposits.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                    <h4 className="font-semibold mb-2">🔄 Multi-Platform Strategy</h4>
                    <p className="text-sm text-muted-foreground">
                      Consider spreading your play across 2-3 platforms to take advantage 
                      of different bonus structures and promotional periods.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bonus Calculator */}
          <div className="mb-12">
            <BonusCalculator />
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="text-center py-12">
              <h2 className="text-2xl font-heading font-bold mb-4">
                Ready to Start Your VIP Journey?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Choose the platform that matches your playing style and start climbing the VIP ladder today. 
                Every bet counts towards your next level upgrade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90" asChild>
                  <Link to="/gamdom">
                    Gamdom VIP (Highest Rakeback)
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/roobet">
                    Roobet VIP (Best Balance)
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

export default VIPComparison;