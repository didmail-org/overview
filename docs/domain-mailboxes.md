# Domain mailbox scope

Status: partial implementation and deferred design. Audience: contributors evaluating addressing changes.

A domain alias such as `alice@example.org` resolves to a mailbox DID; it is not SMTP interoperability. The implemented server has domain ownership verification, encrypted domain keys, alias registration/resolution routes and an alias factory integration. These retained APIs do not imply that the full original domain-mailbox roadmap is complete.

## Existing implementation

The relevant sources are [domain routes](https://github.com/didmail-org/server/tree/main/api/src/routes) and [AFS compatibility models](https://github.com/didmail-org/server/blob/main/blocklet/providers/didmail-http/source/storage/database.ts). Domain bindings and pricing use local relational data; the node's original wallet is needed to recover encrypted domain keys. Alias ownership uses the configured factory and existing signing/payment rules. Preserve those encodings and keys when migrating storage.

## Deferred work

The earlier proposals included publishing domain bindings/prices on service-node NFTs, factory upgrades for burn/tombstone cooldown, and federation through DNS/WebFinger. These are not current operator instructions or implemented cross-server discovery guarantees. DNS publication would also make aliases enumerable and introduces independent freshness, signature, DNS ownership and availability requirements.

Any future proposal must define its active scope, compatible wire contracts, privacy effects, factory migration and cross-client acceptance before being advertised. Do not reuse the retired two-step mail send API as a new mail protocol; current public mail uses [DMP/1](https://github.com/didmail-org/protocol/blob/main/docs/protocol/README.md).
