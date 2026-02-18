import gsap from "gsap";

export function setupArrows() {
  if (!document.querySelector("#arrow-1")) return;

  const arrowTL = gsap.timeline({ repeat: -1 });

  arrowTL
    .to("#arrow-1", {
      scale: 0,
      transformOrigin: "top center",
      duration: 1,
      ease: "power3.inOut",
    })
    .to(
      "#arrow-2",
      {
        y: -50,
        duration: 1,
        ease: "power3.inOut",
      },
      "<"
    )
    .to("#arrow-3", {
      y: -50,
      duration: 1,
      ease: "power3.inOut",
    })
    .to("#arrow-2", {
      scale: 0,
      transformOrigin: "top center",
      duration: 1,
      ease: "power3.inOut",
    })
    .to(
      "#arrow-3",
      {
        y: -100,
        duration: 1,
        ease: "power3.inOut",
      },
      "<"
    )
    .to("#arrow-4", {
      y: -100,
      duration: 1,
      ease: "power3.inOut",
    });
}
