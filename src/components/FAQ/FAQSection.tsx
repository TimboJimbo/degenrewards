import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HelpCircle, Shield, DollarSign, Clock } from 'lucide-react';

interface FAQSectionProps {
  platform?: string;
  category?: 'general' | 'bonuses' | 'vip' | 'rakeback';
}

const FAQSection = ({ platform, category = 'general' }: FAQSectionProps) => {
  const generalFAQs = [
    {
      question: "Are these casino platforms legitimate and safe?",
      answer: "Yes, all platforms we recommend (Roobet, Gamdom, Duelbits, Rainbet) are licensed, established crypto casinos with proven track records. They use provably fair technology and have strong security measures in place.",
      category: "Safety"
    },
    {
      question: "How do I know I'm getting the best bonus codes?",
      answer: "We maintain direct relationships with these platforms and regularly verify our codes. Our bonus codes are exclusive and often provide better value than generic offers. We update them weekly to ensure they're active.",
      category: "Bonuses"
    },
    {
      question: "What's the difference between rakeback and bonuses?",
      answer: "Bonuses are one-time promotional offers (like welcome bonuses), while rakeback is a percentage of your losses returned to you continuously. Rakeback provides long-term value, especially for frequent players.",
      category: "Rewards"
    },
    {
      question: "How quickly can I withdraw my winnings?",
      answer: "Withdrawal times vary by platform and VIP level. Generally: Crypto withdrawals are fastest (5-30 minutes), VIP members get priority processing, and you must complete any bonus wagering requirements first.",
      category: "Withdrawals"
    },
    {
      question: "Do I need to use cryptocurrency?",
      answer: "All recommended platforms primarily use cryptocurrency. This provides faster transactions, lower fees, and enhanced privacy. Most accept Bitcoin, Ethereum, and other major cryptocurrencies.",
      category: "Payments"
    }
  ];

  const bonusFAQs = [
    {
      question: "How do wagering requirements work?",
      answer: "Wagering requirements mean you must bet a certain amount before withdrawing bonus funds. For example, a 35x requirement on a $100 bonus means you must wager $3,500 total. Different games contribute different percentages.",
      category: "Requirements"
    },
    {
      question: "Can I withdraw bonus money immediately?",
      answer: "No, bonus funds must meet wagering requirements first. Only your original deposit and winnings from completed bonuses can be withdrawn immediately (subject to platform minimums).",
      category: "Withdrawals"
    },
    {
      question: "What happens if I don't complete wagering in time?",
      answer: "Bonus funds and any winnings from them will be forfeited. However, your original deposit remains yours. Time limits vary by platform (typically 7-30 days).",
      category: "Time Limits"
    },
    {
      question: "Which games count towards wagering requirements?",
      answer: "Slots typically contribute 100%, while table games contribute less. Check each platform's terms: Blackjack usually contributes 10-25%, Roulette 5-15%, and some games may be excluded entirely.",
      category: "Games"
    }
  ];

  const vipFAQs = [
    {
      question: "How do I qualify for VIP status?",
      answer: "VIP status is earned through regular play and wagering volume. Each platform has different requirements, typically based on monthly wagering amounts. Higher levels require consistent play over time.",
      category: "Qualification"
    },
    {
      question: "What are the main VIP benefits?",
      answer: "VIP benefits include: Higher rakeback rates, exclusive bonuses, faster withdrawals, personal account managers, special tournaments, and birthday/anniversary gifts. Benefits increase with VIP level.",
      category: "Benefits"
    },
    {
      question: "Can I lose my VIP status?",
      answer: "VIP levels are typically maintained through consistent play. If you become inactive, you may be demoted to lower levels. However, most platforms have grace periods, and reaching higher levels once makes it easier to regain status.",
      category: "Maintenance"
    }
  ];

  const rakebackFAQs = [
    {
      question: "How often is rakeback paid?",
      answer: "Most platforms pay rakeback daily or weekly. The exact schedule varies: Roobet pays daily, Gamdom weekly, etc. VIP members often get more frequent payments and higher rates.",
      category: "Payment Schedule"
    },
    {
      question: "Is rakeback paid on winning sessions?",
      answer: "Rakeback is typically calculated on total wagering, not losses. However, some platforms only pay rakeback on net losses. Check each platform's specific terms for their rakeback calculation method.",
      category: "Calculation"
    },
    {
      question: "Can I combine rakeback with bonuses?",
      answer: "Usually yes, but bonus play may earn reduced rakeback rates. Some platforms pause rakeback during active bonus periods. VIP members often maintain full rakeback rates even when using bonuses.",
      category: "Combining"
    }
  ];

  const getFAQs = () => {
    switch (category) {
      case 'bonuses': return bonusFAQs;
      case 'vip': return vipFAQs;
      case 'rakeback': return rakebackFAQs;
      default: return generalFAQs;
    }
  };

  const getCategoryInfo = () => {
    switch (category) {
      case 'bonuses':
        return { title: 'Bonus FAQs', icon: DollarSign, color: 'bg-accent' };
      case 'vip':
        return { title: 'VIP Program FAQs', icon: Shield, color: 'bg-primary' };
      case 'rakeback':
        return { title: 'Rakeback FAQs', icon: Clock, color: 'bg-secondary' };
      default:
        return { title: 'Frequently Asked Questions', icon: HelpCircle, color: 'bg-muted' };
    }
  };

  const faqs = getFAQs();
  const categoryInfo = getCategoryInfo();
  const IconComponent = categoryInfo.icon;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <IconComponent className="h-5 w-5" />
          {categoryInfo.title}
          {platform && (
            <Badge variant="outline" className="ml-2">
              {platform}
            </Badge>
          )}
        </CardTitle>
        <p className="text-muted-foreground">
          {category === 'general' ? 'Common questions about crypto casino bonuses and rewards' :
           category === 'bonuses' ? 'Everything you need to know about casino bonuses' :
           category === 'vip' ? 'Understanding VIP programs and loyalty rewards' :
           'Learn how rakeback works and maximize your returns'}
        </p>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <span>{faq.question}</span>
                  <Badge variant="outline" className="text-xs ml-auto">
                    {faq.category}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional Help */}
        <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <HelpCircle className="h-4 w-4" />
            Still have questions?
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            Can't find what you're looking for? We're here to help with personalized advice.
          </p>
          <div className="flex gap-2">
            <Badge variant="secondary" className="text-xs cursor-pointer hover:bg-secondary/80">
              Contact Support
            </Badge>
            <Badge variant="outline" className="text-xs cursor-pointer hover:bg-muted/50">
              Join Discord
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FAQSection;