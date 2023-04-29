/**
 * Slides an element up using a CSS transition.
 * @param target The element to slide up.
 * @param duration The duration of the transition in milliseconds (defaults to 300ms).
 */
function slideUp(target, duration) {
    if (!(target instanceof HTMLElement)) {
        throw new TypeError("The target must be an HTMLElement.");
    }
    duration = duration && typeof duration == "number" ? duration : 300;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.boxSizing = "border-box";
    target.style.height = target.offsetHeight + "px";
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = "0";
    target.style.paddingTop = "0";
    target.style.paddingBottom = "0";
    target.style.marginTop = "0";
    target.style.marginBottom = "0";
    setTimeout(function () {
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
}
/**
 * Slides down the the target element
 * @param target The element to slide down.
 * @param duration The duration of the transition in milliseconds (defaults to 300ms).
 * @param displayProp The CSS display property to use when animating the element.
 */
function slideDown(target, duration, displayProp) {
    if (!(target instanceof HTMLElement)) {
        throw new TypeError("The target must be an HTMLElement.");
    }
    duration = duration && typeof duration == "number" ? duration : 300;
    let display = window.getComputedStyle(target).display;
    if (display !== "none")
        return;
    target.style.removeProperty("display");
    displayProp = displayProp || "block";
    target.style.display = displayProp.toString();
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = "0";
    target.style.paddingTop = "0";
    target.style.paddingBottom = "0";
    target.style.marginTop = "0";
    target.style.marginBottom = "0";
    target.offsetHeight;
    target.style.boxSizing = "border-box";
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    setTimeout(function () {
        target.style.removeProperty("height");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
    }, duration);
}
/**
 * Toggles the visibility of an element by sliding it up or down.
 * @param {HTMLElement} target The element to slide up or down.
 * @param {number} duration  The duration of the slide transition in milliseconds (defaults to 300ms).
 * @param {string} displayProp The CSS display property to use when sliding down the element (optional, defaults to `"block"`).
 */
function slideToggle(target, duration, displayProp) {
    if (!(target instanceof HTMLElement)) {
        throw new TypeError("The target must be an HTMLElement.");
    }
    duration = duration && typeof duration == "number" ? duration : 300;
    if (window.getComputedStyle(target).display === "none") {
        return slideDown(target, duration, displayProp);
    }
    else {
        return slideUp(target, duration);
    }
}
export { slideUp, slideDown, slideToggle };
