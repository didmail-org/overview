# Development

DIDMail components have independent repositories and lockfiles. Consult the component README for its requirements and verification commands:

- [Protocol](https://github.com/didmail-org/protocol): Node.js SDK and canonical specifications.
- [Server](https://github.com/didmail-org/server): Workers, ARC integration and administration UI.
- [Extension](https://github.com/didmail-org/extension): browser extension.
- [Mobile](https://github.com/didmail-org/mobile): React Native client with a complete verified SDK snapshot.
- [Desktop](https://github.com/didmail-org/desktop): Flutter client.

Use Node.js 24.14 or newer and each component's configured pnpm version; Flutter/native targets require the documented SDKs. Server and extension pin the protocol Git revision. When the protocol repository is private, Git must have read access. The mobile SDK snapshot must be imported and verified as a complete unit; see its repository instructions.

Run each changed component's documented checks. Extension, mobile and server include an `audit:dependencies` gate. It reports the original low-severity deepmerge advisory and accepts the locally patched version only after verifying the reviewed patch, installed sources and regression cases; it fails closed on unknown findings. This does not remove the upstream advisory.

Use isolated test resources and public fixtures. Do not broadcast chain transactions or send external messages in automated tests. Preserve wallets, databases and ARC state; consult the server's local persistence instructions before restarting a preview.
