# Implementation status and release gates

Status: current repository scope, reviewed 2026-10-30. Audience: maintainers and release reviewers.

This project is under development. The table distinguishes checked-in functionality from deployment or release acceptance. Test counts and local machine observations belong in CI artifacts, not in continuously appended README sections.

| Area                      | Implemented                                                                                        | Remaining acceptance or limitation                                                                         |
| ------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| DMP/1                     | SDK, Worker API, three clients, encryption, signed terms, durable tasks and compatibility fixtures | Independent security review, deployed cross-client interoperability and operational acceptance             |
| Internal member mail      | Automatic same-node delivery, offline signed receipt, quotas and client inbox/download integration | Enterprise remote deployment and physical-device acceptance of the full workflow                           |
| External NFT mail         | Paid and node-sponsored profiles, original-byte recovery and chain-evidence validation             | Controlled real-chain payment/mint acceptance on the intended deployment                                   |
| ARC onboarding            | Approved association, signed lookup/revocation and optional encrypted recovery                     | Trusted member adapter configuration, credential rotation and version-contract verification per deployment |
| Server UI                 | Native AUP pages, five languages and public help                                                   | Remote ARC rendering, login/cookie/domain and role acceptance                                              |
| Contact/namecard recovery | Internal preparation API, durable settlement jobs and client verification modules                  | Recovery capability and production dispatch are not advertised/enabled; integration gates remain           |
| Backups                   | Client encrypted archives and server export/checkpoint tools                                       | Consistent restore drills with the intended identities, keys and matching D1/R2 objects                    |
| Native applications       | Android/iOS/desktop source and isolated native acceptance tools                                    | Distribution signing, store acceptance and physical-device coverage                                        |
| Browser packages          | Chrome, Edge and Firefox packaging with shared source                                              | Target-browser installation, signing/store review and platform coverage                                    |

## Known boundaries

- DMP/2 ordinary/chain-VC delivery is retired. Remaining schemas and fixtures are compatibility test inputs, not a supported service to enable.
- D1, R2 and chain operations do not form a cross-service atomic transaction. Uncertain settlement needs reconciliation; automatic orphan-object sweeping is not complete.
- Internal synchronization uses stable node sequence cursors, but clients currently rescan and merge rather than persist a cross-refresh incremental watermark.
- The key registry is not a transparency log. Mnemonic recovery alone does not restore random historical encryption keys.
- A private HTTPS endpoint is not an air-gapped or enterprise-intranet deployment. No SMTP bridge or cross-server member-mail federation is promised.
- Dependency and asset provenance review remains part of public release preparation. Removing an exposed credential from current source is not rotation or a history audit.

## Release evidence

Use the [development checks](development.md), component documentation and CI results for the commit being reviewed. Record the commit, runtime, command, outcome, skipped checks and acceptance scope. Isolated fixtures can establish byte compatibility and failure handling; they do not establish real-chain finality, production availability or a security certification.

The [server deployment guide](https://github.com/didmail-org/server/blob/main/docs/workers-migration.md), [mobile reference](https://github.com/didmail-org/mobile/blob/main/docs/README.md) and [Flutter verification guide](https://github.com/didmail-org/desktop/blob/main/docs/desktop-ui-acceptance.md) describe feature-specific gates. Do not enable a capability solely because its implementation module exists.
