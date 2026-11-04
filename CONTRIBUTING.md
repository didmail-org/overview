# Contributing

DIDMail uses separate component repositories; begin with the [project overview](README.md) and the relevant component's README and agent instructions. Use the versions and lockfile of the component being changed, and run its documented checks. Preserve protocol compatibility and cross-language fixtures.

DIDMail original contributions are handled under Apache-2.0; submit only material you are entitled to contribute, and retain applicable third-party notices. See [licensing](docs/licensing.md).

Never commit private keys, recovery phrases, real mail, credentials, local databases or runtime state. Automated tests must use isolated resources and must not broadcast transactions or send real messages. Do not disclose exploitable details publicly; see the relevant repository's security policy.

## Documentation checks

From this repository, use Node.js 24.14 or newer and pnpm 12.11.2:

```sh
corepack pnpm install --frozen-lockfile --ignore-scripts
corepack pnpm test
corepack pnpm check:docs
corepack pnpm audit --audit-level=low
```

Actions runs these checks on pushes and pull requests, and supports manual runs.
The offline checker parses tracked Markdown, requires one H1 per document, and
validates local links, images, Markdown headings and embedded HTML anchors within this repository.
Use relative local paths; links must also resolve in a standalone checkout.
Remote URLs, including private component repositories, are not fetched. Network
availability and authenticated remote-link acceptance remain separate checks.
