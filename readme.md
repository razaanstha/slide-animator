# Slide Animator

Slide Animator is a JavaScript library that helps with animating the sliding of blocks. It provides two main functions, `slideUp()` and `slideDown()`, that can be used to hide and show elements on a web page with a sliding effect.

## Installation

To install Slide Animator, run the following command:

```
// NPM
npm install slide-animator

// Yarn
yarn add slide-animator

// PNPM
pnpm add slide-animator
```

## Usage

To use Slide Animator, import the `slideUp()`, `slideDown()` and `slideToggle()` functionalities from the `slide-animator` package, and then call them with the element and time arguments to animate the element. For example:

```
import { slideUp, slideDown, slideToggle } from 'slide-animator';

const element = document.querySelector('#my-element');
const time = 200; // time in milliseconds

slideUp(element, time);
slideDown(element, time);
slideToggle(element, time);
```

The `slideUp()` function will animate the element by sliding it up and out of view over the course of time milliseconds. The `slideDown()` function will do the opposite, animating the element by sliding it down and into view. The `slideToggle()` function will animate the element by toggling its visibility with a sliding animation. If the element is currently visible, `slideToggle()` will animate it to slide up and out of view. If the element is currently hidden, `slideToggle()` will animate it to slide down and into view.
