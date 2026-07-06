import { motion, useInView } from "framer-motion";
import { useRef } from "react";
/**
 * Reusable animation wrapper.
 *
 * Props:
 * - children: Content to animate
 * - direction: up | down | left | right
 * - triggerOn: mount | scroll
 * - duration: Animation duration
 * - delay: Start delay
 * - distance: Offset distance
 * - once: Animate once on scroll
 */
const Animate = ({
  children,
  direction = "up",
  triggerOn = "scroll",
  duration = 0.5,
  delay = 0,
  distance = 40,
  once = true,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: "-50px",
  });

  const initialPosition = (() => {
    switch (direction) {
      case "up":
        return { y: distance, opacity: 0 };

      case "down":
        return { y: -distance, opacity: 0 };

      case "left":
        return { x: distance, opacity: 0 };

      case "right":
        return { x: -distance, opacity: 0 };

      default:
        return { y: distance, opacity: 0 };
    }
  })();

  const finalPosition = {
    x: 0,
    y: 0,
    opacity: 1,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initialPosition}
      animate={
        triggerOn === "mount"
          ? finalPosition
          : isInView
          ? finalPosition
          : initialPosition
      }
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Animate;