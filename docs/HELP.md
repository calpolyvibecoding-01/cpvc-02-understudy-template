# Setup and recovery

Use this page when the repository, deployment, connection, or preview does not behave as expected. Button names can move as products change; verify the result at each step.

## GitHub Pages setup

Repository settings and account settings are different places.

1. Open **your copied repository** on GitHub.
2. Open **Settings → Pages**.
3. Under the publishing source, choose **Deploy from a branch**, then `main`, `/(root)`, and **Save**.
4. Follow the site link GitHub displays and confirm the starter itself opens.

The repository URL begins with `github.com`. The live site normally ends with `github.io/YOUR-REPO/`. Submit the live site URL to the portal.

If the live page is missing:

- Open the repository's **Actions** tab and inspect the Pages deployment.
- Confirm `index.html` is at the root of `main` and its name uses lowercase letters.
- Confirm Pages publishes from `main` and `/(root)`.
- Use the exact URL GitHub displays. Project sites include the repository name and a trailing slash.
- If deployment has not completed, wait for the current Actions run to finish and retry. Do not promise a fixed wait time.

## Connect GitHub to the coding agent

Use the plugin or connector entry available in your personal ChatGPT or Codex interface. Search for GitHub, install or connect it, sign in to the GitHub account that owns your copied repository, and review the requested permissions. The exact labels can vary. The [official plugin setup guide](https://learn.chatgpt.com/docs/plugins) has the current general flow.

Installing a connection and signing in can be separate steps. Start a new task after setup if the existing task cannot see the connection. Include your repository URL and ask the agent to read `README.md`, `SPEC.md`, `AGENTS.md`, and `index.html` from `main` without editing.

If the agent cannot read the repo, open your **GitHub account settings**, then **Applications** and the installed GitHub app's configuration. Confirm the correct account and that this repository is included. These are account-level permissions, separate from the repository's **Settings → Pages** screen.

Do not send passwords, access tokens, or portal credentials to an agent. If access still fails, ask an officer or use the browser fallback.

## Preview recovery

A GitHub code diff is not an interactive preview. Ask the agent where its tools are running and which branch supplied the preview.

- With a populated local checkout, serve the proposed files over local HTTP and open that URL in a browser on the same machine.
- In a remote environment, use its supported preview route. A remote `localhost` may not be reachable from your browser.
- With connector-only access, the agent may be able to read GitHub but have no local files or reachable preview. Use the browser fallback or ask an officer for a local preview.

Do not merge merely to make a preview possible. The public Pages site remains on `main` until the reviewed branch is merged.

## Browser fallback

This lane requires a free browser chat, a normal browser, and GitHub. It does not require a card, a runtime API key, or repo-connected agent tools.

1. **Confirm STOP 1 first:** the untouched starter is live and its URL is successfully submitted.
2. Give the browser chat the root `SPEC.md` and `AGENTS.md`. Tell it your idea, one specific person, main interaction, and visual direction. Ask it to propose all six TARGET lines and one observable standing rule while preserving the provided guardrails. Approve the wording before saving anything.
3. In GitHub, create a build branch from `main`. On that branch, save the approved TARGET in `SPEC.md` and the approved rule in `AGENTS.md`. Keep the rest of both files intact.
4. Give the saved branch versions of `SPEC.md` and `AGENTS.md` back to the browser chat. Ask it to read back the six TARGET lines and standing rule. Correct the saved files if the readback does not match what you approved.
5. Download the unchanged starter `index.html` from `main` and open that actual file in a normal browser. Confirm it renders before asking for the personal build.
6. **STOP 2:** the saved brief is correct, its guardrails remain, the standing rule is checkable, and the untouched starter has a usable preview.
7. After STOP 2, give the browser chat the saved `SPEC.md`, saved `AGENTS.md`, and untouched starter `index.html`. Use this prompt:

```text
Read my saved SPEC.md and AGENTS.md first. State my six TARGET lines and
standing rule before editing. Then build the smallest useful version in
index.html with one main interaction. Preserve every saved requirement and
guardrail. Return one complete, self-contained HTML file with embedded CSS,
JavaScript, and any sample data. Use no modules, runtime fetches, external
services, secret keys, runtime AI, private data, analytics, or required assets.
Label fictional or sample content and do not invent facts. Render changing
text safely. Keep native keyboard controls, visible focus, readable contrast,
a responsive layout, and reduced-motion behavior. Test the main interaction
and standing rule, list the checks you actually ran, and name anything untested.
Do not rewrite SPEC.md or AGENTS.md. Do not claim a deployment or portal update.
```

8. Download the generated HTML and open that actual file in a normal browser. Test the main interaction, one relevant boundary or factual claim, and the visible effect of the standing rule. Request one bounded revision while reminding the chat to preserve the saved files.
9. Copy the same reviewed HTML into `index.html` on the existing build branch that already contains the approved `SPEC.md` and `AGENTS.md`. Commit it there and open a PR from that branch to `main`.
10. Review all three changed files. Merge only after approval, then recheck the deployed HTTPS site at the same submitted URL.

A downloaded-file preview can restrict browser capabilities such as clipboard access. A copy feature should show a manual-copy fallback, and you should test it again on the deployed HTTPS site. If the generated page still fetches local JSON or modules, ask for a truly self-contained version before relying on file preview. Keep the saved brief and HTML on the same build branch through review; do not move only `index.html` into a separate branch.

## Ask an officer when

- the portal submission fails or no entry appears;
- the wrong GitHub account or organization owns the copy;
- the repository connection requests permissions you do not understand;
- there is no reachable interactive preview after using the appropriate route; or
- a change includes files you did not expect.
