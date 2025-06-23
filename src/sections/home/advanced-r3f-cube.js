import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Float, ContactShadows } from '@react-three/drei';
import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import * as THREE from 'three';

// Enhanced cube with custom wobble effect
function WobblyCube() {
  const meshRef = useRef();
  const geometryRef = useRef();
  const { mouse, viewport } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      // Follow mouse with smooth interpolation
      // const targetX = (mouse.x * viewport.width) / 3;
      // const targetY = (mouse.y * viewport.height) / 3;

      // meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.03);
      // meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.03);

      // Rotate based on mouse position
      // meshRef.current.rotation.y = THREE.MathUtils.lerp(
      //   meshRef.current.rotation.y,
      //   mouse.x * 0.5,
      //   0.05
      // );
      // meshRef.current.rotation.x = THREE.MathUtils.lerp(
      //   meshRef.current.rotation.x,
      //   mouse.y * 0.5,
      //   0.05
      // );

      // Custom wobble effect by scaling
      const wobble = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
      meshRef.current.scale.setScalar(wobble);
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry ref={geometryRef} args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#3b82f6"
        roughness={0.3}
        metalness={0.7}
        emissive="#1e40af"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

// Multiple cubes for more dynamic effect
function CubeGroup() {
  const groupRef = useRef();
  // const { mouse } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x += 0.003;
    }
  });

  const cubes = Array.from({ length: 3 }, (_, i) => (
    <mesh
      key={i}
      position={[Math.cos((i / 3) * Math.PI * 2) * 3, 0, Math.sin((i / 3) * Math.PI * 2) * 3]}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial
        color={['#3b82f6', '#8b5cf6', '#10b981'][i]}
        roughness={0.4}
        metalness={0.6}
      />
    </mesh>
  ));

  return <group ref={groupRef}>{cubes}</group>;
}

// Main cube component
function MainCube() {
  const meshRef = useRef();
  const { mouse, viewport } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      // Continuous rotation
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.012;

      // Follow mouse
      // const targetX = (mouse.x * viewport.width) / 4;
      // const targetY = (mouse.y * viewport.height) / 4;

      // meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.04);
      // meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.04);

      // Floating animation
      meshRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;

      // Color shifting based on time
      const hue = (state.clock.elapsedTime * 0.1) % 1;
      meshRef.current.material.color.setHSL(hue, 0.7, 0.6);
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial roughness={0.2} metalness={0.8} envMapIntensity={1} />
    </mesh>
  );
}

// Advanced R3F Cube Component
const AdvancedR3FCube = ({ variant = 'main' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const renderCube = () => {
    switch (variant) {
      case 'wobble':
        return <WobblyCube />;
      case 'group':
        return <CubeGroup />;
      default:
        return <MainCube />;
    }
  };

  return (
    <>
      {/* <Box
        component={m.div}
        initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 0.8,
          rotateY: isLoaded ? 0 : -180,
        }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        sx={{
          width: '100%',
          height: { xs: '300px', md: '450px' },
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 3,
          cursor: 'pointer',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
            transition: 'box-shadow 0.3s ease',
          },
        }}
      ></Box> */}

      <Box
        sx={{
          width: '100%',
          height: { xs: '300px', md: '500px' }, // Larger responsive size
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 3,
          border: '1px solid #eee', // Optional: visual boundary
        }}
      >
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{
            position: [0, 0, 8],
            fov: 60,
          }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.2,
          }}
          onCreated={() => setIsLoaded(true)}
        >
          {/* Environment lighting */}
          <Environment preset="city" />

          {/* Custom lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={0.3} />

          {/* Render the selected cube variant */}
          {/* {renderCube()} */}
          <MainCube />
          {/* Ground shadow */}
          <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={10} blur={2} far={4} />

          {/* Optional: Orbit controls for interaction */}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
            autoRotate={false}
          />
        </Canvas>

        {/* Loading indicator */}
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
            }}
          >
            Loading 3D Scene...
          </Box>
        )}
      </Box>
    </>
  );
};

export default AdvancedR3FCube;
