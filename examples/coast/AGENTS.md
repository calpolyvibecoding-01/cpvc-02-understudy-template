# SLO COAST: instructor-example instructions

These instructions apply only inside `examples/coast/`. Preserve the root safety and human-approval boundaries. When Sam has explicitly authorized maintenance of this prepared instructor example, the root student registration gate is not a prerequisite.

Read the local SPEC and source/design notes before changes. Keep the example self-contained so a student can replace the root app without breaking it.

## Standing rule to demonstrate

**Recommend only SLO County beaches or coastal areas from the curated data. Respond to the chosen time and vibe, show why, and never present static information as live surf, weather, tide, safety, or access conditions.**

A change that looks better but violates this rule is not finished.

## Product and truthfulness

- Keep one page, two inputs, and one clear recommendation. Do not add food, inland attractions, booking, accounts, or a whole-day planner.
- Separate sourced facts from editorial matching preferences. Keep source links and review dates accurate. Verify specific place or access claims through appropriate official sources before presenting them as facts.
- Treat Sunrise as an early-light preference, not a promise that the sun rises over the ocean. Do not fabricate times, forecasts, open-gate claims, beginner-surf guarantees, or unsafe cliff, rock, or tide-access instructions.
- State partial or absent matches plainly. Do not invent destinations or unsupported facts to cover every input combination.
- Treat generated imagery as illustrative, not geographic evidence. Any supplied mockup is inspiration, not a factual reference or finished layout to reproduce.

## Design and engineering

- Preserve the clean coastal composition and working interaction. Time affects palette, sun, and a brief wave response, not real conditions.
- Use lightweight local assets and limited SVG or CSS transitions that settle. Maintain reduced-motion support, a static fallback, text contrast, focus, and narrow-screen usability.
- Do not add a runtime model or API, backend, framework migration, analytics, or exposed secrets. Do not use a full-page image in place of working controls.
- Keep data configuration in one place. Insert text safely and handle incomplete data explicitly.
- Test the rendered interaction and relevant edge cases; report what was not run. A served local preview is not a verified Pages deployment.
- Follow-up changes must preserve the standing rule. Request human approval before PR, merge, or publication as required by the task.
