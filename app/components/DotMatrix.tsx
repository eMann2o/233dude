import { useRef, useEffect, useCallback } from "react";

/**
 * DotMatrix — Animated particle canvas inspired by antigravity.google
 *
 * Renders a field of small colored dots/lines that drift outward from center,
 * creating a subtle radial burst effect. Uses requestAnimationFrame for
 * smooth 60fps rendering.
 */

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  type: "dot" | "line"; // dots or small line dashes
  rotation: number;
  rotationSpeed: number;
  life: number;
  maxLife: number;
  speed: number;
}

const COLORS = [
  "#4285F4", // Google blue
  "#4285F4",
  "#EA4335", // Google red
  "#FBBC04", // Google yellow
  "#34A853", // Google green
  "#39A0ED", // Portfolio blue-bell
  "#9A7AA0", // Portfolio dusty-mauve
  "#7B61FF", // Purple accent
];

function createParticle(
  cx: number,
  cy: number,
  canvasW: number,
  canvasH: number
): Particle {
  // Spawn particles around center with some random spread
  const angle = Math.random() * Math.PI * 2;
  const spawnRadius = Math.random() * Math.min(canvasW, canvasH) * 0.08;

  const originX = cx + Math.cos(angle) * spawnRadius;
  const originY = cy + Math.sin(angle) * spawnRadius;

  const speed = 0.15 + Math.random() * 0.6;
  const outwardAngle = angle + (Math.random() - 0.5) * 0.8;

  return {
    x: originX,
    y: originY,
    originX,
    originY,
    vx: Math.cos(outwardAngle) * speed,
    vy: Math.sin(outwardAngle) * speed,
    size: 1.5 + Math.random() * 3.5,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    opacity: 0.3 + Math.random() * 0.6,
    type: Math.random() > 0.5 ? "dot" : "line",
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.02,
    life: 0,
    maxLife: 300 + Math.random() * 500,
    speed,
  };
}

export default function DotMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animFrameRef = useRef<number>(0);
  const dimensionsRef = useRef({ w: 0, h: 0 });

  const initParticles = useCallback((w: number, h: number) => {
    const cx = w / 2;
    const cy = h / 2;
    // Adjust particle count based on screen size
    const area = w * h;
    const count = Math.min(Math.floor(area / 2800), 350);
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const p = createParticle(cx, cy, w, h);
      // Scatter initial particles across the canvas for a pre-populated look
      p.life = Math.random() * p.maxLife * 0.8;
      const drift = p.life;
      p.x = p.originX + p.vx * drift;
      p.y = p.originY + p.vy * drift;
      particles.push(p);
    }
    return particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      dimensionsRef.current = { w, h };
      particlesRef.current = initParticles(w, h);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      const { w, h } = dimensionsRef.current;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];

        // Update life
        p.life += 1;

        // Respawn if dead or out of bounds
        if (
          p.life >= p.maxLife ||
          p.x < -50 ||
          p.x > w + 50 ||
          p.y < -50 ||
          p.y > h + 50
        ) {
          particlesRef.current[i] = createParticle(cx, cy, w, h);
          continue;
        }

        // Move outward
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        // Mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80 && dist > 0) {
          const force = (80 - dist) / 80;
          p.x += (dx / dist) * force * 1.5;
          p.y += (dy / dist) * force * 1.5;
        }

        // Fade based on life
        const lifeRatio = p.life / p.maxLife;
        let alpha = p.opacity;
        // Fade in during first 10% of life
        if (lifeRatio < 0.1) {
          alpha *= lifeRatio / 0.1;
        }
        // Fade out during last 30% of life
        if (lifeRatio > 0.7) {
          alpha *= (1 - lifeRatio) / 0.3;
        }

        // Distance from center fade (more opaque near edges)
        const centerDist = Math.sqrt(
          (p.x - cx) ** 2 + (p.y - cy) ** 2
        );
        const maxDist = Math.sqrt(cx * cx + cy * cy);
        const distFactor = Math.min(centerDist / (maxDist * 0.6), 1);
        alpha *= 0.3 + distFactor * 0.7;

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.type === "dot") {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        } else {
          // Draw a small dash/line
          const len = p.size * 2.5;
          ctx.beginPath();
          ctx.moveTo(-len / 2, 0);
          ctx.lineTo(len / 2, 0);
          ctx.strokeStyle = p.color;
          ctx.lineWidth = Math.max(1.2, p.size * 0.5);
          ctx.lineCap = "round";
          ctx.stroke();
        }

        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 0 }}
    />
  );
}
