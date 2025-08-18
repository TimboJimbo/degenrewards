import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Gift, CheckCircle, Star, DollarSign, Clock, AlertTriangle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const RoobetRakeback = () => {
  return (
    <>
      <Helmet>
        <title>Roobet Rakeback – 2025 Guide & Tips | DegenRewards</title>
        <meta name="description" content="Roobet rakeback explained for 2025: where to find it, how it accrues, and practical ways to maximise value. Clear tips, no hype." />
        <meta name="keywords" content="roobet rakeback, roobet rewards, roobet vip, roobet bonuses, crypto casino rakeback" />
        <link rel="canonical" href="https://degenrewards.com/roobet-rakeback" />
      </Helmet>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How Roobet Rakeback Works (2025)
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Roobet's rakeback returns a small percentage of your wagering back to you as you play. 
            The more you play, the more you accrue.
          </p>
          <Badge variant="secondary" className="px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            Updated 2025 Guide
          </Badge>
        </section>

        {/* Quick Start */}
        <section className="mb-12">
          <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-800">Start Earning Rakeback Today</CardTitle>
              <CardDescription>Join with our code for instant access to daily rakeback</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <p className="text-lg text-gray-700 mb-4">
                  Want to start earning rakeback on Roobet? Use our referral link to get started:
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  <a href="https://roobet.com/?ref=timboice12" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Join Roobet with code timboice12
                    <CheckCircle className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <p className="text-sm text-gray-600 mt-2">Code auto-applies • Rakeback starts immediately</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="w-6 h-6 mr-2 text-green-600" />
                How Roobet Rakeback Works
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Roobet's rakeback system is straightforward: rates can vary by level, promos, and game type, 
                but the core idea is simple—<strong>the more you play, the more you accrue</strong>.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg text-center">
                  <Gift className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Daily Accrual</h3>
                  <p className="text-gray-600">Rakeback builds up automatically as you play eligible games</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg text-center">
                  <Star className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibent text-lg mb-2">VIP Scaling</h3>
                  <p className="text-gray-600">Higher tiers can unlock better rates and more frequent offers</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg text-center">
                  <Clock className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Flexible Claims</h3>
                  <p className="text-gray-600">Claim daily, weekly, or whenever suits your schedule</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Where to Find Rakeback */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-2 text-blue-600" />
                Where to Find Your Rakeback
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Open the Rewards Tab</h3>
                    <p className="text-gray-700">Navigate to the Rewards section in your Roobet account</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Track Your Progress</h3>
                    <p className="text-gray-700">View daily/weekly/monthly accruals and available claims</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Watch for Promos</h3>
                    <p className="text-gray-700">Keep an eye out for limited-time promos that boost your return</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Ways to Get More Value */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                Ways to Get More Value from Rakeback
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Consistency over Spikes</h3>
                    <p className="text-green-700 text-sm">
                      Frequent small sessions add up better than rare big ones for VIP progression
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Game Selection</h3>
                    <p className="text-blue-700 text-sm">
                      Consider volatility/RTP—some games stretch bankroll longer for more wagering
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Claim Cadence</h3>
                    <p className="text-purple-700 text-sm">
                      Decide when you'll claim (daily vs. weekly) and stick to it for consistency
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 mb-2">VIP Tiers</h3>
                    <p className="text-yellow-700 text-sm">
                      Higher tiers can unlock better offers over time—stay consistent within limits
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Important Reminder */}
        <section className="mb-12">
          <Card className="border-yellow-200 bg-yellow-50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Important Reminder</h3>
                  <p className="text-yellow-700">
                    Rakeback is not profit—just a partial offset of wagering. Keep stakes sensible and never chase losses. 
                    The house edge remains, and rakeback doesn't change the fundamental nature of gambling.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Roobet Rakeback FAQ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Does every game contribute to rakeback?</h3>
                <p className="text-gray-700">
                  Most wagering contributes, but categories can differ. Check the Rewards page and any bonus terms 
                  for exclusions or different weighting.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Do higher VIP levels increase rakeback?</h3>
                <p className="text-gray-700">
                  Generally, higher tiers unlock better or more frequent offers. Exact returns vary by tier, 
                  promos, and your activity level.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">How often should I claim rakeback?</h3>
                <p className="text-gray-700">
                  There's no single answer—many players prefer regular small claims (e.g., daily) to smooth 
                  variance and avoid forgetting about accumulated rewards.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Related Roobet Guides</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Gift className="w-8 h-8 text-blue-600" />
                  <span className="text-sm">Roobet Rewards</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Star className="w-8 h-8 text-yellow-600" />
                  <span className="text-sm">VIP Explained</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <span className="text-sm">Sign Up Guide</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 px-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Get Roobet Rewards</h2>
          <p className="text-xl mb-6">Start earning daily rakeback with code timboice12</p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            <a href="https://roobet.com/?ref=timboice12" target="_blank" rel="noopener noreferrer">
              Join Roobet Now
            </a>
          </Button>
          <div className="mt-6 text-sm opacity-90">
            <p>18+ only • Play responsibly • Terms and conditions apply</p>
          </div>
        </section>

        {/* Responsible Gambling */}
        <section className="mt-8 p-6 bg-gray-50 rounded-lg text-center">
          <Clock className="w-8 h-8 text-gray-600 mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Responsible Gambling</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Rakeback reduces losses but doesn't guarantee profits. Set strict limits, never chase losses, 
            and remember that gambling should be entertainment, not a way to make money. 
            If it stops being fun, seek help at <strong>BeGambleAware</strong>.
          </p>
        </section>
      </main>
    </>
  );
};

export default RoobetRakeback;