# Licensing

Status: project license scope and distribution guidance. The English [LICENSE](../LICENSE) contains the controlling terms; this document does not amend them.

## Project license

Original DIDMail code and documentation use Apache License 2.0 (`Apache-2.0`) unless otherwise identified. This includes original work in the clients, server and protocol SDK. The choice supports reuse, commercial deployment and integration under a common license, with the patent provisions defined by the license.

Apache-2.0 does not generally require publishing modifications or hosted-service source. It does not provide a general trademark license. Redistribution must satisfy the actual license, including applicable license-copy, modification-notice, attribution and NOTICE requirements. Refer to the license rather than treating this summary as a substitute for its terms.

## Third-party material

Dependencies, copied snippets, generated third-party content, test vectors, icons, images and fonts retain their own licenses and provenance obligations. Adding a root license does not relicense another author's work or establish permission for an asset with unknown provenance.

The mobile lockfile includes `@realm/fetch@0.1.1`, whose published package lacks license metadata and a license file. The [Realm JS v12.15.0 source manifest](https://github.com/realm/realm-js/blob/v12.15.0/packages/fetch/package.json) names that same package and version, and the [source repository's license at that tag](https://github.com/realm/realm-js/blob/v12.15.0/LICENSE) is Apache-2.0. Preserve the applicable license and notices when distributing mobile builds; the missing package metadata should not be silently interpreted as a separate license grant.

On 2026-11-04 the project owner confirmed that the Server promotional images, including `head-banner.webp`, `server.webp` and `nft.png`, were created by the DIDMail team or are authorized for public distribution. This confirmation does not establish provenance for other assets or third-party dependencies.

[NOTICE](../NOTICE) attributes DIDMail contributors without creating a legal entity or requiring copyright assignment. Contributors retain their copyrights. Historical versions retain the permissions granted under their applicable terms; the historical server outside this checkout is not relicensed by this document.

## Contributions and distribution

Original contributions intentionally submitted for inclusion are handled under Section 5 of Apache-2.0 unless explicitly stated otherwise. Submit only material you are entitled to contribute and preserve third-party sources and notices. See the contribution instructions in each repository.

Source releases carry the root LICENSE and NOTICE. Independent client/server packages must also include applicable third-party notices. The SDK carries its license copy, NOTICE and THIRD_PARTY_NOTICES, including bundled cryptographic dependencies; complete mobile snapshot imports preserve and hash-check those files.

Public repository visibility, dependency/asset provenance checks and production/security acceptance are separate release decisions. Choosing this license does not establish that those reviews are complete. See [publication review](publication-review.md).
