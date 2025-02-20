import * as THREE from 'three'
import {Float, Line, Sphere, Stars, Trail} from "@react-three/drei";
import {useMemo, useRef} from "react";
import {GroupProps, useFrame} from "@react-three/fiber";
import {Bloom, EffectComposer} from '@react-three/postprocessing'
import {BufferGeometry, Material, Mesh} from "three";

export function Atom(props: GroupProps) {
    const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])
    return (
        <>
            <color attach="" args={['black']}/>
            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                <group {...props} scale={[0.2, 0.2, 0.2]}>
                    <Line worldUnits points={points} color="turquoise" lineWidth={0.1}/>
                    <Line worldUnits points={points} color="turquoise" lineWidth={0.1} rotation={[0, 0, 1]}/>
                    <Line worldUnits points={points} color="turquoise" lineWidth={0.1} rotation={[0, 0, -1]}/>
                    <Electron position={[0, 1, 0.5]} speed={6}/>
                    <Electron position={[0, 0, 0.5]} rotation={[0, 0, Math.PI / 3]} speed={6.5}/>
                    <Electron position={[0, 0, 0.5]} rotation={[0, 0, -Math.PI / 3]} speed={7}/>
                    <Sphere args={[0.55, 64, 64]}>
                        <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false}/>
                    </Sphere>
                </group>
            </Float>
            <Stars saturation={0} count={400} speed={0.5}/>
            <EffectComposer>
                <Bloom mipmapBlur luminanceThreshold={1} radius={0.7}/>
            </EffectComposer>
        </>
    )
}

function Electron({radius = 2.75, speed = 6, ...props}) {
    const ref = useRef<Mesh<BufferGeometry, Material | Material[]> | null>(null)
    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed
        ref.current!.position.set(Math.sin(t) * radius, (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25, 0)
    })
    return (
        <group {...props}>
            <Trail local width={5} length={6} color={new THREE.Color(2, 1, 10)} attenuation={(t) => t * t}>
                <mesh ref={ref}>
                    <sphereGeometry args={[0.25]}/>
                    <meshBasicMaterial color={[10, 1, 10]} toneMapped={false}/>
                </mesh>
            </Trail>
        </group>
    )
}
