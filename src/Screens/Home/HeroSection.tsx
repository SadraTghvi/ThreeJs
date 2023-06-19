import React, { FC } from 'react'

import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import './style/herosection.scss'

const HeroSection: FC = () => {
    return (
        <div className='hero-container'>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 1, 8]} />
                <OrbitControls />

                <mesh position={[0, 1, 0]}>
                    <sphereGeometry args={[1, 20, 20]} />
                    <meshStandardMaterial color={'white'} />
                </mesh>

                <mesh rotation={[-AngleToRadian(90), 0, 0]}>
                    <planeGeometry args={[5, 5]} />
                    <meshStandardMaterial color={'blue'} />
                </mesh>

                {/*  */}
                <ambientLight args={['white']} intensity={1} />
                {/*  */}
            </Canvas>
        </div>
    )
}

export default HeroSection
