import minecraftLinting from "eslint-plugin-minecraft-linting";
import tsParser from "@typescript-eslint/parser";
import ts from "@typescript-eslint/eslint-plugin";

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
    },
    rules: {
      "minecraft-linting/avoid-unnecessary-command": "error",
      "minecraft-linting/no-hardcoded-ids": "warn",
      "minecraft-linting/consistent-naming": "error",
      "minecraft-linting/no-deprecated-apis": "error",
      "minecraft-linting/valid-json": "error",
    },
  },
];
