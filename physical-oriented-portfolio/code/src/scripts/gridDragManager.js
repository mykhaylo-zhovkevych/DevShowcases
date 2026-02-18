import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export function initGridDragLayour(gridEl) {
  const slotEls = Array.from(gridEl.querySelectorAll(".tile--slot"));
  if (!slotEls.length) return;

  const layer = createCellOverlay(gridEl);
  let cells = buildCellsFromSlots(gridEl, slotEls);

  const blocked = new Set(cells.filter((c) => c.blocked).map((c) => c.index));
  let slots = new Array(cells.length).fill(null);

  // Boxes must be rendered after cells are measured. And they must belong to the gridEl
  const boxElements = Array.from(gridEl.querySelectorAll(".box"));

  // Move into overlay layer
  boxElements.forEach((box) => {
    layer.appendChild(box);
    box.style.pointerEvents = "auto";

    const wanted = Number(box.dataset.slot);
    const startIndex = Number.isFinite(wanted) ? wanted : findFirstFreeIndex(slots, blocked);

    if (startIndex == null) return;
    slots[startIndex] = makeSortable(box, startIndex);
  });

  renderSlots();

  const onResize = () => {
    cells = buildCellsFromSlots(gridEl, slotEls);

    slots.forEach((sortableItem, index) => {
      if (!sortableItem) return;
      sortableItem.setIndex(index);
    });
  };

  window.addEventListener("resize", onResize);

  // Re-measure once after initial layout settles (fixes first-load mis-measure)
  requestAnimationFrame(() => requestAnimationFrame(onResize));


  function renderSlots() {
    slots.forEach((sortableItem) => {
      if (!sortableItem) return;
      layer.appendChild(sortableItem.element);
    });

    slots.forEach((sortableItem, index) => {
      if (!sortableItem) return;
      sortableItem.setIndex(index);
    });
  }

  function changeIndex(item, to) {
    if (to < 0 || to >= slots.length) return;
    if (blocked.has(to)) return;

    const from = item.index;
    if (from === to) return;

    const target = slots[to];

    if (target) {
      slots[to] = item;
      slots[from] = target;
      target.index = from;
      item.index = to;
    } else {
      slots[to] = item;
      slots[from] = null;
      item.index = to;
    }

    renderSlots();
  }

  function makeSortable(boxElement, initialIndex) {
    const content = boxElement.querySelector("svg") || boxElement;

    // Controller object
    const sortable = {
      element: boxElement,
      index: initialIndex,
      cell: cells[initialIndex],
      dragger: null,
      setIndex,
    };

    Object.assign(boxElement.style, {
      position: "absolute",
      left: "0",
      top: "0",
      boxSizing: "border-box",
    });

    boxElement.style.width = `${sortable.cell.w}px`;
    boxElement.style.height = `${sortable.cell.h}px`;

    gsap.set(boxElement, { x: sortable.cell.x, y: sortable.cell.y });

    const animation = gsap.to(content, {
      duration: 0.25,
      scale: 1.06,
      force3D: true,
      paused: true,
    });

    sortable.dragger = new Draggable(boxElement, {
      type: "x,y",
      bounds: gridEl,
      onDragStart() {
        animation.play();
        boxElement.style.zIndex = "10";
        this.update();
      },
      onDrag() {
        const to = findNearestCellIndex(this.x, this.y, boxElement, cells, blocked);
        if (to != null && to !== sortable.index) changeIndex(sortable, to);
      },
      onRelease() {
        animation.reverse();
        boxElement.style.zIndex = "";
        layoutToCell();
      },
    });

    function setIndex(newIndex) {
      sortable.index = newIndex;
      sortable.cell = cells[newIndex];

      sortable.element.dataset.slot = String(newIndex);

      boxElement.style.width = `${sortable.cell.w}px`;
      boxElement.style.height = `${sortable.cell.h}px`;

      if (!sortable.dragger.isDragging) layoutToCell();
    }

    function layoutToCell() {
      gsap.to(sortable.element, {
        duration: 0.2,
        x: sortable.cell.x,
        y: sortable.cell.y,
        overwrite: "auto",
      });
    }

    return sortable;
  }
}

function createCellOverlay(gridEl) {
  let layer = gridEl.querySelector(".grid-layer");
  if (!layer) {
    layer = document.createElement("div");
    layer.className = "grid-layer";
    gridEl.appendChild(layer);
  }
  Object.assign(layer.style, {
    position: "absolute",
    inset: "0",
    pointerEvents: "none",
  });
  return layer;
}

function buildCellsFromSlots(gridEl, slotEls) {
  const gridRect = gridEl.getBoundingClientRect();

  return slotEls
    .map((slotEl) => {
      const index = Number(slotEl.dataset.slot);

      const r = slotEl.getBoundingClientRect();
      console.log("slot", index, "rect", r);

      const x = r.left - gridRect.left;
      const y = r.top - gridRect.top;
      const w = r.width;
      const h = r.height;

      return {
        index,
        blocked: slotEl.dataset.blocked === "1" || slotEl.classList.contains("tile--blocked"),
        x,
        y,
        w,
        h,
        cx: x + w / 2,
        cy: y + h / 2,
      };
    })
    .sort((a, b) => a.index - b.index);
}

function findNearestCellIndex(x, y, el, cells, blocked) {
  const bw = el.offsetWidth;
  const bh = el.offsetHeight;
  const bcx = x + bw / 2;
  const bcy = y + bh / 2;

  let best = null;
  let bestDist = Infinity;

  for (const c of cells) {
    if (blocked.has(c.index)) continue;

    const dx = c.cx - bcx;
    const dy = c.cy - bcy;
    const d = dx * dx + dy * dy;

    if (d < bestDist) {
      bestDist = d;
      best = c.index;
    }
  }

  return best;
}

function findFirstFreeIndex(slots, blocked) {
  for (let i = 0; i < slots.length; i++) {
    if (blocked.has(i)) continue;
    if (slots[i] == null) return i;
  }
  return null;
}