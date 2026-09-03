import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

// Deterministic particle positions outside render for React 19 purity
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

export const CellularSculpture: React.FC = () => {
  const outerMeshRef = useRef<THREE.Mesh>(null);
  const innerMeshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const { mouse } = useThree();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Idle organic rotation
    if (outerMeshRef.current) {
      outerMeshRef.current.rotation.y = time * 0.15;
      outerMeshRef.current.rotation.x = Math.sin(time * 0.1) * 0.2;
      
      // Smooth mouse parallax response
      outerMeshRef.current.rotation.x += (mouse.y * 0.4 - outerMeshRef.current.rotation.x) * 0.05;
      outerMeshRef.current.rotation.y += (mouse.x * 0.4 - outerMeshRef.current.rotation.y) * 0.05;
    }

    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.y = -time * 0.25;
      innerMeshRef.current.rotation.z = Math.cos(time * 0.15) * 0.25;
      innerMeshRef.current.scale.setScalar(0.72 + Math.sin(time * 1.2) * 0.03);
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.08;
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.2) * 0.1;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05;
      particlesRef.current.rotation.x = time * 0.03;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Soft Ambient & Directional Warm Studio Lighting */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 5, 4]} intensity={2.5} color="#FAF8F5" />
      <directionalLight position={[-4, -3, -2]} intensity={1.2} color="#D4BC98" />
      <pointLight position={[0, 0, 3]} intensity={1.5} color="#9E7E5A" distance={8} />

      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        {/* Outer Translucent Sculptural Organic Membrane */}
        <Sphere ref={outerMeshRef} args={[1.4, 64, 64]}>
          <MeshDistortMaterial
            color="#EFE9E0"
            roughness={0.15}
            metalness={0.1}
            distort={0.35}
            speed={1.5}
            transmission={0.65}
            thickness={1.2}
            ior={1.35}
            transparent={true}
            opacity={0.88}
          />
        </Sphere>

        {/* Inner Cellular Nucleus (Warm Champagne Gold) */}
        <Sphere ref={innerMeshRef} args={[0.75, 48, 48]}>
          <MeshDistortMaterial
            color="#A88B68"
            roughness={0.3}
            metalness={0.4}
            distort={0.4}
            speed={2}
            clearcoat={0.8}
            clearcoatRoughness={0.1}
          />
        </Sphere>

        {/* Delicate Orbiting Astrolabe / Orbital Contour Ring */}
        <group ref={ringRef}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.9, 0.012, 16, 100]} />
            <meshStandardMaterial
              color="#9E7E5A"
              metalness={0.8}
              roughness={0.2}
              transparent={true}
              opacity={0.6}
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
            size={0.04}
            color="#C5A880"
            transparent={true}
            opacity={0.65}
            sizeAttenuation={true}
          />
        </points>
      </Float>
    </group>
  );
};
