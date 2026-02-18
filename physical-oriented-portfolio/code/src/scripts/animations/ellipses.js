import gsap from "gsap";

export function setupEllipses() {
  const ellipseRoot = document.querySelector("#ellipse");
  const ellipseOrigin = ellipseRoot?.querySelector("ellipse");
  if (!ellipseRoot || !ellipseOrigin) return;

  const numOfEllipses = 10;

  for (let i = 0; i < numOfEllipses; i++) {
    const clonedEllipse = ellipseOrigin.cloneNode(true);
    ellipseRoot.appendChild(clonedEllipse);
  }

  const ellipses = gsap.utils.toArray("#ellipse .ellipse");
  if (!ellipses.length) return;

  ellipses.forEach((ellipse) => {
    gsap.set(ellipse, {
      transformOrigin: "bottom center",
    });
  });

  gsap.to(ellipses, {
    y: 50,
    fill: "#9d2719",
    ease: "power3.inOut",
    stagger: 0.1,
    repeat: -1,
    duration: 1,
    yoyo: true,
  });
}
