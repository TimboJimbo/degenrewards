import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, ExternalLink, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchData = [
    {
      title: 'Roobet Rakeback Guide',
      description: 'Complete guide to earning maximum rakeback on Roobet',
      href: '/roobet-rakeback',
      category: 'Guide',
      keywords: ['roobet', 'rakeback', 'vip', 'rewards']
    },
    {
      title: 'Gamdom VIP Program',
      description: 'Everything about Gamdom\'s loyalty program and benefits',
      href: '/gamdom',
      category: 'Platform',
      keywords: ['gamdom', 'vip', 'loyalty', 'bonus']
    },
    {
      title: 'First Deposit Bonuses',
      description: 'Compare the best welcome bonuses across all platforms',
      href: '/first-deposit-bonuses',
      category: 'Bonuses',
      keywords: ['bonus', 'deposit', 'welcome', 'new player']
    },
    {
      title: 'VIP Program Comparison',
      description: 'Side-by-side comparison of all VIP programs',
      href: '/vip-comparison',
      category: 'Comparison',
      keywords: ['vip', 'comparison', 'rakeback', 'loyalty']
    },
    {
      title: 'Bonus Calendar',
      description: 'Never miss daily bonuses and weekly events',
      href: '/bonus-calendar',
      category: 'Tools',
      keywords: ['calendar', 'daily', 'bonus', 'schedule']
    },
    {
      title: 'Duelbits Review',
      description: 'Complete Duelbits platform review and bonuses',
      href: '/duelbits',
      category: 'Platform',
      keywords: ['duelbits', 'review', 'bonus', 'crypto']
    },
    {
      title: 'Rainbet Bonuses',
      description: 'Latest Rainbet bonuses and promotional codes',
      href: '/rainbet',
      category: 'Platform',
      keywords: ['rainbet', 'bonus', 'promo', 'code']
    }
  ];

  const popularSearches = [
    'Roobet bonus',
    'VIP rakeback',
    'Best casino bonus',
    'Daily bonuses',
    'Gamdom VIP'
  ];

  const handleSearch = (searchQuery: string) => {
    setIsSearching(true);
    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setResults(filtered);
    setIsSearching(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      handleSearch(query.trim());
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search bonuses, guides, platforms..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value.length > 2) {
              handleSearch(e.target.value);
            } else {
              setResults([]);
            }
          }}
          className="pl-10 pr-20 h-12 text-base"
        />
        <Button 
          type="submit" 
          size="sm" 
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          Search
        </Button>
      </form>

      {/* Popular Searches */}
      {query === '' && (
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">Popular searches:</p>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((search, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => {
                  setQuery(search);
                  handleSearch(search);
                }}
                className="text-xs h-8"
              >
                <TrendingUp className="h-3 w-3 mr-1" />
                {search}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Search Results */}
      {results.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-96 overflow-y-auto">
          <CardContent className="p-0">
            {results.map((result, index) => (
              <Link
                key={index}
                to={result.href}
                className="block p-4 hover:bg-muted/50 transition-colors border-b border-border last:border-0"
                onClick={() => {
                  setQuery('');
                  setResults([]);
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm">{result.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {result.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{result.description}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground ml-2" />
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>
      )}

      {/* No Results */}
      {query.length > 2 && results.length === 0 && !isSearching && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground">
              No results found for "{query}". Try searching for bonus, rakeback, or platform names.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchBar;