import { defineConfig } from "vite";

export default defineConfig({
  test: {
    setupFiles: ["./test/architecture/arch.setup.ts"],
    include: ["test/**/*.test.ts"],
    typecheck: { enabled: false },
  },
});
