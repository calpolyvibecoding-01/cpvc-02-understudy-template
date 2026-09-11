# Facilitator guide

The prepared coastal example is an instructor demonstration. Its maintenance does not wait on the student STOP 1 gate. Student projects do.

## Opening story

Use Sam's recollection, without adding a quote or endorsement:

> Last spring, Autodesk guest speaker David Gabriel flew from Atlanta to speak at CPVC. Afterward he asked Sam and Kyle where to go locally. They suggested the beach, but he needed a specific beach. SLO COAST turns that vague answer into one useful choice.

Do not add an exact date, Autodesk logo, testimonial, or further biographical detail.

## Eight-to-ten-minute demo

1. **Frame the problem (1 minute).** Show the vague request: “Which beach?” Point out the specific visitor and one decision in the completed coastal `SPEC.md`.
2. **Show the rule (1 minute).** Read the bold standing rule in `examples/coast/AGENTS.md`. Explain that the instruction is observable and scoped to this example.
3. **Use the product (2 minutes).** Change both Time and Vibe, select **Find my spot**, and inspect the single recommendation. Change one input and show that the result and sky respond. Say that the motion expresses a choice, not measured conditions.
4. **Trace evidence (1 minute).** Point to the source or current-information link and the compact disclaimer. Explain that matching tags are editorial while place facts require sources.
5. **Explain the workflow (2 minutes).** Show SPEC before code, a build branch before `main`, an interactive preview before approval, and a PR before the human merge. Keep student work at the same registered root URL.
6. **Make one bounded revision (2 minutes).** Prompt: **“Add a Copy this pick button that copies the spot, selected time, and reason. Keep my existing instructions.”** Test the copy behavior and the manual-copy fallback when clipboard access is unavailable. If using a prepared after-state, call it a backup rather than a live-generated result.
7. **Land the lesson (1 minute).** Ask: “Which saved rule can you point to in the result?” Connect that evidence to TARGET and The Loop.

Cut the copy-button revision before cutting the basic recommendation, truthfulness check, or rehearsal.

## Student prompts and STOP calls

Keep the prompts in the root README visible. Call the room together at each gate:

- **STOP 1 — Live and submitted:** the untouched starter opens at the student's actual Pages URL and the portal entry exists. A live page alone is not submission evidence.
- **STOP 2 — Correct brief and usable preview:** the student approves the saved six-line TARGET and standing rule, the agent can read the files, and the unchanged starter has a usable preview. The personal interaction is built after this stop.
- **STOP 3 — Reviewed, live, and explainable:** the student inspected the interaction, approved the PR, chose to merge, and verified the same registered Pages URL.

Never ask for portal credentials or inspect private member records. Student confirmation establishes portal success; an agent without portal access cannot verify it.

## Proposed first hour

| Time | Activity |
| --- | --- |
| 12:10–12:20 | Opening story, finish line, SLO COAST demo; copy prompt is optional and not prebuilt |
| 12:20–12:33 | Students copy, deploy the untouched starter, submit, STOP 1 |
| 12:33–12:40 | Connect the agent or choose the browser fallback |
| 12:40–12:47 | Propose, approve, and save TARGET/rule; verify starter preview, STOP 2 |
| 12:47–12:58 | Build on a branch, inspect the interaction and rule, make one bounded revision, approve the PR |
| 12:58–1:00 | Human merge and same-URL deployment check, STOP 3 target |
| 1:00–1:50 | Open build on members' own projects; officers remain available for blockers |

Do not turn open build into a continuation of the coastal demo.

## Recovery

- **Pages 404:** check the active Pages run in Actions, root `index.html`, and the exact GitHub-displayed URL.
- **Portal failure:** stop personal building and route the student to an officer.
- **Repo connection failure:** verify the connected GitHub account and app repository access; then use the browser fallback if needed.
- **No preview:** identify whether execution is local, remote, or connector-only. Use the supported preview route or an officer-assisted local server.
- **Time pressure:** preserve deploy and submit, one approved rule, one working interaction, preview, and human review. Drop the optional copy revision and visual polish first.

At the end, ask students to show the live page, name the rule it followed, and explain what the branch and PR protected.
