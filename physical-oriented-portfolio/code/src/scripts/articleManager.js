import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initShowcaseHorizontalScroll() {
  const section = document.querySelector("#showcase");
  const article = section?.querySelector(".showcase__panels");
  if (!section || !article) return;

const getMaxX = () => article.scrollWidth - section.clientWidth;

  if (getMaxX() <= 0) return;

gsap.to(article, {
  x: () => -getMaxX(),
  ease: "none",
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: () => `+=${getMaxX()}`,
    scrub: 1,
    pin: true,
    invalidateOnRefresh: true
  }
});

  window.addEventListener("load", () => ScrollTrigger.refresh());
}