import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const SocialProof = () => {
  const [stats, setStats] = useState({
    activeUsers: 2847,
    totalEarned: 456789,
    newSignups: 23
  });

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setStats(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 3),
        totalEarned: prev.totalEarned + Math.floor(Math.random() * 100),
        newSignups: prev.newSignups + (Math.random() > 0.7 ? 1 : 0)
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Alex M.",
      platform: "Roobet",
      amount: "$2,450",
      time: "2 hours ago",
      quote: "The rakeback guide helped me earn over $2k this month!"
    },
    {
      name: "Sarah K.",
      platform: "Gamdom",
      amount: "$1,890",
      time: "5 hours ago",
      quote: "Never knew about these bonus strategies before. Game changer!"
    },
    {
      name: "Mike R.",
      platform: "Duelbits",
      amount: "$3,120",
      time: "1 day ago",
      quote: "Following the VIP tips increased my rewards by 300%"
    }
  ];

  const recentActivity = [
    { user: "J***y", action: "earned $340 rakeback", platform: "Roobet", time: "3m ago" },
    { user: "M***k", action: "claimed VIP bonus", platform: "Gamdom", time: "7m ago" },
    { user: "A***a", action: "joined with code", platform: "Duelbits", time: "12m ago" },
    { user: "R***n", action: "earned $180 bonus", platform: "Roobet", time: "18m ago" }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Stats Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {stats.activeUsers.toLocaleString()}+
              </div>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">
                ${stats.totalEarned.toLocaleString()}+
              </div>
              <p className="text-sm text-muted-foreground">Total Earned</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">
                {stats.newSignups}
              </div>
              <p className="text-sm text-muted-foreground">Joined Today</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-heading font-bold mb-4">
            Join Thousands of Successful Players
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real users sharing their success stories and earnings from following our guides
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-gradient-to-br from-card to-muted/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.time}</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.platform}
                  </Badge>
                </div>
                
                <blockquote className="text-sm mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <div className="font-bold text-secondary">
                    {testimonial.amount}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Live Activity Feed */}
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <h3 className="font-semibold">Live Activity</h3>
              <Badge variant="secondary" className="text-xs">
                <Users className="h-3 w-3 mr-1" />
                Real-time
              </Badge>
            </div>
            
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <div>
                      <span className="font-medium">{activity.user}</span>
                      <span className="text-muted-foreground"> {activity.action} on </span>
                      <span className="font-medium">{activity.platform}</span>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SocialProof;