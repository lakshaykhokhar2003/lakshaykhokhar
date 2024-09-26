import {useGLTF} from "@react-three/drei";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ExtendedMesh} from "../../../utils/types.ts";
import {BufferGeometry, Material, Mesh} from "three";

const Target = (props: ExtendedMesh) => {
    const targetRef = useRef<Mesh<BufferGeometry, Material | Material[]> | null>(null)
    const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')
    useGSAP(() => {
            gsap.to(targetRef.current!.position, {
                y: targetRef.current!.position.y + 0.5,
                duration: 0.5,
                repeat: -1,
                yoyo: true
            })
        }
    )
    return (
        <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
            <primitive object={scene}/>
        </mesh>
    )
}
export default Target
