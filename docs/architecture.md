# Architecture

Status: current implementation overview. Audience: contributors and integrators.

## Components

| Component | Responsibility | Source |
| --- | --- | --- |
| TypeScript protocol SDK | Canonical artifacts, authentication, encryption and durable client tasks | [protocol](https://github.com/didmail-org/protocol/tree/main/src) |
| Server | Authorization, encrypted storage, delivery orchestration and admin UI | [server](https://github.com/didmail-org/server/tree/main/blocklet/providers/didmail-http/source) |
| Browser extension | Local mailbox, signing, encryption, backup and browser integration | [extension](https://github.com/didmail-org/extension/tree/main/src) |
| React Native | Native mobile UI, encrypted persistence and platform integrations | [mobile](https://github.com/didmail-org/mobile/tree/main/src) |
| Flutter | Independent Dart protocol implementation and cross-platform UI | [desktop](https://github.com/didmail-org/desktop/tree/main/lib) |

Components are independent Git repositories with separate dependencies and lockfiles. React Native has its own hoisted workspace and an immutable complete SDK snapshot. The extension and server pin Git revisions of the canonical SDK. Flutter implements the protocol independently and checks shared vectors. See [repository migration](repository-migration.md) for the former paths.

## Data flow

1. A client selects a node, verifies discovery and pins the node identity.
2. It resolves authenticated receiving keys, encrypts content locally and signs an immutable manifest.
3. The server checks sender admission, live membership where applicable, upload integrity and the requested delivery terms.
4. The client reviews and authorizes the actual terms. The node accepts those terms once and persists the delivery task.
5. The recipient discovers internal mail from its bound node or external mail through the NFT index, then downloads, verifies, decrypts and stores the content locally.

See [delivery behavior](delivery.md) for the three delivery outcomes and the [protocol reference](https://github.com/didmail-org/protocol/blob/main/docs/protocol/README.md) for exact artifacts. A server acceptance or transaction hash does not by itself prove delivery or reading.

## Identity and trust

ARC login identity, mailbox signing DID and node wallet are separate identities. ARC authorizes administrators and provides authoritative organization membership. A mailbox association requires the user's approval and mailbox-key proof; an administrator cannot create it by entering two DIDs.

The client trusts its pinned service for availability and signed service observations. It independently validates signatures, content digests, economic terms and supported chain evidence. The service's signature is not independent proof of blockchain consensus. Current key registries are not transparency logs; an unseen newer key can be omitted by a node.

## Storage and recovery

The native ARC Server persists business metadata, ciphertext objects, policy and configuration in instance AFS. An ephemeral SQLite evaluator preserves SQL predicates before conditional AFS commits; it is not another durable database. Policy, objects, the business aggregate and chain do not share one distributed transaction. Durable tasks, compare-and-swap updates, fenced leases and wallet lanes prevent incompatible work from replacing accepted evidence. Orphan-object sweeping remains a release concern.

Clients retain downloaded mail, attachments, manifests, receipts and historical encryption keys in local storage/backups. A wallet mnemonic does not necessarily recover independently generated device encryption keys. Key revocation prevents new use but does not delete keys needed for historical decryption.

## Runtime boundaries

The Server runs protocol HTTP, signing, scheduling and AUP/Web Device administration inside native ARC. Its original node signing identity remains distinct from ARC login. Miniflare is isolated test infrastructure/historical reading, not another supported business host. The [Server architecture](https://github.com/didmail-org/server/blob/main/docs/server-architecture.md) owns implementation boundaries; [hosted acceptance](https://github.com/didmail-org/server/blob/main/docs/arc-native-migration.md) is target-specific.

The project does not implement an SMTP gateway. Domain aliases are a separate addressing feature; their limited current scope and deferred federation are documented in [domain mailboxes](domain-mailboxes.md).
