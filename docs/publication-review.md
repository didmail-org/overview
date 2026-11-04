# Publication review

Review date: 2026-11-04. Decision: **do not make the repositories public yet**. They were created privately with new, independent Git histories. The historical monorepo remains private and is not included in this decision.

## Completed checks

- The six repositories retain Apache-2.0 LICENSE and NOTICE files. The project owner's confirmation of rights to the server promotional images is documented in [Licensing](licensing.md).
- Secret scanning covered the staged initial source snapshots. Generic-key matches include public test vectors, examples and configuration; matches still require an evidence-based review and a scanner cannot prove absence of unknown credentials. Checked-in source in the component repositories was also searched for the owner's former author email and local home path. Commits use a GitHub noreply address.
- Dependabot alerts were enabled on the six repositories. Extension, mobile and server each report a low-severity deepmerge advisory. Their audit scripts verify the local patches; the upstream alerts remain open.
- The desktop Flutter tests passed 1,448 tests with 11 skips, without the additional native SQLCipher acceptance run. Mobile passed 127 Jest suites and 1,315 tests; its bundled protocol passed 202 tests and integrity verification. Protocol passed 202 tests. Extension passed 402 tests and its build, type and lint checks.
- Server passed lint, 42 Jest suites / 362 tests, script tests (114 passed, 3 skipped), UI tests (49 passed) and build. A parallel Worker run encountered a connection reset; the affected 19-test file passed on retry and a serial full Worker run passed 141 tests with one skip. This is not hosted ARC or remote deployment validation.

## Remaining gates

1. Review all scanner matches and verify that every fixture key controls no real assets or user data. Repeat history and binary scans on the final revision before changing visibility.
2. Complete dependency and asset provenance review, including iOS Pods/Gems, Flutter SDK dependencies, icons, fonts and native binaries such as LGPL libvips. Confirm complete third-party license texts, notices, source/offer obligations and distribution archives. Existing dependency inventories and the owner's asset confirmation are useful evidence, not a complete legal review.
3. Reproduce a clean iOS `pod install` with the updated Gem lockfile and check current advisory results. Prior isolated installation did not complete. Keep the deepmerge advisory and patch evidence visible until upstream remediation can replace the patches.
4. Establish and verify a private security reporting channel. The current SECURITY documents do not establish one.
5. Revalidate cross-repository documentation and CI, especially server and extension dependency checkout while protocol remains private. A GitHub Actions token for one private repository does not automatically grant access to another; use an appropriately scoped read-only credential where needed. Avoid exposing that credential in logs or repository files.
6. Complete native SQLCipher and platform builds, CI runs and any required hosted ARC/Workers integration acceptance. Unit tests and a local build do not establish production readiness.
7. Some engineering links still point to the private historical monorepo. Migrate or replace the referenced material before making a repository public.

The preserved historical monorepo has separate history, pull-request metadata and disclosure concerns; none of those are resolved by publishing new repositories. Its visibility must remain private pending its own review.
