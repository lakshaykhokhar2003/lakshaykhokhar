import Navbar from "./sections/Navbar.tsx";
import Hero from "./sections/Hero.tsx";
import About from "./sections/About.tsx";
import Projects from "./sections/Projects.tsx";
import Contact from "./sections/Contact.tsx";
import Footer from "./sections/Footer.tsx";
import Experience from "./sections/Experience.tsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto relative">
            <Navbar/>
            <Hero/>
            <About/>
            <Projects/>
            <Experience/>
            <Contact/>
            <Footer/>
        </main>
    )
}
export default App
