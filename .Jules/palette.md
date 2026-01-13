## 2025-02-20 - Dynamic Language Toggles
**Learning:** Language toggle buttons that display the *target* language code (e.g., showing "PT" when the site is in English) can be ambiguous for screen reader users. They need dynamic ARIA labels that explicitly state the action (e.g., "Switch to Portuguese") rather than just reading the button text.
**Action:** Bind `aria-label` to a translation key that describes the target state, ensuring the screen reader announcement matches the user's intent to switch languages.
