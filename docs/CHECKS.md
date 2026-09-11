# Revision checks and release handoff

Candidate branch: `codex/coast-understudy-20260911`, based on fetched `main` at `d355c72`. The commit containing this file is the review revision. Preparation started approximately 00:50 PDT on September 11, 2026; first recorded tool timestamp 00:52:05 PDT. No release has been performed.

## Verified locally

| Named check | Evidence |
| --- | --- |
| Preference matrix | All 20 time/vibe pairs exercised both in Node and the interactive browser. One supported result each; selected labels and sky state agree. |
| Determinism and truthful partial matches | Node checks cover repeatability, stable ties, distinct results across time, known examples, partial-match wording and surf boundaries. |
| Data failures | Node checks cover missing, empty, malformed and duplicate data, invalid choices and untrusted source URLs. A browser copy with data.js absent displayed the recovery message instead of a recommendation. |
| Reselect and keyboard | Change my choices hides the old result and focuses Time. Native keyboard selection, Tab navigation and visible focus inspected. |
| Responsive layout | Starter and demo tested at actual 390, 768 and 1366 px viewports. No horizontal overflow. Desktop, tablet and phone demo screenshots visually inspected; one DOM result confirmed. |
| Contrast | Computed foreground/background ratios: main ink 10.28:1, supporting copy 5.57:1, result eyebrow 5.79:1, primary button 10.99:1, hero accent 5.01:1. Text surfaces stay fixed across time palettes. |
| Motion and fallback | Source check confirms reduced-motion disables transitions/animations. Wave response is finite; sun uses a transform. The richer generated WebP is the primary hero; the original inline SVG remains only as an image-failure fallback. A browser test with the WebP deliberately absent hid the failed image, displayed the fallback, and still produced a recommendation. OS reduced-motion emulation was not exercised. |
| Static project paths | Local HTTP 200 for root and nested demo plus all three dependencies. Root-to-example link exercised. Demo assets resolve within examples/coast/, independent of root code. |
| Transfer size | Neutral root HTML: 2,649 bytes. The richer hero is a local 1536 × 1024 WebP of 313,988 bytes; final initial demo payload measured 336,672 bytes over local HTTP (HTML 5,688; CSS 10,043; app 4,724; data 2,229; image 313,988). No external fonts or remote image services are used. This is bytes measured locally, not a device speed benchmark. |
| Runtime boundaries | No fetch, runtime model, API key, backend, analytics, geolocation or date service. Data inserted with textContent; official source URL allowlist. |
| Student route | README and AGENTS enforce deployment and successful portal submission before personal building. Non-coastal choices work with the same route. One completed coast TARGET is supplied as an example. |
| Preservation and privacy | Original checkout preserved. Four old JSON fixtures have no diff against origin/main. Private input directory is outside this worktree; no bundle, private brief, feedback or source-document URL staged. |
| Code hygiene | `node tests/check.cjs` passed all 38 checks; `git diff --check` passed. Browser reported no warnings/errors on the working demo; deliberately missing data produced the expected separate test failure. |

## Final review and routing

One independent final reviewer was dispatched with `model: gpt-6-astra`, `reasoning_effort: medium`. It found a fallback workflow gap: the no-card path needed saved/read-back SPEC and AGENTS plus STOP 2 before personal HTML generation. The fallback now saves and reads back the approved files on the same build branch, checks the unchanged starter, and enforces STOP 2 before generation; the integrated correction was read and tested. No other blockers were found in the reviewed code/documents. Main task checked the initial rendered composition and integrated the work. Sam then clarified that the richer hero imagery was mandatory; the same Astra-requested agent integrated the generated coastal asset, followed by one Sol-requested visual-polish pass. The existing reviewer completed a focused revision addendum with no blockers. No additional open-ended design cycle was run. Final laptop and phone renders were inspected after the polish.

The documentation/test worker was dispatched with `model: gpt-5.6-sol`, `reasoning_effort: medium`. These were explicit tool parameters, not model names written only in prompts. The tool responses did not expose an independent resolved-runtime receipt, so model identity changes are not claimed as verified. Spark was not offered by the subagent tool and was not used. No model switch is required of students.

## One bounded visual-polish pass

The actual generated image was integrated before polish. Three rendered mismatches were corrected: the wash/sun overlay was reduced to preserve the detailed image; the 768px title/image balance was adjusted; and phone controls were stacked below 420px with a more readable illustration caption. The palette now interpolates through a finite background-color transition. Final CUA renders covered 1366×900, 768×900 and 390×844; the primary image decoded at 1536×1024. The main task also inspected the final laptop composition and phone interaction in the in-app browser. Neither an SVG fallback nor a source-only inspection was counted as the completed rich visual.

## Not yet verified

- Sam's rehearsal, a fresh student account, classroom network, another device or an independent beginner test.
- New template copy, GitHub Pages deployment, the final published root and nested example, or a successful portal submission.
- End-to-end free-browser-chat/downloaded-file fallback or deployed HTTPS clipboard behavior.
- Copy this pick: optional live teaching prompt only; no prebuilt copy feature or after-state is included.

A local HTTP preview is not publication evidence. An agent cannot infer portal success from a live website. No merge, push, Pages-setting change, database write or outside tester was used in preparation.

## Sam's first five minutes

1. Open both local previews. The neutral root should appear first; follow its example link to SLO COAST.
2. Try Morning + Surf (Pismo), Sunset + Surf (Morro Rock), and Midday + Relax (Avila). Watch the sky, then press Find my spot. Change my choices should return focus to Time.
3. Read one place fact, source, editorial reason and safety note. The illustration is imaginary coastal scenery.
4. Scan README Steps 1–4: untouched starter deployment and successful portal submission must precede personal building. Check that the fallback also saves the approved rule.
5. Rehearse the short opening and STOP calls in FACILITATOR.md. Use the remaining reserved 25–30 minutes for your walkthrough; cut the optional copy revision if time is tight.

## Release only after explicit approval

1. Re-run `node tests/check.cjs` and inspect the candidate diff. Fetch `origin/main`; if it moved, integrate and recheck before release.
2. Push only `codex/coast-understudy-20260911` to the target repository and open its PR against `main`. Do not push directly to main. Review Files changed and the recorded checks.
3. After approval, merge the reviewed PR. Inspect repository **Settings → Pages**. Retain the existing correct source; if a change is needed, it requires explicit approval. Intended source: **Deploy from a branch → main → /(root)**. No custom workflow is required.
4. Follow the Pages deployment in **Actions**. Open GitHub's actual displayed site URL and verify the neutral starter. Then open that URL plus `examples/coast/` and test a recommendation. Expected project root: `https://calpolyvibecoding-01.github.io/cpvc-02-understudy-template/`; verify the displayed URL rather than treating this expectation as evidence.
5. For Sam's student-path rehearsal, copy the released template into the intended account, deploy the untouched starter, open its actual URL, and complete the portal submission personally or explicitly authorize a database write. Confirm the entry exists before STOP 1. Later merges update that same submitted root URL; do not create a duplicate entry.

If the repo does not offer Use this template, enabling its template setting requires explicit approval. No repository settings were changed during preparation.
