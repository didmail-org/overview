# Hosted ARC evaluation

For engineers evaluating a future hosted installation of the native DIDMail
Blocklet. This is a host-contract reference, not an executable deployment plan.
The supported Server runtime is [native ARC](https://github.com/didmail-org/server/blob/main/docs/server-architecture.md);
its standalone Workers business backend and the earlier split-host design are retired.

## Package, host and installation are different

A Blocklet contains versioned software/assets. An ARC host supplies interpretation,
identity/session authority, provider activation and access context. An installation
binds durable instance/user data, secrets and routing. Serving package bytes from
Pages/Static Assets proves neither executable provider hosting nor persistent
writes. A generic `fetch()` wrapper is not a substitute for the complete ARC host.

For any proposed host obtain a supported exact entrypoint/artifact, build/config,
required bindings, session classes/migrations, owner identity, provider matrix,
secrets, domains and upgrade/restore contract. A Node/Bun module import or a green
preflight does not prove equivalent Cloudflare execution. Cloudflare's Node API
compatibility and temporary filesystem do not provide a persistent ARC home.
Containers likewise need an explicit durable-state/lifecycle design.

## Retained version-specific findings

These are historical inspection boundaries, not claims about every current host.
The inspected CLI was ARC `2.0.0-beta.74 (49c9125c)`. Its bundled collections and
work-board notes documented skipped module-target mounts in Cloudflare activation.
The release CLI did not expose the internal `arc worker` provisioning command.
Confirm these constraints against the actual target version instead of reusing a
staging plan or another operator's IDs/domains.

| Recorded published component | Finding requiring host integration |
| --- | --- |
| `@aigne/arc@0.1.1-beta` | ArcHost accepts mounted AFS/session/logger/WebSocket adapters; it is not the complete DID login/team service |
| `@aigne/aos@0.2.0-beta` | Activation requires runtime-supplied providers/hooks and caller scoping |
| `@aigne/afs@1.12.0-beta.5` | Module mounts used disk paths/platform filesystem/dynamic imports; hosted loading needs proof |
| `@aigne/afs-did-space@1.12.0-beta.5` | Cloudflare storage needs explicit owner identity and actual D1/R2 bindings; no implied transaction guarantee |
| `@aigne/afs-http-mount@1.11.0-beta.13` | Read-only package loading is not an executable runtime or writable instance |
| `@aigne/afs-web-device@1.12.0-beta.5` | A renderer does not supply host identity or session services |

The inspected packages declared `UNLICENSED`; captured implementation/source maps
do not establish self-hosting or redistribution rights. Obtain exact applicable
terms. The [Server distribution audit](https://github.com/didmail-org/server/blob/main/docs/distribution-license-audit.md)
continues to apply independently. The recorded
[upstream question](https://github.com/orgs/didmail-org/discussions/1) is a question,
not an approval or a supported provisioning contract.

## Local package control probe

The retained [probe](../scripts/probe-arc-cloudflare.mjs) can exercise package
manifests/hashes under an isolated static test host. It obtains the test library
from an explicitly selected package environment, not the normal application run:

```sh
node scripts/probe-arc-cloudflare.mjs ../server/package.json
```

Read its CLI/code before execution. It writes ignored experiment artifacts and
does not deploy a real backend. Manifest/static-byte availability does not prove
page/session/provider functionality. Single-run HTTP results, npm tarballs and
staging observations are retained privately, not copied into current setup.

## Acceptance before a hosted claim

Use the Server's [hosted cutover contract](https://github.com/didmail-org/server/blob/main/docs/arc-native-migration.md):
prove HTTP/WS fidelity, verified callers/membership, private key custody,
conditional writes, transaction/fence semantics, scheduling, domain/session
routing and coordinated restart/backup/restore. Test anonymous and authorized
access on isolated resources. Preserve original signing identities, exact amounts,
accepted terms and original signed evidence; unknown outcomes never justify a
replacement payment.

The [shared status summary](status.md) distinguishes implemented code from local,
paid, hosted and distribution acceptance. Evaluate one native Blocklet on a
supported host; do not revive a separate DIDMail Worker to bypass an unproven
provider contract. Public runtime documentation provides context:
[ARC request flow](https://www.arcblock.io/en/articles/inside-arc-request/),
[ARC Cloudflare architecture](https://www.arcblock.io/en/articles/arc-computer-cloudflare/)
and [package publishing](https://www.arcblock.io/en/docs/blocklets/publish-deploy/).
The target host must still demonstrate its own exact contract.
