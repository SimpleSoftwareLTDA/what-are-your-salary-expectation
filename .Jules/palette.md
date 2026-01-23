## 2026-01-23 - Dynamic Language Toggle Accessibility
**Learning:** Language toggles displaying short codes (e.g., "PT"/"EN") can be ambiguous. Screen readers need an `aria-label` that describes the specific *action* (e.g., "Switch to Portuguese") rather than just reading the text code. This label must dynamically update when the state changes.
**Action:** Bind `[attr.aria-label]` to a computed signal or translation key that reflects the *target* language state (e.g., if current is EN, label is "Switch to Portuguese").
