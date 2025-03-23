"use client";

import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  style: {
    top: string;
    left: string;
    animationDelay: string;
  };
}

export const SparkleEffect = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const createSparkle = () => {
      const sparkle = {
        id: Math.random(),
        style: {
          top: Math.random() * 100 + '%',
          left: Math.random() * 100 + '%',
          animationDelay: Math.random() * 2 + 's',
        },
      };
      setSparkles(current => [...current, sparkle]);
      setTimeout(() => {
        setSparkles(current => current.filter(s => s.id !== sparkle.id));
      }, 1500);
    };

    const interval = setInterval(createSparkle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={sparkle.style}
        />
      ))}
    </div>
  );
};