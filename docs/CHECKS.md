# Revision checks and release handoff

Candidate branch: `codex/coast-understudy-20260911`, based on fetched `main` at `d355c72`. The commit containing this file is the review revision. Preparation started approximately 00:50 PDT on September 11, 2026; first recorded tool timestamp 00:52:05 PDT. No release has been performed.

## Verified locally

| Named check | Evidence |
| --- | --- |
| Preference matrix | All 20 time/vibe pairs exercised both in Node and the interactive browser. One supported result each; selected labels and sky state agree. |
| Determinism and truthful partial matches | Node checks cover repeatability, stable ties, distinct results across time, known examples, partial-match wording and surf boundaries. |
| Data failures | Node checks cover missing, empty, malformed and duplicate data, invalid choices and untrusted source URLs. A browser copy with data.js absent displayed the recovery message instead of a recommendation. |
| Reselect and keyboard | Find another moment clears the result with a finite wave sweep, preserves choices and focuses the checked time radio. Arrow-key selection verified in the real browser. Controller checks cover reset cancellation and rapid resubmission. |
| Responsive layout | Starter and demo tested at actual 390, 768 and 1366 px viewports. No horizontal overflow. Desktop, tablet and phone demo screenshots visually inspected; one DOM result confirmed. |
| Contrast | Latest composition uses fixed cream control/result surfaces and a dark reading shade behind hero text. Laptop, tablet and phone text were visually inspected. Previous composition contrast ratios do not certify this revision; no complete automated accessibility audit is claimed. |
| Motion and fallback | Source check confirms reduced-motion disables transitions/animations. Wave response is finite; sun uses a transform. The richer generated WebP is the primary hero; the original inline SVG remains only as an image-failure fallback. A browser test with the WebP deliberately absent hid the failed image, displayed the fallback, and still produced a recommendation. The latest controller reduced-motion branch is covered by Node DOM tests; OS reduced-motion emulation was not exercised. Missing-image/data browser checks were performed before the latest composition revision, not rerun afterward. |
| Static project paths | Local HTTP 200 for root and nested demo plus all three dependencies. Root-to-example link exercised. Demo assets resolve within examples/coast/, independent of root code. |
| Transfer size | Neutral root HTML: 2,649 bytes. The richer hero is a local 1536 × 1024 WebP of 313,988 bytes; latest initial demo files total 342,466 bytes (HTML 6,548; CSS 12,844; app 6,857; data 2,229; image 313,988). No external fonts or remote image services are used. This is bytes measured locally, not a device speed benchmark. |
| Runtime boundaries | No fetch, runtime model, API key, backend, analytics, geolocation or date service. Data inserted with textContent; official source URL allowlist. |
| Student route | README and AGENTS enforce deployment and successful portal submission before personal building. Non-coastal choices work with the same route. One completed coast TARGET is supplied as an example. |
| Preservation and privacy | Original checkout preserved. Four old JSON fixtures have no diff against origin/main. Private input directory is outside this worktree; no bundle, private brief, feedback or source-document URL staged. |
| Code hygiene | `node tests/check.cjs` passed all 45 checks; `git diff --check` passed. Browser reported no warnings/errors on the working demo; deliberately missing data produced the expected separate test failure. |

## Final review and routing

One independent final reviewer was dispatched with `model: gpt-6-astra`, `reasoning_effort: medium`. It found a fallback workflow gap: the no-card path needed saved/read-back SPEC and AGENTS plus STOP 2 before personal HTML generation. The fallback now saves and reads back the approved files on the same build branch, checks the unchanged starter, and enforces STOP 2 before generation; the integrated correction was read and tested. No other blockers were found in the reviewed code/documents. Main task checked the initial rendered composition and integrated the work. Sam then clarified that the richer hero imagery was mandatory; the same Astra-requested agent integrated the generated coastal asset, followed by one Sol-requested visual-polish pass. The existing reviewer completed a focused revision addendum with no blockers. No additional open-ended design cycle was run. Final laptop and phone renders were inspected after the polish.

The documentation/test worker was dispatched with `model: gpt-5.6-sol`, `reasoning_effort: medium`. These were explicit tool parameters, not model names written only in prompts. The tool responses did not expose an independent resolved-runtime receipt, so model identity changes are not claimed as verified. Spark was not offered by the subagent tool and was not used. No model switch is required of students.

## One bounded visual-polish pass

The actual generated image was integrated before polish. Three rendered mismatches were corrected: the wash/sun overlay was reduced to preserve the detailed image; the 768px title/image balance was adjusted; and phone controls were stacked below 420px with a more readable illustration caption. The palette now interpolates through a finite background-color transition. Final CUA renders covered 1366×900, 768×900 and 390×844; the primary image decoded at 1536×1024. The main task also inspected the final laptop composition and phone interaction in the in-app browser. Neither an SVG fallback nor a source-only inspection was counted as the completed rich visual.

