import gsap from "gsap";

export function setupHalfCircles() {
  if (!document.querySelector("#half-circle-1")) return;

  const halfCircleTl = gsap.timeline({ repeat: -1 }).timeScale(0.5);
  const halfCircleEase = "power2.inOut";
  const halfCirclesScale = {
    scale: 0,
    transformOrigin: "0% 50%",
    ease: halfCircleEase,
  };

  halfCircleTl
    .to("#half-circle-1", { ...halfCirclesScale })
    .to(
      "#half-circle-2",
      {
        x: -50,
        ease: halfCircleEase,
      },
      "<"
    )
    .to(
      "#half-circle-3",
      {
        x: -50,
        transformOrigin: "0% 50%",
        ease: halfCircleEase,
      },
      "<"
    )
    .to(
      "#half-circle-4",
      {
        x: -50,
        ease: halfCircleEase,
      },
      "<"
    )
    .to("#half-circle-2", { ...halfCirclesScale })
    .to(
      "#half-circle-3",
      {
        x: -100,
        ease: halfCircleEase,
      },
      "<"
    )
    .to(
      "#half-circle-4",
      {
        x: -100,
        ease: halfCircleEase,
      },
      "<"
    );
}
