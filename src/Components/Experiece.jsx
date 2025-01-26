import { ContactShadows, Environment, Lightformer, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";

function CertificateModel() {
  const { scene } = useGLTF('/certficitat.glb')

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
      child.material.transparent = false
      child.material.opacity = 1
      child.rotation.y = Math.PI 
      child.position.y = -1
    }
  })

  return (
    <primitive 
      object={scene} 
      castShadow 
      receiveShadow 
    />
  )
}


export default function Experience() {
  
  return (
    <div className="w-full h-full bg-black">
        <Canvas shadows camera={{ position: [0, 1.5, 3] }}>
        <ambientLight intensity={0.2} />
          
          <directionalLight 
          castShadow
          position={[0, 2, 2]}
          intensity={1}
          color="white" 
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-near={0.1} // Added these
          shadow-camera-far={20}
          />

          {/* <mesh rotation={[- Math.PI / 2,0,0]} receiveShadow>
            <planeGeometry args={[5,5]} />
            <meshStandardMaterial color="lime" />
          </mesh> */}

          {/* <mesh position={[0,0.5,0]} castShadow>
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial color="orange" />
          </mesh> */}

          <CertificateModel />

          <Environment preset="sunset" />
          <ContactShadows position={[0, -0.485, 0]} scale={5} blur={1.5} far={1} />
          <OrbitControls />
        </Canvas>
    </div>
  )
}
