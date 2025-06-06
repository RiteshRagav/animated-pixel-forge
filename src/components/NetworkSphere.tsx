
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface NetworkSphereProps {
  position: [number, number, number];
  count?: number;
}

const NetworkSphere: React.FC<NetworkSphereProps> = ({ position, count = 2000 }) => {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Create spherical distribution
      const radius = Math.random() * 4 + 1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Random colors from portfolio palette
      const colorIndex = Math.floor(Math.random() * 4);
      switch (colorIndex) {
        case 0:
          colors[i * 3] = 0.231; // Blue
          colors[i * 3 + 1] = 0.510;
          colors[i * 3 + 2] = 0.965;
          break;
        case 1:
          colors[i * 3] = 0.545; // Purple
          colors[i * 3 + 1] = 0.361;
          colors[i * 3 + 2] = 0.965;
          break;
        case 2:
          colors[i * 3] = 0.024; // Cyan
          colors[i * 3 + 1] = 0.714;
          colors[i * 3 + 2] = 0.831;
          break;
        default:
          colors[i * 3] = 0.063; // Green
          colors[i * 3 + 1] = 0.725;
          colors[i * 3 + 2] = 0.506;
      }
    }
    
    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
      ref.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Points ref={ref} position={position} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        vertexColors
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

export default NetworkSphere;
