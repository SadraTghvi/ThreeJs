import React, { FC } from 'react'

import HeroSection from './HeroSection'

import './style/home.scss'

const Home: FC = () => {
    return (
        <main className='home-container'>
            <HeroSection />
        </main>
    )
}

export default Home
