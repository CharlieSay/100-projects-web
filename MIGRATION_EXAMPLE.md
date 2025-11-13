# Migration Code Examples

Quick reference for the actual code changes needed.

## 1. Root `pnpm-workspace.yaml`

```yaml
packages:
  - 'packages/*'
```

## 2. Root `package.json` (add workspace scripts)

```json
{
  "name": "100-projects-monorepo",
  "private": true,
  "scripts": {
    "dev": "pnpm --filter n-web dev",
    "build": "pnpm --filter n-web build",
    "start": "pnpm --filter n-web start",
    "lint": "pnpm --filter n-web lint"
  }
}
```

## 3. `packages/content/package.json`

```json
{
  "name": "@100-projects/content",
  "version": "0.1.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts",
    "./projects": "./src/projects"
  }
}
```

## 4. `packages/content/src/index.ts`

```typescript
import path from 'path';
import { fileURLToPath } from 'url';

// For ES modules compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Export the projects directory path
export const PROJECTS_DIR = path.join(__dirname, 'projects');

// Re-export types if needed
export type { ProjectSlug, ProjectLocation, PostMatter } from '../types';
```

**OR** for CommonJS (current Next.js setup):

```typescript
import path from 'path';

export const PROJECTS_DIR = path.join(__dirname, 'projects');
```

## 5. Updated `packages/n-web/src/api/get-posts.ts`

**Before:**
```typescript
const postsDirectory = join(
  process.cwd(),
  "project_content",
  "_mdx",
  "projects"
);
```

**After:**
```typescript
import { PROJECTS_DIR } from '@100-projects/content';

const postsDirectory = PROJECTS_DIR;
```

**Full updated function:**
```typescript
import { readdirSync, readFileSync } from "fs-extra";
import matter from "gray-matter";
import { join } from "path";
import { PROJECTS_DIR } from '@100-projects/content';
import { capitalizeWords, getSynonym } from "../util/string-manipulation";

// ... types remain the same ...

export function getAllProjectSlugs(): ProjectSlug[] {
  const listOfCollections = readdirSync(PROJECTS_DIR);
  return listOfCollections.flatMap((collection: string) => {
    const foundSlugs = readdirSync(
      join(PROJECTS_DIR, collection)
    );
    return foundSlugs.map((slug) => {
      const slugFrontMatter = getPostFrontMatter(`${collection}/${slug}`);
      return {
        ...slugFrontMatter,
        location: { collection, projectLocation: slug },
      };
    });
  });
}

export function getPostBySlug(slug: string[]): PostMatter {
  const fullPath = join(PROJECTS_DIR, ...slug);
  const fileContents = readFileSync(fullPath, "utf-8");
  // ... rest remains the same
}
```

## 6. `packages/n-web/package.json` (add dependency)

```json
{
  "dependencies": {
    "@100-projects/content": "workspace:*",
    // ... existing dependencies
  }
}
```

## 7. Root `tsconfig.json` (if using path aliases)

```json
{
  "compilerOptions": {
    // ... existing options
    "baseUrl": ".",
    "paths": {
      "@100-projects/content": ["./packages/content/src"]
    }
  },
  "references": [
    { "path": "./packages/n-web" },
    { "path": "./packages/content" }
  ]
}
```

## 8. Directory Structure After Migration

```
workspace/
├── packages/
│   ├── content/
│   │   ├── src/
│   │   │   ├── projects/          # MDX files here
│   │   │   │   ├── frontend/
│   │   │   │   ├── backend/
│   │   │   │   └── ...
│   │   │   └── index.ts
│   │   └── package.json
│   └── n-web/
│       ├── src/
│       │   ├── api/
│       │   │   └── get-posts.ts   # Updated to use package
│       │   └── ...
│       ├── package.json
│       └── next.config.js
├── pnpm-workspace.yaml
├── package.json
└── tsconfig.json
```

## Key Changes Summary

1. **Path resolution**: `process.cwd()` → package import
2. **Content location**: `project_content/_mdx/projects` → `packages/content/src/projects`
3. **Dependency**: Git submodule → pnpm workspace package
4. **Build**: Single app → workspace-aware builds

## Testing the Migration

```bash
# Install dependencies
pnpm install

# Verify workspace resolution
pnpm list @100-projects/content

# Test dev server
pnpm dev

# Test build
pnpm build
```
