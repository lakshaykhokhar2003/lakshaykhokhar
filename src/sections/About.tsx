import World from "../components/ui/Globe.tsx";
import Button from "../components/ui/Button.tsx";
import {useState} from "react";
import IconCloud from "../components/ui/icon-cloud.tsx";
import {slugs} from "../../utils/functions.tsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState<boolean>(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("lakshaykhokhar2003@gmail.com");
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }

    const viewResume = () => window.open('/assets/LakshayResume.pdf');

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/ghibli.jpg" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Hi, I'm Lakshay</p>
                            <p className="grid-subtext">I am a Frontend Developer and Full-Stack Developer based in
                                India,
                                passionate about creating interactive websites and web applications that are both
                                visually
                                stunning and highly functional.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="w-full h-fit object-contain">
                            <IconCloud iconSlugs={slugs}/>
                        </div>

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I specialize in a variety of languages, frameworks, and tools that allow me to build
                                robust and scalable
                                applications
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div
                            className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center overflow-hidden object-contain">
                            <World/>
                        </div>
                        <div>
                            <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
                            <p className="grid-subtext">I&apos;m based in Pune, India and open to remote work
                                worldwide.</p>
                            <a href="#contact" className="w-fit">
                                <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/resume.jpg" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">My Resume</p>
                            <p className="grid-subtext">
                                To find out more about my background, abilities, and projects, you can look at my resume.
                            </p>
                            <Button name={"View Resume"} containerClass="w-full mt-10" onClick={viewResume}/>
                        </div>

                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="/assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">lakshaykhokhar2003@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
