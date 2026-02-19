import './styles/index.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { initHeaderReveal } from "./scripts/headerManager.js";
import { initShowcaseHorizontalScroll } from "./scripts/articleManager.js";
import { SVG_TEMPLATES } from "./scripts/helpers/svgTemplateManager.js";
import { initGridDragLayour } from "./scripts/gridDragManager.js";

import { revealBoxes } from "./scripts/animations/reveal.js";

import { setupEyeFollow } from "./scripts/animations/eyeFollow.js";
import { setupArrows } from "./scripts/animations/arrows.js";
import { setupStars } from "./scripts/animations/stars.js";
import { setupCircles } from "./scripts/animations/circles.js";
import { setupDisk } from "./scripts/animations/disk.js";
import { setupEllipses } from "./scripts/animations/ellipses.js";
import { setupLines } from './scripts/animations/lines.js';
import { setupHalfCircles } from './scripts/animations/halfCircles.js';
import { setupMorphBoxes } from './scripts/animations/morphBoxes.js';
import { setupRandomCircles } from './scripts/animations/randomCircles.js';
import { setupStretchBars } from './scripts/animations/stretchBars.js';
import { setupFollowingStars } from './scripts/animations/followingStars.js';


import { initFeaturedTileContent } from './scripts/featuredTileManager.js';
import { buildAllGrids, mountSvgIntoSlot } from "./scripts/gridManager.js";
import { initProjectsHover } from "./scripts/helpers/projectsHoverManager.js";
import { initSkillsFlip } from "./scripts/helpers/skillsFlipManager.js";
import { initSelfIconRailReveal } from "./scripts/helpers/selfRevealManager.js";
import { initContactForm } from "./scripts/helpers/contactManager.js";
import { initTitleAnimations } from "./scripts/animationManager.js";

import meImage from './assets/Me.jpg'
import projectPic01 from './assets/projectsAssets/pic01.png'
import projectPic02 from './assets/projectsAssets/pic02.jpg'
import projectPic03 from './assets/projectsAssets/pic03.png'
import projectPic04 from './assets/projectsAssets/pic04.png'
import projectPic05 from './assets/projectsAssets/pic05.png'


initHeaderReveal();
initShowcaseHorizontalScroll();

