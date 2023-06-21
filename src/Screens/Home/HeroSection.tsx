import React, { FC, useEffect, useRef } from 'react'

import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { Mesh, SpotLight } from 'three'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

import './style/herosection.scss'

const HeroSection: FC = () => {
    const controls = useRef<OrbitControlsImpl>(null)
    const lightControls = useRef<SpotLight>(null)
    const ballRef = useRef<Mesh>(null)

    useFrame(state => {
        const { x } = state.mouse
        x
        // controls.current?.setAzimuthalAngle(-AngleToRadian(x * 250))
        // controls.current?.setPolarAngle(y + 1)
        // controls.current?.update()

        // lightControls.current?.position.setX(x * 50)
    })

    useEffect(() => {
        if (!ballRef.current || !ballRef.current.position) return

        const timeline = gsap.timeline()

        timeline.to(
            ballRef.current?.position,
            {
                x: 14,
                duration: 2.5,
                ease: 'ease',
            },
            ''
        )
        timeline.to(
            ballRef.current?.position,
            {
                y: 1,
                duration: 1,
                ease: 'bounce',
            },
            ''
        )
        timeline.to(
            ballRef.current?.position,
            {
                y: -40,
                duration: 3,
                ease: 'bounce',
            },
            '-=1.15'
        )
    }, [ballRef.current])

    useEffect(() => {
        console.log(lightControls.current)
    }, [lightControls.current])

    return (
        <>
            <PerspectiveCamera makeDefault position={[10, 10, 30]} />
            <OrbitControls
                ref={controls}
                maxPolarAngle={1.5}
                enablePan
                // autoRotate
            />

            {/* ball */}
            <mesh ref={ballRef} position={[-3, 5, 0]} castShadow>
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
                position={[-10, 10, 0]}
                angle={-AngleToRadian(45)}
                distance={100}
                penumbra={1}
                castShadow
            />
            {/*  */}
        </>
    )
}

export default HeroSection
