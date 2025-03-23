"use client";

import { useSpring, animated } from 'react-spring';
import { useEffect, useState } from 'react';

interface AnimatedCharacterProps {
  imageUrl: string;
  position: 'left' | 'right';
  offset?: number;
}

export const AnimatedCharacter = ({ imageUrl, position, offset = 0 }: AnimatedCharacterProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const props = useSpring({
    from: { 
      opacity: 0,
      transform: `translate${position === 'left' ? 'X(-100px)' : 'X(100px)'}`,
    },
    to: { 
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateX(0)' : `translate${position === 'left' ? 'X(-100px)' : 'X(100px)'}`,
    },
    config: { tension: 100, friction: 10 },
    delay: offset,
  });

  return (
    <animated.div
      style={{
        ...props,
        position: 'absolute',
        [position]: '20px',
        bottom: '20px',
        width: '200px',
        height: '200px',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        zIndex: 10,
      }}
    />
  );
};