---
"@osdk/foundry.connectivity": minor
"@osdk/foundry.datasets": minor
"@osdk/foundry.mediasets": minor
"@osdk/foundry.ontologies": minor
"@osdk/foundry.streams": minor
"@osdk/foundry.thirdpartyapplications": minor
"@osdk/foundry.widgets": minor
"@osdk/internal.foundry.datasets": minor
"@osdk/internal.foundry.ontologies": minor
---

Extend attachment header handling to all Blob request bodies. Upload methods now accept an optional Content-Type override and derive Content-Length from the Blob. Wildcard uploads use the Blob's MIME type, with application/octet-stream for untyped Blobs; endpoints with a concrete media type keep that default.
