import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, User, TrendingUp, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: "Weekly Bonus Roundup: January 2024 Edition",
      excerpt: "Don't miss this week's hottest bonuses across all major crypto casinos. We've found exclusive codes worth over $10,000 combined.",
      author: "Degen Team",
      date: "2 days ago",
      readTime: "5 min read",
      category: "Bonuses",
      featured: true,
      image: "/api/placeholder/400/200"
    },
    {
      id: 2,
      title: "VIP Program Secrets: How to Maximize Your Rakeback",
      excerpt: "Advanced strategies for climbing VIP levels faster and earning more rakeback. Includes platform-specific tips and optimal betting patterns.",
      author: "Pro Player",
      date: "5 days ago",
      readTime: "8 min read",
      category: "Strategy",
      featured: false
    },
    {
      id: 3,
      title: "New Player's Guide: Avoiding Common Bonus Mistakes",
      excerpt: "Learn from the most expensive mistakes new players make with casino bonuses. Save thousands by following these simple guidelines.",
      author: "Casino Expert",
      date: "1 week ago",
      readTime: "6 min read",
      category: "Guide",
      featured: false
    },
    {
      id: 4,
      title: "Market Analysis: Crypto Casino Bonus Trends 2024",
      excerpt: "Deep dive into how bonus structures are evolving across the crypto casino space. What to expect in the coming months.",
      author: "Market Analyst",
      date: "2 weeks ago",
      readTime: "10 min read",
      category: "Analysis",
      featured: false
    }
  ];

  const categories = [
    { name: "Bonuses", count: 12, color: "bg-accent" },
    { name: "Strategy", count: 8, color: "bg-primary" },
    { name: "Guides", count: 15, color: "bg-secondary" },
    { name: "Analysis", count: 6, color: "bg-muted" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Latest <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay ahead of the game with our expert analysis, weekly bonus roundups, and proven strategies.
          </p>
        </div>

        {/* Categories */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {categories.map((category, index) => (
            <Badge key={index} variant="outline" className="hover:bg-muted/50 transition-colors cursor-pointer">
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        {posts.filter(post => post.featured).map((post) => (
          <Card key={post.id} className="mb-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-3 gap-6 items-center">
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-accent/10 text-accent">Featured</Badge>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                    <span>{post.date}</span>
                  </div>
                  
                  <Button className="mt-4">
                    Read Full Article
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-12 w-12 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {posts.filter(post => !post.featured).map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-muted-foreground" />
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">{post.category}</Badge>
                </div>
                
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <Button size="sm" variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20">
          <CardContent className="text-center py-8">
            <h3 className="text-xl font-heading font-bold mb-4">
              Never Miss the Best Bonuses
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Get our weekly newsletter with exclusive bonus codes, strategy guides, and market insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
              />
              <Button className="bg-secondary hover:bg-secondary/90">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              No spam, unsubscribe anytime. 10,000+ subscribers trust us.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BlogSection;