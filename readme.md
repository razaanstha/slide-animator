# Slide Animator

This module provides three functions for creating sliding animations with CSS transitions: `slideUp`, `slideDown`, and `slideToggle`.

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

### Usage
To use Slide Animator, import the slideUp(), slideDown() and slideToggle() functionalities from the slide-animator package, and then call them with the element and time arguments to animate the element. For example:

```
import { slideUp, slideDown, slideToggle } from 'slide-animator';

const element = document.querySelector('#my-element');
const time = 200; // time in milliseconds

slideUp(element, time);
slideDown(element, time);
slideToggle(element, time);
```

## `slideUp(target, duration)`
Slides an element up by setting its height, margin, and padding to 0 over a specified duration.
### Arguments
1. `target` - The element to slide up. This must be an `HTMLElement`.
2. `duration` - The duration of the slide transition in milliseconds. This defaults to 300ms if not specified.

## `slideDown(target, duration, displayProp)`
Slides an element down by setting its `height` and spacings to their original values over a specified duration.
### Arguments
1. `target` - The element to slide down. This must be an `HTMLElement`.
2. `duration` - The duration of the slide transition in milliseconds. This defaults to 300ms if not specified.
3. `displayProp` - The CSS display property to use when sliding down the element. This defaults to "block" if not specified.

## `slideToggle(target, duration, displayProp)`
Toggles the visibility of an element by sliding it up or down.
### Arguments
1. `target` - The element to slide up or down. This must be an `HTMLElement`.
2. `duration` - The duration of the slide transition in milliseconds. This defaults to 300ms if not specified.
3. `displayProp` - The CSS display property to use when sliding down the element. This defaults to "block" if not specified.
