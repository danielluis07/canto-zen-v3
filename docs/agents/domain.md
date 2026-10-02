# Domain Docs

This repository uses a single-context domain documentation layout.

## Before exploring, read these

- Root `CONTEXT.md` for domain terminology.
- Relevant decisions in `docs/adr/`.

If these files do not exist, proceed silently. Do not flag their absence
or suggest creating them upfront. The domain-modeling skill creates
them lazily when terms or decisions are resolved.

## File structure

- `CONTEXT.md`: shared domain glossary at the repository root.
- `docs/adr/`: architecture decision records.

## Use the glossary's vocabulary

Use terms defined in `CONTEXT.md` in issue titles, proposals,
hypotheses, and tests. Avoid synonyms the glossary explicitly rejects.

If a concept is missing, reconsider whether it belongs to the domain.
Note real gaps for domain-modeling.

## Flag ADR conflicts

If a proposal contradicts an existing ADR, identify the ADR explicitly
and explain why the decision should be reopened.
