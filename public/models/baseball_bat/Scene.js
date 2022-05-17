/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: neutralize (https://sketchfab.com/neutralize)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/baseball-bat-335a02885aee470d94dc3f031136dd84
title: Baseball bat
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.005']} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')