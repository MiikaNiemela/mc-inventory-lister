import minecraftLinting from "eslint-plugin-minecraft-linting";
import tsParser from "@typescript-eslint/parser";
import ts from "@typescript-eslint/eslint-plugin";
import checkFile from "eslint-plugin-check-file";

export default [
  {
    files: ["scripts/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
    },
    plugins: {
      ts,
      "minecraft-linting": minecraftLinting,
      "check-file": checkFile,
    },
    rules: {
      "minecraft-linting/avoid-unnecessary-command": "error",
      "check-file/naming-convention": ["error", { case: "snake_case", files: ["**/*.{js,ts}"] }],
    },
  },
];
