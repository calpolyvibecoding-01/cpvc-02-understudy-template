# Can someone understand what you built?

**The Understudy · Friday, September 11 · CPVC Session 02**

A recruiter sees filenames and counts, but cannot tell which project to ask about
or what it demonstrates. How could you help them understand the work honestly?

That is the problem. **You choose the reader, the question and what deserves to
lead.** An agent helps build your answer. You decide whether it ships.

[See Signal, the stretch example](https://calpolyvibecoding-01.github.io/cpvc-02-signal/).
Do not try to reproduce all its features today.

## The finish line

By 1 PM: one fictional profile, one specific reader, one supported claim, one
instruction-file rule followed, a reviewed change and a live link.

> [!NOTE]
> When you reach a **STOP**, wait there. We move as a room. Done early? Help
> the person next to you before moving on.

Bring a laptop and GitHub account. Lane A uses Codex on your personal ChatGPT
account, not Cal Poly's workspace.

> [!TIP]
> **No card or Codex access?** [Lane C](#lane-c-browser-fallback) needs no card,
> Codex access, download or API key. You still practice the same core lesson.

## 1. Make your own copy

**Use this template → Create a new repository**. Choose your account, name it
`cpvc-02-understudy`, choose **Public**, and copy only the default branch.
Keep last week's repo. No personal data.

In your copy: **Settings → Pages → Deploy from a branch → main → /(root) → Save**.
Open GitHub's displayed link after deployment. For a 404, check **Actions** and refresh.

---

> [!IMPORTANT]
> ## 🛑 STOP 1 · Your starter is live
>
> Do not move on until **your link opens and shows the starter**. It reports
> facts, not a recommendation. Need help? Ask an officer. Done? Check on a neighbor.

---

## 2. Decide before prompting

Choose one file: `profile-starter.json` (one new project), `profile-finance.json`,
`profile-software.json` or `profile-consumer.json`. All four are fictional.

Choose an approach, not a different curriculum track:

- **Analyzer:** What does this evidence support, and what should the reader ask next?
- **Showcase:** Which project should lead, and how would you explain its purpose?

Edit [SPEC.md](SPEC.md) with the pencil. Fill its **six TARGET lines**, then commit.
Name one person or situation, not “employers.” Missing data is a gap, not permission
to invent a purpose.

Edit [AGENTS.md](AGENTS.md): replace the reader-rule placeholder with one rule you
can check on screen. Commit it. SPEC is today's target; AGENTS is the standing brief.

> [!IMPORTANT]
> **Write the brief before you prompt.** All six TARGET lines and your AGENTS
> reader rule should be filled in and committed before the next step.

## 3. Let the understudy read the brief

In [Codex](https://chatgpt.com/codex), connect GitHub to **your copy**, create its
environment if prompted, and select it. No keys or dependencies. Send:

> Read AGENTS.md, SPEC.md, index.html and my selected profile. Do not edit yet.
> Summarize my reader's question, one claim the data supports, and my reader rule.
> Flag any unfilled TARGET line or unsupported assumption before building.

---

> [!IMPORTANT]
> ## 🛑 STOP 2 · Check the brief before the build
>
> The agent read **your repo** and understood **your reader, question and rule**.
> It has not edited anything. If its summary is wrong, correct it now.

---

Then send:

> Build the smallest useful page that answers SPEC.md and follows AGENTS.md.
> Change only index.html. Put the answer first, show its source fields, and give
> the reader one useful next action. Keep facts, interpretation and questions
> distinct. Test the page and show what changed. Do not open a PR or merge yet.

## 4. Test, revise once, review

Inspect desktop and phone views. Need a preview? Ask an officer. An agent's
summary is not a visual test.

Ask your neighbor: **“What is this saying, and what would you do next?”** Then:

1. Can you point from the main claim to an exact field in the JSON?
2. Did your AGENTS reader rule visibly affect the result?
3. Is the answer readable on a phone, with a usable next action?
4. Does the diff change only `index.html`, without removing needed behavior?

A **diff** shows additions in green, removals in red. Fix one failure: “Move the
answer above the secondary detail on phones.” Recheck the page and diff, not extra
features. Record any untested checks.

> [!WARNING]
> **Do not merge a change you have not reviewed.** Check the page and the diff.
> A polished claim still needs a source; an agent's summary is not proof it works.

## 5. Ship the reviewed change

Ask Codex to open a **pull request** (a change proposal). Review **Files changed**,
then merge. After deployment, refresh your Pages link and check the result. Submit
the link and build type at [calpolyvibecoding.com](https://calpolyvibecoding.com).

---

> [!IMPORTANT]
> ## 🛑 STOP 3 · Reviewed, live and submitted
>
> You have **a working public page, a reviewed change and a submitted link**.
> That is the guided build. Extra features belong in open build, not before this stop.

---

## Open build: one more pass

The Clinic offers reliability, design and instruction-file practice. Inspect one
reference, borrow a hierarchy rule, capture before/after and fix one issue.
Graphs, export, storage and motion are extras, not requirements. No live APIs today.

**Lane B:** optional Claude Code setup at the officer table. Use the same brief
and tests.

### Lane C: browser fallback

In a free browser chat, upload AGENTS.md, SPEC.md, index.html and your JSON, or paste
them with filenames. Use the same prompts. Download the HTML and replace
`index.html` in GitHub's editor. Review **Preview changes**, choose a **new branch**,
propose the change and open a PR. Review, merge and check Pages. An officer can
help preview. You miss repo-connected tools, not Judgment.

## What you practiced

**Context:** TARGET + standing instructions. **Capability:** the harness reads
and edits files. **Orchestration:** a branch and reviewed PR. **Judgment:** scope,
evidence and a human test. **Evidence:** a working link you can explain.

The Loop: **spec → build → test → deploy → iterate**. The model proposes text and
actions; the harness runs tools and returns results. AGENTS.md briefs that process.
AI helped at **build time**; ordinary code runs for visitors. No runtime model or key.
