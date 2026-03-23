"use client";

import { useEffect, useRef } from "react";

export default function Sparkles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const particles: Array<{ x: number, y: number, size: number, speedY: number, speedX: number, opacity: number, pulseData: number }> = [];

        for (let i = 0; i < 150; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 2.5 + 0.5,
                speedY: Math.random() * 0.8 + 0.1,
                speedX: (Math.random() - 0.5) * 0.5,
                opacity: Math.random(),
                pulseData: Math.random() * Math.PI * 2
            });
        }

        let animationFrameId: number;

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach((p) => {
                p.y -= p.speedY;
                p.x += p.speedX;
                p.pulseData += 0.05;

                if (p.y < 0) {
                    p.y = height;
                    p.x = Math.random() * width;
                }
                if (p.x < 0) {
                    p.x = width;
                }
                if (p.x > width) {
                    p.x = 0;
                }

                const currentOpacity = Math.max(0.1, p.opacity * (0.5 + Math.sin(p.pulseData) * 0.5));
                const rgb = p.size > 2 ? '251, 146, 60' : '249, 115, 22';

                ctx.fillStyle = `rgba(${rgb}, ${currentOpacity})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                if (p.size > 2) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = `rgba(249, 115, 22, ${currentOpacity})`;
                } else {
                    ctx.shadowBlur = 0;
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-80 mix-blend-screen"
        />
    );
}
