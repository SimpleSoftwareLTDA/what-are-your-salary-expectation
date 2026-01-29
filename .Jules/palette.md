## 2025-05-23 - Accessible Language Toggles
**Learning:** Toggle buttons that change text (like "EN" to "PT") can be confusing for screen readers if they don't explicitly state the action. A button saying "PT" doesn't necessarily mean "Switch to Portuguese".
**Action:** Use dynamic `aria-label` attributes to describe the *action* (e.g., "Switch to Portuguese") rather than just reading the button text. Also ensure `focus-visible` styles are distinct, especially on dark backgrounds where default outlines might be lost.
