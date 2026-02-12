import './styles/index.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { initHeaderReveal } from "./scripts/headerManager.js";
import { buildTileOfGtid } from "./scripts/gridManager.js";
import { initShowcaseHorizontalScroll } from "./scripts/articleManager.js";

initHeaderReveal();
initShowcaseHorizontalScroll();

const intoartGrid = document.getElementById("intoartGrid");
const aboutmeGrid = document.getElementById("aboutmeGrid");

const showcaseoneGrid = document.getElementById("showcaseArtGrid");
const showcasetwoGrid = document.getElementById("showcaseSelfGrid");
const showcasethreeGrid = document.getElementById("showcaseProjectsGrid");

const contactGrid = document.getElementById("contactGrid");
const impressumGrid = document.getElementById("impressumGrid");


if (intoartGrid) {
  buildTileOfGtid(intoartGrid, {
    cols: 4,
    rows: 2,
    featured: [
      { id: "hero", row: 1, col: 1, rowSpan: 1, colSpan: 2 }
    ]
  });
}

if (aboutmeGrid) {
  buildTileOfGtid(aboutmeGrid, {
    cols: 6,
    rows: 4,
    featured: [
      { id: "hero", row: 2, col: 1, rowSpan: 2, colSpan: 4 },
      { id: "side", row: 1, col: 5, rowSpan: 2, colSpan: 2 }
    ]
  });
}


if (showcaseoneGrid) {
  buildTileOfGtid(showcaseoneGrid, {
    cols: 6,
    rows: 4,
    featured: [
      { id: "hero", row: 2, col: 1, rowSpan: 2, colSpan: 4 },
      { id: "side", row: 1, col: 5, rowSpan: 2, colSpan: 2 } 
    ]
  });
}
if (showcasetwoGrid) {
  buildTileOfGtid(showcasetwoGrid, {
    cols: 6,
    rows: 4,
    featured: [
      { id: "hero", row: 2, col: 1, rowSpan: 2, colSpan: 4 },
      { id: "side", row: 1, col: 5, rowSpan: 2, colSpan: 2 }
    ]
  });
}
if (showcasethreeGrid) {
  buildTileOfGtid(showcasethreeGrid, {
    cols: 6,
    rows: 4,
    featured: [
      { id: "hero", row: 2, col: 1, rowSpan: 2, colSpan: 4 },
      { id: "side", row: 1, col: 5, rowSpan: 2, colSpan: 2 }
    ]
  });
}

if (contactGrid) {
  buildTileOfGtid(contactGrid, {
    cols: 6,
    rows: 4,
    featured: [
      { id: "hero", row: 2, col: 1, rowSpan: 2, colSpan: 4 },
      { id: "side", row: 1, col: 5, rowSpan: 2, colSpan: 2 }
    ]
  });
}

if (impressumGrid) {
  buildTileOfGtid(impressumGrid, {
    cols: 4,
    rows: 2,
    featured: [
      { id: "hero", row: 1, col: 1, rowSpan: 1, colSpan: 2 },
      { id: "side", row: 1, col: 3, rowSpan: 2, colSpan: 2 }
    ]
  });
}