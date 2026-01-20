# Palette's Journal

## 2026-01-20 - Language Toggle Accessibility
**Learning:** Icon/text-only toggles (like "PT" / "EN") are ambiguous to screen readers.
**Action:** Always provide a dynamic `aria-label` that describes the *action* (e.g., "Switch to Portuguese") rather than the current state, and ensure it updates when the state changes.
