"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/theme-provider";

export function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const activeCanvas: HTMLCanvasElement = canvas;
    const ctx = activeCanvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particlesArray: Particle[] = [];
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 150,
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = activeCanvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Attach listeners to parent element to cover the hero section area
    const parent = activeCanvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }

    const resizeCanvas = () => {
      activeCanvas.width = parent ? parent.offsetWidth : window.innerWidth;
      activeCanvas.height = parent ? parent.offsetHeight : window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const isDark = theme === "dark";

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        
        if (isDark) {
          ctx.fillStyle = "#3b82f6";
          ctx.shadowBlur = 15;
          ctx.shadowColor = "#3b82f6";
        } else {
          ctx.fillStyle = "rgba(80, 95, 118, 0.6)";
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
      }

      update() {
        if (this.x > activeCanvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > activeCanvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Float with baseline velocity
        this.x += this.directionX;
        this.y += this.directionY;
        this.baseX += this.directionX;
        this.baseY += this.directionY;

        // Apply restoring force towards baseline
        const dxBase = this.baseX - this.x;
        const dyBase = this.baseY - this.y;
        this.x += dxBase * 0.08;
        this.y += dyBase * 0.08;

        // Apply mouse repulsion force smoothly
        if (mouse.x !== null && mouse.y !== null) {
          const dxMouse = this.x - mouse.x;
          const dyMouse = this.y - mouse.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse) || 0.001;

          if (distMouse < mouse.radius) {
            const force = (mouse.radius - distMouse) / mouse.radius;
            // Smooth push factor
            const push = isDark ? force * this.density * 0.35 : force * 2.2;
            this.x += (dxMouse / distMouse) * push;
            this.y += (dyMouse / distMouse) * push;
          }
        }

        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      const numberOfParticles = (activeCanvas.height * activeCanvas.width) / 12000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = isDark ? Math.random() * 2 + 1 : Math.random() * 1.5 + 0.5;
        const x = Math.random() * (activeCanvas.width - size * 4) + size * 2;
        const y = Math.random() * (activeCanvas.height - size * 4) + size * 2;
        const directionX = (Math.random() - 0.5) * 0.5;
        const directionY = (Math.random() - 0.5) * 0.5;

        particlesArray.push(new Particle(x, y, directionX, directionY, size));
      }
    };

    const connect = () => {
      if (!ctx) return;
      const maxDistance = 100;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            
            ctx.beginPath();
            if (isDark) {
              ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.5})`;
              ctx.lineWidth = 1;
            } else {
              ctx.strokeStyle = `rgba(0, 88, 190, ${opacity * 0.4})`;
              ctx.lineWidth = 0.5;
            }
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, activeCanvas.width, activeCanvas.height);
      
      if (!isDark) {
        ctx.shadowBlur = 0;
      }
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [theme]);

  const opacityClass = theme === "dark" ? "opacity-80" : "opacity-60";

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 z-0 h-full w-full pointer-events-none transition-opacity duration-300 ${opacityClass}`}
    />
  );
}
