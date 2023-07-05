import { html } from "../../scripts/scripts.js";

/**
 * @param {HTMLDivElement} block
 */
export default function decorate(block) {
  block.append(html`
    <div class="promo-actions">
      <a
        href="https://github.com/hlxsites/prisma-cloud-docs"
        target="_blank"
        class="button-primary button-primary--blue"
        >Go to GitHub</a
      >
    </div>
  `);

  // const section = block.closest("div.section");
  // const wrapper = section.querySelector(".hero-search-wrapper");

  // wrapper.append(html`<div class="hero-search-background"></div>`);
  // wrapper.prepend(html`${ICON}`);
  // // section.classList.add('full-width');
  // // block.classList.add("container");

  // const init = (breadcrumbSect) => {
  //   section.remove();
  //   breadcrumbSect.insertAdjacentElement("beforebegin", section);
  // };

  // const prevSib = section.previousElementSibling;
  // if (prevSib && prevSib.classList.contains("breadcrumbs-container")) {
  //   // rearrange now
  //   init(prevSib);
  // } else {
  //   // wait for breadcrumbs, rearrange when loaded
  //   const main = document.querySelector("main");
  //   const observer = new MutationObserver((entries) => {
  //     const ready = entries.find((entry) =>
  //       [...entry.addedNodes].find((added) =>
  //         added.classList.contains("breadcrumbs-container")
  //       )
  //     );
  //     if (ready) {
  //       init(section.previousElementSibling);
  //       observer.disconnect();
  //     }
  //   });
  //   observer.observe(main, { childList: true });
  // }

  // hide header search trigger
  // store.once("header:loaded", () => {
  //   const hSearchBtn = document.querySelector("header .nav-search-button");
  //   if (hSearchBtn) {
  //     hSearchBtn.style.display = "none";
  //   }
  // });
}
