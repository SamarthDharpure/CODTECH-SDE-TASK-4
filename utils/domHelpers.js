// /utils/domHelpers.js

/**
 * Creates a new HTML element with optional class and text.
 * @param {string} tag - The type of element to create.
 * @param {string} [className] - Optional class name.
 * @param {string} [textContent] - Optional text content.
 * @returns {HTMLElement} - The created element.
 */
function createElement(tag, className = '', textContent = '') {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
}

/**
 * Returns the first element that matches the CSS selector.
 * @param {string} selector - A valid CSS selector.
 * @returns {HTMLElement} - The matched element.
 */
function getElement(selector) {
  return document.querySelector(selector);
}
