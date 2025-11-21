import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, TrackballControls } from '@react-three/drei';
import * as THREE from 'three';

function Word({ children, ...props }) {
    const color = new THREE.Color();
    const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false };
    const ref = useRef();
    const [hovered, setHovered] = useState(false);

    const over = (e) => {
        e.stopPropagation();
        setHovered(true);
    };

    const out = () => setHovered(false);

    useEffect(() => {
        if (hovered) document.body.style.cursor = 'pointer';
        return () => (document.body.style.cursor = 'auto');
    }, [hovered]);

    useFrame(({ camera }) => {
        // Make text face the camera
        ref.current.quaternion.copy(camera.quaternion);
        // Animate color on hover
        ref.current.material.color.lerp(color.set(hovered ? '#ffffff' : '#aaaaaa'), 0.1);
    });

    return (
        <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...props} {...fontProps} children={children} />
    );
}

function Cloud({ count = 4, radius = 20, words }) {
    // Create a spherical distribution of words
    const wordsWithPosition = useMemo(() => {
        const temp = [];
        const spherical = new THREE.Spherical();
        const phiSpan = Math.PI / (words.length + 1);
        const thetaSpan = (Math.PI * 2) / words.length;

        for (let i = 0; i < words.length; i++) {
            // Distribute points on a sphere using Fibonacci sphere algorithm for even distribution
            const phi = Math.acos(-1 + (2 * i) / words.length);
            const theta = Math.sqrt(words.length * Math.PI) * phi;

            const pos = new THREE.Vector3().setFromSpherical(spherical.set(radius, phi, theta));
            temp.push([pos, words[i]]);
        }
        return temp;
    }, [words, radius]);

    return wordsWithPosition.map(([pos, word], index) => <Word key={index} position={pos} children={word} />);
}

export default function TechSphere({ skills }) {
    // Flatten skills array
    const allSkills = useMemo(() => {
        return skills.flatMap(group => group.items);
    }, [skills]);

    return (
        <div className="w-full h-[500px] cursor-grab active:cursor-grabbing">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
                <fog attach="fog" args={['#000000', 0, 80]} />
                <Cloud words={allSkills} radius={20} />
                <TrackballControls noZoom />
            </Canvas>
        </div>
    );
}
