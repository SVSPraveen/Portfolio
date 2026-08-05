"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Line, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import * as THREE from "three";

// Moving Data Packet Component
function DataPacket({ start, end, color, speed = 0.5, offset = 0 }: { start: THREE.Vector3, end: THREE.Vector3, color: string, speed?: number, offset?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const t = (state.clock.elapsedTime * speed + offset) % 1;
      meshRef.current.position.lerpVectors(start, end, t);
      // Optional scale pulse
      const scale = Math.sin(t * Math.PI) * 1.5;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

// Scene containing the RAG Pipeline elements
function RAGScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Define positions for architecture nodes
  const docPos = useMemo(() => new THREE.Vector3(-2.5, 2, 0), []);
  const dbPos = useMemo(() => new THREE.Vector3(-2, -1.5, 1), []);
  const llmPos = useMemo(() => new THREE.Vector3(2, 1, 0), []);
  const outputPos = useMemo(() => new THREE.Vector3(2.5, -2, 1), []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Connecting Lines */}
        <Line points={[docPos, dbPos]} color="#ffffff" lineWidth={1} transparent opacity={0.3} />
        <Line points={[dbPos, llmPos]} color="#7b2fff" lineWidth={1} transparent opacity={0.3} />
        <Line points={[llmPos, outputPos]} color="#00d4ff" lineWidth={1} transparent opacity={0.3} />
        
        {/* Document Node */}
        <mesh position={docPos}>
          <boxGeometry args={[0.8, 1, 0.1]} />
          <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.6} />
          <Html position={[0, -0.8, 0]} center className="pointer-events-none">
            <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/20 text-white text-xs font-mono whitespace-nowrap backdrop-blur-md">Raw PDFs</div>
          </Html>
        </mesh>

        {/* Vector DB Node */}
        <mesh position={dbPos}>
          <cylinderGeometry args={[0.6, 0.6, 1.2, 16]} />
          <meshStandardMaterial color="#7b2fff" wireframe emissive="#7b2fff" emissiveIntensity={0.2} />
          <Html position={[0, -1.1, 0]} center className="pointer-events-none">
            <div className="px-3 py-1.5 rounded-lg bg-[#7b2fff]/10 border border-[#7b2fff]/30 text-[#a78bfa] text-xs font-mono whitespace-nowrap backdrop-blur-md">Vector Database</div>
          </Html>
        </mesh>

        {/* LLM Node */}
        <mesh position={llmPos}>
          <icosahedronGeometry args={[0.9, 1]} />
          <meshStandardMaterial color="#00d4ff" wireframe emissive="#00d4ff" emissiveIntensity={0.4} />
          <Html position={[0, -1.4, 0]} center className="pointer-events-none">
            <div className="px-3 py-1.5 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#67e8f9] text-xs font-mono whitespace-nowrap backdrop-blur-md">LLM (LLaMA-3)</div>
          </Html>
        </mesh>

        {/* Output Node */}
        <mesh position={outputPos}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial color="#4ade80" wireframe emissive="#4ade80" emissiveIntensity={0.5} />
          <Html position={[0, -0.8, 0]} center className="pointer-events-none">
            <div className="px-3 py-1.5 rounded-lg bg-[#4ade80]/10 border border-[#4ade80]/30 text-[#86efac] text-xs font-mono whitespace-nowrap backdrop-blur-md">Generated Insight</div>
          </Html>
        </mesh>

        {/* Flowing Data Particles */}
        <DataPacket start={docPos} end={dbPos} color="#ffffff" offset={0} />
        <DataPacket start={docPos} end={dbPos} color="#ffffff" offset={0.5} />
        
        <DataPacket start={dbPos} end={llmPos} color="#7b2fff" offset={0.2} speed={0.4} />
        <DataPacket start={dbPos} end={llmPos} color="#7b2fff" offset={0.7} speed={0.4} />
        
        <DataPacket start={llmPos} end={outputPos} color="#00d4ff" offset={0.1} speed={0.6} />
        <DataPacket start={llmPos} end={outputPos} color="#00d4ff" offset={0.6} speed={0.6} />
      </Float>
    </group>
  );
}

// Custom RAG Pipeline Animation Container
function HeroRAGPipeline() {
  return (
    <div className="w-full h-[400px] lg:h-[650px] relative pointer-events-auto cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 8.5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#00d4ff" />
        <RAGScene />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
      </Canvas>
    </div>
  );
}

// Particle Network Background
function ParticleNetwork() {
  const count = 150;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          args={[positions, 3]}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00d4ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
          <ParticleNetwork />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content overlay */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen pt-20 pb-10">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left z-10"
        >
          {/* Profile Photo */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#7b2fff] rounded-full blur-md opacity-50 animate-pulse"></div>
            <img src="/profile.jpg" alt="Priyanshu Parihar" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#0a0f1e] relative z-10 shadow-[0_0_20px_rgba(0,212,255,0.4)]" />
          </motion.div>

          <h2 className="text-lg md:text-xl text-gray-400 mb-2 font-medium tracking-wider uppercase">Hello, I am</h2>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight leading-tight">
            <span className="text-white">Priyanshu<br className="hidden lg:block"/> </span>
            <span className="text-gradient">Parihar</span>
          </h1>
          
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold h-[40px] md:h-[50px] mb-8 text-gray-300">
            <Typewriter
              words={[
                "AI/ML Engineer", 
                "RAG Systems Builder", 
                "LLM Developer", 
                "AI Safety Engineer"
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7b2fff] text-white font-semibold text-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a 
              href="/Priyanshu_Parihar_Resume.pdf" 
              target="_blank"
              className="px-8 py-4 rounded-full glass font-semibold text-lg hover:bg-white/10 transition-all transform hover:-translate-y-1 text-white border border-white/20"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: 3D AI Architecture */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="w-full lg:w-[55%] flex items-center justify-center relative z-10 mb-10 lg:mb-0"
        >
          <HeroRAGPipeline />
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
