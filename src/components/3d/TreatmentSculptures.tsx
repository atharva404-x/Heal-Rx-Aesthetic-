import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, MeshDistortMaterial } from '@react-three/drei';

const PARTICLE_COUNT = 35;
const generateParticlePositions = () => {
  const pos = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const pseudoRandom = Math.abs((Math.sin(i * 12.9898 + 78.233) * 43758.5453) % 1);
    const radius = 1.8 + pseudoRandom * 1.5;
    const theta = (i / PARTICLE_COUNT) * Math.PI * 2;
    const phi = Math.acos(((i * 2) / PARTICLE_COUNT) - 1);
    pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = radius * Math.cos(phi);
  }
  return pos;
};
const STATIC_PARTICLE_POSITIONS = generateParticlePositions();

interface TreatmentSculptureProps {
  treatmentSlug: string;
  isDark?: boolean;
  accentColor?: string;
}

export const TreatmentSculpture: React.FC<TreatmentSculptureProps> = ({
  treatmentSlug,
  isDark = true,
  accentColor = '#c5a059',
}) => {
  const mainGroupRef = useRef<THREE.Group>(null);
  const coreMeshRef = useRef<THREE.Mesh>(null);
  const secondaryMeshRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const scrollDampedRef = useRef(0);
  const { mouse } = useThree();

  // Color values
  const primaryColor = useMemo(() => new THREE.Color(accentColor), [accentColor]);
  const coreColor = useMemo(() => {
    return isDark ? new THREE.Color(0x121417) : new THREE.Color(0xf6f5f2);
  }, [isDark]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Scroll depth recession: 3D sculpture recedes on vertical scroll
    if (typeof window !== 'undefined') {
      const targetScroll = Math.min(Math.max(window.scrollY, 0), 1200);
      scrollDampedRef.current += (targetScroll - scrollDampedRef.current) * 0.05;
    }
    const scrollProgress = scrollDampedRef.current / 1200;

    if (mainGroupRef.current) {
      mainGroupRef.current.position.y = -scrollProgress * 0.5;
      mainGroupRef.current.position.z = -scrollProgress * 1.2;
      mainGroupRef.current.rotation.x = scrollProgress * 0.2;
    }

    // Gentle idle rotation & subtle pointer parallax
    if (coreMeshRef.current) {
      coreMeshRef.current.rotation.y = time * 0.15;
      coreMeshRef.current.rotation.x = Math.sin(time * 0.1) * 0.15;
      coreMeshRef.current.rotation.x += (mouse.y * 0.2 - coreMeshRef.current.rotation.x) * 0.04;
      coreMeshRef.current.rotation.y += (mouse.x * 0.2 - coreMeshRef.current.rotation.y) * 0.04;
    }

    if (secondaryMeshRef.current) {
      secondaryMeshRef.current.rotation.y = -time * 0.22;
      secondaryMeshRef.current.rotation.z = Math.cos(time * 0.15) * 0.2;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05;
    }
  });

  // Render art-directed 3D forms tailored to treatment taxonomy
  switch (treatmentSlug) {
    // 1. Carbon Laser Peel: Translucent dark obsidian sphere with glowing amber particles
    case 'carbon-laser-peel':
      return (
        <group ref={mainGroupRef}>
          <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
            {/* Core Dark Obsidian Sphere with subtle displacement */}
            <mesh ref={coreMeshRef}>
              <sphereGeometry args={[1.3, 64, 64]} />
              <MeshDistortMaterial
                color={coreColor}
                emissive={primaryColor}
                emissiveIntensity={isDark ? 0.25 : 0.1}
                roughness={0.15}
                metalness={0.8}
                distort={0.25}
                speed={1.5}
                clearcoat={1}
                clearcoatRoughness={0.1}
              />
            </mesh>

            {/* Orbiting Amber Carbon Ring */}
            <mesh ref={secondaryMeshRef} scale={[1.7, 1.7, 1.7]}>
              <torusGeometry args={[1.2, 0.03, 16, 100]} />
              <meshStandardMaterial
                color={primaryColor}
                emissive={primaryColor}
                emissiveIntensity={0.6}
                roughness={0.2}
                metalness={0.9}
              />
            </mesh>
          </Float>

          {/* Glowing Ambient Particles */}
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
              color={primaryColor}
              transparent
              opacity={0.8}
              blending={THREE.AdditiveBlending}
            />
          </points>
        </group>
      );

    // 2. Laser Hair Reduction: Multi-faceted precision crystalline prism with cool metallic highlights
    case 'laser-hair-reduction':
      return (
        <group ref={mainGroupRef}>
          <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.7}>
            <mesh ref={coreMeshRef}>
              <octahedronGeometry args={[1.4, 0]} />
              <meshPhysicalMaterial
                color={coreColor}
                emissive={primaryColor}
                emissiveIntensity={isDark ? 0.3 : 0.15}
                roughness={0.1}
                metalness={0.9}
                transmission={0.4}
                thickness={0.8}
                clearcoat={1}
              />
            </mesh>

            {/* Orbiting Optical Light Ring */}
            <mesh ref={secondaryMeshRef} rotation={[Math.PI / 3, 0, 0]}>
              <torusGeometry args={[1.8, 0.02, 16, 80]} />
              <meshStandardMaterial
                color={primaryColor}
                emissive={primaryColor}
                emissiveIntensity={0.8}
                roughness={0.1}
              />
            </mesh>
          </Float>
        </group>
      );

    // 3. Hydra Medi-Facial: Fluid, organic aquatic wave droplet with teal refraction
    case 'hydra-medi-facial':
      return (
        <group ref={mainGroupRef}>
          <Float speed={2.0} rotationIntensity={0.3} floatIntensity={0.9}>
            <mesh ref={coreMeshRef}>
              <sphereGeometry args={[1.35, 64, 64]} />
              <MeshDistortMaterial
                color={primaryColor}
                emissive={primaryColor}
                emissiveIntensity={0.2}
                roughness={0.08}
                metalness={0.1}
                distort={0.4}
                speed={2.2}
                clearcoat={1}
                clearcoatRoughness={0.05}
              />
            </mesh>

            {/* Floating Concentric Vortex Rings */}
            <mesh ref={secondaryMeshRef} rotation={[Math.PI / 4, Math.PI / 6, 0]}>
              <torusGeometry args={[1.9, 0.025, 16, 100]} />
              <meshStandardMaterial
                color={primaryColor}
                transparent
                opacity={0.6}
                roughness={0.2}
              />
            </mesh>
          </Float>
        </group>
      );

    // 4. Hair PRP / GFC Therapy: Bio-cellular helix with emerald & gold particles
    case 'hair-prp-gfc-therapy':
      return (
        <group ref={mainGroupRef}>
          <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.5}>
            <mesh ref={coreMeshRef}>
              <torusKnotGeometry args={[0.9, 0.28, 100, 16]} />
              <meshStandardMaterial
                color={primaryColor}
                emissive={primaryColor}
                emissiveIntensity={isDark ? 0.35 : 0.15}
                roughness={0.25}
                metalness={0.7}
              />
            </mesh>
          </Float>

          {/* Cellular Micro-Particles */}
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
              color={primaryColor}
              transparent
              opacity={0.85}
              blending={THREE.AdditiveBlending}
            />
          </points>
        </group>
      );

    // 5. Default / Other Treatments (Acne Scar, Pigmentation, Anti-Aging, Body, Tattoo):
    // Refined multi-layered geometric polyhedron with subtle organic pulsing
    default:
      return (
        <group ref={mainGroupRef}>
          <Float speed={1.7} rotationIntensity={0.35} floatIntensity={0.6}>
            <mesh ref={coreMeshRef}>
              <icosahedronGeometry args={[1.3, 1]} />
              <MeshDistortMaterial
                color={coreColor}
                emissive={primaryColor}
                emissiveIntensity={isDark ? 0.3 : 0.12}
                roughness={0.2}
                metalness={0.8}
                distort={0.2}
                speed={1.8}
                clearcoat={1}
              />
            </mesh>

            {/* Outer Protective Vector Ring */}
            <mesh ref={secondaryMeshRef} rotation={[Math.PI / 5, Math.PI / 4, 0]}>
              <torusGeometry args={[1.75, 0.02, 16, 80]} />
              <meshStandardMaterial
                color={primaryColor}
                emissive={primaryColor}
                emissiveIntensity={0.5}
                roughness={0.2}
              />
            </mesh>
          </Float>

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
              size={0.03}
              color={primaryColor}
              transparent
              opacity={0.7}
              blending={THREE.AdditiveBlending}
            />
          </points>
        </group>
      );
  }
};

export default TreatmentSculpture;
