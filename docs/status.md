# Implementation status and acceptance boundaries

For maintainers deciding which capability may be advertised or released. This
is the shared product-status summary; component source and scoped evidence own
implementation details. Update rows when behavior changes instead of appending
per-run test counts or local-machine diaries.

| Area | Checked-in behavior | Acceptance boundary |
| --- | --- | --- |
| DMP/1 and clients | Canonical SDK, native ARC HTTP, browser/React Native/Flutter implementations and compatibility vectors | Target-deployment interoperability and independent security review |
| Internal member mail | Same-node bound-member delivery, signed receipt, encrypted download and one inbox | Server's [capability table](https://github.com/didmail-org/server/blob/main/docs/arc-package-runtime.md#capability-status) distinguishes isolated tests from recorded real local-account acceptance; hosted/physical-device acceptance is separate |
| External NFT mail | Paid/sponsored profiles, original-byte recovery and chain-evidence validation | Controlled real payment/mint acceptance on the intended deployment |
| ARC onboarding | Mailbox proof/approval, signed lookup/revocation and optional encrypted key archive | Trusted directory scope/credential lifetime and native redirect/session behavior per deployment |
| Native Server | HTTP, original signing, jobs, AFS storage and five-language AUP UI inside ARC | Hosted ARC and distribution remain gated; standalone Workers is retired |
| Contact/namecard recovery | Internal preparations/jobs and client verification modules | Capability and production dispatch are not advertised/enabled; follow [internal reference](https://github.com/didmail-org/server/blob/main/docs/contact-recovery.md) |
| Backups | Client encrypted archives, coordinated AFS backup and historical source import | Restore matching state, identity, historical keys and objects under the relevant operator procedure |
| Native/browser distribution | Platform source and isolated acceptance/packaging tools | Signing, store installation and actual device/browser coverage; source presence is not a release |

## Persistent boundaries

DMP/2 ordinary/chain-VC mail is retired; retained schemas/vectors are compatibility
inputs. The current Server has one native ARC runtime. Policy, business metadata,
objects and chain do not share one transaction: unknown outcomes need original
ID/evidence reconciliation. Historical D1/R2 data is a one-time recovery source.

Clients currently rescan/merge internal sequences rather than guarantee a durable
cross-refresh incremental watermark. Key registries are not transparency logs;
a mnemonic alone does not restore random historical device encryption keys.
Private HTTPS access does not imply an air-gapped deployment, SMTP or cross-node
member federation. [Delivery](delivery.md) owns outcome and admission semantics.

## Evidence and release decisions

For each target record revision, runtime, command, result, skipped coverage and
what was actually exercised. Fixtures prove bounded compatibility/failure
properties, not consensus finality, availability or security certification.
[Development](development.md) routes component checks;
[publication review](publication-review.md) owns source/distribution gates, and
[hosted runtime evaluation](arc-cloudflare-deployment-research.md) owns open host
questions. No test count or local success grants a capability automatically.
