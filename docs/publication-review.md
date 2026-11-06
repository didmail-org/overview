# Publication and distribution review

For release maintainers changing repository visibility or delivering an artifact.
Source visibility, dependency provenance and runtime acceptance are separate
decisions. The [status table](status.md) owns product capability summaries.

## Current scope and authorities

Protocol, overview, Server, the project website and organization profile are
public. Client repositories remain private while their publication reviews
continue. Verify actual access/visibility before a release; an accessible source
repository does not authorize distribution of compiled third-party content.

| Scope | Release authority |
| --- | --- |
| Original source | LICENSE/NOTICE and [licensing](licensing.md), plus a revision-specific history/secret review |
| Server native Blocklet | [Native artifact audit](https://github.com/didmail-org/server/blob/main/docs/distribution-license-audit.md), dependency/source hashes and per-build manifest checks |
| Extension packages | [Browser dependency evidence](https://github.com/didmail-org/extension/blob/main/docs/browser-extensions.md#dependency-provenance), original notices and final browser archive review |
| Native clients | Component lockfiles, native dependency/license evidence, signing, platform and backup/restore acceptance |
| Hosted installation | Actual host/provider/storage/session contract and target-specific acceptance; no retired Workers deployment path |

Server distribution remains blocked by missing texts for `@ocap/proto@1.30.24`,
`@ocap/util@1.30.24`, `interface@1.2.1` and `utf8@3.0.0`, plus generated-output
provenance/terms. The Server audit is authoritative for current exact inventory;
this page does not repeat an obsolete Worker/UI compiler snapshot. Checks passing
do not change those decisions.

## Before a source visibility change

1. Scan the intended complete history and final tree for credentials, real mail,
   local databases and private installation state. Review matches, synthetic test
   identities and native binaries separately; filename filters/scanner totals do
   not prove absence. Never fund public fixture identities.
2. Preserve license notices, source metadata, vector provenance and owners'
   recorded original-artwork permissions. The [licensing record](licensing.md)
   does not clear third-party assets. Mobile snapshot imports retain the complete
   SDK LICENSE/NOTICE/THIRD_PARTY_NOTICES and integrity manifest.
3. Review dependency advisories and native assets for the exact revision. Keep raw
   audit findings separate from locally verified patches. Existing component
   deepmerge gates verify source/patch/regression evidence; the advisory version
   remains reported upstream.
4. Verify the intended private vulnerability reporting channel before publication.
   Do not assume a private repository already exposes the public reporting flow.
5. Verify anonymous access to public Git dependencies and the intended order of
   publication. Run the owning component's CI and distribution checks with the
   documented toolchain and intended artifact, rather than importing old totals.

Credential removal is not rotation or history cleanup. Git history replacement,
repository deletion or an inaccessible old commit does not establish immediate
removal of retained upstream objects. Preserve private recovery evidence; never
reconstruct it in a public checkout for a release report.

## Before distributing an artifact

Inspect what actually ships: dependency instances, copied/generated source,
crypto/nested code, fonts/icons, native binaries and complete notice texts.
An SPDX field or neighboring release's license is not an exact grant. Retain
source/offer obligations where applicable. No new notice text should be invented
from a generic template.

The extension's historical browser inventory records compiler inputs, not a
complete cross-platform SBOM; optimization can remove modules and native targets
can include different content. Native libvips/LGPL and other platform obligations
require their own review. Missing ArcBlock/interface and other exact upstream
texts remain unresolved where present in that artifact. Mobile's `@realm/fetch`
source/license relationship is recorded in [licensing](licensing.md).

Rebuild the final package, verify notices/hashes and archive exclusions, then
review signing/store/platform requirements. Unit tests, unsigned builds and local
ARC execution do not establish distribution or remote deployment acceptance.
Store exact run logs and scanner evidence in protected artifacts/CI, not appended
paragraphs here. Previous revision-specific test counts and investigations remain
in Git history; they are not blanket permission for later source or artifacts.
