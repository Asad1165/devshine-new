import { useEffect, useRef, useState } from 'react';

import '../main/scss/InteractiveCard.scss';
const imageUrls = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop',
];

export default function FloatingImageBoxes() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [transforms, setTransforms] = useState(
    imageUrls.map(() => ({ x: 0, y: 0, scale: 1 }))
  );
  const mouse = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef();

useEffect(() => {
  const handleMouseMove = (e) => {
    mouse.current = { x: e.clientX, y: e.clientY };
    if (activeIndex !== null && containerRef.current) {
      const box = containerRef.current.children[activeIndex];
      const rect = box.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const diffX = mouse.current.x - centerX;
      const diffY = mouse.current.y - centerY;
      const animate = () => {
        setTransforms(prev => {
          const newTransforms = [...prev];
          const targetX = diffX * 3.0; // Dramatic horizontal movement
          const targetY = diffY * 3.0; // Dramatic vertical movement
          newTransforms[activeIndex] = {
            ...newTransforms[activeIndex],
            x: newTransforms[activeIndex].x + (targetX - newTransforms[activeIndex].x) * 0.25,
            y: newTransforms[activeIndex].y + (targetY - newTransforms[activeIndex].y) * 0.25,
          };
          return newTransforms;
        });
        animationFrameRef.current = requestAnimationFrame(animate);
      };
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    }
  };

  window.addEventListener('mousemove', handleMouseMove);
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };
}, [activeIndex]);


  const handleEnter = (index) => {
    setActiveIndex(index);
    document.body.style.cursor = 'none';
    
    setTransforms(prev => {
      const newTransforms = [...prev];
      newTransforms[index] = { ...newTransforms[index], scale: 1.1 };
      return newTransforms;
    });
  };

const handleLeave = (index) => {
  setActiveIndex(null);
  document.body.style.cursor = 'auto';

  if (animationFrameRef.current) {
    cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = null;
  }

  setTransforms(prev => {
    const newTransforms = [...prev];
    newTransforms[index] = { x: 0, y: 0, scale: 1 };
    return newTransforms;
  });
};


  return (
    <div ref={containerRef} className="floating-boxes">
      {imageUrls.map((src, i) => {
        // First and third images: 150px, second image: 300px
        const sizeClass = i === 1 ? 'large' : 'small';
        const transform = transforms[i];
        
        return (
          <div
            key={i}
            onMouseEnter={() => handleEnter(i)}
            onMouseLeave={() => handleLeave(i)}
            className={`floating-box ${sizeClass}`}
            style={{
              transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
              transition: activeIndex === i 
                ? 'box-shadow 0.2s ease' // Removed transform transition for instant response
                : 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s ease', // Faster return transition
            }}
          >
            <img
              src={src}
              alt={`floating-box-${i}`}
            />
            
            {/* Subtle hover glow effect */}
            <div className={`hover-glow ${activeIndex === i ? 'active' : ''}`} />
          </div>
        );
      })}
      
      {/* Custom cursor when hovering */}
      {activeIndex !== null && (
        <div
          className="custom-cursor"
          style={{
            left: mouse.current.x - 8,
            top: mouse.current.y - 8,
          }}
        />
      )}
    </div>
  );
}