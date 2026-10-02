# Issue tracker: GitHub

Issues and specs for this repo live in GitHub Issues for
`danielluis07/canto-zen-v3`. Use the `gh` CLI for all operations.

## Conventions

Infer the repository from `git remote -v`; `gh` does this automatically
when run inside a clone.

- Create: `gh issue create --title "..." --body-file <path>`
- Read: `gh issue view <number> --comments`; fetch labels as needed.
- List: `gh issue list --state open --json number,title,body,labels,comments`
  with appropriate label and state filters.
- Comment: `gh issue comment <number> --body-file <path>`
- Apply labels: `gh issue edit <number> --add-label "..."`
- Remove labels: `gh issue edit <number> --remove-label "..."`
- Close: `gh issue close <number> --comment "..."`

For multiline bodies, write the exact text to a temporary file and use
`--body-file`.

## Pull requests as a triage surface

**PRs as a request surface: no.**

## When a skill says "publish to the issue tracker"

Create a GitHub issue.

## When a skill says "fetch the relevant ticket"

Run `gh issue view <number> --comments`.

## Wayfinding operations

The map is one issue labelled `wayfinder:map`; its children are tickets.

- Link children as GitHub sub-issues. If unavailable, add a task list
  to the map and `Part of #<map>` to each child.
- Label children `wayfinder:<type>`: research, prototype, grilling, or task.
- Represent blockers using native GitHub issue dependencies. If
  unavailable, add `Blocked by: #<number>` references to the child.
- Select the first open, unassigned child in map order whose blockers
  are all closed.
- Claim with `gh issue edit <number> --add-assignee @me`.
- Resolve by commenting with the answer, closing the child, and adding
  a brief result and link to the map's Decisions-so-far.
