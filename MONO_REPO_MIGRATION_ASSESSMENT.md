# Mono-Repo Migration Assessment: 100-Projects-Content → Mono-Repo

## Current State Analysis

### Architecture
- **Web App**: Next.js 13.4.10 (Pages Router) with TypeScript
- **Content Source**: Git submodule (`project_content`) pointing to `100-projects-content` repo
- **Content Access**: Filesystem-based via `fs-extra` at build time
- **Content Structure**: `project_content/_mdx/projects/{collection}/{project}.mdx`
- **Build Strategy**: Static Site Generation (SSG) - all content accessed during `getStaticProps`/`getStaticPaths`

### Key Dependencies
- `fs-extra`: File system operations
- `gray-matter`: Frontmatter parsing
- `next-mdx-remote`: MDX rendering
- Content accessed via `process.cwd()` + relative paths

### Content Usage Points
1. `src/api/get-posts.ts` - Core content access layer
   - `getAllProjectSlugs()` - Reads directory structure
   - `getPostBySlug()` - Reads individual MDX files
   - `getSlugsByFacets()` - Filters projects by metadata
2. `src/pages/projects/[...project].tsx` - Individual project pages
3. `src/pages/collection/[type]/[collection].tsx` - Collection pages
4. `src/pages/all-projects.tsx` - All projects listing

---

## Proposed Mono-Repo Structure

```
workspace/
├── packages/
│   ├── content/                    # 100-projects-content package
│   │   ├── src/
│   │   │   ├── projects/          # MDX files
│   │   │   └── index.ts           # Package exports
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── n-web/                      # Current Next.js app
│       ├── src/
│       ├── package.json
│       └── next.config.js
├── package.json                    # Root workspace config
├── pnpm-workspace.yaml            # pnpm workspace definition
└── tsconfig.json                   # Root TypeScript config
```

---

## Migration Approach

### Option A: Package with Direct File Access (Recommended)
**Complexity**: Low-Medium  
**Effort**: 4-6 hours

**Strategy**: Content package exports file paths and utilities, web app accesses files directly via package resolution.

**Pros**:
- Minimal changes to existing code
- Works with Next.js SSG requirements
- Fast build times (no bundling overhead)
- Content remains as files (easy to edit)

**Cons**:
- Still uses filesystem access (but via package)
- Requires proper path resolution

**Implementation**:
1. Create `packages/content` package
2. Export content directory path: `export const CONTENT_DIR = path.join(__dirname, 'projects')`
3. Update `get-posts.ts` to use package import instead of `process.cwd()`
4. Configure package.json exports for Node.js resolution

---

### Option B: Pre-processed JSON/Metadata Package
**Complexity**: Medium  
**Effort**: 8-12 hours

**Strategy**: Content package builds metadata/index at build time, exports structured data.

**Pros**:
- Faster runtime queries (no filesystem reads)
- Better type safety
- Can optimize data structures

**Cons**:
- Requires build step for content package
- More complex migration
- MDX content still needs filesystem access for rendering

**Implementation**:
1. Create content package with build script
2. Generate `projects-index.json` from MDX files
3. Export both index and file paths
4. Update web app to use index for queries, files for content

---

### Option C: Bundled Content Package
**Complexity**: High  
**Effort**: 12-16 hours

**Strategy**: Content package bundles all MDX as imports/exports.

**Pros**:
- No filesystem dependency
- Works in edge runtime
- Fully bundled

**Cons**:
- Complex build setup
- Slower builds (bundling all MDX)
- Harder to add new projects (requires rebuild)
- May hit bundle size limits

**Not Recommended** for this use case.

---

## Recommended Approach: Option A

### Step-by-Step Migration Plan

#### Phase 1: Setup Mono-Repo Structure (1-2 hours)
1. Create root `pnpm-workspace.yaml`
2. Create `packages/` directory
3. Move current app to `packages/n-web/`
4. Update root `package.json` with workspace config
5. Test that existing app still works

#### Phase 2: Create Content Package (1-2 hours)
1. Create `packages/content/` directory
2. Move `project_content/_mdx/projects/` → `packages/content/src/projects/`
3. Create `packages/content/package.json`:
   ```json
   {
     "name": "@100-projects/content",
     "version": "0.1.0",
     "main": "./src/index.ts",
     "types": "./src/index.ts",
     "exports": {
       ".": "./src/index.ts",
       "./projects": "./src/projects"
     }
   }
   ```
