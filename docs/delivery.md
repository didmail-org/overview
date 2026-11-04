# Delivery behavior

Status: current product behavior. Audience: users, operators and client developers.

DIDMail uses one compose flow. With an updated client, the server chooses the actual delivery outcome from signed capabilities and current eligibility. There is no separate internal sending-mode selector.

| Outcome                 | Eligibility                                                                                                                            | Sender payment                 | On-chain mail record | Inbox source                       |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | -------------------- | ---------------------------------- |
| Internal member mail    | Both mailboxes are eligible, actively bound members of the same node; recipient key is available; sender meets the internal stake rule | None                           | None                 | Bound node's internal mailbox list |
| Node-sponsored NFT mail | Eligible sender uses a published Members envelope with zero on-chain price; recipient may be external                                  | None; node funds the real mint | Real mail NFT        | External NFT index                 |
| Paid NFT mail           | Sender is admitted and authorizes a valid published envelope quote                                                                     | Verified quoted payment        | Real mail NFT        | External NFT index                 |

## Membership and admission

An ARC role alone or a client's cached “bound” badge does not prove current membership. The server checks trusted active status, non-guest role, unrevoked local association and blocking rules again before acceptance. Membership-source failure is unavailable authorization, not proof that the user is a non-member.

For external sending in the default ARC access model, a valid service-node NFT stake opens admission to unblocked senders. Without that stake, only eligible bound members may send. Native-token gas staking does not open public admission. The internal member path does not require a service-node NFT or node-funded mail transaction.

The internal sender needs at least one actively self-staked native token; revoked amounts awaiting withdrawal do not count for this check. Receiving and historical downloads do not require a new stake. Internal mail content and notifications stay off-chain, although prior identity and staking transactions may exist. Infrastructure still costs the operator storage and bandwidth.

## Terms and failures

A selected envelope is only an external candidate when automatic internal delivery is possible. Its price and retention do not override internal policy. Eligibility changes before acceptance cause a terms conflict; the server must not silently charge or publish previously free internal mail. A new external quote requires fresh review and authorization.

Accepted tasks keep their original delivery type, terms and signed evidence. Retrying a task must not create another payment, mint or quota reservation. An uncertain response requires querying the original task, not replacing it. Older clients without the signed automatic-delivery extension retain the NFT path.

Internal mail has no daily message-count, cumulative storage or pending-upload task quotas. Internal tasks do not consume the external unpaid-upload allowance. Single-message and attachment size limits, request rate limits, upload expiry and the node's configured retention period still apply.

## Local mail and backup

The Chrome extension, React Native and Flutter clients combine internal and external mail in one inbox, ordered newest first by message creation time. Delivery types and synchronization requests remain distinct. Normal refresh also queries internal mail from the bound node. Delivered means server-side delivery completed, not that a recipient read the message or downloaded every attachment. Failed downloads remain retryable without blocking other messages.

Download all content before node retention expires and keep a complete client backup, including historical device keys. Deleting server content cannot erase local copies or an existing NFT. Cross-server migration, enterprise offboarding recovery and federation are not added by this feature.

## Specifications

- [Internal member delivery](https://github.com/didmail-org/protocol/blob/main/docs/protocol/member-mail.md)
- [Envelope and namecard categories](https://github.com/didmail-org/protocol/blob/main/docs/protocol/envelope-categories.md)
- [Node-sponsored NFT delivery](https://github.com/didmail-org/protocol/blob/main/docs/protocol/member-sponsored-nft.md)
- [Mailbox associations and encrypted recovery](https://github.com/didmail-org/protocol/blob/main/docs/protocol/account-onboarding.md)
- [Operator and user guide](https://github.com/didmail-org/server/blob/main/docs/help/en.md)
