import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";
import tsConfigPaths from "vite-tsconfig-paths";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: "/react-movie/",
  plugins: [
    react(),
    tsConfigPaths(),
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/main",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
