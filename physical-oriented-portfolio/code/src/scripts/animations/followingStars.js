import gsap from "gsap";

export function setupFollowingStars() {
  const starContainer = document.querySelector("#following-stars");
  const stars = gsap.utils.toArray(".following-star");
  if (!starContainer || !stars.length) return;

  gsap.set(stars, {
    xPercent: -50,
    yPercent: -50,
    x: 0,
    y: 100,
    transformOrigin: "center",
    scale: 0,
  });

  let initialMouseMove = true;
  let timer;

  starContainer.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const containerRect = starContainer.getBoundingClientRect();
    const centerX = containerRect.left;
    const centerY = containerRect.top;
    const x = clientX - centerX;
    const y = clientY - centerY;

    if (initialMouseMove) {
      initialMouseMove = false;
      gsap.to(stars, {
        scale: 0.4,
        stagger: 0.02,
        ease: "sine.out",
      });
    }

    const mouseStopped = () => {
      initialMouseMove = true;
      gsap.to(stars, {
        scale: 0,
        stagger: 0.02,
        ease: "sine.inOut",
      });
    };

    clearTimeout(timer);
    timer = setTimeout(mouseStopped, 20);

    gsap.to(stars, {
      duration: 0.5,
      overwrite: "auto",
      x: x / 2,
      y: y / 2,
      stagger: 0.1,
      ease: "none",
    });
  });
}
