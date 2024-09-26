// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {useAnimations, useFBX, useGLTF} from '@react-three/drei'
import {useEffect, useRef} from "react";
import {renameTracks} from "../../utils/functions.tsx";

const Developer = ({animationName = 'idle', scale,positionY}: { animationName?: string,scale:number,positionY:number }) => {
    const group = useRef(null)
    const {nodes, materials} = useGLTF('/models/animations/avatar.glb')

    const {animations: idleAnimation} = useFBX('/models/animations/idle.fbx')
    // const {animations: saluteAnimation} = useFBX('/models/animations/salute.fbx')
    const {animations: sittingAnimation} = useFBX('/models/animations/sitting.fbx')
    const {animations: standAnimation} = useFBX('/models/animations/stand.fbx')
    // const {animations: clappingAnimation} = useFBX('/models/animations/clapping.fbx')
    // const {animations: victoryAnimation} = useFBX('/models/animations/victory.fbx')

    renameTracks(sittingAnimation[0]);
    renameTracks(standAnimation[0]);
    renameTracks(idleAnimation[0]);

    idleAnimation[0].name = 'idle';
    // saluteAnimation[0].name = 'salute';
    // clappingAnimation[0].name = 'clapping';
    // victoryAnimation[0].name = 'victory';
    sittingAnimation[0].name = 'sitting';
    standAnimation[0].name = 'stand';

    const {actions} = useAnimations(
        [idleAnimation[0],
            // saluteAnimation[0],
            // clappingAnimation[0],
            // victoryAnimation[0],
            sittingAnimation[0], standAnimation[0]],
        group,
    );

    useEffect(() => {
        actions[animationName]!.reset().fadeIn(0.5).play();
        return () => actions[animationName]!.fadeOut(0.5);
    }, [animationName]);

    return (
        <group ref={group} position-y={positionY} scale={scale} dispose={null}>
            <primitive object={nodes.Hips}/>
            <skinnedMesh
                name="EyeLeft"
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeLeft.skeleton}
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
                name="EyeRight"
                geometry={nodes.EyeRight.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeRight.skeleton}
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Head"
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Teeth"
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Hair.geometry}
                material={materials.Wolf3D_Hair}
                skeleton={nodes.Wolf3D_Hair.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Glasses.geometry}
                material={materials.Wolf3D_Glasses}
                skeleton={nodes.Wolf3D_Glasses.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Body.geometry}
                material={materials.Wolf3D_Body}
                skeleton={nodes.Wolf3D_Body.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials.Wolf3D_Outfit_Top}
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
        </group>
    )
}

useGLTF.preload('/human/developer.glb')
export default Developer
