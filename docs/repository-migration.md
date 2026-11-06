# Repository migration

The previous private `didmail-org/didmail` monorepo was the source of the migration. Current development uses the separate repositories listed in the [project overview](../README.md). Their histories start with the migrated snapshots; historical local material is retained separately.

| Previous monorepo path | Current repository |
| --- | --- |
| `packages/protocol`, `docs/protocol` | [protocol](https://github.com/didmail-org/protocol) |
| `server` | [server](https://github.com/didmail-org/server) |
| `apps/extension` | [extension](https://github.com/didmail-org/extension) |
| `apps/mobile` | [mobile](https://github.com/didmail-org/mobile) |
| `apps/flutter` | [desktop](https://github.com/didmail-org/desktop) |

The mobile protocol is still an immutable complete snapshot, not a second SDK
authority. Active repositories have independent histories and lockfiles. Do not
recreate a monorepo for normal development or copy package dependencies together.
Historical local recovery sources are private; the workspace guide records their
ownership. This old-path table is not current runtime or restore instructions.

Use [development](development.md) for setup and
[release review](publication-review.md) before changing visibility/distribution.
