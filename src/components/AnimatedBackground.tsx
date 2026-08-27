"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  color: string;
};

/**
 * Canvas-based animated background: soft glowing particles drifting and
 * connecting with faint lines, plus large slow-moving gradient blobs behind
 * them. Fully self-contained, no external assets, reduced-motion aware.
 *
 * Perf notes: no per-frame shadowBlur (very expensive in Canvas2D — colors
 * are pre-baked into each particle instead), frame rate capped at ~30fps,
 * and the render loop pauses entirely once the canvas scrolls out of view
 * or the tab is hidden.
 */
export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let rafId = 0;
    let running = false;
    let lastFrame = 0;
    const frameInterval = 1000 / 30; // cap at ~30fps

    const colors = [
      "rgba(103, 232, 249, 0.85)", // cyan
      "rgba(232, 121, 249, 0.85)", // fuchsia
      "rgba(244, 114, 182, 0.85)", // pink
      "rgba(251, 191, 36, 0.85)", // amber
    ];

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(45, Math.floor((width * height) / 26000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.6,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const draw = (time: number) => {
      if (!running) return;
      rafId = requestAnimationFrame(draw);

      if (time - lastFrame < frameInterval) return;
      lastFrame = time;

      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      const maxDist = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.strokeStyle = `rgba(120, 200, 255, ${0.12 * (1 - dist / maxDist)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    const start = () => {
      if (running || prefersReducedMotion) return;
      running = true;
      lastFrame = 0;
      rafId = requestAnimationFrame(draw);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(rafId);
    };

    resize();
    window.addEventListener("resize", resize);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && document.visibilityState === "visible") {
          start();
        } else {
          stop();
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const onVisibility = () => {
      if (document.visibilityState === "visible") start();
      else stop();
    };
    document.addEventListener("visibilitychange", onVisibility);

    if (prefersReducedMotion) {
      draw(0);
    }

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Slow-moving gradient blobs */}
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] animate-blob rounded-full bg-cyan-500/25 blur-[90px]" />
      <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] animate-blob-slow rounded-full bg-fuchsia-500/25 blur-[90px]" />
      <div className="absolute -bottom-32 left-1/4 h-[26rem] w-[26rem] animate-blob-slower rounded-full bg-amber-400/20 blur-[90px]" />

      <canvas ref={canvasRef} className="relative h-full w-full" />

      {/* subtle vignette so foreground text stays readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
    </div>
  );
}
