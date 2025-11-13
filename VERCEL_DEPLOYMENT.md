# Vercel Deployment Notes

## Migration Complete: Mono-Repo Structure

The project has been migrated to a mono-repo structure with:
- `packages/n-web/` - Next.js web application
- `packages/content/` - Content package with MDX files

## Vercel Compatibility

### Key Changes for Vercel

1. **Path Resolution**: Replaced `process.cwd()` with `__dirname`-based paths
   - `packages/content/src/index.ts` uses `__dirname` which resolves correctly in Vercel's build environment
   - This ensures content files are found regardless of where Vercel runs the build

2. **Webpack Configuration**: Updated `next.config.js` to:
   - Resolve workspace packages via webpack alias
   - Ensure content package is not externalized (needed at build time)

3. **Workspace Structure**: pnpm workspaces handle package resolution automatically in Vercel

### Vercel Build Settings

**Root Directory**: Leave empty (default) - Vercel will detect the workspace structure

**Build Command**: `pnpm build` (uses workspace filter automatically)

**Install Command**: `pnpm install` (pnpm handles workspaces automatically)

**Framework Preset**: Next.js

### Environment Variables

No changes needed - existing environment variables work as before.

### Content Package

The content package (`@100-projects/content`) is:
- Resolved via pnpm workspace
- Bundled with the Next.js app at build time
- Accessible via `__dirname` which works in Vercel's serverless environment

### Testing Locally

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Build for production
pnpm build
```

### Migration from Git Submodule

If you were using a git submodule for content:

1. **Option A**: Copy content files directly into `packages/content/src/projects/`
2. **Option B**: Keep submodule temporarily and copy during build
3. **Option C**: Use git subtree (recommended for separate content repo)

For Option C, add to `package.json` scripts:
```json
{
  "scripts": {
    "sync-content": "git subtree pull --prefix=packages/content/src/projects https://github.com/CharlieSay/100-projects-content.git main --squash"
  }
}
```

### Troubleshooting

**Issue**: Content files not found in Vercel build
- **Solution**: Ensure `packages/content/src/projects/` contains MDX files
- Check that webpack alias in `next.config.js` resolves correctly

**Issue**: Workspace package not resolving
- **Solution**: Verify `pnpm-workspace.yaml` exists and includes `packages/*`
- Run `pnpm install` to ensure workspace links are created

**Issue**: Build fails with module not found
- **Solution**: Check that `packages/n-web/package.json` includes `"@100-projects/content": "workspace:*"`
