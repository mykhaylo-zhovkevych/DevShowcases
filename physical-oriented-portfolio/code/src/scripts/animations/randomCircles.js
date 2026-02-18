import gsap from "gsap";

export function setupRandomCircles() {
  const circles = gsap.utils.toArray(".random-circle");
  if (!circles.length) return;

  const randomCircleTl = gsap.timeline({ repeat: -1, repeatRefresh: true });

  randomCircleTl.to(circles, {
      x: () => gsap.utils.random(-40, 40, 5),
      y: () => gsap.utils.random(-40, 40, 5),
      scale: 0,
      transformOrigin: "center",
    })
    .to(circles, {
      scale: () => gsap.utils.random(0.7, 1, 0.1),
      duration: 1,
      ease: "power3.inOut",
      stagger: 0.2,
    });
}
