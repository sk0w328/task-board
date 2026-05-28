# CLAUDE.md — Task Board Project

## Project Overview

This is the task board project. Update this section as the project takes shape.

## Git Operations Rules

**Every code change must be committed and pushed to GitHub immediately.**

Follow this workflow after any modification:

1. Stage relevant files (never use `git add .` blindly — check for secrets or large binaries):
   ```
   git add <specific-files>
   ```

2. Commit with a clear message:
   ```
   git commit -m "concise description of what changed and why"
   ```

3. Push to the remote branch:
   ```
   git push origin <branch-name>
   ```

### Branch Strategy

- `main` — production-ready code only; never force-push
- Feature work goes on a dedicated branch: `git checkout -b feature/<name>`
- Open a pull request on GitHub to merge into `main`

### Commit Message Style

- Use the imperative mood: "Add X", "Fix Y", "Remove Z"
- One short subject line (≤ 72 chars)
- If the why is non-obvious, add a blank line followed by a brief body

### What NOT to commit

- `.env` files or any file containing secrets/credentials
- Large binary files or build artifacts (`node_modules/`, `dist/`, `__pycache__/`, etc.)
- Editor config files unless the team has agreed on them

## Code Style

- Prefer editing existing files over creating new ones
- Default to no comments — only add a comment when the **why** is non-obvious
- No half-finished implementations; complete each task before moving on
- Do not add error handling for scenarios that cannot happen

## Testing

Run the test suite before every push. If no test suite exists yet, add one as the project grows.

## Development Setup

Document setup steps here once the tech stack is decided.
