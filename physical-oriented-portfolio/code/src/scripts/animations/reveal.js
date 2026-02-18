import gsap from "gsap";

export function revealBoxes({
  selector = ".box",
  duration = 0.8,
  stagger = 0,
  ease = "power1.inOut",
} = {}) {
  const boxes = gsap.utils.toArray(selector);
  if (!boxes.length) return;

  gsap.killTweensOf(boxes);
  gsap.set(boxes, { autoAlpha: 0 });

  gsap.to(boxes, {
    autoAlpha: 1,
    duration,
    stagger,
    ease,
  });
}
