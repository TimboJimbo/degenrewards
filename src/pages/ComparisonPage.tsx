import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, X, Star, DollarSign, Gamepad2, CreditCard, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ComparisonPage = () => {
  return (
    <>
      <Helmet>
        <title>Casino Comparison – Roobet, Gamdom, Duelbits (2025) | DegenRewards</title>
        <meta name="description" content="Hands-on comparison of Roobet, Gamdom, and Duelbits. See how to sign up fast, claim bonuses, and which site fits low-stakes or high-roller play." />
        <meta name="keywords" content="roobet vs gamdom vs duelbits, casino comparison, crypto casino review, best casino bonuses" />
        <link rel="canonical" href="https://degenrewards.com/comparison" />
      </Helmet>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Roobet vs Gamdom vs Duelbits
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            I've played on all three—Roobet, Gamdom, and Duelbits—to test how easy signup is, 
            what bonuses actually credit, and which sites make sense whether you're betting small or going bigger.
          </p>
          <Badge variant="secondary" className="px-4 py-2">
            <Shield className="w-4 h-4 mr-2" />
            Real Player Testing & Reviews
          </Badge>
        </section>

        {/* Quick Comparison Table */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Quick Comparison Overview</CardTitle>
              <CardDescription>My focus: smooth signup, quick access to games, and transparent rewards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-4 font-semibold">Casino</th>
                      <th className="text-left p-4 font-semibold">Ease of Signup</th>
                      <th className="text-left p-4 font-semibold">Best For</th>
                      <th className="text-left p-4 font-semibold">Bonus Highlights</th>
                      <th className="text-left p-4 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <strong className="text-blue-700">Roobet</strong>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge variant="secondary" className="text-xs">Fast — email + password</Badge>
                      </td>
                      <td className="p-4">Higher stakes & quick crypto payouts</td>
                      <td className="p-4">Daily rakeback, VIP reloads, originals</td>
                      <td className="p-4">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <a href="https://roobet.com/?ref=timboice12" target="_blank" rel="noopener noreferrer">
                            Join Roobet
                          </a>
                        </Button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <strong className="text-purple-700">Gamdom</strong>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge variant="secondary" className="text-xs">Fast — email or social login</Badge>
                      </td>
                      <td className="p-4">Low–mid stakes & frequent small rewards</td>
                      <td className="p-4">Daily free cases, chat rain, XP perks</td>
                      <td className="p-4">
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          <a href="https://gamdom.com/?a=kimboslice" target="_blank" rel="noopener noreferrer">
                            Join Gamdom
                          </a>
                        </Button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                          <strong className="text-cyan-700">Duelbits</strong>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge variant="secondary" className="text-xs">Fast — email; crypto-friendly</Badge>
                      </td>
                      <td className="p-4">Sports bettors & slots grinders</td>
                      <td className="p-4">Cashback on all bets, sportsbook promos</td>
                      <td className="p-4">
                        <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                          <a href="https://duelbits.com/?a=degenrewards" target="_blank" rel="noopener noreferrer">
                            Join Duelbits
                          </a>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Detailed Platform Reviews */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Roobet */}
            <Card className="border-blue-200">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="flex items-center text-blue-800">
                  <div className="w-6 h-6 bg-blue-600 rounded-full mr-3"></div>
                  Roobet
                </CardTitle>
                <CardDescription>Higher stakes & crypto specialists</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-lg mb-2">Strengths</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Straightforward signup process</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Fast crypto withdrawal speeds</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Strong VIP structure for higher volume</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Daily rakeback system</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-lg mb-2">Best For</h4>
                  <p className="text-sm text-gray-700">
                    Players who want quick crypto payouts and don't mind betting at higher stakes for better VIP offers.
                    Low-stakes players still benefit from daily rakeback.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">My Testing Notes</h4>
                  <p className="text-xs text-blue-700">
                    "Deposits and withdrawals worked as expected. VIP reloads kicked in after consistent play. 
                    Code timboice12 applied automatically."
                  </p>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <a href="https://roobet.com/?ref=timboice12" target="_blank" rel="noopener noreferrer">
                    Join Roobet
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Gamdom */}
            <Card className="border-purple-200">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle className="flex items-center text-purple-800">
                  <div className="w-6 h-6 bg-purple-600 rounded-full mr-3"></div>
                  Gamdom
                </CardTitle>
                <CardDescription>Beginner-friendly with frequent rewards</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-lg mb-2">Strengths</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Easiest starting point for beginners</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Frequent micro-rewards (cases, rain)</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Social login options (Google/Steam)</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />XP progression system</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-lg mb-2">Best For</h4>
                  <p className="text-sm text-gray-700">
                    New players who want to test with small amounts. Great for casual sessions and steady progression 
                    through XP levels and frequent bonuses.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">My Testing Notes</h4>
                  <p className="text-xs text-purple-700">
                    "Most beginner-friendly interface. Chat rain actually works. 
                    Daily cases credited as advertised. Good for learning the ropes."
                  </p>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <a href="https://gamdom.com/?a=kimboslice" target="_blank" rel="noopener noreferrer">
                    Join Gamdom
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Duelbits */}
            <Card className="border-cyan-200">
              <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50">
                <CardTitle className="flex items-center text-cyan-800">
                  <div className="w-6 h-6 bg-cyan-600 rounded-full mr-3"></div>
                  Duelbits
                </CardTitle>
                <CardDescription>Casino + sportsbook hybrid</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-lg mb-2">Strengths</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Full sportsbook + casino combination</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Cashback applies to all bet types</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Quick signup process</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Ace's Rewards + Level-Up system</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-lg mb-2">Best For</h4>
                  <p className="text-sm text-gray-700">
                    Players who want both sports betting and casino games under one account. 
                    Low-stakes get steady cashback returns; higher-stakes access tailored VIP offers.
                  </p>
                </div>

                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">My Testing Notes</h4>
                  <p className="text-xs text-cyan-700">
                    "Convenient having sports and casino together. Cashback credited across both. 
                    Good for players who like variety in their betting."
                  </p>
                </div>

                <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                  <a href="https://duelbits.com/?a=degenrewards" target="_blank" rel="noopener noreferrer">
                    Join Duelbits
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Side-by-Side Feature Comparison</CardTitle>
              <CardDescription>Detailed breakdown of key features across all three platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-3 font-semibold">Feature</th>
                      <th className="text-center p-3 font-semibold text-blue-700">Roobet</th>
                      <th className="text-center p-3 font-semibold text-purple-700">Gamdom</th>
                      <th className="text-center p-3 font-semibold text-cyan-700">Duelbits</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3 font-medium"><Gamepad2 className="w-4 h-4 inline mr-2" />Games</td>
                      <td className="p-3 text-center">Casino, Originals, Slots, Live</td>
                      <td className="p-3 text-center">Casino, Originals, Slots, Live</td>
                      <td className="p-3 text-center">Casino, Originals, Slots, Live, Sportsbook</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium"><CreditCard className="w-4 h-4 inline mr-2" />Payments</td>
                      <td className="p-3 text-center">Crypto-first</td>
                      <td className="p-3 text-center">Crypto-first</td>
                      <td className="p-3 text-center">Crypto-first</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium"><Shield className="w-4 h-4 inline mr-2" />KYC</td>
                      <td className="p-3 text-center">Jurisdiction dependent</td>
                      <td className="p-3 text-center">Jurisdiction dependent</td>
                      <td className="p-3 text-center">Jurisdiction dependent</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium"><DollarSign className="w-4 h-4 inline mr-2" />Rewards</td>
                      <td className="p-3 text-center">Daily rakeback & VIP reloads</td>
                      <td className="p-3 text-center">XP progression & frequent bonuses</td>
                      <td className="p-3 text-center">Ace's Rewards & cross-platform cashback</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium"><Star className="w-4 h-4 inline mr-2" />VIP</td>
                      <td className="p-3 text-center">Strong for high volume</td>
                      <td className="p-3 text-center">Beginner-friendly progression</td>
                      <td className="p-3 text-center">Casino + sports combined</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* My Recommendations */}
        <section className="mb-12">
          <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="text-green-800">My Take After Testing All Three</CardTitle>
              <CardDescription>Personal recommendations based on different player types</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-green-700">New to These Sites?</h3>
                  <p className="text-gray-700 mb-4">
                    Try <strong className="text-purple-600">Gamdom</strong> first for easy freebies, 
                    then <strong className="text-blue-600">Roobet</strong> for VIP potential, 
                    and <strong className="text-cyan-600">Duelbits</strong> if you also bet sports.
                  </p>
                  <p className="text-sm text-gray-600">
                    In my tests, deposits and withdrawals worked as expected and bonuses credited per terms.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-green-700">By Play Style</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Low-stakes:</strong> Gamdom (free cases, XP) and Duelbits (cashback)</li>
                    <li><strong>Higher stakes:</strong> Roobet (VIP reloads and stronger offers over time)</li>
                    <li><strong>Sports + Casino:</strong> Duelbits (unified cashback system)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-semibold mb-2">Can I Sign Up for All Three?</h4>
                <p className="text-gray-700">
                  Yes—there's no penalty for having accounts at multiple casinos. Many players test all three 
                  and stick with the rewards they like most. Just remember to set limits at each site.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Casino Comparison FAQ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Which site is best for beginners?</h3>
                <p className="text-gray-700">
                  Gamdom's instant XP and frequent small boosts make it beginner-friendly. Start small and learn the rewards flow.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Which is best for high rollers?</h3>
                <p className="text-gray-700">
                  Roobet's VIP reloads and fast crypto withdrawals have been solid in my testing. Check your limits and terms first.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">What if I want sports betting too?</h3>
                <p className="text-gray-700">
                  Duelbits combines a full sportsbook with casino games and cashback on all bets, which is convenient if you do both.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Can I sign up for all three?</h3>
                <p className="text-gray-700">
                  Yes—there's no penalty for having accounts at multiple casinos. Many players test all three and stick with the rewards they like most.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-gray-800 to-gray-600 text-white py-12 px-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Choose Your Casino?</h2>
          <p className="text-xl mb-8">Start with the one that matches your play style best</p>
          
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 py-3">
              <a href="https://roobet.com/?ref=timboice12" target="_blank" rel="noopener noreferrer">
                Join Roobet
              </a>
            </Button>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 py-3">
              <a href="https://gamdom.com/?a=kimboslice" target="_blank" rel="noopener noreferrer">
                Join Gamdom
              </a>
            </Button>
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 py-3">
              <a href="https://duelbits.com/?a=degenrewards" target="_blank" rel="noopener noreferrer">
                Join Duelbits
              </a>
            </Button>
          </div>
          
          <div className="mt-6 text-sm opacity-90">
            <p>18+ only • Play responsibly • Availability depends on location and local laws</p>
          </div>
        </section>

        {/* Responsible Gambling */}
        <section className="mt-8 p-6 bg-gray-50 rounded-lg text-center">
          <Shield className="w-8 h-8 text-gray-600 mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Responsible Gambling</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Availability depends on your location and local laws. 18+ only. Please gamble responsibly. 
            Set limits, take breaks, and never bet more than you can afford to lose. 
            See <strong>Responsible Gambling</strong> for help and resources.
          </p>
        </section>
      </main>
    </>
  );
};

export default ComparisonPage;