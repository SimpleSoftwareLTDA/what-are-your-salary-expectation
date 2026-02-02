## 2025-02-19 - Dynamic ARIA Labels for State Toggles
**Learning:** Icon-only or abbreviation-only buttons that toggle state (like language "EN/PT") often confuse screen reader users if the label is static. The accessible name should describe the *action* (e.g., "Switch to Portuguese"), not just the current visible text.
**Action:** Use dynamic bindings for `aria-label` that update based on the current state, ensuring the label matches the target state.
