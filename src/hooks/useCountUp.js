import { useState, useEffect, useRef, useCallback } from "react";

const useCountUp = (end, { duration = 2000, start = false } = {}) => {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);
  const hasAnimated = useRef(false);

  // easeOutExpo: fast start, slow end — premium feel
  const easeOutExpo = useCallback((t) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }, []);

  useEffect(() => {
    if (!start || hasAnimated.current || end === 0) return;

    hasAnimated.current = true;
    startTimeRef.current = null;

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      setCount(Math.round(easedProgress * end));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [start, end, duration, easeOutExpo]);

  return count;
};

export { useCountUp };
