// physical-oriented-portfolio/code/src/scripts/header.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initHeaderReveal() {
  const headerElement = document.querySelector("#webHeader");
  if (!headerElement) return;

  const HEADER_TOP_VISIBILITY_ZONE = 96;
  const EXTRA_HIDE_OFFSET = 4;

  const getHeaderHiddenOffset = () => -headerElement.offsetHeight - EXTRA_HIDE_OFFSET;
  
  function showHeader() {
    gsap.to(headerElement, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
    });
  }

  function hideHeader() {
    gsap.to(headerElement, {
        y: getHeaderHiddenOffset(),
        duration: 0.3,
        ease: "power2.in",
    });
  }


  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate(scrollContext){
        const currentScrollY = window.scrollY;
        const scrollDirection = scrollContext.direction;
        // 1 = scrolling down, -1 = scrolling up
        if (currentScrollY < HEADER_TOP_VISIBILITY_ZONE) {
            gsap.set(headerElement, { y: 0 });
            return;
        }
        if (scrollDirection === 1) {
            hideHeader();
        } else if (scrollDirection === -1) {
            showHeader();
        }
    },
  }); 
}