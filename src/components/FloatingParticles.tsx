import React from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile'; // Import the useIsMobile hook

const FloatingParticles: React.FC = () => {
  const isMobile = useIsMobile(); // Use the hook to detect mobile
  const numberOfParticles = isMobile ? 5 : 10; // Fewer particles on mobile

  const particles = Array.from({ length: numberOfParticles }).map((_, i) => (
    <div
      key={i}
      className={cn(
        "absolute rounded-full bg-primary/10 animate-float-fade opacity-0",
        `delay-${i * 200}` // Stagger animation
      )}
      style={{
        width: `${Math.random() * 10 + 5}px`, // Size between 5px and 15px
        height: `${Math.random() * 10 + 5}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 10}s`, // Duration between 10s and 20s
        animationDelay: `${Math.random() * 5}s`, // Initial delay
      }}
    />
  ));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles}
    </div>
  );
};

export default FloatingParticles;