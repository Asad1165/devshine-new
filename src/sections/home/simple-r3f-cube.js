import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import * as THREE from 'three';

// Simple animated cube component
function AnimatedCube() {
  const meshRef = useRef();
  const { mouse, viewport } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      // Continuous rotation
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;

      // Follow mouse cursor with smooth interpolation
      const targetX = (mouse.x * viewport.width) / 4;
      const targetY = (mouse.y * viewport.height) / 4;

      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);

      // Floating effect
      meshRef.current.position.z = Math.sin(state.clock.elapsedTime) * 0.3;

      // Subtle scale pulsing
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      {/* Array of materials for different faces */}
      {[
        <meshStandardMaterial
          key="0"
          attach="material-0"
          color="#3b82f6"
          roughness={0.3}
          metalness={0.7}
        />,
        <meshStandardMaterial
          key="1"
          attach="material-1"
          color="#8b5cf6"
          roughness={0.3}
          metalness={0.7}
        />,
        <meshStandardMaterial
          key="2"
          attach="material-2"
          color="#06b6d4"
          roughness={0.3}
          metalness={0.7}
        />,
        <meshStandardMaterial
          key="3"
          attach="material-3"
          color="#10b981"
          roughness={0.3}
          metalness={0.7}
        />,
        <meshStandardMaterial
          key="4"
          attach="material-4"
          color="#f59e0b"
          roughness={0.3}
          metalness={0.7}
        />,
        <meshStandardMaterial
          key="5"
          attach="material-5"
          color="#ef4444"
          roughness={0.3}
          metalness={0.7}
        />,
      ]}
    </mesh>
  );
}

// Lighting setup
function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-5, 3, 3]} intensity={0.4} color="#3b82f6" />
    </>
  );
}

// Main R3F Cube Component
const SimpleR3FCube = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Box
      component={m.div}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      sx={{
        width: '100%',
        height: { xs: '300px', md: '400px' },
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 2,
        cursor: 'pointer',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        '&:hover': {
          boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
          transition: 'box-shadow 0.3s ease',
          '& canvas': {
            filter: 'brightness(1.05)',
            transition: 'filter 0.3s ease',
          },
        },
      }}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          position: [0, 0, 6],
          fov: 75,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        onCreated={() => setIsLoaded(true)}
        style={{
          background: 'transparent',
        }}
      >
        <Lights />
        <AnimatedCube />

        {/* Transparent background */}
        <color attach="background" args={['transparent']} />
      </Canvas>

      {/* Loading state */}
      {!isLoaded && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#3b82f6',
            fontSize: '14px',
            fontWeight: 500,
            opacity: 0.7,
          }}
        >
          Loading...
        </Box>
      )}
    </Box>
  );
};

export default SimpleR3FCube;
