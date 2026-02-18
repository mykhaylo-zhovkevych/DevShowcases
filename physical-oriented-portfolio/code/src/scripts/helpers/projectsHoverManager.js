import gsap from "gsap";

export function initProjectsHover(gridEl) {
  const root = gridEl.querySelector("[data-projects-root]");
  if (!root) return;

  const rows = Array.from(root.querySelectorAll("[data-project-row]"));
  const preview = root.querySelector("[data-preview]");
  const previewImages = Array.from(root.querySelectorAll("[data-preview-item]"));

  if (!rows.length || !preview || !previewImages.length) return;

  const moveX = gsap.quickTo(preview, "x", { duration: 2, ease: "power3.out" });
  const moveY = gsap.quickTo(preview, "y", { duration: 2, ease: "power3.out" });

  const showPreview = () => {
    gsap.to(preview, { autoAlpha: 1, scale: 1, duration: 0.3, ease: "power2.in" });
  };

  const hidePreview = () => {
    gsap.to(preview, { autoAlpha: 0, scale: 0.9, duration: 0.3, ease: "power2.out" });
  };

  const setActivePreview = (index) => {
    previewImages.forEach((img, i) => {
      img.classList.toggle("is-active", i === index);
    });
  };

  // Init state
  gsap.set(preview, { autoAlpha: 0, scale: 0.9 });

  const onMove = (e) => {
    moveX(e.clientX + 24);
    moveY(e.clientY + 24);
  };

  root.addEventListener("mousemove", onMove);

  rows.forEach((row) => {
    const overlay = row.querySelector("[data-row-overlay]");

    const onEnter = () => {
      const idx = Number(row.dataset.index);
      // If non Nan, Infinity
      if (Number.isFinite(idx)) setActivePreview(idx);

      if (overlay) {
        gsap.killTweensOf(overlay);
        gsap.set(overlay, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
      });
      gsap.to(overlay, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.25,
        ease: "power2.out"
      });
      }

      row.classList.add("is-hover");
      showPreview();
    };

    const onLeave = () => {
      if (overlay) {
        gsap.killTweensOf(overlay);
        gsap.to(overlay, {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          duration: 0.25,
          ease: "power2.in",
        });
      }

      row.classList.remove("is-hover");
      hidePreview();
    };

    row.addEventListener("mouseenter", onEnter);
    row.addEventListener("mouseleave", onLeave);


  });

  const onRootLeave = () => {
    rows.forEach((row) => row.classList.remove("is-hover"));
    hidePreview();
  };

  root.addEventListener("mouseleave", onRootLeave);

}