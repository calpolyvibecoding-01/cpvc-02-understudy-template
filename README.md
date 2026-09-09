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
instruction-file rule followed, a reviewed change and a live link registered in
the club's build database.

> [!NOTE]
> When you reach a **STOP**, wait there. We move as a room. Done early? Help
> the person next to you before moving on.

Bring a laptop and GitHub account. Lane A uses Codex on your personal ChatGPT
account, not Cal Poly's workspace.

> [!TIP]
> **Back-to-school offer:** Check the [ChatGPT student offer](https://chatgpt.com/students/2026/)
> for eligibility and current terms before signing up.

> [!TIP]
> **No card or Codex access?** [Lane B](#appendix-lane-b-browser-fallback) needs no card,
> Codex access, download or API key. You still practice the same core lesson.

## 1. Make your own copy

**Use this template → Create a new repository**. Choose your account, name it
`cpvc-02-understudy`, choose **Public**, and copy only the default branch.
Keep last week's repo. No personal data.

In your copy: **Settings → Pages → Deploy from a branch → main → /(root) → Save**.
Open GitHub's displayed link after deployment. For a 404, check **Actions** and refresh.

### Required: submit your live link before continuing

As soon as your Pages link opens successfully, register it in the club's build
database. **Submit the starter now; do not wait for the finished build.**

Choose one file: `profile-starter.json` (one new project), `profile-finance.json`,
`profile-software.json` or `profile-consumer.json`. All four are fictional.

Choose an approach, not a different curriculum track:

- **Analyzer:** What does this evidence support, and what should the reader ask next?
- **Showcase:** Which project should lead, and how would you explain its purpose?

1. Open [calpolyvibecoding.com/portal](https://calpolyvibecoding.com/portal).
2. **Log in or sign up**, then click **Builds** in the top right.
3. Under **Post this week's build**, paste your **live GitHub Pages URL** into
   **Link**, not the GitHub repository URL.
4. In **What is it?**, write one sentence naming your **profile filename** and
   **Analyzer or Showcase** approach. For example:
   “Session 2 starter using profile-finance.json; Showcase path to help an
   interviewer choose which project to ask about.”
5. Click **Post it** and confirm your submission succeeded. If it fails, ask an
   officer before continuing.

Your page can still look like the starter. The description records what you plan
to build; it does not claim the finished result already exists.

---

> [!IMPORTANT]
> ## 🛑 STOP 1 · Live and submitted
>
> Do not move on until **your Pages link opens and you have submitted it through
> the portal**, with your **profile filename and Analyzer or Showcase choice**
> in the description. Then continue to Part 2 when the room moves on.
> Need help? Ask an officer. Done? Check on a neighbor.

---

## 2. Decide before prompting

Use the profile and approach you submitted in Part 1. Now decide who your reader
is and what they need to understand.

Edit [SPEC.md](SPEC.md) with the pencil. Fill its **six TARGET lines**, then commit.
Name one person or situation, not “employers.” Missing data is a gap, not permission
to invent a purpose.

Edit [AGENTS.md](AGENTS.md): replace the reader-rule placeholder with one rule you
can check on screen. Commit it. SPEC is today's target; AGENTS is the standing brief.

> [!IMPORTANT]
> **Write the brief before you prompt.** All six TARGET lines and your AGENTS
> reader rule should be filled in and committed before the next step.

## 3. Let the understudy read the brief

### A. Connect your GitHub account

Keep **your GitHub repo** open. In Codex, use the **Plugins** entry in the left
pane. GitHub holds your files and the final review; Codex is where you brief the agent.

1. **Sign in to your personal ChatGPT account**, not the Cal Poly workspace.
2. Click **Plugins** in the left pane, search for **GitHub**, and open the GitHub
   plugin. Click **Install** (or the **+** install button). Do not wait for an
   automatic connection prompt when you open Codex.
3. Use the plugin's **Connect / Sign in** step and log in to the GitHub account
   that owns your copy from Part 1. Installing the plugin and signing in are
   separate steps; finish both.
4. GitHub will ask you to authorize or install the app. If it asks where to
   install, choose **your personal GitHub account**, not the club or a work
   organization. Check that you arrived here from Codex and review the permissions.
5. Under **Repository access**, choose **All repositories** for your club-building
   account. Complete the **Install / Authorize** prompts, then return to Codex.
   This avoids having to add each new weekly repo to the connection manually.

> [!WARNING]
> **Know what “All repositories” allows.** It covers the app's requested access
> across that account's current and future repos, including private ones. It does
> not make them public. If you keep sensitive or work projects there, choose
> **Only select repositories** and add `cpvc-02-understudy` instead. That still
> supports agentic work; you will need to add future club repos yourself.

### B. Start a task with GitHub and your repo

1. Return to Codex after sign-in and start a **new task** so the installed plugin
   is available. Type **@** and choose **GitHub** to include it in your request.
2. Paste the URL of **your username / cpvc-02-understudy**, not the club's template.
   Having access to every repo does not tell the agent which one you mean.
3. Use the read-only prompt below to check the committed files on **main**.
   This plugin path does not require you to create a Codex cloud environment.
   No API keys, secrets or packages are needed for the starter.

> [!TIP]
> **Plugin installed but not connected?** Go back to **Plugins → GitHub** and
> complete sign-in. Then start a new task with **@GitHub**.
>
> **Connected, but the agent cannot access your repo?** In GitHub, open your profile
> menu → **Settings → Applications → Installed GitHub Apps**. Find the app you
> connected from Codex, choose **Configure**, then check **Repository access**.
> Choose **All repositories**, or add your new repo to the selected list, and
> **Save**. Return to Codex and retry with your repo URL. These are account settings,
> not the repository's Settings tab. If the account is wrong or access is still
> missing, ask an officer or use Lane B. Do not create extra copies to fix access.

### C. Prove the connection works before editing

With **@GitHub** selected, send this in your new Codex task:

> In [paste your GitHub repo URL], read AGENTS.md, SPEC.md, index.html and my
> selected profile from main. Do not edit yet.
> Summarize my reader's question, one claim the data supports, and my reader rule.
> Flag any unfilled TARGET line or unsupported assumption before building.

![Codex prompt with GitHub selected and the read-only brief-check prompt ready to send](codex-read-brief.png)

*Before sending: look for the GitHub label at the start of your prompt, and replace
`[paste your GitHub repo URL]` with your own repo link. The model, folder and other
settings shown are examples, not settings you need to match.*

You should get details from **your edited files**, not a generic explanation of
GitHub. Being signed in alone is not the check. If it cannot read the files,
return to the plugin sign-in and repository-access steps above.

[Plugin setup reference](https://learn.chatgpt.com/docs/plugins#install-and-use-a-plugin) ·
[GitHub app access settings](https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps)

---

> [!IMPORTANT]
> ## 🛑 STOP 2 · Check the brief before the build
>
> The agent read **your repo** and understood **your reader, question and rule**.
> It has not edited anything. If its summary is wrong, correct it now.

---

Then send:

> Build the smallest useful page that answers SPEC.md and follows AGENTS.md.
> Work on a new branch, not main. Change only index.html. Put the answer first,
> show its source fields, and give
> the reader one useful next action. Keep facts, interpretation and questions
> distinct. Build for desktop for this session; mobile is not required.
> Test the page and show what changed. Do not open a PR or merge yet.

## 4. Preview in Codex and check the page

In the **same Codex desktop task**, send:

> Create a local preview from my build branch, not main. Bring its index.html
> and the four unchanged profile JSON files into a local preview folder.
> Start a local web server and open the preview in the side browser of the
> Codex desktop app. Tell me which branch I am viewing and keep the preview
> running while I check it. Use the same files that will go into the pull request.
> Do not change GitHub Pages settings, add preview files to the repo, or merge.

> [!NOTE]
> **Preview here; publish after merging.** Your public Pages link still shows
> main. The side-browser preview shows your unmerged build on this laptop, not
> a second public link. No GitHub cloud editor is needed. Keep the original
> Pages link in your portal submission.

Check the preview on your **desktop only**. Mobile design and testing are not
required for this session. If the preview does not open, ask an officer.

Ask your neighbor: **“What is this saying, and what would you do next?”**

1. Can you point from the main claim to a source field in the JSON?
2. Did your AGENTS reader rule visibly affect the result?
3. Is the answer readable on your laptop, with a usable next action?

This is a quick check of the result, not a code-review exercise or a required
revision round. If the page will not load or something seems wrong, ask an officer.

## 5. Ship the checked page

Ask Codex to open a **pull request** (a change proposal), then open its link in
GitHub. Notice the **Files changed** tab: this is where the **diff** shows what
changed, with additions in green and removals in red.

> [!NOTE]
> **You do not need to understand the code diff today.** For this low-risk build
> with fictional data, focus on the page checks above. In later weeks, we will
> practice critically analyzing diffs and reviewing higher-risk changes.

After checking the page, merge the pull request. Refresh the **same Pages link
you submitted in Part 1** after deployment and check the result. Your submitted
URL now shows the updated build; you do not need a second submission for it.

> [!IMPORTANT]
> **You still decide whether to ship.** Connecting GitHub is not approval to
> merge. If you are unsure about the result, ask an officer before merging.
> You do not need to copy the HTML back manually.

---

> [!IMPORTANT]
> ## 🛑 STOP 3 · Reviewed, live and submitted
>
> You have **a working public page, a reviewed change and a submitted link**.
> That is the guided build. Extra features belong in open build, not before this stop.

---

## What you practiced

**Context:** TARGET + standing instructions. **Capability:** the harness reads
and edits files. **Orchestration:** a branch and reviewed PR. **Judgment:** scope,
evidence and a human test. **Evidence:** a working link you can explain.

The Loop: **spec → build → test → deploy → iterate**. The model proposes text and
actions; the harness runs tools and returns results. AGENTS.md briefs that process.
AI helped at **build time**; ordinary code runs for visitors. No runtime model or key.

## Appendix: Lane B, browser fallback

In a free browser chat, upload AGENTS.md, SPEC.md, index.html and your JSON, or paste
them with filenames. Use the same prompts. Download the HTML and replace
`index.html` in GitHub's editor. Notice **Preview changes**, then choose a **new
branch**, propose the change and open a PR. Use the same page checks and merge
steps above. An officer can help preview. You miss repo-connected tools, not Judgment.
