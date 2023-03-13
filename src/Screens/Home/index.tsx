import React, { FC, useRef, useState } from 'react'

import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import './style/home.scss'

const Home: FC = () => {
    return (
        <main className='home-container'>
            <Canvas style={{ height: '100%' }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
            </Canvas>
        </main>
    )
}

interface BoxProps extends MeshProps {}

const Box: FC<BoxProps> = props => {
    // This reference will give us direct access to the THREE.Mesh object
    const ref = useRef<THREE.Mesh>(null!)
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() =>
        hovered
            ? (ref.current.rotation.x += 0.01)
            : (ref.current.rotation.z += 0.01)
    )

    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={() => click(!clicked)}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default Home
