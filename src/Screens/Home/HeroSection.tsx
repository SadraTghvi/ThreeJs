import React, { FC, useEffect, useRef } from 'react'

import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { SpotLight } from 'three'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

import './style/herosection.scss'

const HeroSection: FC = () => {
    const controls = useRef<OrbitControlsImpl>(null)
    const lightControls = useRef<SpotLight>(null)

    useFrame(state => {
        const { x } = state.mouse
        // controls.current?.setAzimuthalAngle(-AngleToRadian(x * 250))
        // controls.current?.setPolarAngle(y + 1)
        // controls.current?.update()

        lightControls.current?.position.setX(x * 50)
    })

    useEffect(() => {
        console.log(lightControls.current)
    }, [lightControls.current])

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 1, 15]} />
            <OrbitControls
                ref={controls}
                maxPolarAngle={1.5}
                enablePan
                autoRotate
            />

            {/* ball */}
            <mesh position={[0, 2, 0]} castShadow>
                <sphereGeometry args={[1]} />
                <meshStandardMaterial color={'white'} />
            </mesh>
            {/* ball-end */}

            {/* floor */}
            <mesh rotation={[-AngleToRadian(90), 0, 0]} receiveShadow>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial color={'blue'} />
            </mesh>
            {/* floor-end */}

            {/*  */}
            {/* <ambientLight args={['white']} intensity={1} /> */}
            <spotLight
                ref={lightControls}
                args={['white', 1]}
                position={[0, 5, 0]}
                distance={50}
                castShadow
            />
            {/*  */}
        </>
    )
}

export default HeroSection
