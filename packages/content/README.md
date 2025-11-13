# @100-projects/content

Content package for 100 Projects. Contains MDX files for all project ideas.

## Structure

```
src/
  projects/          # MDX files organized by collection
    frontend/
    backend/
    data/
    ...
  index.ts          # Package exports
```

## Usage

```typescript
import { PROJECTS_DIR } from '@100-projects/content';

// PROJECTS_DIR points to src/projects directory
// Use with fs-extra or native fs to read MDX files
```

## Adding Content

Place MDX files in `src/projects/{collection}/{project-name}.mdx`

Each MDX file should have frontmatter:
```yaml
---
title: Project Name
tags: tag1, tag2, tag3
expertise: easy|intermediate|advanced
description: Project description
thumbId: unsplash-photo-id
---
```

## Vercel Compatibility

This package uses `__dirname` for path resolution, which works correctly in Vercel's serverless environment. The paths resolve relative to the actual file location, not `process.cwd()`.
