import { useRef, useState } from 'react';

export default function TiltCard({ children, className = '', intensity = 12 }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState('');
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = e => {
    const card = ref.current;
    if (!card) { return; }
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -intensity;
    const rotateY = ((x - cx) / cx) * intensity;
    setTransform(`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04,1.04,1.04)`);
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 0.18 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
    setGlare(g => ({ ...g, opacity: 0 }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: transform.includes('scale3d(1,') ? 'transform 0.5s ease' : 'transform 0.1s ease',
        boxShadow: glare.opacity > 0
          ? '0 24px 48px rgba(0,87,184,0.25), 0 8px 16px rgba(0,200,255,0.15)'
          : '',
        willChange: 'transform',
      }}
      className={`relative ${className}`}>
      {/* Glare */}
      <div
        className="absolute inset-0 z-10 pointer-events-none rounded-[inherit] transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 65%)`,
        }}
      />
      {children}
    </div>
  );
}
