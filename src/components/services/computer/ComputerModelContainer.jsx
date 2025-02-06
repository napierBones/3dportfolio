import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { ComputerModel } from './ComputerModel'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'

const ComputerModelContainer = () => {
  return (
    <Canvas>
        <Suspense fallback='loading...'>
            <Stage environment="city" intensity={0.5}>

            <ComputerModel />
            </Stage>
            <OrbitControls autoRotate enableZoom={false}/>
            <PerspectiveCamera position={[-1, 0,1.8]} zoom={0.78} makeDefault/>

        </Suspense>
    </Canvas>
  )
}

export default ComputerModelContainer