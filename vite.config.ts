import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// GitHub Pages repo name for base URL
const repoName = "GenarchSite";

export default defineConfig({
  base: `/${repoName}/`, // ✅ Correct interpolation
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
