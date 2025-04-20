'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedX: number;
  speedY: number;
}

interface Dimensions {
  width: number;
  height: number;
}

interface MousePosition {
  x: number | null;
  y: number | null;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<MousePosition>({ x: null, y: null });
  const animationRef = useRef<number | null>(null);

  // Initialize particles
  const initParticles = (): void => {
    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor(dimensions.width * 0.05), 150);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        radius: Math.random() * 3 + 1,
        color: `rgba(66, 153, 225, ${Math.random() * 0.5 + 0.1})`, // Blue shades
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
      });
    }

    particlesRef.current = particles;
  };

  // Connect particles within distance
  const connectParticles = (
    particle: Particle,
    index: number,
    ctx: CanvasRenderingContext2D,
  ): void => {
    for (let i = index + 1; i < particlesRef.current.length; i++) {
      const otherParticle = particlesRef.current[i];
      const distance = Math.sqrt(
        (particle.x - otherParticle.x) ** 2 +
          (particle.y - otherParticle.y) ** 2,
      );

      if (distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(66, 153, 225, ${0.2 - distance / 500})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(otherParticle.x, otherParticle.y);
        ctx.stroke();
      }
    }
  };

  // Draw particles and connections
  const drawParticles = (): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, dimensions.width, dimensions.height);

    particlesRef.current.forEach((particle, index) => {
      // Move particles
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Wrap around canvas edges
      if (particle.x > dimensions.width) particle.x = 0;
      if (particle.x < 0) particle.x = dimensions.width;
      if (particle.y > dimensions.height) particle.y = 0;
      if (particle.y < 0) particle.y = dimensions.height;

      // Draw particle
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();

      // Draw connections
      connectParticles(particle, index, ctx);
    });

    // Follow mouse if available
    if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
      particlesRef.current.forEach((particle) => {
        const mouseX = mouseRef.current.x as number; // Safe to cast since we checked for null
        const mouseY = mouseRef.current.y as number;

        const distance = Math.sqrt(
          (particle.x - mouseX) ** 2 + (particle.y - mouseY) ** 2,
        );

        if (distance < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(66, 153, 225, ${0.15})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();

          // Move particles slightly toward mouse
          const angle = Math.atan2(mouseY - particle.y, mouseX - particle.x);
          particle.speedX += Math.cos(angle) * 0.02;
          particle.speedY += Math.sin(angle) * 0.02;

          // Cap speed
          const maxSpeed = 2;
          const currentSpeed = Math.sqrt(
            particle.speedX ** 2 + particle.speedY ** 2,
          );
          if (currentSpeed > maxSpeed) {
            particle.speedX = (particle.speedX / currentSpeed) * maxSpeed;
            particle.speedY = (particle.speedY / currentSpeed) * maxSpeed;
          }
        }
      });
    }

    animationRef.current = requestAnimationFrame(drawParticles);
  };

  useEffect(() => {
    // Setup resize handler
    const handleResize = (): void => {
      if (canvasRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    // Setup mouse handler
    const handleMouseMove = (e: MouseEvent): void => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }
    };

    // Handle mouse leaving the canvas
    const handleMouseLeave = (): void => {
      mouseRef.current = { x: null, y: null };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Initial size
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Initialize and start animation when dimensions change
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      initParticles();
      drawParticles();
    }

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <section className="w-full py-8 min-[980px]:py-20 min-h-[85vh] flex flex-col justify-center mt-16 relative overflow-hidden text-center min-[980px]:text-start">
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute top-0 left-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
      />

      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16 min-[980px]:gap-0 min-[980px]:flex-row min-[980px]:justify-around items-center relative z-10">
        <motion.div
          className="w-full min-[980px]:w-auto min-[980px]:max-w-1/2 px-4 min-[980px]:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {`Hello, I'm Genie.`}
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Your Personal Assistant
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg mb-8 max-w-2xl min-[980px]:max-w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {`I'm here to simplify your life. From managing your schedule to
            planning your travel, I've got you covered 24/7.`}
          </motion.p>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.button
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 mx-auto min-[980px]:ml-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Meet Your Assistant
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full min-[980px]:w-auto flex justify-center items-center py-8 min-[980px]:py-0 order-first min-[980px]:order-last"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            className="w-48 min-[980px]:w-64 h-48 min-[980px]:h-64 bg-blue-100 rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              className="w-36 min-[980px]:w-48 h-36 min-[980px]:h-48 bg-blue-200 rounded-full flex items-center justify-center"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: 'easeInOut',
                delay: 0.2,
              }}
            >
              <motion.div
                className="w-24 min-[980px]:w-32 h-24 min-[980px]:h-32 bg-blue-300 rounded-full"
                animate={{
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                  delay: 0.4,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
