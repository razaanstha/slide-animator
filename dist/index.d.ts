/**
 * Slides an element up using a CSS transition.
 * @param target The element to slide up.
 * @param duration The duration of the transition in milliseconds (defaults to 300ms).
 */
declare function slideUp(target: HTMLElement, duration?: number): void;
/**
 * Slides down the the target element
 * @param target The element to slide down.
 * @param duration The duration of the transition in milliseconds (defaults to 300ms).
 * @param displayProp The CSS display property to use when animating the element.
 */
declare function slideDown(target: HTMLElement, duration?: number, displayProp?: string): void;
/**
 * Toggles the visibility of an element by sliding it up or down.
 * @param {HTMLElement} target The element to slide up or down.
 * @param {number} duration  The duration of the slide transition in milliseconds (defaults to 300ms).
 * @param {string} displayProp The CSS display property to use when sliding down the element (optional, defaults to `"block"`).
 */
declare function slideToggle(target: HTMLElement, duration?: number, displayProp?: string): void;
export { slideUp, slideDown, slideToggle };
