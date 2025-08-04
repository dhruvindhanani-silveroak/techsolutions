import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Multiple approaches to ensure scroll to top works in production
    const scrollToTop = () => {
      // Method 1: Standard window.scrollTo
      try {
        window.scrollTo(0, 0);
      } catch (e) {
        console.warn('window.scrollTo failed:', e);
      }

      // Method 2: Direct DOM manipulation
      try {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      } catch (e) {
        console.warn('DOM scrollTop failed:', e);
      }

      // Method 3: Using requestAnimationFrame for better timing
      requestAnimationFrame(() => {
        try {
          window.scrollTo(0, 0);
        } catch (e) {
          console.warn('RAF scrollTo failed:', e);
        }
      });
    };

    // Execute immediately and with timeout for different scenarios
    scrollToTop();
    
    // Also try after a short delay to handle async rendering
    const timeoutId = setTimeout(scrollToTop, 50);
    
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return <Outlet />;
};

export default Layout;
