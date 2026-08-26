"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  hue: number;
};

/**
 * Canvas-based animated background: soft glowing particles drifting and
 * connecting with faint lines, plus large slow-moving gradient blobs behind
 * them. Fully self-contained, no external assets, reduced-motion aware.
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

    const hues = [190, 280, 330, 40];

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(70, Math.floor((width * height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.8 + 0.6,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        hue: hues[Math.floor(Math.random() * hues.length)],
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 65%, 0.8)`;
        ctx.shadowColor = `hsla(${p.hue}, 90%, 65%, 0.9)`;
        ctx.shadowBlur = 8;
        ctx.fill();
      }

      const maxDist = 130;
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

      rafId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);

    if (!prefersReducedMotion) {
      rafId = requestAnimationFrame(draw);
    } else {
      draw();
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Slow-moving gradient blobs */}
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] animate-blob rounded-full bg-cyan-500/25 blur-[110px]" />
      <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] animate-blob-slow rounded-full bg-fuchsia-500/25 blur-[110px]" />
      <div className="absolute -bottom-32 left-1/4 h-[26rem] w-[26rem] animate-blob-slower rounded-full bg-amber-400/20 blur-[110px]" />

      <canvas ref={canvasRef} className="relative h-full w-full" />

      {/* subtle vignette so foreground text stays readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
    </div>
  );
}
