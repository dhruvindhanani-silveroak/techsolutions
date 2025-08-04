import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to scroll to top when route changes
 * @param behavior - 'smooth' for smooth scrolling, 'auto' for instant (default: 'auto' for production compatibility)
 * @param delay - Delay in milliseconds before scrolling (default: 100)
 */
export const useScrollToTop = (
  behavior: ScrollBehavior = 'auto',
  delay: number = 100
) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      try {
        // Multiple fallback methods for better cross-browser support
        if ('scrollTo' in window) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior,
          });
        } else {
          // Fallback for older browsers
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
      } catch (error) {
        // Final fallback
        console.warn('ScrollToTop failed:', error);
        try {
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        } catch (fallbackError) {
          console.warn('Fallback scroll failed:', fallbackError);
        }
      }
    };

    const timeoutId = setTimeout(scrollToTop, delay);
    return () => clearTimeout(timeoutId);
  }, [pathname, behavior, delay]);
};

/**
 * Function to manually scroll to top
 * @param behavior - 'smooth' for smooth scrolling, 'auto' for instant
 */
export const scrollToTop = (behavior: ScrollBehavior = 'auto') => {
  try {
    if ('scrollTo' in window) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior,
      });
    } else {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  } catch (error) {
    console.warn('Manual scrollToTop failed:', error);
    try {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    } catch (fallbackError) {
      console.warn('Fallback manual scroll failed:', fallbackError);
    }
  }
};

/**
 * Function to scroll to a specific element
 * @param elementId - The ID of the element to scroll to
 * @param behavior - 'smooth' for smooth scrolling, 'auto' for instant
 * @param offset - Additional offset from the element (useful for fixed headers)
 */
export const scrollToElement = (
  elementId: string,
  behavior: ScrollBehavior = 'auto',
  offset: number = 0
) => {
  try {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.offsetTop - offset;
      if ('scrollTo' in window) {
        window.scrollTo({
          top: elementPosition,
          behavior,
        });
      } else {
        document.documentElement.scrollTop = elementPosition;
        document.body.scrollTop = elementPosition;
      }
    } else {
      console.warn(`Element with ID "${elementId}" not found`);
    }
  } catch (error) {
    console.warn('ScrollToElement failed:', error);
  }
};
