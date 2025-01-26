import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { useRef } from "react";

function PlaneSurface() {
  
  const planeRef = useRef()

  useEffect(() => {
    
    if(planeRef.current) {
      planeRef.current.rotation.x = -Math.PI / 2
      planeRef.current.position.y = -1
    }

  }, [planeRef.current])

  return (
    <mesh ref={planeRef}>
      <planeGeometry args={[5,5]} />
      <meshStandardMaterial />
    </mesh>
  )
}

function BoxCube() {
  return (
    <mesh>
        <boxGeometry />
        <meshStandardMaterial />
    </mesh>
  )
}

export default function Experience() {
  
  return (
    <div className="w-full h-full">
        <Canvas>
          <PlaneSurface />
          <BoxCube />
          <Environment preset="city" />
          <OrbitControls />
        </Canvas>
    </div>
  )
}
