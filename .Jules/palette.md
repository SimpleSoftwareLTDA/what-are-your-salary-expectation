## 2026-01-26 - [Focus States in Tailwind v4]
**Learning:** Default browser focus rings are suppressed by the reset, but interactive elements (buttons, links) in the header lacked replacement focus styles, making keyboard navigation invisible.
**Action:** Always apply `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500` (or theme equivalent) to interactive elements.
