import React, { FC } from 'react'

import { Canvas } from '@react-three/fiber'

import './style/herosection.scss'

const HeroSection: FC = () => {
    return (
        <div className='hero-container'>
            <Canvas>
                <mesh>
                    <boxGeometry args={[5, 2, 1]} />
                    <meshStandardMaterial color={'white'} />
                </mesh>

                {/*  */}
                <ambientLight args={['white']} intensity={1} />
                {/*  */}
            </Canvas>
        </div>
    )
}

export default HeroSection
