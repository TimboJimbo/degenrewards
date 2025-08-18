import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const BreadcrumbNav = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (pathname: string) => {
    const names: { [key: string]: string } = {
      'roobet': 'Roobet',
      'roobet-rakeback': 'Roobet Rakeback',
      'gamdom': 'Gamdom',
      'gamdom-rakeback': 'Gamdom Rakeback',
      'duelbits': 'Duelbits',
      'rainbet': 'Rainbet',
      'rainbet-rakeback': 'Rainbet Rakeback',
      'best-bonuses': 'Best Bonuses',
      'first-deposit-bonuses': 'First Deposit Bonuses',
      'bonus-calendar': 'Bonus Calendar',
      'vip-comparison': 'VIP Comparison',
      'comparison': 'Platform Comparison',
      'gambling-strategies': 'Gambling Strategies',
      'responsible-gambling': 'Responsible Gambling',
      'contact': 'Contact',
      'affiliate-disclosure': 'Affiliate Disclosure',
      'cookie-policy': 'Cookie Policy'
    };
    return names[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
  };

  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-4 border-b border-border/50">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              to="/" 
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <li key={pathname} className="flex items-center">
                <ChevronRight className="h-4 w-4 text-muted-foreground mx-2" />
                {isLast ? (
                  <span className={cn(
                    "font-medium text-foreground",
                    "max-w-[200px] truncate"
                  )}>
                    {getBreadcrumbName(pathname)}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className={cn(
                      "text-muted-foreground hover:text-foreground transition-colors",
                      "max-w-[200px] truncate"
                    )}
                  >
                    {getBreadcrumbName(pathname)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbNav;