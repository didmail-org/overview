# Contributing

DIDMail uses separate component repositories; begin with the [project overview](README.md) and the relevant component's README and agent instructions. Use the versions and lockfile of the component being changed, and run its documented checks. Preserve protocol compatibility and cross-language fixtures.

DIDMail original contributions are handled under Apache-2.0; submit only material you are entitled to contribute, and retain applicable third-party notices. See [licensing](docs/licensing.md).

Never commit private keys, recovery phrases, real mail, credentials, local databases or runtime state. Automated tests must use isolated resources and must not broadcast transactions or send real messages. Do not disclose exploitable details publicly; see the relevant repository's security policy.
