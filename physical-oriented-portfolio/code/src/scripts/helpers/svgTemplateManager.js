// Bauhaus palette
// black  #000000
// red    #be1e2d
// yellow #ffde17
// white  #ffffff
// blue   #21409a

export const SVG_TEMPLATES = {
  eye: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <clipPath id="clip-mask">
      <path fill="none" d="M95.86 50S75.33 79.47 50 79.47 4.14 50 4.14 50 24.67 20.53 50 20.53 95.86 50 95.86 50Z" />
    </clipPath>
  </defs>
  <path fill="#ffffff" d="M0 0h100v100H0z" />
  <g class="eye">
    <path fill="#ffde17" d="M95.86 50S75.33 79.47 50 79.47 4.14 50 4.14 50 24.67 20.53 50 20.53 95.86 50 95.86 50Z" />
    <g clip-path="url(#clip-mask)">
      <circle class="eye-pupil" cx="50" cy="50" r="20.91" fill="#000000" />
    </g>
  </g>
</svg>
`,

  stars: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path fill="#ffffff" d="M0 0h100v100H0z" />
  <path class="star" d="M42.74 25.48c-10.29 0-18.64-8.34-18.64-18.64 0 10.29-8.34 18.64-18.64 18.64 10.29 0 18.64 8.34 18.64 18.64 0-10.29 8.34-18.64 18.64-18.64Z" fill="#21409a" />
  <path class="star" d="M94.54 25.48c-10.29 0-18.64-8.34-18.64-18.64 0 10.29-8.34 18.64-18.64 18.64 10.29 0 18.64 8.34 18.64 18.64 0-10.29 8.34-18.64 18.64-18.64Z" fill="#21409a" />
  <path class="star" d="M42.74 74.52c-10.29 0-18.64-8.34-18.64-18.64 0 10.29-8.34 18.64-18.64 18.64 10.29 0 18.64 8.34 18.64 18.64 0-10.29 8.34-18.64 18.64-18.64Z" fill="#21409a" />
  <path class="star" d="M94.54 74.52c-10.29 0-18.64-8.34-18.64-18.64 0 10.29-8.34 18.64-18.64 18.64 10.29 0 18.64 8.34 18.64 18.64 0-10.29 8.34-18.64 18.64-18.64Z" fill="#21409a" />
</svg>
`,

  circles: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <clipPath id="a">
      <path fill="none" d="M0 0h100v100H0z" />
    </clipPath>
  </defs>
  <path fill="#ffffff" d="M0 0h100v100H0z" />
  <g clip-path="url(#a)">
    <g id="circles">
      <g class="circle">
        <circle cx="50" cy="50" r="50" fill="#21409a" />
        <path d="M100 50c0 27.61-22.39 50-50 50V0c27.61 0 50 22.39 50 50Z" fill="#000000" />
      </g>
      <g class="circle">
        <circle cx="50" cy="250" r="50" fill="#21409a" />
        <path d="M100 250c0 27.61-22.39 50-50 50V200c27.61 0 50 22.39 50 50Z" fill="#000000" />
      </g>
      <g class="circle">
        <circle cx="50" cy="150" r="50" fill="#21409a" />
        <path d="M0 150c0-27.61 22.39-50 50-50v100c-27.61 0-50-22.39-50-50Z" fill="#000000" />
      </g>
    </g>
  </g>
</svg>
`,

  morphBoxes: `
<svg id="morph-boxes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path fill="#ffffff" d="M0 0h100v100H0z" />
  <path id="morph-box-1" class="morph-box" d="M28.88 8.4H9.87v19.01l19.01 19.01h19.01V27.41L28.88 8.4z" fill="#000000" />
  <path id="box-top-1" d="M9.87 8.4h19.01v19.01H9.87z" fill="#21409a" />
  <path id="morph-box-2" class="morph-box" d="M73.18 8.4H54.17v19.01l19.01 19.01h19.01V27.41L73.18 8.4z" fill="#000000" />
  <path id="box-top-2" d="M54.17 8.4h19.01v19.01H54.17z" fill="#21409a" />
  <path id="morph-box-3" class="morph-box" d="M28.88 53.58H9.87v19.01L28.88 91.6h19.01V72.59L28.88 53.58z" fill="#000000" />
  <path id="box-top-3" d="M9.87 53.58h19.01v19.01H9.87z" fill="#21409a" />
  <path id="morph-box-4" class="morph-box" d="M73.18 53.58H54.17v19.01L73.18 91.6h19.01V72.59L73.18 53.58z" fill="#000000" />
  <path id="box-top-4" d="M54.17 53.58h19.01v19.01H54.17z" fill="#21409a" />
  <g class="morph-shapes">
    <polygon id="morph-shape-4" points="92.19 72.59 73.18 72.59 73.18 91.6 73.18 91.6 92.19 91.6 92.19 72.59 92.19 72.59" fill="none" />
    <polygon id="morph-shape-2" points="92.19 27.41 73.18 27.41 73.18 46.42 73.18 46.42 92.19 46.42 92.19 27.41 92.19 27.41" fill="none" />
    <polygon id="morph-shape-1" points="47.89 27.41 28.88 27.41 28.88 46.42 28.88 46.42 47.89 46.42 47.89 27.41 47.89 27.41" fill="none" />
    <polygon id="morph-shape-3" points="47.89 72.59 28.88 72.59 28.88 91.6 28.88 91.6 47.89 91.6 47.89 72.59 47.89 72.59" fill="none" />
  </g>
</svg>
`,

halfCircles: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <clipPath id="half-circle-clip-path">
      <path fill="none" d="M0 0h100v100H0z" />
    </clipPath>
  </defs>
  <path fill="#ffffff" d="M0 0h100v100H0z" />
  <g clip-path="url(#half-circle-clip-path)">
    <g id="half-circles">
      <path id="half-circle-1" class="half-circle" d="M0 50C0 22.39 22.39 0 50 0v100C22.39 100 0 77.61 0 50Z" fill="#21409a" />
      <path id="half-circle-2" class="half-circle" d="M50 50c0-27.61 22.39-50 50-50v100c-27.61 0-50-22.39-50-50Z" fill="#21409a" />
      <path id="half-circle-3" class="half-circle" d="M100 50c0-27.61 22.39-50 50-50v100c-27.61 0-50-22.39-50-50Z" fill="#21409a" />
      <path id="half-circle-4" class="half-circle" d="M150 50c0-27.61 22.39-50 50-50v100c-27.61 0-50-22.39-50-50Z" fill="#21409a" />
    </g>
  </g>
</svg>
`,

  followingStars: `
<svg id="following-stars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path fill="#ffffff" d="M0 0h100v100H0z" />
  <path class="rotating-star" fill="#be1e2d" d="M100 50C72.39 50 50 27.61 50 0c0 27.61-22.39 50-50 50 27.61 0 50 22.39 50 50 0-27.61 22.39-50 50-50Z" />
  <path class="following-star" fill="#ffde17" d="M100 50C72.39 50 50 27.61 50 0c0 27.61-22.39 50-50 50 27.61 0 50 22.39 50 50 0-27.61 22.39-50 50-50Z" />
  <path class="following-star" fill="#ffde17" d="M100 50C72.39 50 50 27.61 50 0c0 27.61-22.39 50-50 50 27.61 0 50 22.39 50 50 0-27.61 22.39-50 50-50Z" />
  <path class="following-star" fill="#ffde17" d="M100 50C72.39 50 50 27.61 50 0c0 27.61-22.39 50-50 50 27.61 0 50 22.39 50 50 0-27.61 22.39-50 50-50Z" />
  <path class="following-star" fill="#ffde17" d="M100 50C72.39 50 50 27.61 50 0c0 27.61-22.39 50-50 50 27.61 0 50 22.39 50 50 0-27.61 22.39-50 50-50Z" />
</svg>
`,

  randomCircles: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M0 0h100v100H0z" fill="#ffffff" />
  <circle class="random-circle" cx="50" cy="50" r="50" fill="#ffde17" />
  <circle class="random-circle" cx="50" cy="50" r="40" fill="#21409a" />
  <circle class="random-circle" cx="50" cy="50" r="30" fill="#be1e2d" />
</svg>
`,

  stretchBars: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path fill="#ffffff" d="M0 0h100v100H0z" />
  <g class="bar">
    <path id="bar-1" d="M71.97 6.27c-6.07 0-10.98 4.92-10.98 10.98v52.27c0 6.07 4.92 10.98 10.98 10.98s10.98-4.92 10.98-10.98V17.25c0-6.07-4.92-10.98-10.98-10.98Z" fill="#be1e2d" />
    <circle id="bar-1-circle-1" cx="71.97" cy="17.25" r="10.98" fill="#21409a" />
    <circle cx="71.97" cy="69.52" r="10.98" fill="#ffde17" />
    <path id="morph-bar-1" d="M71.97 48.56c-6.07 0-10.98 4.92-10.98 10.98v9.98c0 6.07 4.92 10.98 10.98 10.98s10.98-4.92 10.98-10.98v-9.98c0-6.07-4.92-10.98-10.98-10.98Z" fill="none" />
  </g>
  <g class="bar">
    <path id="bar-2" d="M50 22.42c-6.07 0-10.98 4.92-10.98 10.98v52.27c0 6.07 4.92 10.98 10.98 10.98s10.98-4.92 10.98-10.98V33.4c0-6.07-4.92-10.98-10.98-10.98Z" fill="#21409a" />
    <circle cx="50" cy="33.41" r="10.98" fill="#ffde17" />
    <circle id="bar-2-circle-2" cx="50" cy="85.68" r="10.98" fill="#000000" />
    <path id="morph-bar-2" d="M50.06 22.42c-6.07 0-10.98 4.92-10.98 10.98v9.98c0 6.07 4.92 10.98 10.98 10.98s10.98-4.92 10.98-10.98V33.4c0-6.07-4.92-10.98-10.98-10.98Z" fill="none" />
  </g>
  <g class="bar">
    <path id="bar-3" d="M28.15 7.27c-6.07 0-10.98 4.92-10.98 10.98v52.27c0 6.07 4.92 10.98 10.98 10.98s10.98-4.92 10.98-10.98V18.26c0-6.07-4.92-10.98-10.98-10.98Z" fill="#be1e2d" />
    <circle id="bar-3-circle-1" cx="28.15" cy="18.26" r="10.98" fill="#000000" />
    <circle cx="28.15" cy="70.53" r="10.98" fill="#21409a" />
    <path id="morph-bar-3" fill="none" d="M27.86 37.18c-6.06.09-10.81 5.31-10.81 11.38v22.01c0 6.07 4.74 11.28 10.81 11.38 6.15.1 11.16-4.86 11.16-10.98v-22.8c0-6.12-5.01-11.08-11.16-10.98Z" />
  </g>
</svg>
`,

  disk: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path fill="#ffffff" d="M0 0h100v100H0z" />
  <g id="disk">
    <path fill="none" d="M0 0h100v100H0z" />
    <path fill="#21409a" d="M100 50c0 27.61-22.39 50-50 50S0 77.61 0 50h100Z" />
  </g>
  <circle cx="50" cy="50" r="25" fill="#000000" />
</svg>
`,

  arrows: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <clipPath id="a">
      <path fill="none" d="M0 0h100v100H0z" />
    </clipPath>
  </defs>
  <path fill="#ffffff" d="M0 0h100v100H0z" />
  <g clip-path="url(#a)">
    <path id="arrow-1" d="M50 0 0 50h100L50 0z" fill="#be1e2d" />
    <path id="arrow-2" d="M50 50 0 100h100L50 50z" fill="#000000" />
    <path id="arrow-3" d="M50 100 0 150h100l-50-50z" fill="#be1e2d" />
    <path id="arrow-4" d="M50 150 0 200h100l-50-50z" fill="#000000" />
  </g>
</svg>
`,

  lines: `
<svg id="lines" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect fill="#ffffff" width="100" height="100" />
  <path class="line" fill="none" stroke="#21409a" stroke-miterlimit="10" stroke-width="1" stroke-linecap="round" d="M50 9.95v80.32" />
</svg>
`,

  ellipse: `
<svg id="ellipse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path fill="#ffffff" d="M0 0h100v100H0z" />
  <ellipse class="ellipse" cx="50" cy="25" fill="#ffde17" rx="50" ry="25" />
</svg>
`,
};
