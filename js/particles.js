// Floating Particles Background
// Canvas-based particle system with mouse interaction

const ParticleSystem = (() => {
  let canvas, ctx, particles, animId;
  let mouse = { x: -9999, y: -9999 };
  let isDark = true;

  const config = {
    count: 60,
    maxRadius: 2.5,
    minRadius: 0.5,
    speed: 0.4,
    connectDistance: 130,
    mouseRadius: 120,
  };

  function getColors() {
    return isDark
      ? { particle: 'rgba(124, 58, 237,', line: 'rgba(124, 58, 237,' }
      : { particle: 'rgba(109, 40, 217,', line: 'rgba(109, 40, 217,' };
  }

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial) {
      this.x = Math.random() * canvas.width;
      this.y = initial ? Math.random() * canvas.height : -10;
      this.r = Math.random() * (config.maxRadius - config.minRadius) + config.minRadius;
      this.vx = (Math.random() - 0.5) * config.speed;
      this.vy = Math.random() * config.speed * 0.5 + 0.1;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.opacityDir = Math.random() > 0.5 ? 1 : -1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      this.opacity += this.opacityDir * 0.003;
      if (this.opacity >= 0.6 || this.opacity <= 0.05) this.opacityDir *= -1;

      // Mouse repulsion
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < config.mouseRadius) {
        const force = (config.mouseRadius - dist) / config.mouseRadius;
        this.x += (dx / dist) * force * 1.5;
        this.y += (dy / dist) * force * 1.5;
      }

      if (this.y > canvas.height + 10 || this.x < -10 || this.x > canvas.width + 10) {
        this.reset(false);
      }
    }

    draw() {
      const colors = getColors();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `${colors.particle} ${this.opacity})`;
      ctx.fill();
    }
  }

  function connectParticles() {
    const colors = getColors();
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < config.connectDistance) {
          const alpha = (1 - dist / config.connectDistance) * 0.18;
          ctx.beginPath();
          ctx.strokeStyle = `${colors.line} ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    connectParticles();
    animId = requestAnimationFrame(animate);
  }

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function init() {
    canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    resize();

    particles = Array.from({ length: config.count }, () => new Particle());
    animate();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
      mouse.x = -9999;
      mouse.y = -9999;
    });
  }

  function setTheme(dark) {
    isDark = dark;
  }

  return { init, setTheme };
})();

window.addEventListener('DOMContentLoaded', () => ParticleSystem.init());
