import React, { FC, useRef } from 'react'

import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

import './style/herosection.scss'

const HeroSection: FC = () => {
    const controls = useRef<OrbitControlsImpl>(null)

    useFrame(state => {
        const { x, y } = state.mouse
        controls.current?.setAzimuthalAngle(-AngleToRadian(x * 250))
        controls.current?.setPolarAngle(y + 1)
        controls.current?.update()
    })

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 1, 8]} />
            <OrbitControls ref={controls} maxPolarAngle={1.5} enablePan />

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
        </>
    )
}

export default HeroSection
