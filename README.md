# DIDMail

DIDMail is encrypted mail built around DID identities. Clients encrypt and sign;
independently operated nodes store ciphertext and coordinate delivery. The
supported Server is a native ARC Blocklet. It does not require a standalone
Cloudflare Workers business backend.

## Start here

1. This overview locates the project and its repositories.
2. [Development and contribution](docs/development.md) explains how to choose a
   repository, its setup/check authority, and shared contribution boundaries.
3. [Architecture](docs/architecture.md) explains component ownership and trust.

| Repository | Responsibility |
| --- | --- |
| [protocol](https://github.com/didmail-org/protocol) | Canonical TypeScript SDK, wire contracts, schemas and fixtures |
| [server](https://github.com/didmail-org/server) | Native ARC protocol HTTP, signing, AFS storage, jobs and administration |
| [extension](https://github.com/didmail-org/extension) | Browser client and localized product help |
| [mobile](https://github.com/didmail-org/mobile) | React Native client with a complete verified SDK snapshot |
| [desktop](https://github.com/didmail-org/desktop) | Flutter client and cross-language compatibility |
| [website](https://github.com/didmail-org/didmail-org.github.io) | Buildless public website |
| [.github](https://github.com/didmail-org/.github) | Organization profile |

These are independent Git repositories, not a root workspace. Public project,
protocol and Server source coexist with client repositories whose publication
review is still pending. Repository visibility does not establish release approval.

## Refer by task

- Product behavior: [delivery outcomes](docs/delivery.md), [domain aliases](docs/domain-mailboxes.md).
- Current acceptance boundaries: [status](docs/status.md).
- UI and writing: [product design](docs/product-design.md), [documentation policy](docs/documentation.md).
- Publishing or distributing: [release review](docs/publication-review.md), [licensing](docs/licensing.md).
- Hosted runtime evaluation: [ARC hosting boundary](docs/arc-cloudflare-deployment-research.md).

Original code/documentation uses [Apache-2.0](LICENSE); preserve [NOTICE](NOTICE)
and applicable third-party terms. Report vulnerabilities through [SECURITY](SECURITY.md).
