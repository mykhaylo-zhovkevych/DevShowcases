import gsap from "gsap";

export function setupEyeFollow(container) {
  if (!(container instanceof Element)) {
    return;
  }

  container.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const maxTrans = 20;
    const maxX = container.clientWidth / 2;
    const maxY = container.clientHeight / 2;
    
    const eye = document.querySelectorAll(".eye");
    const pupil = document.querySelectorAll(".eye-pupil");

    for (let i = 0; i < eye.length; i++) {
      const eyeRect = eye[i].getBoundingClientRect();
      const r = eyeRect.width / 2;
      const centerX = eyeRect.left + r;
      const centerY = eyeRect.top + r;

      const x = clientX - centerX;
      const y = clientY - centerY;

      const scaledX = (x / maxX) * maxTrans;
      const scaledY = (y / maxY) * maxTrans;

      gsap.to(pupil[i], { 
        xPercent: scaledX, 
        yPercent: scaledY, 
        duration: 0.2, 
        overwrite: "auto" 
      });
      gsap.to(eye[i],   { 
        xPercent: scaledX * 0.4, 
        yPercent: scaledY * 0.4, 
        duration: 0.2, 
        overwrite: "auto" 
      });
    }
  });
}