const gridConfigs = [
  {
    elId: "intoartGrid",
    data: {
      cols: 4,
      rows: 2,
      featured: [
        { 
          id: "hero", 
          row: 1, 
          col: 1, 
          rowSpan: 1, 
          colSpan: 2 ,
          content: {
            template: "tpl-intoart-hero",
            data: {
              title: "Wilkommen zu meinem Portfolio"
            }
          }
        }
      ]
    }
  },
  {
    elId: "aboutmeGrid",
    data: {
      cols: 6,
      rows: 4,
      featured: [
        { id: "hero", row: 1, col: 1, rowSpan: 3, colSpan: 3
          , content: {
            template: "tpl-aboutme-hero",
            data: {
              image: meImage,
            }
          }
         },
        { id: "side", row: 2, col: 4, rowSpan: 3, colSpan: 2 
          , content: {
            template: "tpl-aboutme-side",
            data: {
              title: "Hi, Ich bin Mykhaylo und bin Entwickler.",
              description: "Zurzeit mache ich eine Berufsinformatikausbildung bei WISS. In diesem Portfolio erfahren Sie mehr über mich und meine Leidenschaft."
            }
          }
        }
      ]
    }
  },
  {
  elId: "showcaseProjectsGrid",
  data: {
    cols: 6,
    rows: 4,
    featured: [
      {
        id: "hero",
        row: 1,
        col: 2,
        rowSpan: 4,
        colSpan: 4,
        content: {
          template: "tpl-projects-hero",
          data: {
            title: "Projekte",
            subtitle: "Ein paar interessante Dinge, an ich gearbeitet habe. Klicken Sie auf die Kacheln für Details und Links.",
            projects: [
              {
                name: "LibraryProject",
                url: "https://github.com/mykhaylo-zhovkevych/LibraryProject",
                preview: projectPic01,
                frameworks: [
                  { label: "C#" },
                  { label: "Clean Architecture" },
                  { label: "Avalonia UI" },
                  { label: "Blazor Server" }
                ]
              },
              {
                name: "Calc-Trojan-App",
                url: "https://github.com/mykhaylo-zhovkevych/Viruses_Collection/tree/main/abschluss_projekt_modul_295",
                preview: projectPic02,
                frameworks: [
                  { label: "Java" },
                  { label: "JS" },
                  { label: "Spring" },
                  { label: "React" },
                  { label: "Electron" }
                ]
              },
              {
                name: "Mein Portfolio",
                url: "https://github.com/mykhaylo-zhovkevych/DevShowcases/tree/main/physical-oriented-portfolio",
                preview: projectPic03,
                frameworks: [
                  { label: "JS" },
                  { label: "GSAP" },
                  { label: "CSS Grid" }
                ]
              },
              {
                name: "Algorithmus-Visualizer",
                url: "https://github.com/mykhaylo-zhovkevych/Algorithmus-Visualizer",
                preview: projectPic04,
                frameworks: [
                  { label: "Java" },
                  { label: "JS" },
                  { label: "Electron" }
                ]
              },
              {
                name: "2D Game",
                url: "https://github.com/mykhaylo-zhovkevych/2dGame",
                preview: projectPic05,
                frameworks: [
                  { label: "Vanilla Java" },
                  { label: "Swing" }
                ]
              }
            ]
          }
        }
      }
    ]
  }
  },
  {
  elId: "showcaseSkillsGrid",
  data: {
    cols: 6,
    rows: 4,
    featured: [
      {
        id: "hero",
        row: 2,
        col: 1,
        rowSpan: 3,
        colSpan: 4,
        content: {
          template: "tpl-skills-hero",
          data: {
            title: "Fähigkeiten",
            subtitle: "Meine aktuellen Fähigkeiten und Erfahrungsbereiche. Ich arbeite ständig daran, mich weiterzuentwickeln und neue Dinge zu lernen.",
            skills: [
              {
                id: "frontend",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z"></path>
</svg>`,
                name: "Frontend",
                subname: "React • Nextjs • CSS • HTML • XML • GSAP • Avalonia UI • Blazor",
                description: "Entwicklung moderner, komponentenbasierter UIs.",
                value: 80,
                levelLabel: "Niveau"
              },
              {
                id: "backend",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 25 2 C 24.285156 2 23.570313 2.179688 22.933594 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.933594 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.066406 47.460938 L 43.910156 38 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 L 27.066406 2.539063 C 26.429688 2.179688 25.714844 2 25 2 Z M 25 13 C 28.78125 13 32.277344 14.753906 34.542969 17.738281 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.261719 C 32.277344 35.246094 28.78125 37 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 Z M 35 20 L 37 20 L 37 22 L 39 22 L 39 20 L 41 20 L 41 22 L 43 22 L 43 24 L 41 24 L 41 26 L 43 26 L 43 28 L 41 28 L 41 30 L 39 30 L 39 28 L 37 28 L 37 30 L 35 30 L 35 28 L 33 28 L 33 26 L 35 26 L 35 24 L 33 24 L 33 22 L 35 22 Z M 37 24 L 37 26 L 39 26 L 39 24 Z"></path>
</svg>`,
                name: "Backend",
                subname: "ASP.NET • EF Core • Spring Boot • REST APIs ",
                description: "Konzeption und Implementierung skalierbarer APIs mit klarer Service-Struktur.",
                value: 70,
                levelLabel: "Niveau"
              },
              {
                id: "data",
                icon: `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 105.07 122.88" style="enable-background:new 0 0 105.07 122.88" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M52.53,0c28.87,0,52.27,10.96,52.27,24.46c0,13.51-23.41,24.46-52.27,24.46c-28.86,0-52.27-10.96-52.27-24.46 C0.26,10.96,23.67,0,52.53,0L52.53,0z M0.26,81.83v18.78c9.3,33.03,101.18,26.65,104.55-1.69V80.16 C100.22,111.27,7.61,113.51,0.26,81.83L0.26,81.83L0.26,81.83z M0,32.94v18.34c9.3,32.26,101.69,27.9,105.07,0.23V33.18 C100.47,63.57,7.35,63.88,0,32.94L0,32.94z M0,56.64v18.78c9.3,33.03,101.69,28.57,105.07,0.23V56.89C100.47,88,7.35,88.32,0,56.64 L0,56.64z"/></g></svg>`,
                name: "Datenbanken",
                subname: "MySQL • MongoDB • SQLlite",
                description: "Strukturierte Datenmodellierung.",
                value: 60,
                levelLabel: "Niveau"
              },
              {
                id: "animations",
                icon: `<svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Git icon</title><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>`,
                name: "DevOps und Tools",
                subname: "Git • Docker • CI/CD",
                description: "Versionskontrolle, Containerisierung und automatisierte Workflows zur Sicherstellung stabiler Entwicklungs Prozesse.",
                value: 50,
                levelLabel: "Niveau"
              },
              {
                id: "quality",
                icon: `<svg fill="#000000" height="800px" width="800px" version="1.1" id="XMLID_207_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 24 24" xml:space="preserve">
<g id="test">
	<g>
		<path d="M23,24H1v-4.3l7-12V2H6V0h12v2h-2v5.7l7,12V24z M12,22h9v-1.7l-3.4-5.9l0,0c-2.6-1.5-3.9-0.8-5.4-0.1S9,15.7,6.5,14.5
			l-3.4,5.9V22H12z M7.4,12.7C9,13.4,10,13,11.3,12.4c1.2-0.5,2.7-1.2,4.7-0.7l-2-3.4V2h-4v6.3L7.4,12.7z"/>
	</g>
	<g>
		<circle cx="14.5" cy="17.5" r="1.5"/>
	</g>
	<g>
		<circle cx="9.5" cy="18.5" r="1.5"/>
	</g>
</g>
</svg>`,
                name: "Quality",
                subname: "Rubber Duck Debugging • Divide and Conquer • TDD • MSTest • NSubstitute",
                description: "Systematisches Debugging und saubere Code-Strukturen für langfristige Wartbarkeit.",
                value: 50,
                levelLabel: "Niveau"
              }
            ]
          }
        }
      },
      {
        id: "side",
        row: 2,
        col: 6,
        rowSpan: 2,
        colSpan: 2,
        content: {
          template: "tpl-skills-side",
          data: {
            shuffleLabel: "Mischen",
          }
        }
      }
    ]
  }
  },
  {
    elId: "showcaseSelfGrid",
    data: {
      cols: 6,
      rows: 4,
      featured: [
        { id: "hero", row: 2, col: 3, rowSpan: 3, colSpan: 4,
        content: {
          template: "tpl-self-hero",
          data: {
            title: "Über mich selbst",
            subtitle: "Mehr zu meiner Person und meine Arbeitsweise, Interessen und Ziele.",
            paragraphs: [
              {
                paragraphTitle: "Code & Arbeitsweise",
                paragraphText: "Mich interessiert vor allem, wie Daten durch ein System fliessen und wie State sauber organisiert wird. Ich möchte verstehen, wie Komponenten logisch zusammenspielen und nicht nur Funktionen implementieren, sondern nachvollziehen, warum etwas so aufgebaut ist. Ich arbeite ruhig, denke strukturiert und ergebnisorientiert. Verantwortung für Aufgaben übernehme ich bewusst und bringe sie zuverlässig zu Ende. In neuen Teams bin ich anfangs eher zurückhaltend, öffne mich aber schnell, sobald ich die Menschen und Abläufe kenne."
              },
              {
                paragraphTitle: "Fokus & Ausgleich",
                paragraphText: "In meiner Freizeit mache ich regelmässig Gymnastik und gehe laufen. Mehrmals im Jahr auch mit Freunden in die Berge. Disziplin ist für mich nichts Abstraktes, sondern Teil meines Alltags. Kreativ beschäftige ich mich mit \"Beat making\" in der DAW und lerne noch Gitarre zu spielen."
              },
              {
                paragraphTitle: "Ziele",
                paragraphText: "Für mein nächstes Praktikum wünsche ich mir ein Umfeld mit gutem Mentoring und ehrlichem Feedback. Mir ist wichtig, fachlich gefordert zu werden, Zusammenhänge verstehen zu dürfen und schrittweise mehr Verantwortung zu übernehmen."
              }
            ],
            icons: [
                {
                  icon: `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 101.57" style="enable-background:new 0 0 122.88 101.57" xml:space="preserve"><g><path d="M44.97,12.84h-17.2L0,49.37L27.77,85.9h17.2L17.2,49.37L44.97,12.84L44.97,12.84z M77.91,12.84h17.2l27.77,36.53 L95.11,85.9h-17.2l27.77-36.53L77.91,12.84L77.91,12.84z M70.17,0.04l5.96,1.39c0.94,0.22,1.52,1.16,1.31,2.1l-22.5,96.69 c-0.22,0.93-1.16,1.52-2.1,1.31l-5.95-1.39c-0.94-0.22-1.52-1.16-1.31-2.1l22.5-96.69C68.3,0.42,69.24-0.17,70.17,0.04L70.17,0.04 L70.17,0.04z"/></g></svg>`
                },
                {
                  icon: `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 104.23 122.88" style="enable-background:new 0 0 104.23 122.88" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M87.9,78.04c2.74-0.48,5.33-0.4,7.6,0.13V24.82L39.05,41.03v61.95c0.03,0.34,0.05,0.69,0.05,1.03 c0,0,0,0.01,0,0.01c0,8.34-8.75,16.62-19.55,18.49C8.76,124.37,0,119.12,0,110.77c0-8.34,8.76-16.62,19.55-18.48 c4.06-0.7,7.84-0.39,10.97,0.71l0-76.26h0.47L104.04,0v85.92c0.13,0.63,0.2,1.27,0.2,1.91c0,0,0,0,0,0.01 c0,6.97-7.32,13.89-16.33,15.44c-9.02,1.56-16.33-2.83-16.33-9.8C71.57,86.51,78.88,79.59,87.9,78.04L87.9,78.04L87.9,78.04z"/></g></svg>`
                },
                {
                  icon: `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="117.04px" height="122.88px" viewBox="0 0 117.04 122.88" enable-background="new 0 0 117.04 122.88" xml:space="preserve"><g><path d="M90.177,13.417H33.458c-9.176,0-17.53,3.638-23.597,9.497C3.777,28.79,0,36.883,0,45.774c0,8.891,3.777,16.983,9.86,22.859 c6.067,5.86,14.421,9.497,23.597,9.497h49.858V78.13h0.268c3.566,0,6.795,1.397,9.126,3.648c2.313,2.234,3.75,5.329,3.75,8.744 s-1.437,6.51-3.75,8.745c-2.331,2.25-5.56,3.647-9.126,3.647H6.801v19.965h76.782c9.176,0,17.53-3.638,23.598-9.497 c6.083-5.876,9.859-13.969,9.859-22.86c0-8.891-3.776-16.983-9.859-22.859c-6.067-5.86-14.422-9.497-23.598-9.497H35.069v0h-1.612 c-3.566,0-6.795-1.397-9.125-3.648c-2.313-2.234-3.75-5.33-3.75-8.744c0-3.416,1.437-6.51,3.75-8.745 c2.331-2.25,5.56-3.647,9.125-3.647h56.719v13.966l26.863-23.17L90.177,0V13.417L90.177,13.417z"/></g></svg>`
                }
              ]
            }
          }
        },
        { id: "side", row: 2, col: 1, rowSpan: 2, colSpan: 1 , content: {
            template: "tpl-self-side",
            data: {
              revealLabel: "Aufdecken",
            }
          }
        },   
      ]
    }
  },
  {
    elId: "contactGrid",
    data: {
      cols: 6,
      rows: 4,
      featured: [
        {
          id: "hero",
          row: 2,
          col: 1,
          rowSpan: 3,
          colSpan: 4,
          content: {
            template: "tpl-contact-hero",
            data: {
              title: "Kontakt",
              subtitle: "Senden Sie mir eine Nachricht. Ich werde mich so bald wie möglich bei Ihnen melden.",

              firstNameLabel: "Vorname",
              lastNameLabel: "Nachname",
              emailLabel: "Email",
              phoneLabel: "Telefon (optional)",
              messageLabel: "Nachricht",
            }
          }
        },
        {
          id: "side",
          row: 2,
          col: 6,
          rowSpan: 2,
          colSpan: 1,
          content: {
            template: "tpl-contact-side",
            data: {
              sendLabel: "Senden",
              resetLabel: "Zurücksetzen"
            }
          }
        }
      ]
    }
  },
  {
    elId: "impressumGrid",
    data: {
      cols: 4,
      rows: 2,
      featured: [
        { id: "hero", row: 2, col: 3, rowSpan: 1, colSpan: 2, content: {
          template: "tpl-impressum-hero",
          data: {
            title: "Impressum",
            body: "© 2026. alle Rechte vorbehalten.",

            links: [
              {
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/mykhaylo-zhovkevych-919024250/",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
</svg>`
              },
              {
                label: "GitHub",
                url: "https://github.com/mykhaylo-zhovkevych",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
</svg>`
              }
            ]
          }
        }
      }]
    }
  }
];

