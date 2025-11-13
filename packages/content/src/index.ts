import path from 'path';

// Use __dirname for CommonJS compatibility (Next.js uses CommonJS by default)
// This is Vercel-safe as it resolves relative to the actual file location in the build
// __dirname works correctly in Vercel's serverless environment because it's resolved at build time
// and points to the actual file location in node_modules/.pnpm or the workspace structure
export const PROJECTS_DIR = path.join(__dirname, 'projects');
