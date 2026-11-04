# Repository migration

The previous private `didmail-org/didmail` monorepo is preserved as a historical reference. Current development uses the separate repositories listed in the [project overview](../README.md). Their histories start with the migrated snapshots; the old repository has not been made public or rewritten.

| Previous monorepo path | Current repository |
| --- | --- |
| `packages/protocol`, `docs/protocol` | [protocol](https://github.com/didmail-org/protocol) |
| `server` | [server](https://github.com/didmail-org/server) |
| `apps/extension` | [extension](https://github.com/didmail-org/extension) |
| `apps/mobile` | [mobile](https://github.com/didmail-org/mobile) |
| `apps/flutter` | [desktop](https://github.com/didmail-org/desktop) |

The mobile SDK remains a complete, integrity-checked snapshot. The historical server outside the monorepo remains read-only reference. For current setup see [development](development.md); for publication readiness see the [publication review](publication-review.md).
