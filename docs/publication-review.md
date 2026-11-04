# Publication review

Review date: 2026-11-04. Decision: **do not make the repositories public yet**. They were created privately with new, independent Git histories. The historical monorepo remains private and is not included in this decision.

## Completed checks

- The six repositories retain Apache-2.0 LICENSE and NOTICE files. The project owner's confirmation of rights to the server promotional images is documented in [Licensing](licensing.md).
- Gitleaks scanned all reachable history of each new repository. Its generic-key findings occur in test vectors, examples, public configuration and lockfiles; scanner output alone does not prove fixture identities have no assets or establish that unknown credentials are absent. The local E2E wallet mnemonic was compared byte-for-byte with reachable Git objects in all six repositories; no exact match was found. The owner's former author email and local home path were also searched in checked-in source. New commits use a GitHub noreply address.
- Dependabot alerts were enabled on the six repositories. Extension, mobile and server each report a low-severity deepmerge advisory. Their audit scripts verify the local patches; the upstream alerts remain open.
- The desktop Flutter tests passed 1,448 tests with 11 skips. A separate run with a previously built release SQLCipher framework from the original workspace, whose Dart and macOS Pod lockfiles match the standalone checkout, passed 1,458 tests with one skip. This does not replace a fresh standalone native build and distribution acceptance. Mobile passed 127 Jest suites and 1,315 tests; its bundled protocol passed 202 tests and integrity verification. Protocol passed 202 tests. Extension passed 402 tests and its build, type and lint checks.
- Extension packaging no longer deletes or overwrites `.env.local`; it refuses packaging if the file or a dangling symlink exists. The tested Chrome ZIP contains the project LICENSE and NOTICE and no `.env` file. Its two scanner findings matched the configured public token address. Third-party notices for the actual bundle remain incomplete.
- Shared engineering documents were moved to `overview`; links among the six working repositories were checked. The mobile protocol snapshot was re-imported as a complete unit from protocol commit `ba723e5`, then integrity-checked and tested.
- Server passed lint, 42 Jest suites / 362 tests, script tests (114 passed, 3 skipped), UI tests (49 passed) and build. A parallel Worker run encountered a connection reset; the affected 19-test file passed on retry and a serial full Worker run passed 141 tests with one skip. This is not hosted ARC or remote deployment validation.

## Remaining gates

1. Review all scanner matches and verify that every fixture key controls no real assets or user data. Repeat history and binary scans on the final revision before changing visibility.
2. Complete dependency and asset provenance review, including iOS Pods/Gems, Flutter SDK dependencies, icons, fonts and native binaries such as LGPL libvips. Confirm complete third-party license texts, notices, source/offer obligations and distribution archives. Existing dependency inventories and the owner's asset confirmation are useful evidence, not a complete legal review.
3. Reproduce a clean iOS `pod install` with the updated Gem lockfile and check current advisory results. An isolated retry using the updated Gem lockfile reached Hermes download but was stopped after very low throughput; installation did not complete. Keep the deepmerge advisory and patch evidence visible until upstream remediation can replace the patches.
4. Establish and verify a private security reporting channel. The owner selected GitHub private vulnerability reporting for publication. GitHub documents that repository owners can enable this feature for public repositories, so enable and verify it as part of each visibility change; it is not currently an available reporting channel on these private repositories. Do not publish until the cutover procedure is ready.
5. Revalidate cross-repository documentation and CI, especially server and extension dependency checkout while protocol remains private. A GitHub Actions token for one private repository does not automatically grant access to another; use an appropriately scoped read-only credential where needed. Avoid exposing that credential in logs or repository files.
6. Complete fresh native platform builds, CI runs and any required hosted ARC/Workers integration acceptance. Unit tests and a local build do not establish production readiness.
7. Repeat link, history and binary scans after the final commits and check that published repositories and package dependencies are accessible in the intended visibility order.

The preserved historical monorepo has separate history, pull-request metadata and disclosure concerns; none of those are resolved by publishing new repositories. Its visibility must remain private pending its own review.

## License inventory evidence and limits

The installed-package inventory found missing license metadata for `@arcblock/did-motif@1.1.14`, `configurable@0.0.1`, `escape-regexp@0.0.1`, and `@realm/fetch@0.1.1`. The installed `did-motif` package has an Apache-2.0 license file; the latter two legacy packages state MIT in their READMEs; Realm JS source at the matching tag states Apache-2.0 as described in [Licensing](licensing.md). These observations do not establish complete notice compliance for a built archive. The prior inventory found license files for all 174 hosted Flutter lock entries and license declarations for 88 locally installed Podspecs, not a review of every native dependency or platform.

One locally tested Chrome ZIP contained no native `.node`, `.so`, `.dylib`, or `.dll` file. That narrows, but does not resolve, the distribution analysis of LGPL libvips and its dependencies in other builds and targets. The Chrome ZIP now includes the project LICENSE and NOTICE; it does not yet have a verified complete third-party notice bundle. Do not distribute it as a finished release on this evidence alone.
