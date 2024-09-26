import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import {lazy, Suspense} from "react";
import {calculateSizes} from "../constants";
// import {Leva, useControls} from "leva";

const HackerRoom = lazy(() => import("../components/HackerRoom.tsx"));
const CanvasLoader = lazy(() => import("../components/CanvasLoader.tsx"));
const Target = lazy(() => import("../components/ui/Target.tsx"));
const ReactLogo = lazy(() => import("../components/ui/ReactLogo.tsx"));
const Cube = lazy(() => import("../components/ui/Cube.tsx"));
const Ring = lazy(() => import("../components/ui/Ring.tsx"));
const HeroCamera = lazy(() => import("../components/HeroCamera.tsx"));
const Button = lazy(() => import("../components/ui/Button.tsx"));

const Hero = () => {
    // const x = useControls('HackerRoom', {
    //     positionX: {
    //         value: 2.5, min: -10, max: 10
    //     },
    //     positionY: {
    //         value: 2.5, min: -10, max: 10
    //     },
    //     positionZ: {
    //         value: 2.5, min: -10, max: 10
    //     },
    //     rotationX: {
    //         value: 2.5, min: -10, max: 10
    //     },
    //     rotationY: {
    //         value: 2.5, min: -10, max: 10
    //     }, rotationZ: {
    //         value: 2.5, min: -10, max: 10
    //     },
    //     scale: {
    //         value: 1,
    //         min: 0.1,
    //         max: 10
    //     }
    //
    //
    // })
    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const size = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className="min-h-screen w-full flex flex-col relative z-[1000]" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans z-100">Hi, I am
                    Lakshay <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">
                    Designing Software, Delivering Impact
                </p>

                <div className="w-full h-full absolute inset-0">
                    {/*<Leva/>*/}
                    <Canvas className="w-full h-full">
                        <Suspense fallback={<CanvasLoader/>}>
                            {/*<Atom position={size.reactLogoPosition as [number, number, number]}/>*/}
                            <HeroCamera isMobile={isMobile}>
                                <HackerRoom
                                    position={size.deskPosition as [number, number, number]}
                                    scale={size.deskScale}
                                    rotation={[0, -Math.PI, 0]}
                                    // position={[x.positionX, x.positionY, x.positionZ]}
                                    // rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                                    // scale={[x.scale, x.scale, x.scale]}
                                />
                            </HeroCamera>
                            <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                            {/*<PerspectiveCamera makeDefault position={[0, 0, 250]}/>*/}
                            {/*<Setup*/}
                            {/*    position={[1,0,1]}*/}
                            {/*    scale={[0.005,0.005,0.005]}*/}
                            {/*    rotation={[0.5, 0.1, 0]}*/}
                            {/*    // position={[x.positionX, x.positionY, x.positionZ]}*/}
                            {/*    // rotation={[x.rotationX, x.rotationY, x.rotationZ]}*/}
                            {/*    // scale={[x.scale, x.scale, x.scale]}*/}
                            {/*/>*/}
                            <group>
                                <Target position={size.targetPosition as [number, number, number]}/>
                                <ReactLogo position={size.reactLogoPosition as [number, number, number]}/>
                                <Cube position={size.cubePosition}/>
                                <Ring position={size.ringPosition}/>
                            </group>

                            <ambientLight intensity={1}/>
                            <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                        </Suspense>
                    </Canvas>
                </div>
                <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                    <a href="#about" className="w-fit">
                        <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Hero
