import gsap from "gsap";
import SplitType from "split-type";

const TITLE_VISIBILITY_THRESHOLD = 0.5;

function animateTitleOnView(titleEl) {
  if (!titleEl || titleEl.dataset.titleAnimationReady === "true") return;
  titleEl.dataset.titleAnimationReady = "true";

  const split = new SplitType(titleEl, { types: "chars" });

  gsap.set(split.chars, { y: -100, opacity: 0 });

  const tl = gsap.timeline({ paused: true }).to(split.chars, {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 0.5,
    ease: "power2.out",
    clearProps: "transform,opacity",
  });

  const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry?.isIntersecting) return;

      tl.play();
      observer.disconnect();
    },
    { threshold: TITLE_VISIBILITY_THRESHOLD }
  );

  observer.observe(titleEl);
}

export function initTitleAnimations(root) {
  if (!root) return
  root.querySelectorAll("[data-animate-title]").forEach(animateTitleOnView);
}