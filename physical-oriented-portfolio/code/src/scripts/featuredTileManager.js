export function initFeaturedTileContent(gridEl, obj) {
  if (!obj?.featured?.length) return;

  for (const f of obj.featured) {
    const tplId = f.content?.template;
    if (!tplId) continue;

    const tile = gridEl.querySelector(`.tile--featured[data-id="${f.id}"]`);
    if (!tile) continue;

    tile.innerHTML = "";

    const template = document.getElementById(tplId);
    if (!template) continue;

    const clone = template.content.cloneNode(true);
    // Creates a DocumentFragment 

    fillFields(clone, f.content.data);
    renderLists(clone, f.content.data);

    tile.appendChild(clone);
  }
}

function fillFields(rootEl, data) {
  if (!data) return;

  rootEl.querySelectorAll("[data-field]").forEach((el) => {
    //Data-field 
    const key = el.dataset.field;
    //Getting data to from the key
    const value = data[key];
    if (value == null) return;
    
    if (el.dataset.fieldMode === "html") {
      //Render as Html
      el.innerHTML = String(value);
    } else {
      el.textContent = String(value);
    }
  });

  rootEl.querySelectorAll("[data-attr]").forEach((el) => {
    const spec = el.dataset.attr; 
    // e.g. "href:url" or "src:preview" or "data-index:index"
    const [attrName, key] = spec.split(":");
    if (!attrName || !key) return;

    const value = data[key];
    if (value == null) return;
    el.setAttribute(attrName, String(value));
  });
}

function renderLists(rootEl, data) {
  if (!data) return;

  const mapper = {
    projects: "tpl-project-row",
    previews: "tpl-project-preview",
    frameworks: "tpl-framework-chip",
    skills: "tpl-skills-card",
    paragraphs: "tpl-self-paragraph",
    icons: "tpl-self-icon",
    links: "tpl-impressum-link",
  };

  rootEl.querySelectorAll("[data-list]").forEach((container) => {
    const listName = container.dataset.list;

    //Preview is generated from "projects"
    const rawItems = listName === "previews" ? data.projects : data[listName];
    console.log("rendering list", listName, "with items", rawItems);

    if (!Array.isArray(rawItems)) return;

    const tplId = mapper[listName];
    if (!tplId) return;

    const itemTpl = document.getElementById(tplId);
    if (!itemTpl) return;

    container.innerHTML = "";

    rawItems.forEach((item, index) => {
      const itemFragment = itemTpl.content.cloneNode(true);
      const normalized = normalizeItem(item, index);

      if (listName === "skills") {
        const fill = itemFragment.querySelector("[data-skill-fill]");
        const pct = Math.max(0, Math.min(100, Number(normalized.value)));
        if (fill) {
          fill.style.width = `${pct}%`;
        }
      }

      fillFields(itemFragment, normalized);
      renderLists(itemFragment, normalized);
      

      container.appendChild(itemFragment);
    });
  });
}

function normalizeItem(item, index) {
  if (item && typeof item === "object") {
    return { ...item, index };    
  }
  return item;
}
