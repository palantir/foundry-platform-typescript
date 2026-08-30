---
"@osdk/foundry.filesystem": patch
---

Make `SpaceRid` and `ProjectRid` assignable to `FolderRid` without a cast. A Space and a Project are both folders (see `FolderType = "FOLDER" | "SPACE" | "PROJECT"`), so callers can now pass a `Space.rid` directly to `Folders.children`, `Folders.get`, etc. instead of writing `space.rid as FolderRid`. Sibling rids remain mutually non-assignable.
