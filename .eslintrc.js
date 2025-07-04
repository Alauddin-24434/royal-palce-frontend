// .eslintrc.js
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "next/core-web-vitals"
  ],
  rules: {
    "prettier/prettier": "warn",
    "react/react-in-jsx-scope": "off", // Next.js এ React import লাগে না
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
