import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Gift, Clock, Star, ExternalLink, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const BonusCalendar = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const currentDate = new Date();
  const currentDay = currentDate.getDay(); // 0 = Sunday, 1 = Monday, etc.

  const weeklySchedule = [
    {
      day: 'Monday',
      date: 'Today',
      bonuses: [
        {
          platform: 'Roobet',
          title: 'Monday Reload',
          description: '50% deposit bonus up to $500',
          code: 'MONDAY50',
          time: '12:00 PM UTC',
          value: '$500',
          active: currentDay === 1
        },
        {
          platform: 'Gamdom',
          title: 'XP Monday',
          description: 'Double XP for all games',
          code: 'No code needed',
          time: 'All day',
          value: '2x XP',
          active: currentDay === 1
        }
      ]
    },
    {
      day: 'Tuesday',
      date: 'Tomorrow', 
      bonuses: [
        {
          platform: 'Duelbits',
          title: 'Tuesday Cashback',
          description: '20% cashback on losses',
          code: 'CASHBACK20',
          time: '6:00 PM UTC',
          value: '20%',
          active: currentDay === 2
        }
      ]
    },
    {
      day: 'Wednesday',
      date: 'Wed',
      bonuses: [
        {
          platform: 'Rainbet',
          title: 'Midweek Boost',
          description: '75% deposit bonus up to $300',
          code: 'MIDWEEK75',
          time: '3:00 PM UTC',
          value: '$300',
          active: currentDay === 3
        },
        {
          platform: 'Roobet',
          title: 'Rain Event',
          description: 'Special rain in chat every hour',
          code: 'Be active in chat',
          time: 'Every hour',
          value: 'Variable',
          active: currentDay === 3
        }
      ]
    },
    {
      day: 'Thursday',
      date: 'Thu',
      bonuses: [
        {
          platform: 'Gamdom',
          title: 'Throwback Thursday',
          description: 'Classic slots have reduced house edge',
          code: 'AUTO',
          time: 'All day',
          value: '0.5% RTP boost',
          active: currentDay === 4
        }
      ]
    },
    {
      day: 'Friday',
      date: 'Fri',
      bonuses: [
        {
          platform: 'Roobet',
          title: 'Friday Frenzy',
          description: '100% deposit bonus up to $1000',
          code: 'FRENZY100',
          time: '8:00 PM UTC',
          value: '$1000',
          active: currentDay === 5
        },
        {
          platform: 'Duelbits',
          title: 'Weekend Warm-up',
          description: 'Free spins on selected slots',
          code: 'FREESPINS',
          time: '5:00 PM UTC',
          value: '50 spins',
          active: currentDay === 5
        }
      ]
    },
    {
      day: 'Saturday',
      date: 'Sat',
      bonuses: [
        {
          platform: 'Gamdom',
          title: 'Saturday Special',
          description: 'Triple rakeback for VIP members',
          code: 'VIP only',
          time: '12:00 PM UTC',
          value: '3x rakeback',
          active: currentDay === 6
        },
        {
          platform: 'Rainbet',
          title: 'Weekend Warrior',
          description: '60% deposit bonus + 30 free spins',
          code: 'WARRIOR60',
          time: '4:00 PM UTC',
          value: '$600',
          active: currentDay === 6
        }
      ]
    },
    {
      day: 'Sunday',
      date: 'Sun',
      bonuses: [
        {
          platform: 'Roobet',
          title: 'Sunday Funday',
          description: 'Special tournament with $10k prize pool',
          code: 'Register in game',
          time: '7:00 PM UTC',
          value: '$10,000',
          active: currentDay === 0
        }
      ]
    }
  ];

  const monthlyEvents = [
    {
      date: '15th',
      title: 'Mid-Month Mega Bonus',
      description: 'All platforms offer special mid-month bonuses',
      platforms: ['Roobet', 'Gamdom', 'Duelbits', 'Rainbet']
    },
    {
      date: '1st',
      title: 'New Month Fresh Start',
      description: 'Reset your VIP progress trackers and claim welcome back bonuses',
      platforms: ['All platforms']
    },
    {
      date: 'Last Weekend',
      title: 'Month-End Madness',
      description: 'Final push for monthly VIP rewards and exclusive tournaments',
      platforms: ['Roobet', 'Gamdom']
    }
  ];

  const todaysBonuses = weeklySchedule.find(day => day.bonuses.some(bonus => bonus.active))?.bonuses.filter(bonus => bonus.active) || [];

  return (
    <>
      <Helmet>
        <title>Casino Bonus Calendar 2024 | Daily Bonuses & Events | Degen Rewards</title>
        <meta name="description" content="Never miss a casino bonus again! Complete calendar of daily bonuses, weekly events, and special promotions for Roobet, Gamdom, Duelbits, and Rainbet." />
        <meta name="keywords" content="casino bonus calendar, daily bonuses, weekly events, Roobet schedule, Gamdom bonuses, casino promotions 2024" />
        <link rel="canonical" href="https://degenrewards.com/bonus-calendar" />
      </Helmet>

      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Casino Bonus <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Calendar</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Never miss another bonus! Track daily promotions, weekly events, and special campaigns across all major crypto casinos.
            </p>

            <Badge className="mb-8 bg-accent/10 text-accent border-accent/20">
              <Bell className="h-3 w-3 mr-1" />
              Updated Daily
            </Badge>
          </div>

          {/* Today's Active Bonuses */}
          {todaysBonuses.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
                <Star className="h-6 w-6 text-accent" />
                Active Today
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {todaysBonuses.map((bonus, index) => (
                  <Card key={index} className="border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-accent/10 text-accent">
                          {bonus.platform}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {bonus.time}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{bonus.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{bonus.description}</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Bonus Code:</p>
                          <code className="text-xs bg-muted px-2 py-1 rounded">{bonus.code}</code>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">Max Value:</p>
                          <p className="text-lg font-bold text-secondary">{bonus.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <Tabs defaultValue="weekly" className="mb-12">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="weekly">Weekly Schedule</TabsTrigger>
                <TabsTrigger value="monthly">Monthly Events</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="weekly">
              <div className="space-y-6">
                {weeklySchedule.map((day, dayIndex) => (
                  <Card key={dayIndex} className={day.bonuses.some(b => b.active) ? 'border-primary/20 bg-primary/5' : ''}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                          {day.day}
                          {day.bonuses.some(b => b.active) && (
                            <Badge className="bg-accent/10 text-accent">
                              Today
                            </Badge>
                          )}
                        </CardTitle>
                        <span className="text-sm text-muted-foreground">{day.date}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {day.bonuses.length > 0 ? (
                        <div className="grid gap-4">
                          {day.bonuses.map((bonus, bonusIndex) => (
                            <div key={bonusIndex} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant="outline" className="text-xs">
                                    {bonus.platform}
                                  </Badge>
                                  <span className="font-semibold">{bonus.title}</span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">{bonus.description}</p>
                                <div className="flex items-center gap-4 text-xs">
                                  <span><strong>Code:</strong> {bonus.code}</span>
                                  <span><strong>Time:</strong> {bonus.time}</span>
                                  <span><strong>Value:</strong> {bonus.value}</span>
                                </div>
                              </div>
                              <Button size="sm" variant="outline" asChild>
                                <Link to={`/${bonus.platform.toLowerCase()}`}>
                                  Claim
                                  <ExternalLink className="ml-1 h-3 w-3" />
                                </Link>
                              </Button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-center py-8">
                          No scheduled bonuses for this day
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="monthly">
              <div className="space-y-6">
                {monthlyEvents.map((event, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <Gift className="h-5 w-5" />
                          {event.title}
                        </CardTitle>
                        <Badge variant="secondary">{event.date} of every month</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Platforms:</span>
                        {event.platforms.map((platform, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="text-center py-12">
              <h2 className="text-2xl font-heading font-bold mb-4">
                Ready to Start Claiming These Bonuses?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't let these opportunities slip away. Start with our most recommended platform and begin maximizing your rewards today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/roobet">
                    Start with Roobet
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/best-bonuses">
                    Compare All Platforms
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

export default BonusCalendar;