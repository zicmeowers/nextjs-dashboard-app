// eslint.config.js
import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  // ESLint's recommended base rules
  js.configs.recommended,

  // Next.js recommended rules, applied directly
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
    },
  },

  // Ignore build + dependency folders
  {
    ignores: ["node_modules", ".next", "dist"],
  },
];
