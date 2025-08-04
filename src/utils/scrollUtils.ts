/**
 * Production-ready scroll utilities for Vercel deployment
 */

/**
 * Scroll to top with multiple fallback methods
 * This function is specifically designed to work in production environments like Vercel
 */
export const scrollToTopProduction = () => {
  // Method 1: Try immediate scroll
  try {
    window.scrollTo(0, 0);
  } catch (error) {
    console.warn('Immediate scroll failed:', error);
  }

  // Method 2: Try with setTimeout for async rendering
  setTimeout(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch (error) {
      console.warn('Timeout scroll failed:', error);
    }
  }, 0);

  // Method 3: Direct DOM manipulation
  setTimeout(() => {
    try {
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }
    } catch (error) {
      console.warn('DOM scroll failed:', error);
    }
  }, 10);

  // Method 4: RequestAnimationFrame approach
  requestAnimationFrame(() => {
    try {
      window.scrollTo(0, 0);
    } catch (error) {
      console.warn('RAF scroll failed:', error);
    }
  });
};

/**
 * Hook alternative for manual use in components
 */
export const useProductionScrollToTop = () => {
  return scrollToTopProduction;
};

/**
 * Force scroll to top with aggressive approach
 * Use this if regular methods don't work
 */
export const forceScrollToTop = () => {
  // Multiple aggressive attempts
  const scrollMethods = [
    () => window.scrollTo(0, 0),
    () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }),
    () => { document.documentElement.scrollTop = 0; },
    () => { document.body.scrollTop = 0; },
    () => { 
      const html = document.querySelector('html');
      if (html) html.scrollTop = 0;
    },
    () => {
      const body = document.querySelector('body');
      if (body) body.scrollTop = 0;
    }
  ];

  scrollMethods.forEach((method, index) => {
    setTimeout(() => {
      try {
        method();
      } catch (error) {
        console.warn(`Scroll method ${index + 1} failed:`, error);
      }
    }, index * 10);
  });
};
