import { useEffect } from 'react';

interface ConversionTrackingProps {
  eventName: string;
  platform?: string;
  value?: number;
  currency?: string;
}

const ConversionTracking = ({ eventName, platform, value, currency = 'USD' }: ConversionTrackingProps) => {
  useEffect(() => {
    // Track affiliate link clicks
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'affiliate',
        event_label: platform,
        value: value,
        currency: currency,
        custom_map: {
          platform: platform
        }
      });
    }

    // Track in console for debugging
    console.log('Conversion Event:', { eventName, platform, value });
  }, [eventName, platform, value, currency]);

  return null;
};

// Custom hook for tracking affiliate clicks
export const useAffiliateTracking = () => {
  const trackClick = (platform: string, source: string = 'button') => {
    // Track in Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'affiliate_click', {
        event_category: 'affiliate',
        event_label: `${platform}_${source}`,
        platform: platform,
        source: source
      });
    }

    // Track in console for debugging
    console.log('Affiliate Click:', { platform, source });
  };

  const trackSignup = (platform: string, bonus?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'signup_attempt', {
        event_category: 'conversion',
        event_label: platform,
        platform: platform,
        bonus: bonus
      });
    }

    console.log('Signup Attempt:', { platform, bonus });
  };

  return { trackClick, trackSignup };
};

export default ConversionTracking;