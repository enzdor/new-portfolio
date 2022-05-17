/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: igor-tkachenko (https://sketchfab.com/igor-tkachenko)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/books-62fc2898df55483f87461a8f12a0113f
title: Books
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {animated} from "@react-spring/three"
import { useFrame } from "@react-three/fiber"

export default function Books({ ...props }) {
	useFrame((state) => {
		if(props.spin === true){
			group.current.rotation.y += 0.01
		}
	})
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/books/scene.gltf')
  return (
    <animated.group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, 0.19]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh geometry={nodes.Cube_0.geometry} material={materials.cover1} />
          <mesh geometry={nodes.Cube_1.geometry} material={materials.paper1} />
          <mesh geometry={nodes.Cube_2.geometry} material={materials['cover1.002']} />
          <mesh geometry={nodes.Cube_3.geometry} material={materials['paper1.002']} />
          <mesh geometry={nodes.Cube_4.geometry} material={materials.torez} />
          <mesh geometry={nodes.Cube_5.geometry} material={materials['cover1.001']} />
          <mesh geometry={nodes.Cube_6.geometry} material={materials['paper1.001']} />
        </group>
      </group>
    </animated.group>
  )
}

useGLTF.preload('/models/books/scene.gltf')