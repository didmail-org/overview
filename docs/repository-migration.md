# Repository migration

The previous private `didmail-org/didmail` monorepo was the source of the migration. Current development uses the separate repositories listed in the [project overview](../README.md). Their histories start with the migrated snapshots; historical local material is retained separately.

| Previous monorepo path | Current repository |
| --- | --- |
| `packages/protocol`, `docs/protocol` | [protocol](https://github.com/didmail-org/protocol) |
| `server` | [server](https://github.com/didmail-org/server) |
| `apps/extension` | [extension](https://github.com/didmail-org/extension) |
| `apps/mobile` | [mobile](https://github.com/didmail-org/mobile) |
| `apps/flutter` | [desktop](https://github.com/didmail-org/desktop) |

The mobile SDK remains a complete, integrity-checked snapshot. Historical checkouts, including the legacy server, are retained in verified local archives under the historical `didmail` checkout. Consult the local workspace `AGENTS.md` for archive locations and recovery instructions; the former sibling checkout directories have been removed. For current setup see [development](development.md); for publication readiness see the [publication review](publication-review.md).
