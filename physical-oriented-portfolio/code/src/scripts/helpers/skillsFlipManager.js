import gsap from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

export function initSkillsFlip(gridEL) {

    const root = gridEL.querySelector("[data-skills-root]");
    if (!root) return;

    const grid = root.querySelector("[data-skills-grid]");
    if (!grid) return;

    const cards = () => Array.from(grid.querySelectorAll("[data-skill-card]"));

    const side = gridEL.querySelector("[data-skills-side]");
    const shuffleBtn = side?.querySelector("[data-skills-shuffle]");

    let active = null;
    let expanded = false;

    function setActive(card) {
        cards().forEach(c => c.classList.toggle("is-active", c === card));
        active = card;
    }

    function flipLayoutChange(mutator) {
        const state = Flip.getState(cards(), {
            props: "opacity,transform",
        });

        mutator();

        Flip.from(state, {
            duration: 0.5,
            ease: "power3.Out",
            stagger: 0.05,
        });
    }

    //Click card expand/shrink
    function toggleExpand(card) {
        flipLayoutChange(() => {
            if (!active || active !== card) {
                setActive(card);
                expanded = true;
                grid.classList.add("is-expanded");
                return;
            }

            expanded = !expanded;
            //Adds or removes bassed on bool
            grid.classList.toggle("is-expanded", expanded);

        });
    }

    grid.addEventListener("click", (e) => {
        const card = e.target.closest("[data-skill-card]");
        if (!card) return;
        toggleExpand(card);
    })

    function shuffleCards() {
        const list = cards();
        if (list.length < 2) return;
        flipLayoutChange(() => {
        //Create a copy of the array
        //Fisher–Yates shuffle
        const shuffled = list.slice();
            for (let i = shuffled.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
                }
            shuffled.forEach(node => grid.appendChild(node));
        }
    );
  }

 shuffleBtn?.addEventListener("click", shuffleCards);

}