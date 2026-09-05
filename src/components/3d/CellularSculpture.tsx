import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

// Deterministic particle positions outside render for pure memory usage
const PARTICLE_COUNT = 45;
const generateParticlePositions = () => {
  const pos = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const pseudoRandom = Math.abs((Math.sin(i * 12.9898 + 78.233) * 43758.5453) % 1);
    const radius = 2.2 + pseudoRandom * 1.8;
    const theta = (i / PARTICLE_COUNT) * Math.PI * 2;
    const phi = Math.acos(((i * 2) / PARTICLE_COUNT) - 1);
    pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = radius * Math.cos(phi);
  }
  return pos;
};
const STATIC_PARTICLE_POSITIONS = generateParticlePositions();

interface CellularSculptureProps {
  isDark?: boolean;
}

export const CellularSculpture: React.FC<CellularSculptureProps> = ({ isDark = false }) => {
  const outerMeshRef = useRef<THREE.Mesh>(null);
  const innerMeshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const groupRef = useRef<THREE.Group>(null);
  const scrollDampedRef = useRef(0);
  const { mouse } = useThree();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Damped, clamped scroll parallax for the 3D group
    if (typeof window !== 'undefined') {
      const targetScroll = Math.min(Math.max(window.scrollY, 0), 1000);
      scrollDampedRef.current += (targetScroll - scrollDampedRef.current) * 0.05;
    }
    const scrollProgress = scrollDampedRef.current / 1000; // 0 to 1

    if (groupRef.current) {
      // Subtle vertical translation and recession into depth
      groupRef.current.position.y = -scrollProgress * 0.4;
      groupRef.current.position.z = -scrollProgress * 0.75;
      groupRef.current.rotation.x = scrollProgress * 0.16;
    }

    // Restrained, slow idle rotation
    if (outerMeshRef.current) {
      outerMeshRef.current.rotation.y = time * 0.12;
      outerMeshRef.current.rotation.x = Math.sin(time * 0.08) * 0.15;
      
      // Extremely subtle, restrained pointer parallax response (no aggressive cursor chasing)
      outerMeshRef.current.rotation.x += (mouse.y * 0.18 - outerMeshRef.current.rotation.x) * 0.03;
      outerMeshRef.current.rotation.y += (mouse.x * 0.18 - outerMeshRef.current.rotation.y) * 0.03;
    }

    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.y = -time * 0.2;
      innerMeshRef.current.rotation.z = Math.cos(time * 0.12) * 0.2;
      innerMeshRef.current.scale.setScalar(0.72 + Math.sin(time * 1.0) * 0.025);
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.06;
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.18) * 0.08;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.04;
      particlesRef.current.rotation.x = time * 0.02;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Studio Lighting - dynamically calibrated per theme */}
      <ambientLight intensity={isDark ? 0.6 : 1.2} color={isDark ? '#1A1816' : '#FAF8F5'} />
      <directionalLight
        position={[4, 5, 4]}
        intensity={isDark ? 2.2 : 2.5}
        color={isDark ? '#FAF6EE' : '#FAF8F5'}
      />
      <directionalLight
        position={[-4, -3, -2]}
        intensity={isDark ? 1.6 : 1.2}
        color={isDark ? '#C5A880' : '#D4BC98'}
      />
      <pointLight
        position={[0, 0, 3]}
        intensity={isDark ? 1.2 : 1.5}
        color={isDark ? '#C5A880' : '#9E7E5A'}
        distance={8}
      />

      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.5}>
        {/* Outer Translucent Sculptural Organic Membrane */}
        <Sphere ref={outerMeshRef} args={[1.4, 64, 64]}>
          <MeshDistortMaterial
            color={isDark ? '#26221E' : '#EFE9E0'}
            roughness={isDark ? 0.18 : 0.15}
            metalness={isDark ? 0.18 : 0.1}
            distort={0.32}
            speed={1.4}
            transmission={isDark ? 0.58 : 0.68}
            thickness={1.3}
            ior={1.35}
            transparent={true}
            opacity={isDark ? 0.82 : 0.88}
          />
        </Sphere>

        {/* Inner Cellular Nucleus (Warm Champagne Gold) */}
        <Sphere ref={innerMeshRef} args={[0.75, 48, 48]}>
          <MeshDistortMaterial
            color={isDark ? '#C5A880' : '#A88B68'}
            roughness={0.25}
            metalness={isDark ? 0.45 : 0.38}
            distort={0.38}
            speed={1.8}
            clearcoat={0.9}
            clearcoatRoughness={0.1}
          />
        </Sphere>

        {/* Delicate Orbiting Astrolabe / Orbital Contour Ring */}
        <group ref={ringRef}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.9, 0.012, 16, 100]} />
            <meshStandardMaterial
              color={isDark ? '#C5A880' : '#9E7E5A'}
              metalness={0.85}
              roughness={0.2}
              transparent={true}
              opacity={isDark ? 0.75 : 0.6}
            />
          </mesh>
        </group>

        {/* Micro Cellular Particles */}
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={PARTICLE_COUNT}
              array={STATIC_PARTICLE_POSITIONS}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.035}
            color={isDark ? '#DDC8A8' : '#C5A880'}
            transparent={true}
            opacity={isDark ? 0.7 : 0.6}
            sizeAttenuation={true}
          />
        </points>
      </Float>
    </group>
  );
};

export default CellularSculpture;
