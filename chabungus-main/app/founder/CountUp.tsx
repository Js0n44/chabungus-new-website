"use client";

import { useEffect, useMemo, useState } from "react";

const PAGE_REVEAL_EVENT = "chabungus:page-reveal-complete";
const START_DELAY = 350;
const UPDATE_INTERVAL = 30;

type CountUpProps = {
  target: number;
  duration?: number;
};

export default function CountUp({ target, duration = 2000 }: CountUpProps) {
  const [value, setValue] = useState(0);
  const formatter = useMemo(() => new Intl.NumberFormat("en-US"), []);
  const finalWidth = formatter.format(target).length;

  useEffect(() => {
    let fallbackTimer = 0;
    let startTimer = 0;
    let interval = 0;
    let hasStarted = false;

    const beginCounting = () => {
      const startedAt = Date.now();

      interval = window.setInterval(() => {
        const progress = Math.min((Date.now() - startedAt) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * easedProgress));

        if (progress >= 1) {
          window.clearInterval(interval);
          setValue(target);
        }
      }, UPDATE_INTERVAL);
    };

    const startAnimation = () => {
      if (hasStarted) return;
      hasStarted = true;
      window.clearTimeout(fallbackTimer);
      startTimer = window.setTimeout(beginCounting, START_DELAY);
    };

    window.addEventListener(PAGE_REVEAL_EVENT, startAnimation, { once: true });
    fallbackTimer = window.setTimeout(startAnimation, 1800);

    return () => {
      window.removeEventListener(PAGE_REVEAL_EVENT, startAnimation);
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(startTimer);
      window.clearInterval(interval);
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