## Latest interactive composition revision

Sam rejected the earlier oversized split hero and explicitly requested this bounded upgrade. The main task set and implemented the new composition; the existing Sol Medium-requested worker handled only the radio controller and tests after that direction existed. No new open-ended review cycle was added.

Three largest mismatches were corrected: the choices now share the first screen with the full-width coastal scene; time selection changes sky, ocean tone and sun position instead of a subtle background change; and tactile native-radio controls lead into a staged result reveal and finite wave reset. The same detailed local generated illustration remains explicitly imaginary, including in the result.

Actual CUA renders inspected at 1366×900, 768×900 and 390×844, including the phone result. All 20 radio combinations were submitted in the real page; result labels and selected time state matched. Midday and Sunset renders visibly differed. No horizontal overflow at the inspected sizes. Reset restored selected-radio focus and preserved choices; arrow-key navigation updated the scene. Browser error/warning log was empty. Node passed 45 checks including reduced-motion and interrupted-reset branches. No device performance benchmark or complete accessibility audit was performed.

## Not yet verified

- Sam's rehearsal, a fresh student account, classroom network, another device or an independent beginner test.
- New template copy, GitHub Pages deployment, the final published root and nested example, or a successful portal submission.
- End-to-end free-browser-chat/downloaded-file fallback or deployed HTTPS clipboard behavior.
- Copy this pick: optional live teaching prompt only; no prebuilt copy feature or after-state is included.

A local HTTP preview is not publication evidence. An agent cannot infer portal success from a live website. No merge, push, Pages-setting change, database write or outside tester was used in preparation.

## Sam's first five minutes

1. Open both local previews. The neutral root should appear first; follow its example link to SLO COAST.
2. Try Morning + Surf (Pismo), Sunset + Surf (Morro Rock), and Midday + Relax (Avila). Watch the sky, sun and water change, then press Find my spot. Find another moment should sweep away the result and return focus to the selected time.
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

---

## Addendum — Cowork session, September 11, 2026 (~09:5x PDT)

Two changes were made to this working tree on top of the revision described
above. The finished SLO COAST example was **not** touched: every file under
`examples/coast/` is byte-identical to what was already on disk.

### What changed

1. **`README.md`** — inserted the opening question and the
   "I'm building ___ for ___ so they can ___." sentence near the top, plus the
   one-page / one-interaction / no-required-service scope line. These were in
   the session plan but were not visible anywhere in the student route.
   No section heading, ordering, or prompt text was altered.
2. **`index.html`** — two fixes to the neutral starter:
   - `href="README.md"` served raw Markdown once published, so a student
     clicking "Follow the build guide" got a text file instead of the guide.
     It now points at a repository README, and on a `*.github.io` project path
     a short script rewrites it to the **student's own** repository.
   - Added a live-URL field with a Copy link button, because Step 2 asks
     students to submit that exact address and the page never showed it.
     Falls back to selecting the text when the clipboard is unavailable, and
     says so plainly when opened as a local `file://`.

### Re-verified after the change

| Check | Result |
| --- | --- |
| `node tests/check.cjs` | 48 checks passed, 20 time/vibe combinations exercised |
| Starter served at a project subpath (`/cpvc-02-understudy/`) | Pass, no console errors |
| Starter at 390 px | Pass, no horizontal overflow |
| Starter external network requests | None |
| Live-URL field shows the correct address at the subpath | Pass |
| Build-guide link rewrites to the visitor's own repo on a `github.io` host | Pass (`https://github.com/<user>/<repo>#readme`) |
| Clipboard unavailable | Falls back to text selection, hint updates |
| Opened as `file://` | Hides the copy button, explains why |
| `examples/coast/` still loads at the nested subpath and returns a recommendation | Pass, no console errors |
| `examples/coast/` byte-for-byte unchanged | Pass |

Neutral root HTML is now **4,665 bytes** (was 2,649). Still no external fonts,
images, or remote requests.

### Still not verified

- Nothing above was tested on a real GitHub Pages deployment. The published
  demo URL in `README.md`
  (`https://calpolyvibecoding-01.github.io/cpvc-02-understudy-template/examples/coast/`)
  returns **404 today**, as expected, because `main` has not been released. It
  becomes correct after the merge, and should be opened once to confirm.
- No push, merge, Pages-settings change, portal submission or outside tester
  was used. The Cowork session had **no GitHub write access** to the repository,
  so nothing was pushed from it.
