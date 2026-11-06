# Documentation maintenance

Status: contributor policy. Audience: documentation authors and AI-assisted contributors.

## Language and organization

English is the canonical language for project, protocol, engineering and operator documentation. Update English first, then update translations of user-facing help. Keep locale codes, protocol identifiers, error codes, commands and section IDs unchanged across translations. Localized user help is intentionally multilingual; it is not duplicate engineering documentation.

Limit the default new-developer path to README, development guide and architecture. Task indexes distinguish that path from optional operation, migration and release references. This overview owns shared product/design guidance; the protocol repository owns wire contracts, and components own implementation details. Each maintained document needs one descriptive H1, a clear purpose/status, stable headings and links to its implementation or executable checks where relevant.

## Content rules

1. Check claims against source, configuration and tests. Separate current contracts, experimental/internal code and unimplemented proposals.
2. Keep one authoritative description per topic. Link to shared contracts instead of copying them across clients.
3. Give commands a working directory and prerequisites. Identify examples as examples; never publish private installation state, credentials, real mail or local log locations.
4. Prefer concise paragraphs, task-oriented steps, fenced code with a language and tables for comparisons. Avoid decorative headings, promotional claims and generated directory dumps.
5. Preserve normative details, trust boundaries, failure behavior, exact encodings, migrations, fixture provenance and release gates when consolidating documents.
6. Replace outdated content rather than appending a newer contradictory section. Store per-run test reports/screenshots in CI or ignored local artifacts.
7. Remove completed plans, generic prompt templates and superseded experiments from active docs after carrying forward useful requirements. Use Git history for tracked run diaries; preserve unique uncommitted material privately before consolidation. Keep a short old-path pointer only for an actual external consumer, and remove it after updating those references.

Retired schemas/fixtures may remain at stable paths when executable compatibility tests consume them. Their index must label the retirement and explain why the files remain. Do not edit immutable SDK snapshots or third-party notices as ordinary prose.

## Authority for readers and AI tools

Read the relevant component's agent instructions and README. Use the [project overview](../README.md) for navigation, protocol drafts for wire contracts, and source/tests for implementation evidence. If a draft and implementation differ, report the mismatch; do not invent support or change cryptographic behavior during documentation cleanup.

## Validation

Check links, anchors, commands and changed component documentation using that component's documented checks. Preserve normative requirements and record any validation limitations.
