import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { initGallery } from "./gallery";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

document.addEventListener("DOMContentLoaded", () => {
  initGallery();
});