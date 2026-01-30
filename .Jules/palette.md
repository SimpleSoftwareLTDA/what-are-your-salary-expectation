## 2024-05-22 - Dynamic Labels for State Toggles
**Learning:** Toggle buttons (like language switchers) often have ambiguous labels if they just read the visible text (e.g., "PT" or "EN"). A screen reader user might not know if "PT" means "Current language is Portuguese" or "Switch to Portuguese".
**Action:** Always use dynamic `aria-label`s that explicitly describe the *action* (e.g., "Switch to Portuguese") rather than the current state, especially when the visible text is short or ambiguous.
