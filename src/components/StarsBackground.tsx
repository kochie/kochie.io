"use client";

import { useEffect, useRef } from 'react';

type StarBackgroundProps = {
  numberOfStars?: number;
};

const StarsBackground = ({ numberOfStars = 100 }: StarBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Clear any existing stars
    container.innerHTML = '';
    
    // Create stars
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      
      // Randomly determine star size
      const sizeClass = Math.random() < 0.7 
        ? 'star-sm' 
        : Math.random() < 0.9 
          ? 'star-md' 
          : 'star-lg';
      
      star.className = `star ${sizeClass}`;
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 4}s`;
      
      container.appendChild(star);
    }
  }, [numberOfStars]);
  
  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default StarsBackground;
