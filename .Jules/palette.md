## 2025-05-20 - Dynamic ARIA Labels for Toggles
**Learning:** Toggle buttons that change text (like Language Switchers) can be confusing to screen readers if the text matches the button's state rather than the action.
**Action:** Use dynamic `aria-label` attributes that describe the *action* (e.g., "Switch to Portuguese") rather than the *current state*, even if the visual label changes.

## 2025-05-20 - Tailwind Focus Accessibility
**Learning:** Default browser focus outlines are often suppressed or invisible on custom styled elements.
**Action:** Always add explicit `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500` (or appropriate color) to interactive elements to ensure keyboard users know where they are.
