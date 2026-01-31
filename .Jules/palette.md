## 2025-02-18 - Accessibility of Dynamic Toggle Buttons
**Learning:** Toggle buttons (like language switchers) that change text content ("EN" -> "PT") often fail to communicate the *action* to screen readers. Reading "PT" might be confusing. A dynamic `aria-label` that explicitly states the action ("Switch to Portuguese") provides much better context.
**Action:** Always pair text-changing toggles with a dynamic `aria-label` that describes the *outcome* of the interaction, not just the current state.

## 2025-02-18 - Visible Focus Indicators in Tailwind
**Learning:** Browser default focus rings are often suppressed by reset stylesheets or just look inconsistent. Users relying on keyboard navigation need clear visual cues.
**Action:** Use `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500` (or appropriate color) on all interactive elements to ensure accessibility without cluttering the UI for mouse users.
