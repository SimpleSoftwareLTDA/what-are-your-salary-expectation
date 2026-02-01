## 2026-02-01 - Dynamic ARIA Labels for Language Toggles
**Learning:** For state-toggling buttons (like language switchers), the label often displays the *target* state (e.g., "PT" when in EN), but the accessible name must describe the action unambiguously ("Switch to Portuguese") rather than just reading the button text.
**Action:** Always provide dynamic `aria-label`s for toggle buttons that change context, ensuring the label clearly describes the action to be performed, not just the visual label.
