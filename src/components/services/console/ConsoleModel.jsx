import { useGLTF } from '@react-three/drei'

export function ConsoleModel(props) {
  const { nodes, materials } = useGLTF('/ps5.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-11.032, 4.657, 0]}>
        <group position={[-0.122, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Black_Black_0.geometry}
            material={materials.Black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Black_Blue_0.geometry}
            material={materials.Blue}
          />
        </group>
      </group>
      <group position={[-17.039, 4.926, 20.302]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.White_White_0.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.White_Black_0.geometry}
          material={materials.Black}
        />
      </group>
      <group position={[-10.918, 4.96, 21.134]} rotation={[1.575, 0, 0.004]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001_Blacj_Fins_0.geometry}
          material={materials.Blacj_Fins}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001_Blacj_Fins_0_1.geometry}
          material={materials.Blacj_Fins}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base_Black_Base_0.geometry}
        material={materials.Black_Base}
        position={[-11.032, -22.465, 20.212]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ports_Metal_0.geometry}
        material={materials.Metal}
        position={[-11.032, 3.886, 42.019]}
      />
    </group>
  )
}

useGLTF.preload('/ps5.glb')
