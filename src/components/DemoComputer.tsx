import {useGLTF, useVideoTexture} from "@react-three/drei";
import {propTxt} from "../../utils/types.ts";
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {useRef} from "react";

const DemoComputer = (props: propTxt) => {
    const group = useRef(null)
    const {nodes, materials} = useGLTF('/monitor/monitor_low.glb')
    const video = useVideoTexture(props.texture ? props.texture : '/textures/project/project1.mp4')
    useGSAP(() => {
        gsap.from(group.current!.rotation, {y: Math.PI / 2, duration: 1, ease: 'power3.out'})
    })

    video.flipY = true
    video.center.set(0.49, 0.49);
    video.rotation = Math.PI;
    video.repeat.set(2, 2);
    video.offset.set(-0.4, 0.24);
    return (
        <group ref={group}{...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, -0.1]} scale={0.023} position={[0, -0.1, 0.1]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.055}>
                    <mesh
                        name="body"
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor007_low_monitor_0.geometry}
                        material={materials.monitor}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        name="screen_outline"
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor001_low_monitor_0.geometry}
                        material={materials.monitor}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        name="screen"
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor002_low_monitor_0.geometry}
                        material={materials.monitor}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <meshBasicMaterial map={video}/>
                    </mesh>
                    <mesh
                        name="back_plug_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor003_low_monitor_0.geometry}
                        material={materials.monitor}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        name="volume_up"
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor004_low_monitor_0.geometry}
                        material={materials.monitor}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        name="volume_down"
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor005_low_monitor_0.geometry}
                        material={materials.monitor}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        name="wire_input"
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor006_low_monitor_0.geometry}
                        material={materials.monitor}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        name="back_plug_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor_low_monitor_0.geometry}
                        material={materials.monitor}
                        position={[0, 2.588, 7.366]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        name="back_plug_area"
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor008_low_monitor_0.geometry}
                        material={materials.monitor}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        name="wire"
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor009_low_monitor_0.geometry}
                        material={materials.monitor}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        name="background"
                        castShadow
                        receiveShadow
                        geometry={nodes.g__low_ground_0.geometry}
                        material={materials.ground}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/monitor/monitor_low.glb')
export default DemoComputer
