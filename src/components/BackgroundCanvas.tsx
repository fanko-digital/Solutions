import React, { useEffect, useRef } from 'react';

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const cx = cv.getContext('2d');
    if (!cx) return;

    let cW = (cv.width = window.innerWidth);
    let cH = (cv.height = window.innerHeight);

    const onResize = () => {
      if (!cv) return;
      cW = cv.width = window.innerWidth;
      cH = cv.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
      // Dampen velocity to prevent extreme jerks
      scrollVelocity += delta * 0.12;
      if (scrollVelocity > 15) scrollVelocity = 15;
      if (scrollVelocity < -15) scrollVelocity = -15;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    class Point {
      x = Math.random() * cW;
      y = Math.random() * cH;
      vx = (Math.random() - 0.5) * 0.4;
      vy = (Math.random() - 0.5) * 0.4;
      r = Math.random() * 1.6 + 0.6;
      a = Math.random() * 0.5 + 0.15;
      depth = Math.random() * 0.8 + 0.2; // Parallax depth factor

      upd() {
        this.x += this.vx;
        // Natural drift + parallax scroll reaction
        this.y += this.vy - scrollVelocity * this.depth;

        // Wrap around viewport edges
        if (this.x < 0) this.x = cW;
        else if (this.x > cW) this.x = 0;

        if (this.y < 0) this.y = cH;
        else if (this.y > cH) this.y = 0;
      }

      drw() {
        if (!cx) return;
        cx.save();
        cx.globalAlpha = this.a;
        cx.fillStyle = '#00D4FF';
        cx.beginPath();
        cx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        cx.fill();
        cx.restore();
      }
    }

    const pts: Point[] = [];
    for (let i = 0; i < 85; i++) {
      pts.push(new Point());
    }

    function drwCon() {
      if (!cx) return;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 125) {
            cx.save();
            const alphaBase = (1 - d / 125) * 0.14;
            // Slightly glow brighter when scrolling
            const scrollBonus = Math.min(0.12, Math.abs(scrollVelocity) * 0.02);
            cx.globalAlpha = alphaBase + scrollBonus;
            cx.strokeStyle = '#00D4FF';
            cx.lineWidth = 0.6;
            cx.beginPath();
            cx.moveTo(pts[i].x, pts[i].y);
            cx.lineTo(pts[j].x, pts[j].y);
            cx.stroke();
            cx.restore();
          }
        }
      }
    }

    let animationId: number;
    function anBg() {
      if (!cx) return;
      cx.clearRect(0, 0, cW, cH);

      // Smooth decay of scroll velocity back to 0
      scrollVelocity *= 0.92;
      if (Math.abs(scrollVelocity) < 0.01) scrollVelocity = 0;

      pts.forEach((p) => {
        p.upd();
        p.drw();
      });
      drwCon();
      animationId = requestAnimationFrame(anBg);
    }

    anBg();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas id="bgc" ref={canvasRef} aria-hidden="true" />;
};
