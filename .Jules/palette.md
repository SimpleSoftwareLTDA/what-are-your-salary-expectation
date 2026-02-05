## 2025-02-05 - Accessible Names for State Toggles
**Learning:** Toggle buttons that display the *next* state (e.g., "PT" when currently in English) can be confusing for screen reader users if the accessible name doesn't explicitly describe the action.
**Action:** Always use a dynamic `aria-label` (e.g., "Switch to Portuguese") that describes the *action* rather than relying on the visible text.
