import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Shield, TrendingUp, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";
import SocialProof from "@/components/Conversion/SocialProof";
import BlogSection from "@/components/Blog/BlogSection";
import BonusCalculator from "@/components/Tools/BonusCalculator";
import StickyCTABar from "@/components/Conversion/StickyCTABar";
import ExitIntentPopup from "@/components/Conversion/ExitIntentPopup";
import FloatingCTA from "@/components/CTA/FloatingCTA";
import AgeVerification from "@/components/Compliance/AgeVerification";
import GeoRestriction from "@/components/Compliance/GeoRestriction";
import { useExitIntent } from "@/hooks/useExitIntent";

const Home = () => {
  const { showExitIntent, hideExitIntent } = useExitIntent();

  const platforms = [
    {
      name: "Roobet",
      description: "Popular crypto casino with daily rewards and rain events",
      rewards: "Daily bonuses, VIP rewards, Rain events",
      href: "/roobet",
      color: "bg-red-500",
      verified: true
    },
    {
      name: "Gamdom",
      description: "Established platform with generous loyalty programs",
      rewards: "Loyalty points, Weekly bonuses, Giveaways",
      href: "/gamdom",
      color: "bg-purple-500",
      verified: true
    },
    {
      name: "Duelbits",
      description: "Competitive gaming platform with unique reward systems",
      rewards: "Battle rewards, Rank bonuses, Tournaments",
      href: "/duelbits",
      color: "bg-blue-500",
      verified: true
    }
  ];

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Verified Legitimate",
      description: "All platforms thoroughly vetted for legitimacy and trustworthiness"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Transparent Reviews",
      description: "Honest, data-driven analysis without hype or false promises"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Maximized Rewards",
      description: "Expert strategies to optimize your rewards and minimize risks"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Trusted by thousands of players
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 max-w-4xl mx-auto">
            Discover <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Verified Casino Rewards</span> & Bonuses
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Expert guides and transparent reviews for Roobet, Gamdom, and Duelbits. 
            Make informed decisions with our data-driven analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/roobet">
                Explore Roobet Rewards
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/gamdom">View All Platforms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Why Trust Degen Rewards?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing transparent, factual information to help you make informed gambling decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Featured Casino Platforms</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive guides for the most popular crypto casino platforms with verified reward systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-4 h-4 rounded-full ${platform.color}`} />
                    {platform.verified && (
                      <Badge variant="secondary" className="text-xs">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl">{platform.name}</CardTitle>
                  <CardDescription>{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Available Rewards:</h4>
                    <p className="text-sm text-muted-foreground">{platform.rewards}</p>
                  </div>
                  <Button className="w-full group-hover:bg-primary/90 transition-colors" asChild>
                    <Link to={platform.href}>
                      Learn More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <SocialProof />

      {/* Tools Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Calculate Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Potential Earnings</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Use our advanced calculator to estimate your bonus value and rakeback earnings across different platforms.
            </p>
          </div>
          <BonusCalculator />
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Disclaimer Section */}
      <section className="py-12 bg-warning/10 border-t border-warning/20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-semibold mb-2 text-warning-foreground">⚠️ Responsible Gambling Notice</h3>
          <p className="text-sm text-muted-foreground max-w-4xl mx-auto">
            This website contains affiliate links. We may receive compensation when you click on links and make purchases. 
            All content is for informational purposes only. Gambling involves risk and can be addictive. 
            Please gamble responsibly and only with money you can afford to lose. Must be 18+ to participate.
          </p>
        </div>
      </section>

      {/* Conversion Components */}
      <StickyCTABar />
      <ExitIntentPopup isOpen={showExitIntent} onClose={hideExitIntent} />
      <FloatingCTA />
      <AgeVerification />
      <GeoRestriction />
    </div>
  );
};

export default Home;