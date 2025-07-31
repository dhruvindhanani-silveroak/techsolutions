import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to scroll to top when route changes
 * @param behavior - 'smooth' for smooth scrolling, 'auto' for instant (default: 'smooth')
 * @param delay - Delay in milliseconds before scrolling (default: 0)
 */
export const useScrollToTop = (
  behavior: ScrollBehavior = 'smooth',
  delay: number = 0
) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior,
      });
    };

    if (delay > 0) {
      const timeoutId = setTimeout(scrollToTop, delay);
      return () => clearTimeout(timeoutId);
    } else {
      scrollToTop();
    }
  }, [pathname, behavior, delay]);
};

/**
 * Function to manually scroll to top
 * @param behavior - 'smooth' for smooth scrolling, 'auto' for instant
 */
export const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior,
  });
};

/**
 * Function to scroll to a specific element
 * @param elementId - The ID of the element to scroll to
 * @param behavior - 'smooth' for smooth scrolling, 'auto' for instant
 * @param offset - Additional offset from the element (useful for fixed headers)
 */
export const scrollToElement = (
  elementId: string,
  behavior: ScrollBehavior = 'smooth',
  offset: number = 0
) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior,
    });
  }
};
