/**
 * Slides up the element with animation
 * param {HTMLElement} target
 * param {Number} duration
 */
const slideUp = (target, duration = 300) => {
  if (!(target instanceof HTMLElement)) return;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

/**
 * Slides down the element with animation
 * param {HTMLElement} target
 * param {Number} duration
 * param {String} displayProp
 */
const slideDown = (target, duration = 300, displayProp) => {
  if (!(target instanceof HTMLElement)) return;
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  let displayCSSProperty = displayProp ? displayProp.trim() : "block";

  if (display !== "none") return;
  let height = target.offsetHeight;
  target.style.display = displayCSSProperty;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");

  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

/**
 * Toggles the element checking element condition with animation
 * param {HTMLElement} target
 * param {Number} duration
 * param {String} display CSS property when element is slideDown
 */
const slideToggle = (target, duration = 300, displayProp) => {
  if (!(target instanceof HTMLElement)) return;
  if (window.getComputedStyle(target).display === "none") {
    return slideDown(target, duration, displayProp);
  } else {
    return slideUp(target, duration);
  }
};

export { slideUp, slideDown, slideToggle };
