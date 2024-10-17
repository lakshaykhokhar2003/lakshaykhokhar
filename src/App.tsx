import {lazy} from "react";
import StarsBackground from "./components/ui/StarBackground.tsx";
import ShootingStars from "./components/ui/ShootingStars.tsx";
import Hero from "./sections/Hero.tsx";
import {Toaster} from "sonner";

const Navbar = lazy(() => import("./sections/Navbar.tsx"));
// const Hero = lazy(() => import("./sections/Hero.tsx"));
const About = lazy(() => import("./sections/About.tsx"));
const Projects = lazy(() => import("./sections/Projects.tsx"));
const Contact = lazy(() => import("./sections/Contact.tsx"));
const Footer = lazy(() => import("./sections/Footer.tsx"));
const Experience = lazy(() => import("./sections/Experience.tsx"));
// const BackgroundBeams = lazy(() => import("./components/ui/BackgroundBeams.tsx"));
// const ShootingStars = lazy(() => import("./components/ui/ShootingStars.tsx"));
// const StarsBackground = lazy(() => import("./components/ui/StarBackground.tsx"));


const App = () => {
    // const {progress} = useProgress();
    // const [showLoading, setShowLoading] = useState(true);
    //
    // useEffect(() => {
    //     if (progress === 100) {
    //         const timer = setTimeout(() => {
    //             setShowLoading(false);
    //         }, 5000);
    //
    //         return () => clearTimeout(timer);
    //     }
    // }, [progress]);
    return (
        <>
            {/*<Suspense*/}
            {/*    fallback={<div className={"w-full h-full absolute inset-0 bg-white"}>sTARS...</div>}>*/}
            <main className="max-w-7xl mx-auto relative z-[10000]">

                <Navbar/>
                <Hero/>
                <About/>
                <Experience/>
                <Projects/>
                <Contact/>
                <Footer/>
                {/*{showLoading  && <Loading/>}*/}
            </main>
            <StarsBackground/>
            <ShootingStars/>

            {/*</Suspense>*/}
            {/*<BackgroundBeams/>*/}
            <Toaster richColors closeButton duration={5000} theme="light"/>
        </>
    )
}
export default App
