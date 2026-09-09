# Standing brief

Read SPEC.md before building. If brackets remain or the reader's question is
unclear, ask before editing. This file briefs the agent; it does not run the page.

## My reader rule

[Replace with one observable rule. Example: explain each project in ordinary
language before showing technical terms, without inventing a missing purpose.]

## Scope and evidence

- Change only index.html during the build. Preserve the four fictional JSON files.
- One HTML file with inline CSS and JavaScript. No packages, frameworks, build
  step, external fonts/assets, live APIs, analytics, runtime AI or keys.
- Use one selected local fixture. Label it fictional. Show exact source fields
  beside claims; separate fact, interpretation and questions. Never invent numbers.
- Use the listed repos array for denominators, not profile.public_repos. README
  presence is not quality; stars are not business success; pushed_at is not a
  commit history. If discussing recency, show the reference date and rule.
- Keep loading, empty and error messages visible with a recovery route. Insert
  data as text, not trusted HTML. Do not leave broken test data selected.

## Design and review

- Put the reader's answer and next action first. Use clear type, whitespace and
  one restrained accent. Avoid repeated card boxes and decorative statistics.
- Use native controls, visible keyboard focus, readable contrast and comfortable
  touch targets (aim for 44px). Reflow for phones; do not shrink a desktop layout.
- Optional motion must explain an action: brief transform/opacity feedback,
  reduced-motion support, no idle loops or animation library. Visual relationships
  must come from actual data, not decorative lines that imply evidence.
- No em dashes or hype in page copy. Prefer plain language.
- Inspect desktop and phone views, test the main action and data loading, then
  summarize the diff and any untested checks. Do not claim tests you did not run.
- Do not open a PR or merge until the human approves the reviewed change.

Done means the six-line TARGET passes, not that every possible feature exists.
