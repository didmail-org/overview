# Development and contribution

Read the [overview](../README.md), then this guide and the
[architecture](architecture.md). This repository owns shared project guidance;
component READMEs own executable setup and verification. There is no root install
or combined dependency workspace.

## Choose the repository

| Change | Start here |
| --- | --- |
| Wire artifacts, signing/encryption or SDK | [Protocol README](https://github.com/didmail-org/protocol/blob/main/README.md) |
| Node HTTP, storage, jobs or native UI | [Server development](https://github.com/didmail-org/server/blob/main/docs/local-arc-development.md) |
| Browser extension | [Extension README](https://github.com/didmail-org/extension/blob/main/README.md) |
| React Native iOS/Android | [Mobile README](https://github.com/didmail-org/mobile/blob/main/README.md) |
| Flutter/native client | [Desktop README](https://github.com/didmail-org/desktop/blob/main/README.md) |
| Public site text/translations | [Website README](https://github.com/didmail-org/didmail-org.github.io/blob/main/README.md) |

Read the target's current AGENTS instructions. Use its declared tool versions,
lockfile, lifecycle allowlist and patches. Node tooling requires >=24.14;
Flutter/native versions and SDK prerequisites belong to the relevant client.
ARC-only Server build/run is distinct from its Node regression environment.
Client source access may require authorization; public protocol/Server access
does not imply every client has been released.

Inspect uncommitted changes before editing. Keep changes/checks scoped to the
owning repository and coordinate shared-contract adoption deliberately. Mobile's
vendored protocol is an immutable complete snapshot: import and verify it as a
unit, never patch isolated snapshot files. Protocol vectors remain the common
cross-client baseline. Do not revise cryptography, exact amounts, original
transaction bytes or recovery semantics during documentation cleanup.

## Contribute safely

Submit only material you are entitled to contribute, preserve notices and use
[the original project's licensing terms](licensing.md). Keep credentials, real
mail, local databases, private evidence and signing material out of source/logs.
Use public fixtures and isolated resources; automated checks never send real
mail or broadcast transactions. Follow [documentation policy](documentation.md)
for prose and [product design](product-design.md) for shared UI decisions.

Run the changed component's matching checks and report their actual scope and
limits. A unit pass, local package build, hosted acceptance and distribution
approval are different claims. Patch-aware dependency gates do not erase raw
upstream advisories. Refer to [status](status.md) and [release review](publication-review.md)
for the acceptance and publication decision process.

## Work on this documentation repository

Node >=24.14 and pnpm 12.11.2 run its offline documentation checks:

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm test
corepack pnpm check:docs
```

The checker validates tracked Markdown H1s, local links, images and anchors in a
standalone checkout. Include new files in an explicit check before staging;
remote/private links are not fetched by this offline check. Use relative links
inside a repository and full repository URLs across repositories.

[Repository migration](repository-migration.md) is only an old-path lookup, not
setup. Current source and component instructions take precedence over retained
history or captured external instructions.
