import React, { useState, useEffect, useCallback } from 'react';

interface Sparkle {
  id: string;
  x: number;
  y: number;
  color: string;
}

const colors = [
  '#f43f5e', '#f97316', '#eab308', '#84cc16', '#22c55e',
  '#14b8a6', '#06b6d4', '#3b82f6', '#8b5cf6', '#d946ef',
];

const ClickSparkles = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const createSparkles = useCallback((e: MouseEvent) => {
    const newSparkles: Sparkle[] = Array.from({ length: 7 }).map((_, i) => ({
      id: `sparkle-${Date.now()}-${i}`,
      x: e.clientX,
      y: e.clientY,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setSparkles(s => [...s, ...newSparkles]);

    newSparkles.forEach(sparkle => {
      setTimeout(() => {
        setSparkles(currentSparkles => currentSparkles.filter(s => s.id !== sparkle.id));
      }, 600);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('click', createSparkles);
    return () => {
      window.removeEventListener('click', createSparkles);
    };
  }, [createSparkles]);

  return (
    <>
      {sparkles.map(({ id, x, y, color }) => (
        <div
          key={id}
          className="absolute rounded-full animate-sparkle pointer-events-none z-50"
          style={{
            left: x,
            top: y,
            width: '8px',
            height: '8px',
            backgroundColor: color,
            transform: 'translate(-50%, -50%)',
            '--dx': `${(Math.random() - 0.5) * 100}px`,
            '--dy': `${(Math.random() - 0.5) * 100}px`,
          }}
        />
      ))}
    </>
  );
};

export default ClickSparkles;