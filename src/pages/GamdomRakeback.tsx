import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Star, Gift, CheckCircle, Info } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const GamdomRakeback = () => {
  const [wagered, setWagered] = useState<number>(0);
  const [isProfit, setIsProfit] = useState<boolean>(false);
  const [estimatedRakeback, setEstimatedRakeback] = useState<number>(0);

  const calculateRakeback = () => {
    // Base calculation - simplified estimate
    let baseRate = 0.06; // 6% base rate
    if (wagered > 50000) baseRate = 0.08;
    if (wagered > 100000) baseRate = 0.10;
    if (wagered > 250000) baseRate = 0.12;
    
    // Profit/loss adjustment (simplified)
    const adjustedRate = isProfit ? baseRate * 0.8 : baseRate;
    setEstimatedRakeback(wagered * adjustedRate);
  };

  return (
    <>
      <Helmet>
        <title>Gamdom Rakeback Calculator – 2025 Guide | DegenRewards</title>
        <meta name="description" content="Use our free Gamdom rakeback calculator to estimate your monthly rewards. Enter your wagered amount and see how much rakeback you could earn." />
        <meta name="keywords" content="gamdom rakeback calculator, gamdom rewards, gamdom xp, gamdom levels" />
        <link rel="canonical" href="https://degenrewards.com/gamdom-rakeback" />
      </Helmet>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Gamdom Rakeback Calculator
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Estimate your monthly rakeback rewards on Gamdom by entering your total wagers and profit/loss status.
          </p>
          <Badge variant="secondary" className="px-4 py-2">
            <Calculator className="w-4 h-4 mr-2" />
            Free Calculator Tool
          </Badge>
        </section>

        {/* Calculator Section */}
        <section className="mb-12">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Monthly Rakeback Calculator</CardTitle>
              <CardDescription>Enter your wagered amount to estimate rewards</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-medium">Total Monthly Wagered ($)</label>
                <input
                  type="number"
                  value={wagered || ''}
                  onChange={(e) => setWagered(Number(e.target.value))}
                  placeholder="Enter your total wagered amount"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">Monthly Result</label>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setIsProfit(false)}
                    className={`flex-1 p-3 rounded-lg border-2 transition-colors ${
                      !isProfit 
                        ? 'border-red-500 bg-red-50 text-red-700' 
                        : 'border-gray-200 hover:border-red-300'
                    }`}
                  >
                    Loss
                  </button>
                  <button
                    onClick={() => setIsProfit(true)}
                    className={`flex-1 p-3 rounded-lg border-2 transition-colors ${
                      isProfit 
                        ? 'border-green-500 bg-green-50 text-green-700' 
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    Profit
                  </button>
                </div>
              </div>

              <Button 
                onClick={calculateRakeback}
                className="w-full bg-purple-600 hover:bg-purple-700"
                size="lg"
              >
                Calculate Rakeback
              </Button>

              {estimatedRakeback > 0 && (
                <div className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-purple-800 mb-2">
                      Estimated Monthly Rakeback
                    </h3>
                    <p className="text-4xl font-bold text-purple-600 mb-4">
                      ${estimatedRakeback.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">
                      This is an estimate only. Actual rakeback varies by VIP level and current promotions.
                    </p>
                  </div>
                </div>
              )}

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <div className="flex items-start">
                  <Info className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-1">Important Note</h4>
                    <p className="text-sm text-yellow-700">
                      This calculator provides an estimate only. Actual rakeback varies by VIP level, 
                      ongoing promotions, and Gamdom's current reward structure.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How Rakeback Works */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-purple-600" />
                How Gamdom Rakeback Works (2025)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Gamdom ties rewards to your <strong>play activity</strong> and <strong>XP level</strong>. 
                As you wager and level up, you can unlock more frequent and larger bonuses. The exact rakeback 
                rates and bonuses can change with seasonal promos, your region, and your current VIP tier.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Where to Track Rewards</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      Open the Rewards/XP tab in your account
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      Check current level and claimable bonuses
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      Weekly bonuses reflect recent wagering activity
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Tips to Get More Value</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      Play consistently - frequent sessions level up faster
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      Stay for Rain - keep chat open for random drops
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      Choose Games Wisely - check RTP and volatility
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <Gift className="w-6 h-6 mr-2 text-blue-600" />
                  Start Earning Rakeback Today
                </h3>
                <p className="text-gray-700 mb-4">
                  Use our referral link to get started with rakeback enabled from your first bet:
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                  <a href="https://gamdom.com/r/kimboslice" target="_blank" rel="noopener noreferrer">
                    Join Gamdom with code kimboslice
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Level Breakdown */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Gamdom VIP Level Breakdown</CardTitle>
              <CardDescription>Approximate rakeback rates by tier (values are indicative)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-3">Levels / Tier</th>
                      <th className="text-left p-3">Instant Rakeback</th>
                      <th className="text-left p-3">Weekly Bonus</th>
                      <th className="text-left p-3">Monthly Bonus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3 font-medium">1–10 (Bronze→Silver)</td>
                      <td className="p-3">~6-7%</td>
                      <td className="p-3">Basic</td>
                      <td className="p-3">-</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">11–20 (Gold→Emerald)</td>
                      <td className="p-3">~7-8%</td>
                      <td className="p-3">Improved</td>
                      <td className="p-3">-</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">21–30 (Sapphire)</td>
                      <td className="p-3">~8-9%</td>
                      <td className="p-3">Enhanced</td>
                      <td className="p-3">Available</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">31–40 (Ruby)</td>
                      <td className="p-3">~9-10%</td>
                      <td className="p-3">~2-3%</td>
                      <td className="p-3">Available</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">41–50 (Diamond)</td>
                      <td className="p-3">~10-11%</td>
                      <td className="p-3">~3-4%</td>
                      <td className="p-3">~1-2%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Royalty 1–3</td>
                      <td className="p-3">~11-13%</td>
                      <td className="p-3">~4-5%</td>
                      <td className="p-3">~2-3%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Royal / Lord</td>
                      <td className="p-3">~14%+</td>
                      <td className="p-3">~5%+</td>
                      <td className="p-3">~4%+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-4">
                Sources: public Gamdom Rewards pages & third-party summaries. Values are indicative, not guaranteed.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Gamdom Rakeback FAQ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Does every game contribute to rakeback?</h3>
                <p className="text-gray-700">Most games do, but some categories may contribute less or be excluded. Check the Rewards page and bonus terms for specifics.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Do higher levels always give better rewards?</h3>
                <p className="text-gray-700">Higher levels usually unlock more frequent and higher-value bonuses, but exact benefits depend on Gamdom's current reward structure.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">How quickly do rewards update?</h3>
                <p className="text-gray-700">Some update instantly after play, while others (like weekly bonuses) refresh on a set schedule. Your Rewards page will show availability.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Guides */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Related Gamdom Guides</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Gift className="w-8 h-8 text-purple-600" />
                  <span className="text-sm">Rewards Guide</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Star className="w-8 h-8 text-yellow-600" />
                  <span className="text-sm">VIP Program</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <span className="text-sm">Games Guide</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                  <span className="text-sm">Sign Up Guide</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Important Disclaimer */}
        <section className="bg-gray-50 p-6 rounded-lg text-center">
          <h3 className="font-semibold text-lg mb-2">Important Reminder</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Rakeback is a form of cashback on your bets—it reduces losses but doesn't guarantee profit. 
            Always play responsibly, set strict limits, and remember that gambling should be entertainment, not income. 
            18+ only.
          </p>
        </section>
      </main>
    </>
  );
};

export default GamdomRakeback;