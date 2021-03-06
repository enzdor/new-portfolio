/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Pedro Silva (https://sketchfab.com/pxdrosilva)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/desk-low-poly-ed62a64f51bf4d80a13e1344093c3909
title: Desk Low-Poly
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {animated} from "@react-spring/three"
import { useFrame } from "@react-three/fiber"

export default function Desk({ ...props }) {
	useFrame((state) => {
		if(props.spin === true){
			group.current.rotation.y += 0.01
		}
	})
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/desk_low-poly/scene.gltf')
  return (
    <animated.group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[809.34, 872.25, 578.73]} rotation={[Math.PI, 0.6, 2.48]} scale={100} />
          <group position={[-23.36, 604.19, -463.55]} rotation={[-0.86, -0.72, 0.01]} scale={100}>
            <group rotation={[Math.PI / 2, 0, 0]} />
          </group>
          <group position={[-62.6, 604.19, 467.87]} rotation={[-2.1, 0.85, 2.9]} scale={100}>
            <group rotation={[Math.PI / 2, 0, 0]} />
          </group>
          <group position={[323.96, 412.13, 10.36]} rotation={[-2.39, -0.38, -1.96]} scale={100}>
            <group rotation={[Math.PI / 2, 0, 0]} />
          </group>
          <group position={[-561.74, 604.19, 35.5]} rotation={[-0.72, 0.53, 1.08]} scale={100}>
            <group rotation={[Math.PI / 2, 0, 0]} />
          </group>
          <group position={[1.88, 513.73, 28.93]} rotation={[-0.93, -1.56, -0.96]} scale={100}>
            <group rotation={[Math.PI / 2, 0, 0]} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Desk_Desk_0.geometry} material={materials.Desk} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Boxes_Boxes_0.geometry} material={materials.Boxes} />
            <mesh geometry={nodes.Boxes_B_Tranaparency_0.geometry} material={materials.B_Tranaparency} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Paper_Paper_0.geometry} material={materials.Paper} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.PC_Speaker_PC_Speakers_0.geometry} material={materials.PC_Speakers} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.PC_Monitor_PC_Monitor_0.geometry} material={materials.PC_Monitor} />
            <mesh geometry={nodes.PC_Monitor_PC_Screen_0.geometry} material={materials.PC_Screen} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.PC_Keyboard_PC_Keyboard_0.geometry} material={materials.material_0} />
            <mesh geometry={nodes.PC_Keyboard_Keyboard_light_0.geometry} material={materials.Keyboard_light} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Keyboard_wire_WIre_0.geometry} material={materials.WIre} />
          </group>
          <group scale={100}>
            <mesh geometry={nodes.PC_Mouse_PC_Mouse_0.geometry} material={materials.PC_Mouse} />
          </group>
          <group position={[0, 0, -47.15]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Mouse_wire_WIre_0.geometry} material={materials.WIre} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Books_Books_0.geometry} material={materials.Books} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Notebook_Notebook_0.geometry} material={materials.Notebook} />
          </group>
          <group position={[0, 0, 290.97]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Notebook_wire_WIre_0.geometry} material={materials.WIre} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Pen_Pen_0.geometry} material={materials.material_1} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Eraser_Eraser_0.geometry} material={materials.Eraser} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Dish_Cup_0.geometry} material={materials.material} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cell_phone_Cell_phone_0.geometry} material={materials.Cell_phone} />
            <mesh geometry={nodes.Cell_phone_Cell_screen_0.geometry} material={materials.Cell_screen} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Mousepad_Mousepad_0.geometry} material={materials.Mousepad} />
          </group>
        </group>
      </group>
    </animated.group>
  )
}

useGLTF.preload('/models/desk_low-poly/scene.gltf')
