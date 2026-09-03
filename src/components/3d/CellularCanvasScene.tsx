import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { CellularSculpture } from './CellularSculpture';

interface CellularCanvasSceneProps {
  onLoaded?: () => void;
  isDark?: boolean;
}

export const CellularCanvasScene: React.FC<CellularCanvasSceneProps> = ({ onLoaded, isDark = false }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.8], fov: 45 }}
      dpr={[1, 2]}
      gl={{ 
        antialias: true, 
        alpha: true, 
        powerPreference: 'high-performance',
        preserveDrawingBuffer: false
      }}
      className="w-full h-full cursor-grab active:cursor-grabbing"
      onCreated={() => {
        if (onLoaded) {
          onLoaded();
        }
      }}
    >
      <Suspense fallback={null}>
        <CellularSculpture isDark={isDark} />
      </Suspense>
    </Canvas>
  );
};

export default CellularCanvasScene;
