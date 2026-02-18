import gsap from "gsap";

export function setupDisk() {
  const disk = document.querySelector("#disk");
  if (!disk) return;

  gsap.to(disk, {
    rotate: 360,
    transformOrigin: "50% 50%",
    duration: 3,
    ease: "elastic.out(1,0.5)",
    repeat: -1,
    yoyo: true,
  });
}
