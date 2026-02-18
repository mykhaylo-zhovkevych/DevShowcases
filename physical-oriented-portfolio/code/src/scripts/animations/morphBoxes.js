import gsap from "gsap";

export function setupMorphBoxes() {
  const morphBoxes = gsap.utils.toArray(".morph-box");
  if (!morphBoxes.length) return;

  const morphDuration = 1;

  morphBoxes.forEach((box, i) => {
    const index = i + 1;
    const topBox = document.querySelector(`#box-top-${index}`);

    gsap.to(box, {
      morphSVG: `#morph-shape-${index}`,
      duration: morphDuration,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      delay: i * 0.1,
    });

    if (!topBox) return;

    gsap.to(topBox, {
      y: 19,
      x: 19,
      duration: morphDuration,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      delay: i * 0.1,
    });
  });
}
