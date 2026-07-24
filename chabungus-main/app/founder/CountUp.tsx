"use client";

import { useEffect, useMemo, useState } from "react";

const PAGE_REVEAL_EVENT = "chabungus:page-reveal-complete";

type CountUpProps = {
  target: number;
  duration?: number;
};

export default function CountUp({ target, duration = 1500 }: CountUpProps) {
  const [value, setValue] = useState(0);
  const formatter = useMemo(() => new Intl.NumberFormat("en-US"), []);
  const finalWidth = formatter.format(target).length;

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      setValue(target);
      return;
    }

    let animationFrame = 0;
    let fallbackTimer = 0;
    let startTime: number | null = null;
    let hasStarted = false;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const startAnimation = () => {
      if (hasStarted) return;
      hasStarted = true;
      window.clearTimeout(fallbackTimer);
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener(PAGE_REVEAL_EVENT, startAnimation, { once: true });
    fallbackTimer = window.setTimeout(startAnimation, 2500);

    return () => {
      window.removeEventListener(PAGE_REVEAL_EVENT, startAnimation);
      window.clearTimeout(fallbackTimer);
      cancelAnimationFrame(animationFrame);
    };
  }, [duration, target]);

  return (
    <span
      className="inline-block text-right tabular-nums"
      style={{ minWidth: `${finalWidth}ch` }}
    >
      {formatter.format(value)}
    </span>
  );
}
