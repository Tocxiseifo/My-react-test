// eslint-disable-next-line no-unused-vars
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function Counter({
  value,
  duration = 2,
  className = "",
}) {
  const ref = useRef(null);
  const count = useMotionValue(0);

  const rounded = useTransform(count, (v) =>
    Math.floor(v).toLocaleString("en-US")
  );

  const isInView = useInView(ref, {
    once: true,     // يشتغل مرة واحدة
    margin: "-80px" // يبدأ بدري شوية
  });

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration,
        ease: "easeOut",
      });
    }
  }, [isInView, value, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
}
