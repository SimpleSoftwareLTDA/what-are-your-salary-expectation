## 2024-05-22 - Dynamic ARIA Labels for Toggle Buttons
**Learning:** Toggle buttons that change text (like language switchers) need dynamic `aria-label` attributes to explicitly describe the action (e.g., "Switch to Portuguese") rather than just reading the current text ("PT").
**Action:** Always bind `[attr.aria-label]` to a computed property or translation that describes the *destination* state when the button is clicked.

## 2024-05-22 - Explicit Focus Styles for Custom Interactive Elements
**Learning:** Custom buttons and links with `outline-none` (often used to remove default browser styles) must have explicit `focus-visible` styles to remain accessible to keyboard users.
**Action:** Add `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500` (or appropriate color) to all interactive elements that override default outlines.
