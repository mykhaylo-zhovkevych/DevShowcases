import gsap from "gsap";

export function initSelfIconRailReveal(gridEl) {
  const root = gridEl.querySelector("[data-self-root]");
  if (!root) return;

  const rail = root.querySelector("[data-self-icon-rail]");
  if (!rail) return;

  const icons = Array.from(rail.querySelectorAll("[data-self-icon]"));
  if (!icons.length) return;

  const btn = gridEl.querySelector("[data-self-reveal]");
  if (!btn) return;

  const tl = gsap.timeline({
    paused: true,
    defaults: { duration: 0.6, ease: "power3.out" }
  });

  gsap.set(icons, { autoAlpha: 0, y: 100, scale: 0.5 });

  tl.to(icons, {
    autoAlpha: 1,
    y: 0,
    scale: 1,
    stagger: 0.2
  });

  let shown = false;

  btn.addEventListener("click", () => {
    if (tl.isActive()) return;

    shown = !shown;

    shown ? tl.play(0) : tl.reverse();
  });
}