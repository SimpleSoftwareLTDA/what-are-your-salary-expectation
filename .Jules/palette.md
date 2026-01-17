## 2024-05-23 - Dynamic ARIA Labels for Toggle Buttons
**Learning:** Toggle buttons (like language switchers) need dynamic `aria-label` attributes that describe the *action* (e.g., "Switch to Portuguese") rather than the *current state*, especially when the visible text is an abbreviation like "PT".
**Action:** Use a computed signal or binding for `aria-label` that reflects the target state of the toggle action.