const built = buildAllGrids(gridConfigs);

const intoArt = built.find(x => x.elId === "intoartGrid");
if (intoArt) {
  initFeaturedTileContent(intoArt.el, intoArt.data);
  initTitleAnimations(intoArt.el);
  // eye, arrows
  mountSvgIntoSlot(intoArt.el, 3, SVG_TEMPLATES.eye);
  mountSvgIntoSlot(intoArt.el, 4, SVG_TEMPLATES.arrows);

  initGridDragLayour(intoArt.el);
  setupEyeFollow(intoArt.el);
  setupArrows();
  setupStars();

}

const aboutMe = built.find(x => x.elId === "aboutmeGrid");
if (aboutMe) {
  initFeaturedTileContent(aboutMe.el, aboutMe.data);
  // circle, disk
  mountSvgIntoSlot(aboutMe.el, 18, SVG_TEMPLATES.circles);
  mountSvgIntoSlot(aboutMe.el, 5, SVG_TEMPLATES.disk);

  initGridDragLayour(aboutMe.el);
  setupEyeFollow(aboutMe.el);
  setupCircles();
  setupDisk();
}

const projectsGrid = built.find(x => x.elId === "showcaseProjectsGrid");
if (projectsGrid) {

  // morphBoxes, randomCircles
  initFeaturedTileContent(projectsGrid.el, projectsGrid.data);
  initTitleAnimations(projectsGrid.el);
  mountSvgIntoSlot(projectsGrid.el, 12, SVG_TEMPLATES.morphBoxes);
  mountSvgIntoSlot(projectsGrid.el, 23, SVG_TEMPLATES.randomCircles);

  initGridDragLayour(projectsGrid.el);
  initProjectsHover(projectsGrid.el);
  setupMorphBoxes();
  setupRandomCircles();
}


