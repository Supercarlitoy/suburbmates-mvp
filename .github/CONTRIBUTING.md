# Contributing

Thanks for wanting to contribute! To keep contributions high-quality and reviewable, please follow these guidelines.

Branching
- Use short, descriptive branch names: feat/<summary>, fix/<summary>, chore/<summary>, docs/<summary>.
- Base branches on the default branch and keep changes focused.

Pull requests
- Open a PR with a clear title and description explaining the change and any migration/upgrade steps.
- Use a single commit where practical. Squash or rebase locally before merging if needed.
- Link related issues in the PR description.

Commit messages
- Follow Conventional Commits: feat|fix|chore|docs|refactor|test|perf(scope)?: subject
- Keep the subject under 72 characters.

Quality checks
- Run lint and type checks locally: `npm run lint` and `npm run build`.
- Run tests where applicable.
- Ensure Prisma client is generated when touching schema: `npx prisma generate`.

Code review
- Add context in the PR for reviewers and request reviews from @Supercarlitoy.

Thanks for contributing!