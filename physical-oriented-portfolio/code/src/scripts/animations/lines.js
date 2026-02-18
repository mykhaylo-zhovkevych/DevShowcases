import gsap from "gsap";

export function setupLines() {
  const lineRoot = document.querySelector("#lines");
  const lineOrigin = lineRoot?.querySelector("path");
  if (!lineRoot || !lineOrigin) return;

  const numOfLines = 20;

  for (let i = 0; i < numOfLines; i++) {
    const clonedPath = lineOrigin.cloneNode(true);
    clonedPath.setAttribute("class", "line");
    lineRoot.appendChild(clonedPath);
  }

  const lines = gsap.utils.toArray("#lines .line");
  if (!lines.length) return;

  lines.forEach((line, i) => {
    gsap.set(line, {
      drawSVG: "100% 0%",
      rotate: (i * 180) / numOfLines,
      transformOrigin: "center",
    });
  });

  gsap.to(lines, {
    rotate: "+=360",
    ease: "power3.inOut",
    repeat: -1,
    stagger: 0.1,
    duration: 4,
  });
}
