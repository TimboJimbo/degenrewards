import { useState, useEffect } from 'react';

export const useExitIntent = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const hasShownThisSession = sessionStorage.getItem('exitIntentShown');
    if (hasShownThisSession) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from the top and hasn't been shown
      if (e.clientY <= 0 && !hasShown) {
        setShowExitIntent(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    const handleScroll = () => {
      // Alternative trigger: after user scrolls 50% of page and hasn't shown
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 50 && !hasShown) {
        // Add a delay to avoid immediate trigger
        setTimeout(() => {
          if (!hasShown) {
            setShowExitIntent(true);
            setHasShown(true);
            sessionStorage.setItem('exitIntentShown', 'true');
          }
        }, 3000);
      }
    };

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  const hideExitIntent = () => {
    setShowExitIntent(false);
  };

  return { showExitIntent, hideExitIntent };
};