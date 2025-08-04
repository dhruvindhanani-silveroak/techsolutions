import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTopProduction } from '@/utils/scrollUtils';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use the production-ready scroll function
    scrollToTopProduction();
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
