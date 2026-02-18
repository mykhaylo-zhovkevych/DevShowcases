import gsap from "gsap";

export function setupStretchBars() {
  const bars = gsap.utils.toArray(".bar");
  if (!bars.length) return;

  gsap.to(bars, {
    y: -5,
    duration: 1,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    stagger: 1,
  });

  if (document.querySelector("#bar-1") && document.querySelector("#morph-bar-1")) {
    gsap.to("#bar-1", {
      morphSVG: "#morph-bar-1",
      duration: 1,
      ease: "power3.inOut",
      repeat: -1,
      yoyo: true,
    });
  }

  if (document.querySelector("#bar-1-circle-1")) {
    gsap.to("#bar-1-circle-1", {
      y: 40,
      duration: 1,
      ease: "power3.inOut",
      repeat: -1,
      yoyo: true,
    });
  }

  if (document.querySelector("#bar-2") && document.querySelector("#morph-bar-2")) {
    gsap.to("#bar-2", {
      morphSVG: "#morph-bar-2",
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }

  if (document.querySelector("#bar-2-circle-2")) {
    gsap.to("#bar-2-circle-2", {
      y: -40,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }

  if (document.querySelector("#bar-3") && document.querySelector("#morph-bar-3")) {
    gsap.to("#bar-3", {
      morphSVG: "#morph-bar-3",
      duration: 2,
      ease: "circ",
      repeat: -1,
      yoyo: true,
    });
  }

  if (document.querySelector("#bar-3-circle-1")) {
    gsap.to("#bar-3-circle-1", {
      y: 30,
      duration: 2,
      ease: "circ",
      repeat: -1,
      yoyo: true,
    });
  }
}