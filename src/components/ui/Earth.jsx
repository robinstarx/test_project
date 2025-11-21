import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

function AnimatedGlobe() {
    const sphereRef = useRef();

    useFrame((state) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.y += 0.002;
            sphereRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
        }
    });

    return (
        <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2.4}>
            <MeshDistortMaterial
                color="#3b82f6"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0.2}
                metalness={0.8}
                wireframe
            />
        </Sphere>
    );
}

function BackgroundStars() {
    const starsRef = useRef();

    useFrame((state) => {
        if (starsRef.current) {
            starsRef.current.rotation.y -= 0.0005;
        }
    });

    return (
        <points ref={starsRef}>
            <sphereGeometry args={[10, 64, 64]} />
            <pointsMaterial color="#ffffff" size={0.02} transparent opacity={0.5} sizeAttenuation />
        </points>
    )
}

export default function Earth() {
    return (
        <div className="w-full h-[400px] lg:h-[600px]">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 5, 2]} intensity={1} />
                <AnimatedGlobe />
                <BackgroundStars />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
