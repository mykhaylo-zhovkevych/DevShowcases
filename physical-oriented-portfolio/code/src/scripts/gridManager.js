export function buildTileOfGtid(gridElement, obj) {
  const cols = obj.cols;
  const rows = obj.rows;

  const totalTilesInGrid = cols * rows;

  gridElement.innerHTML = "";

  const tilesOccupied = new Set();
  const tileIndex = (r, c) => (r - 1) * cols + (c - 1);

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
        tilesOccupied.add(tileIndex(rr, cc));
      }
    }
  }

  const freeTiles = totalTilesInGrid - tilesOccupied.size;

  for (let i = 0; i < freeTiles; i++) {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.dataset.i = String(i);

    gridElement.appendChild(tile);
  }
}