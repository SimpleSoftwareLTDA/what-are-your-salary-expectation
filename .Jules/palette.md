## 2026-01-28 - Dynamic ARIA Labels for Toggle Buttons
**Learning:** Toggle buttons that change text (like Language Switchers) can be confusing for screen reader users if the label doesn't explicitly describe the action (e.g., "Switch to Portuguese" vs just reading "PT").
**Action:** Always use dynamic `aria-label` or `aria-description` that updates based on the current state to clearly communicate the *action* the button will perform, not just its current visual label.
