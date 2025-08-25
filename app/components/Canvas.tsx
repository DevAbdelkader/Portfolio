"use client"

import { Canvas, useLoader } from "@react-three/fiber"
import { TextureLoader, MathUtils, Mesh, BufferAttribute } from "three"
import { Sparkles, MeshDistortMaterial, OrbitControls, MeshDiscardMaterial, Float } from "@react-three/drei"
import { useEffect, useRef, useMemo, useState, memo } from "react"

const IconPlane = memo(({ radius, icon }: { radius: number, icon: any }) => {
  const ref = useRef<Mesh>(null!);
  const theta = Math.PI / MathUtils.randFloat(0.1, Math.PI);
  const phi = Math.PI / MathUtils.randFloat(0.1, Math.PI);

  const x = (radius) * Math.sin(theta) * Math.cos(phi);
  const y = (radius) * Math.sin(theta) * Math.sin(phi);
  const z = (radius) * Math.cos(theta);

  useEffect(() => {
    if (ref.current) {
      ref.current?.scale.set(-1,1,-1);
      ref.current?.lookAt(0,-0.5,0);
    }
  }, [ref.current])

  return (
    <mesh position={[x,y,z]} ref={ref}>
        <planeGeometry args={[0.3, 0.3]} />
        <meshBasicMaterial map={icon} transparent opacity={0.5} />
    </mesh>
  )
})

const SpecialSphere = memo(({ radius = 2 }: { radius?: number }) => {
  const ref = useRef<Mesh & { attributes: any }>(null!);
  const [wireframePositions, setWireframePositions] = useState<BufferAttribute>();

  const icons = useMemo(() => [ 
    "js.png",
    "php.png",
    "mysql.png",
    "laravel-2.png",
    "nextjs.png",
    "react-original.png",
    "bash.png",
    "composer.png",
    "git.png",
    "security.png",
    "tailwind.png",
    "threejs.png",
    "linux.png",
    "c-plain-2.png",
    "css.png",
    "html.png",
    "typescript.png"
  ].map(icon => useLoader(TextureLoader, "/images/icons/png/" + icon)), [])



  useEffect(() => {
    if(ref.current) {
      const posAttr: BufferAttribute = ref.current.attributes.position;
      setWireframePositions(posAttr);
    }
  }, [ref.current])



  return (
    <>
      <mesh position={[0,0,0]}>
        <sphereGeometry args={[radius+0.35, 64, 64]} ref={ref} />
        <MeshDiscardMaterial />
      </mesh>
      <mesh position={[0,0,0]}>
        <sphereGeometry args={[radius, 64, 64]} />
        <MeshDistortMaterial distort={.35} speed={0.8} color={"#7777dd"} opacity={0.8} transparent />
      </mesh>
      <points>
        {wireframePositions instanceof BufferAttribute && <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={wireframePositions.count}
            args={[wireframePositions.array, wireframePositions.itemSize]}
          />
        </bufferGeometry>}
        <pointsMaterial
          size={0.025}
          color="white"
          transparent
          opacity={0.2}
          sizeAttenuation
        />

      </points>
      <group>
      {
        icons && icons?.map((icon, i) => (
          <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.4} floatingRange={[0.01,0.1]} key={`icon-${i}`}>
            <IconPlane icon={icon} radius={radius+0.4}  />
          </Float>
        ))
      }
      </group>
    </>
  )
})

const Scene = () => {
  return (
    <group>
      <SpecialSphere />
    </group>
  )
}

const MyCanvas = () => {

  return (
    <Canvas>
      <directionalLight position={[0,2,1]} intensity={1} />
      <ambientLight intensity={.5} />
      <OrbitControls autoRotateSpeed={2} autoRotate={true} enableDamping={false} enableZoom={false} />
      <Sparkles count={100} noise={4} size={2} scale={15} />
      <group scale={0.8} position={[0,-0.5,0]}>
        <Scene />
      </group>
    </Canvas>
  )
}

export default MyCanvas
