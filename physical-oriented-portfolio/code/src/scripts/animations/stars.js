import gsap from "gsap";

export function setupStars() {
  const stars = gsap.utils.toArray(".star");
  if (!stars.length) return;

  const starTL = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

  starTL.to(stars, {
      rotate: 360,
      transformOrigin: "50% 50%",
      duration: 1,
      stagger: 0.5,
    })
    .to(stars, {
      scale: 1.5,
      transformOrigin: "50% 50%",
      duration: 0.2,
      ease: "power1.out",
      repeat: 1,
      yoyo: true,
    });
}
