import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function useLazyLoad(threshold = 0) {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    threshold,
    rootMargin: '200px 0px 200px 0px',
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return { ref, isInView };
}
