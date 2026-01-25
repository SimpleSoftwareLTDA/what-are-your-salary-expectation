## 2026-01-25 - Dynamic ARIA Labels for Toggle Buttons
**Learning:** Toggle buttons that change text (like "EN"/"PT") often need dynamic `aria-label` attributes to be accessible. A static label isn't enough when the action changes based on state (e.g. "Switch to Portuguese" vs "Switch to English").
**Action:** Use conditional logic to render the correct `aria-label` based on current state, and ensure these labels are localized.

## 2026-01-25 - Explicit Focus Styles in Tailwind
**Learning:** Default browser focus rings are often suppressed or insufficient, especially in custom UI components.
**Action:** Always add `focus-visible:outline-none focus-visible:ring-2` (and a color like `focus-visible:ring-sky-500`) to interactive elements to ensure keyboard users can see where they are.
