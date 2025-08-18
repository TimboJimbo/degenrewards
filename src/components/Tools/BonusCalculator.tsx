import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

const BonusCalculator = () => {
  const [depositAmount, setDepositAmount] = useState('100');
  const [platform, setPlatform] = useState('roobet');
  const [wagerMultiplier, setWagerMultiplier] = useState('35');
  const [results, setResults] = useState<any>(null);

  const platformData = {
    roobet: {
      name: 'Roobet',
      bonusPercentage: 100,
      maxBonus: 1000,
      rakebackRate: 0.1,
      vipMultiplier: 1.5
    },
    gamdom: {
      name: 'Gamdom',
      bonusPercentage: 100,
      maxBonus: 5000,
      rakebackRate: 0.15,
      vipMultiplier: 2.0
    },
    duelbits: {
      name: 'Duelbits',
      bonusPercentage: 100,
      maxBonus: 2500,
      rakebackRate: 0.12,
      vipMultiplier: 1.8
    },
    rainbet: {
      name: 'Rainbet',
      bonusPercentage: 100,
      maxBonus: 1000,
      rakebackRate: 0.08,
      vipMultiplier: 1.6
    }
  };

  const calculate = () => {
    const deposit = parseFloat(depositAmount) || 0;
    const data = platformData[platform as keyof typeof platformData];
    
    // Calculate bonus
    const bonusAmount = Math.min(deposit * (data.bonusPercentage / 100), data.maxBonus);
    
    // Calculate wagering requirement
    const totalBalance = deposit + bonusAmount;
    const wagerRequirement = totalBalance * parseFloat(wagerMultiplier);
    
    // Calculate expected rakeback
    const expectedRakeback = wagerRequirement * data.rakebackRate;
    const vipRakeback = expectedRakeback * data.vipMultiplier;
    
    // Net profit calculation (simplified)
    const houseEdge = 0.01; // 1% average house edge
    const expectedLoss = wagerRequirement * houseEdge;
    const netProfit = bonusAmount + expectedRakeback - expectedLoss;
    const vipNetProfit = bonusAmount + vipRakeback - expectedLoss;
    
    setResults({
      bonusAmount,
      wagerRequirement,
      expectedRakeback,
      vipRakeback,
      netProfit,
      vipNetProfit,
      totalBalance
    });
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Bonus & Rakeback Calculator
        </CardTitle>
        <p className="text-muted-foreground">
          Calculate your potential earnings from bonuses and rakeback across different platforms
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="deposit">Deposit Amount ($)</Label>
            <Input
              id="deposit"
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder="100"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="platform">Platform</Label>
            <Select value={platform} onValueChange={setPlatform}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="roobet">Roobet</SelectItem>
                <SelectItem value="gamdom">Gamdom</SelectItem>
                <SelectItem value="duelbits">Duelbits</SelectItem>
                <SelectItem value="rainbet">Rainbet</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="wager">Wager Multiplier</Label>
            <Select value={wagerMultiplier} onValueChange={setWagerMultiplier}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="25">25x</SelectItem>
                <SelectItem value="35">35x</SelectItem>
                <SelectItem value="40">40x</SelectItem>
                <SelectItem value="50">50x</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-end">
            <Button onClick={calculate} className="w-full">
              Calculate Returns
            </Button>
          </div>
        </div>

        {results && (
          <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
            <h3 className="font-semibold flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Calculation Results
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Bonus Amount:</span>
                  <Badge variant="secondary">
                    ${results.bonusAmount.toFixed(2)}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span>Total Balance:</span>
                  <span className="font-semibold">
                    ${results.totalBalance.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Wager Requirement:</span>
                  <span>${results.wagerRequirement.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Regular Rakeback:</span>
                  <Badge variant="outline">
                    ${results.expectedRakeback.toFixed(2)}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span>VIP Rakeback:</span>
                  <Badge>
                    ${results.vipRakeback.toFixed(2)}
                  </Badge>
                </div>
                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="font-semibold">Net Profit (VIP):</span>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4 text-secondary" />
                    <span className={`font-bold ${results.vipNetProfit > 0 ? 'text-secondary' : 'text-destructive'}`}>
                      ${results.vipNetProfit.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs text-muted-foreground mt-4 p-3 bg-warning/10 rounded">
              <strong>Disclaimer:</strong> This calculator provides estimates based on platform averages. 
              Actual results may vary depending on game selection, VIP status, and luck. 
              Gambling involves risk - only bet what you can afford to lose.
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BonusCalculator;