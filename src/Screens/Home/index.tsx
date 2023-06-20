import React, { FC } from 'react'

import { Canvas } from '@react-three/fiber'

import HeroSection from './HeroSection'

import './style/home.scss'

const Home: FC = () => {
    return (
        <main className='home-container'>
            <Canvas shadows>
                <HeroSection />
            </Canvas>
        </main>
    )
}

export default Home
