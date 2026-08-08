import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Browsers handle scroll position on full page loads. With client-side routing we
 * have to do it ourselves: jump to the hash target when there is one, otherwise
 * start the new page at the top.
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }

    // After a route change the section exists but may not be laid out yet, so
    // wait for the next frame before measuring it.
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, left: 0 });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