const skillsGrid = built.find(x => x.elId === "showcaseSkillsGrid");
if (skillsGrid) {
  initFeaturedTileContent(skillsGrid.el, skillsGrid.data);
  initTitleAnimations(skillsGrid.el);
  // halfcircles, lines
  mountSvgIntoSlot(skillsGrid.el, 4, SVG_TEMPLATES.halfCircles);
  mountSvgIntoSlot(skillsGrid.el, 23, SVG_TEMPLATES.lines);

  initGridDragLayour(skillsGrid.el);
  initSkillsFlip(skillsGrid.el);
  setupHalfCircles();
  setupLines();
}



const selfGrid = built.find(x => x.elId === "showcaseSelfGrid");
if (selfGrid) {
  initFeaturedTileContent(selfGrid.el, selfGrid.data);
  initSelfIconRailReveal(selfGrid.el);
  initTitleAnimations(selfGrid.el);

  // eye, stretchBars
  mountSvgIntoSlot(selfGrid.el, 5, SVG_TEMPLATES.eye);
  mountSvgIntoSlot(selfGrid.el, 13, SVG_TEMPLATES.stretchBars);

  initGridDragLayour(selfGrid.el);
  setupEyeFollow(selfGrid.el);
  setupStretchBars();
}

const contact = built.find(x => x.elId === "contactGrid");
if (contact) {
  initFeaturedTileContent(contact.el, contact.data);
  initTitleAnimations(contact.el);
  // followingStars, stars
  mountSvgIntoSlot(contact.el, 22, SVG_TEMPLATES.followingStars);
  mountSvgIntoSlot(contact.el, 5, SVG_TEMPLATES.stars);

  initContactForm(contact.el);
  initGridDragLayour(contact.el);
  setupFollowingStars();
  setupStars();
}

const impressum = built.find(x => x.elId === "impressumGrid");
if (impressum) {

  initFeaturedTileContent(impressum.el, impressum.data);
  initTitleAnimations(impressum.el);
  //eclipse
  mountSvgIntoSlot(impressum.el, 4, SVG_TEMPLATES.ellipse); 

  initGridDragLayour(impressum.el);
  setupEllipses();  
  
}

revealBoxes({ stagger: 0.02 });