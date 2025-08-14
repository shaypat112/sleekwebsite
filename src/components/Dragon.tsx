import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

function DragonModel(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF('/dragon.glb') // You'll need to provide this model
  
  // Auto-rotation
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.5 // Adjust speed here
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.dragon.geometry}
        material={materials.dragonMaterial}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

export function Dragon() {
  const [controlsEnabled, setControlsEnabled] = useState(false)

  return (
    <div className="relative h-96 w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        onPointerOver={() => setControlsEnabled(true)}
        onPointerOut={() => setControlsEnabled(false)}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <DragonModel position={[0, -1, 0]} />
        {controlsEnabled && <OrbitControls enableZoom={false} />}
      </Canvas>
    </div>
  )
}