import {useState} from "react";
import {NavLinks} from "../../utils/types.ts";
import {navLinks} from "../constants";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name }: NavLinks) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a">{name}</a>
                </li>
            ))}
        </ul>
    )
}
const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleMenu = () => setIsOpen(prevState => !prevState)
    return (
        <header className="fixed top-0 left-0 right-0 bg-black/90 z-[10000]">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between py-5 mx-auto c-space">
                    <a href="#" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Lakshay
                    </a>

                    <button onClick={toggleMenu}
                            className="text-neutral-400 hober:text-white focus:outline-none sm:hidden flex"><img
                        src={!isOpen ? "assets/menu.svg" : "assets/close.svg"} alt="toggle" className="w-6 h-6"/>
                    </button>

                    <nav className="sm:flex hidden z-[10000]">
                        <NavItems/>
                    </nav>
                </div>
            </div>
            
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5 z-[10000]">
                    <NavItems/>
                </nav>
            </div>
        </header>
    )
}
export default Navbar
