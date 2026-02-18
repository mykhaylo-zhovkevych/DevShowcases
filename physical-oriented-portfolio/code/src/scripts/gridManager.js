/**
 * Creates a grid of tiles based on the provided configuration object.
 * And creates tiles as positioning layer including featured ones.
 * Generic tiles have helper elements for visualization.
 * @param {*} gridElement
 * @param {*} obj
 */
export function buildTileOfGtid(gridElement, obj) {
  const cols = obj.cols;
  const rows = obj.rows;
  const featured = obj.featured ?? [];

  const totalTilesInGrid = cols * rows;

  gridElement.innerHTML = "";

  const blocked = new Set();
  const tileIndex = (r, c) => (r - 1) * cols + (c - 1);

  // Add featured tiles and mark block slot
  for (const t of obj.featured) {
    const tile = document.createElement("div");
    tile.className = `tile tile--featured tile--${t.id}`;
    tile.dataset.id = t.id;

    tile.style.gridColumn = `${t.col} / span ${t.colSpan}`;
    tile.style.gridRow = `${t.row} / span ${t.rowSpan}`;

    gridElement.appendChild(tile);

    const coveredRowEnd = t.row + t.rowSpan;
    const coveredColEnd = t.col + t.colSpan;

    for (let rr = t.row; rr < coveredRowEnd; rr++) {
      for (let cc = t.col; cc < coveredColEnd; cc++) {
        blocked.add(tileIndex(rr, cc));
      }
    }
  }

  const slots = new Array(totalTilesInGrid);

  for (let i = 0; i < totalTilesInGrid; i++) {
    const r = Math.floor(i / cols) + 1;
    const c = (i % cols) + 1;

    const slot = document.createElement("div");
    slot.className = "tile tile--slot";
    slot.dataset.slot = String(i);

    slot.style.gridColumn = `${c} / span 1`;
    slot.style.gridRow = `${r} / span 1`;

    if (blocked.has(i)) {
      slot.classList.add("tile--blocked");
      slot.dataset.blocked = "1";
    }

    gridElement.appendChild(slot);
    slots[i] = slot;
  }

  return { slots, blocked, rows, cols };
}

export function buildAllGrids(gridElements) {
  const mapped = gridElements.map(({ elId, data }) => {
    const el = document.getElementById(elId);
    if (!el) return null;

    const result = buildTileOfGtid(el, data);
    // New object
    return { elId, el, data, ...result };
  });
  // Removes nulls from array
  const filtered = mapped.filter(Boolean);
  console.log("built all grids", filtered);
  return filtered;
}

export function mountSvgIntoSlot(gridEl, slotIndex, svgMarkup) {
  const slotEl = gridEl.querySelector(`.tile--slot[data-slot="${slotIndex}"]`);
  if (!slotEl) return;

  const box = document.createElement("div");
  box.className = "box";
  box.dataset.slot = String(slotIndex);
  box.innerHTML = svgMarkup;
  gridEl.appendChild(box);
}
