import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { Float, Stars } from "@react-three/drei";
import type { Mesh } from "three";

function Scene() {
  const meshRef = useRef < Mesh > null;

  const springs = useSpring({
    from: { scale: [0, 0, 0] },
    to: { scale: [1, 1, 1] },
    config: { mass: 2, tension: 150, friction: 15 },
  });

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
  });

  return (
    <>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <animated.mesh ref={meshRef} scale={springs.scale}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial
            color="#88c0d0"
            wireframe
            transparent
            opacity={0.8}
          />
        </animated.mesh>
      </Float>
    </>
  );
}

export default Scene;
