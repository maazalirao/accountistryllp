import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  // Reduced particles for better performance - from 50 to 12
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1, // Smaller particles
    duration: Math.random() * 25 + 15, // Slower, smoother movement
    delay: Math.random() * 8,
  }));

  // Reduced floating elements for performance - from 6 to 3
  const floatingElements = Array.from({ length: 3 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 80 + 40, // Smaller elements
    duration: Math.random() * 40 + 30, // Much slower movement
    delay: Math.random() * 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Simple gradient background - performance optimized */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Reduced and optimized gradient orbs */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full opacity-10 blur-3xl" // Reduced opacity
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            background: `linear-gradient(45deg, 
              hsl(${45 + element.id * 80}, 70%, 55%), 
              hsl(${200 + element.id * 50}, 60%, 45%))`,
          }}
          animate={{
            x: [0, 30, -20, 0], // Much smaller, subtler movement
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1], // Reduced scaling
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Optimized floating particles - reduced and gentler */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-primary-400/40 to-blue-400/40 opacity-40" // Reduced opacity
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -15, 0], // Reduced movement
            x: [0, 8, -8, 0],
            opacity: [0.2, 0.6, 0.2], // Gentler opacity changes
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Simplified grid lines - static for better performance */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/20" />
    </div>
  );
};

export default AnimatedBackground; 