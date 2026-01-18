## 2026-01-18 - Dynamic ARIA Labels for Toggle Controls
**Learning:** For toggle buttons where the visible text changes (e.g. "EN" -> "PT"), the ARIA label must also update dynamically to describe the action (e.g. "Switch to Portuguese"). Static labels can be confusing or inaccurate.
**Action:** Always bind `aria-label` to a signal or state variable when the control's function changes based on state.
