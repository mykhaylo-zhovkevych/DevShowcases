import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { navLinks } from "../constants";
import {ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);


const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });

        navTween.fromTo('nav', {backgroundColor: 'transparent'},
            {
                backgroundColor: '#00000050',
                backdropFilter: "blur(10px)",
                duration: 1,
                ease: 'power1.inOut'
        });
    })
    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo" />
                    <p>Velvet Pour</p>
                </a>


            <ul>
                {/* the parenthesize return li automatically */}
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>

                    </li>
                ))}            
            </ul>
        </div>
    </nav>
    )
}

export default Navbar