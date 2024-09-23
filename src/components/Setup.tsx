import {useGLTF, useTexture} from '@react-three/drei'
import {DoubleSide, MeshLambertMaterial, RepeatWrapping} from "three";

const Setup = (props) => {
    const {nodes, materials} = useGLTF('/modern/modern-setup.glb')
    const screenTxt = useTexture('/modern/textures/shiro.png');
    return (
        <group {...props} dispose={null}>
            <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    name="Object_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.wire_086086086}
                />
                <mesh
                    name="Object_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.wire_086086086}
                />
                <mesh
                    name="Object_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.wire_086086086}
                />
                <mesh
                    name="Object_5"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.wire_086086086}
                />
                <mesh
                    name="Object_6"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.wire_086086086}
                />
                <mesh
                    name="Object_7"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.wire_086086086}
                />
                <mesh
                    name="Object_8"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials.wire_086086086}
                />
                <mesh
                    name="Object_9"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9.geometry}
                    material={materials.wire_086086086}
                />
                <mesh
                    name="Object_10"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10.geometry}
                    material={materials.wire_086086086}
                />
                <mesh
                    name="Object_11"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_11.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_12"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_12.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_13"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_13.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_14"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_14.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_15"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_15.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_16"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_16.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_17"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_17.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_18"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_19"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_19.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_20"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_20.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_21"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_21.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_22"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_22.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_23"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_23.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_24"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_24.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_25"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_25.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_26"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_26.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_27"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_27.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_28"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_28.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_29"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_29.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_30"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_30.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_31"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_31.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_32"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_32.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_33"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_33.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_34"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_34.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_35"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_35.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_36"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_36.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_37"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_37.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_38"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_38.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_39"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_39.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_40"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_40.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_41"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_41.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_42"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_42.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_43"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_43.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_44"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_44.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_45"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_45.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_46"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_46.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_47"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_47.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_48"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_48.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_49"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_49.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_50"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_50.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_51"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_51.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_52"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_52.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_53"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_53.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_54"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_54.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_55"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_55.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_56"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_56.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_57"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_57.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_58"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_58.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_59"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_59.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_60"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_60.geometry}
                    material={materials.wire_088144225}
                />
                <mesh
                    name="Object_61"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_61.geometry}
                    material={materials.wire_204204204}
                />
                <mesh
                    name="Object_62"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_62.geometry}
                    material={materials.wire_204204204}
                />
                <mesh
                    name="Object_63"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_63.geometry}
                    material={materials.wire_204204204}
                >
                    <meshMatcapMaterial map={screenTxt}/>
                    </mesh>
                <mesh
                    name="Object_64"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_64.geometry}
                    material={materials.wire_204204204}
                />
                <mesh
                    name="Object_65"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_65.geometry}
                    material={materials.wire_204204204}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/modern/modern-setup.glb')
export default Setup;


/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Batuhan13 (https://sketchfab.com/Batuhan13)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/isometric-hacker-room-3ed9d19d7af94a3e9bc9b2ff5de1326c
Title: Isometric Hacker Room
*/

// import { useGLTF } from '@react-three/drei'
//
// const Setup = (props) =>{
//     const { nodes, materials } = useGLTF('/hacker/scene.gltf')
//     return (
//         <group {...props} dispose={null}>
//             <group rotation={[-Math.PI / 2, 0, 0]}>
//                 <group rotation={[Math.PI / 2, 0, 0]}>
//                     <group position={[-14.286, 85.714, -14.286]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material010_0.geometry}
//                             material={materials['Material.010']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material001_0.geometry}
//                             material={materials['Material.001']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material003_0.geometry}
//                             material={materials['Material.003']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Screen_0.geometry}
//                             material={materials.Screen}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material004_0.geometry}
//                             material={materials['Material.004']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Screen001_0.geometry}
//                             material={materials['Screen.001']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material005_0.geometry}
//                             material={materials['Material.005']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Screen002_0.geometry}
//                             material={materials['Screen.002']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material006_0.geometry}
//                             material={materials['Material.006']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Screen003_0.geometry}
//                             material={materials['Screen.003']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material007_0.geometry}
//                             material={materials['Material.007']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Screen004_0.geometry}
//                             material={materials['Screen.004']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material009_0.geometry}
//                             material={materials['Material.009']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Screen006_0.geometry}
//                             material={materials['Screen.006']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material012_0.geometry}
//                             material={materials['Material.012']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material011_0.geometry}
//                             material={materials['Material.011']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material014_0.geometry}
//                             material={materials['Material.014']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material015_0.geometry}
//                             material={materials['Material.015']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material017_0.geometry}
//                             material={materials['Material.017']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material016_0.geometry}
//                             material={materials['Material.016']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material019_0.geometry}
//                             material={materials['Material.019']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material020_0.geometry}
//                             material={materials['Material.020']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material021_0.geometry}
//                             material={materials['Material.021']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material022_0.geometry}
//                             material={materials['Material.022']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material024_0.geometry}
//                             material={materials['Material.024']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material025_0.geometry}
//                             material={materials['Material.025']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Screen007_0.geometry}
//                             material={materials['Screen.007']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material030_0.geometry}
//                             material={materials['Material.030']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material031_0.geometry}
//                             material={materials['Material.031']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material033_0.geometry}
//                             material={materials['Material.033']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material032_0.geometry}
//                             material={materials['Material.032']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material035_0.geometry}
//                             material={materials['Material.035']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material034_0.geometry}
//                             material={materials['Material.034']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material037_0.geometry}
//                             material={materials['Material.037']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material036_0.geometry}
//                             material={materials['Material.036']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material039_0.geometry}
//                             material={materials['Material.039']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material038_0.geometry}
//                             material={materials['Material.038']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Sticker_0.geometry}
//                             material={materials.Sticker}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material069_0.geometry}
//                             material={materials['Material.069']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material070_0.geometry}
//                             material={materials['Material.070']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material073_0.geometry}
//                             material={materials['Material.073']}
//                         />
//                         <mesh
//                             castShadow
//                             receiveShadow
//                             geometry={nodes.Plane_Material075_0.geometry}
//                             material={materials['Material.075']}
//                         />
//                     </group>
//                 </group>
//             </group>
//         </group>
//     )
// }
//
// useGLTF.preload('/hacker/scene.gltf')
//
// export default Setup