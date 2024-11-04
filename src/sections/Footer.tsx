import {socials} from "../../utils/functions.tsx";

const Footer = () => {
    return (
        <section
            className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>© 2024 All rights reserved</p>
            </div>

            <div className="flex gap-1 sm:gap-3">
                {socials.map((social, index) => (
                    <a href={social.link} key={index} className="social-icon">
                        <img src={social.icon} alt={social.name} className="w-1/2 h-1/2"/>
                    </a>
                ))}

            </div>
            <p className="text-white-500">Designed by <span className="text-white-600">
                Lakshay Khokhar
            </span></p>
        </section>
    )
}
export default Footer
