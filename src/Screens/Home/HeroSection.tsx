import React, { FC, useEffect, useRef } from 'react'

import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import * as THREE from 'three'
import { Mesh, SpotLight } from 'three'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

import './style/herosection.scss'

const heightMapImg = require('../../static/ball/Height.png')
const roughnessMapImg = require('../../static/ball/Roughness.jpg')
const NormalMapImg = require('../../static/ball/Normal.jpg')

gsap.registerPlugin(CustomEase)

const HeroSection: FC = () => {
    const controls = useRef<OrbitControlsImpl>(null)
    const spotLightRef = useRef<SpotLight>(null)
    const ballRef = useRef<Mesh>(null)

    const heightMap = useLoader(THREE.TextureLoader, heightMapImg)
    const RoughnessMap = useLoader(THREE.TextureLoader, roughnessMapImg)
    const NormalMap = useLoader(THREE.TextureLoader, NormalMapImg)
    // const timeline = gsap.timeline()

    // useFrame(state => {
    //     const { x } = state.mouse
    //     x
    //     // controls.current?.setAzimuthalAngle(-AngleToRadian(x * 250))
    //     // controls.current?.setPolarAngle(y + 1)
    //     // controls.current?.update()

    //     // spotLightRef.current?.position.setX(x * 50)
    // })

    useEffect(() => {
        if (!ballRef.current || !ballRef.current.position) return

        // timeline.to(
        //     ballRef.current?.position,
        //     {
        //         x: 14,
        //         duration: 2.5,
        //         ease: 'ease',
        //     },
        //     ''
        // )
        // timeline.to(
        //     ballRef.current?.position,
        //     {
        //         y: 5,
        //         duration: 1,
        //         ease: 'linear',
        //         delay: 0.5,
        //     },
        //     ''
        // )
        // gsap.to(ballRef.current?.rotation, {
        //     z: -50,
        //     duration: 5,
        //     ease: 'linear',
        // })
        // timeline.to(
        //     ballRef.current?.position,
        //     {
        //         y: -40,
        //         duration: 3,
        //         ease: 'bounce',
        //     },
        //     '-=1.15'
        // )
    }, [ballRef.current])

    useEffect(() => {
        if (!spotLightRef.current || !spotLightRef.current.position) return

        // for (let i = 0; i < 5; i++) {
        //     timeline.to(
        //         spotLightRef.current!.position,
        //         {
        //             x: -10,
        //             duration: 1.7,
        //             ease: CustomEase.create(
        //                 'custom',
        //                 'M0,0 C0.072,0.394 0.245,0.563 0.296,0.618 0.344,0.67 0.584,1 1,1 '
        //             ),
        //         },
        //         '+=0'
        //     )

        //     timeline.to(
        //         spotLightRef.current!.position,
        //         {
        //             x: 10,
        //             duration: 1.7,
        //             ease: CustomEase.create(
        //                 'custom',
        //                 'M0,0 C0.072,0.394 0.245,0.563 0.296,0.618 0.344,0.67 0.584,1 1,1 '
        //             ),
        //         },
        //         '+=0'
        //     )
        // }
    }, [spotLightRef.current])

    return (
        <>
            <PerspectiveCamera makeDefault position={[10, 10, 30]} />
            <OrbitControls
                ref={controls}
                maxPolarAngle={1.5}
                enablePan
                // autoRotate
            />

            {/* balls */}

            <mesh ref={ballRef} position={[0, 1, 0]} castShadow>
                <sphereGeometry attach='geometry' args={[1]} />
                <meshStandardMaterial
                    attach={'material'}
                    color={'blue'}
                    // @ts-ignore
                    displacementMap={heightMap}
                />
            </mesh>
            <mesh position={[5, 1, 0]} castShadow>
                <sphereGeometry attach='geometry' args={[1]} />
                <meshStandardMaterial
                    attach={'material'}
                    color={'red'}
                    // @ts-ignore
                    roughnessMap={RoughnessMap}
                    roughness={10}
                />
            </mesh>
            <mesh position={[-5, 1, 0]} castShadow>
                <sphereGeometry attach='geometry' args={[1]} />
                <meshStandardMaterial
                    attach={'material'}
                    color={'white'}
                    // @ts-ignore
                    normalMap={NormalMap}
                    roughness={1}
                />
            </mesh>

            {/* balls-end */}

            {/* floor */}
            {/* <mesh rotation={[-AngleToRadian(90), 0, 0]} receiveShadow>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial color={'blue'} />
            </mesh> */}
            {/* floor-end */}

            {/*  */}
            {/* <ambientLight args={['white']} intensity={0.6} /> */}
            <spotLight
                ref={spotLightRef}
                args={['white', 1]}
                position={[8, 13, 5]}
                penumbra={1}
                castShadow
            />
            {/*  */}

            <mesh position={[0, 50 / 2, 0]} receiveShadow>
                <boxGeometry args={[35, 50, 35]} />
                <meshStandardMaterial color={'grey'} side={THREE.BackSide} />
            </mesh>
        </>
    )
}

export default HeroSection
