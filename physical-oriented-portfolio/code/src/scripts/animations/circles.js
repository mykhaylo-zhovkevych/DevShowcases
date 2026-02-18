import gsap from "gsap";

export function setupCircles() {
  const circlesWrap = document.querySelector("#circles");
  const circles = gsap.utils.toArray(".circle");
  if (!circlesWrap || !circles.length) return;

  gsap.to(circlesWrap, {
    y: -200,
    duration: 1.5,
    ease: "none",
    repeat: -1,
  });

  gsap.to(circles, {
    rotate: 360,
    transformOrigin: "50% 50%",
    duration: 3,
    repeat: -1,
    ease: "none",
  });
}