4. Create `packages/content/src/index.ts`:
   ```typescript
   import path from 'path';
   export const PROJECTS_DIR = path.join(__dirname, 'projects');
   ```
5. Update root `package.json` to include workspace

#### Phase 3: Update Web App (1-2 hours)
1. Update `packages/n-web/package.json`:
   ```json
   {
     "dependencies": {
       "@100-projects/content": "workspace:*"
     }
   }
   ```
2. Update `packages/n-web/src/api/get-posts.ts`:
   ```typescript
   import { PROJECTS_DIR } from '@100-projects/content';
   const postsDirectory = join(PROJECTS_DIR);
   ```
3. Remove `fs-extra` dependency (use native `fs` if needed, or keep for compatibility)
4. Update all `process.cwd()` references to use package import
5. Update `.gitignore` to exclude `packages/content/src/projects/` if content is managed separately

#### Phase 4: Testing & Cleanup (1 hour)
1. Remove git submodule reference
2. Update `.gitmodules` (remove or update)
3. Test build: `pnpm build`
4. Test dev: `pnpm dev`
5. Verify all pages render correctly
6. Update README with new structure

---

## Challenges & Considerations

### 1. Next.js Build-Time File Access
**Issue**: Next.js SSG needs filesystem access at build time.  
**Solution**: Package exports file paths, web app uses them. Works because both run in Node.js context.

### 2. TypeScript Path Resolution
**Issue**: Need to ensure TypeScript resolves package correctly.  
**Solution**: Use `tsconfig.json` path aliases or ensure package has proper `types` field.

### 3. Content Updates
**Issue**: How to update content without rebuilding web app?  
**Solution**: 
- If content is in same repo: Changes trigger web rebuild (expected)
- If content is separate: Use git subtree or keep as submodule initially, migrate later

### 4. CI/CD Considerations
**Issue**: Build process needs to account for workspace structure.  
**Solution**: 
- Update build commands: `pnpm --filter n-web build`
- Ensure content package is built/available before web build

### 5. Development Workflow
**Issue**: Developers need to understand new structure.  
**Solution**: 
- Clear README documentation
- Workspace scripts in root `package.json`:
  ```json
  {
    "scripts": {
      "dev": "pnpm --filter n-web dev",
      "build": "pnpm --filter n-web build"
    }
  }
  ```

---

## Effort Estimation

| Task | Time | Complexity |
|------|------|------------|
| Mono-repo setup | 1-2h | Low |
| Content package creation | 1-2h | Low |
| Web app migration | 1-2h | Medium |
| Testing & cleanup | 1h | Low |
| Documentation | 0.5h | Low |
| **Total** | **4.5-7.5h** | **Low-Medium** |

**Risk Level**: Low  
**Breaking Changes**: Minimal (internal refactor)

---

## Migration Checklist

- [ ] Create `pnpm-workspace.yaml`
- [ ] Move app to `packages/n-web/`
- [ ] Create `packages/content/` package
- [ ] Move content files to package
- [ ] Create content package exports
- [ ] Update `get-posts.ts` to use package import
- [ ] Update all `process.cwd()` references
- [ ] Update root `package.json` scripts
- [ ] Test dev server
- [ ] Test production build
- [ ] Remove git submodule
- [ ] Update README
- [ ] Update CI/CD if applicable

---

## Alternative: Gradual Migration

If you want to minimize risk, consider a gradual approach:

1. **Phase 1**: Set up mono-repo structure, keep submodule
2. **Phase 2**: Create content package, dual-write (submodule + package)
3. **Phase 3**: Switch web app to package, remove submodule

This allows rollback at any stage.

---

## Questions to Resolve

1. **Content ownership**: Will content be edited in this repo, or remain in separate repo?
   - If separate: Consider keeping as submodule or using git subtree
   - If same repo: Full mono-repo makes sense

2. **Build strategy**: Do you need content to be versioned separately from web app?
   - If yes: Keep as package with versioning
   - If no: Simple mono-repo structure is fine

3. **Team workflow**: How do content contributors work?
   - If non-technical: May need separate repo + CI sync
   - If technical: Mono-repo works well

---

## Recommendation

**Proceed with Option A (Package with Direct File Access)**. It's the simplest migration path with minimal risk, maintains current functionality, and provides a clean foundation for future improvements. The effort is reasonable (4-6 hours) and the complexity is manageable.

The migration can be done incrementally with minimal disruption to current workflows.
