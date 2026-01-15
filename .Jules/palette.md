## 2026-01-15 - Dynamic ARIA Labels for Toggles
**Learning:** Toggle buttons that change text (like language switchers 'EN'/'PT') are confusing for screen readers if the text matches the current state rather than the action. A user hearing "EN" might not know if it means "Current language is English" or "Switch to English".
**Action:** Always use `aria-label` to describe the *action* (e.g., "Switch to Portuguese"), regardless of the visible text. Use `focus-visible` styles to ensure keyboard users can see what they are focusing on, especially for custom buttons.
