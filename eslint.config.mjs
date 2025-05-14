import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "prettier",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:promise/recommended",
      "plugin:import/recommended",
      // "plugin:tailwindcss/recommended", // Temporarily disabled until eslint-plugin-tailwindcss supports Tailwind CSS v4
    ],
    plugins: [
      "react",
      "jsdoc",
      "@typescript-eslint",
      // "tailwindcss", // Temporarily disabled until eslint-plugin-tailwindcss supports Tailwind CSS v4
    ],
    rules: {
      // semi: ["error", "always"], // require semicolons
      quotes: ["error", "double"], // require double quotes
      indent: ["error", 2], // require 2 spaces for indentation
      eqeqeq: ["warn", "always"], // require === and !==
      "linebreak-style": ["error", "unix"], // require unix line endings this means that the file should end with LF (instead of CRLF)
      "no-multiple-empty-lines": ["error", { max: 1 }], // disallow multiple empty lines
      "no-trailing-spaces": "error", // disallow trailing spaces
      "no-unused-vars": "warn", // disallow unused variables
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }, // ignore unused variables that start with _
      ],
      "no-console": "warn", // disallow console.log statements
      "no-debugger": "warn", // disallow debugger statements
      "prefer-arrow-callback": [
        "error",
        {
          allowNamedFunctions: true,
          allowUnboundThis: true,
        },
      ], // prefer arrow functions
      "prefer-template": "error", // prefer template literals
      "no-var": "error", // prefer let/const over var
      "no-duplicate-imports": "error", // disallow duplicate imports
      // React specific rules
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/no-array-index-key": "error",
      "react/self-closing-comp": "warn",
      "react/no-unescaped-entities": "error",
      "react/jsx-no-target-blank": "error",
      "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],
      "react/sort-comp": "error",
    },
  }),
];

export default eslintConfig;
