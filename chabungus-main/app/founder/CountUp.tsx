"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";

const PAGE_REVEAL_EVENT = "chabungus:page-reveal-complete";
const START_DELAY = 350;
const UPDATE_INTERVAL = 30;
const IMPACT_PAUSE = 300;

const PARTICLES = [
  [0, -28],
  [18, -22],
  [31, -8],
  [29, 13],
  [16, 25],
  [0, 30],
  [-18, 24],
  [-30, 10],
  [-29, -10],
  [-16, -24],
];

type CountUpProps = {
  target: number;
  duration?: number;
};

export default function CountUp({ target, duration = 2000 }: CountUpProps) {
  const [value, setValue] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const formatter = useMemo(() => new Intl.NumberFormat("en-US"), []);
  const finalWidth = formatter.format(target).length;
  const isMajor = target >= 50000;

  useEffect(() => {
    let fallbackTimer = 0;
    let startTimer = 0;
    let completionTimer = 0;
    let interval = 0;
    let hasStarted = false;

    const finish = () => {
      setValue(target);
      setIsComplete(true);
    };

    const beginCounting = () => {
      const startedAt = Date.now();

      interval = window.setInterval(() => {
        const progress = Math.min((Date.now() - startedAt) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const nextValue = Math.round(target * easedProgress);

        setValue(isMajor ? Math.min(nextValue, target - 1) : nextValue);

        if (progress >= 1) {
          window.clearInterval(interval);

          if (isMajor) {
            setValue(target - 1);
            completionTimer = window.setTimeout(finish, IMPACT_PAUSE);
          } else {
            finish();
          }
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
      window.clearTimeout(completionTimer);
      window.clearInterval(interval);
    };
  }, [duration, isMajor, target]);

  return (
    <span className={`counter-wrap ${isComplete ? "is-complete" : ""} ${isMajor ? "is-major" : "is-subtle"}`}>
      {isMajor && isComplete && (
        <>
          <span className="shockwave" aria-hidden="true" />
          <span className="flash" aria-hidden="true" />
          <span className="particles" aria-hidden="true">
            {PARTICLES.map(([x, y], index) => (
              <span
                key={index}
                className="particle"
                style={{ "--particle-x": `${x}px`, "--particle-y": `${y}px` } as CSSProperties}
              />
            ))}
          </span>
        </>
      )}
      <span
        className="counter-value inline-block text-right tabular-nums"
        style={{ minWidth: `${finalWidth}ch` }}
      >
        {formatter.format(value)}
      </span>

      <style jsx>{`
        .counter-wrap {
          position: relative;
          display: inline-block;
          isolation: isolate;
        }

        .counter-value {
          position: relative;
          z-index: 2;
        }

        .is-subtle.is-complete .counter-value {
          animation: subtle-pop 560ms cubic-bezier(0.2, 0.9, 0.25, 1.35) both;
        }

        .is-major.is-complete .counter-value {
          animation: major-impact 900ms cubic-bezier(0.16, 1, 0.3, 1) both,
            afterglow 2.6s ease-in-out 900ms infinite alternate;
        }

        .shockwave,
        .flash,
        .particles {
          position: absolute;
          left: 50%;
          top: 50%;
          pointer-events: none;
        }

        .shockwave {
          z-index: 0;
          width: 28px;
          height: 28px;
          border: 2px solid rgba(251, 146, 60, 0.9);
          border-radius: 999px;
          transform: translate(-50%, -50%) scale(0.25);
          animation: shockwave 850ms ease-out forwards;
        }

        .flash {
          z-index: 0;
          width: 72px;
          height: 42px;
          border-radius: 999px;
          background: rgba(249, 115, 22, 0.48);
          filter: blur(16px);
          transform: translate(-50%, -50%) scale(0.35);
          animation: flash 700ms ease-out forwards;
        }

        .particles {
          z-index: 3;
          width: 1px;
          height: 1px;
        }

        .particle {
          position: absolute;
          left: -2px;
          top: -2px;
          width: 4px;
          height: 4px;
          border-radius: 999px;
          background: #fdba74;
          box-shadow: 0 0 8px rgba(249, 115, 22, 0.95);
          animation: particle-burst 800ms cubic-bezier(0.15, 0.75, 0.3, 1) forwards;
        }

        @keyframes subtle-pop {
          0% { transform: scale(1); text-shadow: 0 0 0 rgba(249, 115, 22, 0); }
          38% { transform: scale(1.1); color: #fff7ed; text-shadow: 0 0 16px rgba(249, 115, 22, 0.9); }
          100% { transform: scale(1); text-shadow: 0 0 7px rgba(249, 115, 22, 0.38); }
        }

        @keyframes major-impact {
          0% { transform: scale(0.96); color: #fb923c; text-shadow: 0 0 0 rgba(249, 115, 22, 0); }
          24% { transform: scale(1.2); color: #fff7ed; text-shadow: 0 0 24px rgba(249, 115, 22, 1), 0 0 48px rgba(249, 115, 22, 0.65); }
          55% { transform: scale(1.08); color: #fdba74; }
          100% { transform: scale(1); color: #fb923c; text-shadow: 0 0 10px rgba(249, 115, 22, 0.5); }
        }

        @keyframes afterglow {
          from { text-shadow: 0 0 8px rgba(249, 115, 22, 0.35); }
          to { text-shadow: 0 0 15px rgba(249, 115, 22, 0.7); }
        }

        @keyframes shockwave {
          0% { opacity: 1; transform: translate(-50%, -50%) scale(0.25); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(4.2); }
        }

        @keyframes flash {
          0% { opacity: 0.9; transform: translate(-50%, -50%) scale(0.35); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(2.2); }
        }

        @keyframes particle-burst {
          0% { opacity: 1; transform: translate(0, 0) scale(1.35); }
          100% { opacity: 0; transform: translate(var(--particle-x), var(--particle-y)) scale(0.25); }
        }
      `}</style>
    </span>
  );
}
