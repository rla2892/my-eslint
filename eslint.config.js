const globals = require("globals")

module.exports = [
    {
        files: ["**/*.js", "**/*.cjs", "**/*.mjs", "**/*.jsx", "**/*.ts", "**/*.tsx"],
        ignores: [
            "node_modules",
            ".next/**",
        ],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.node, // Add Node.js globals
                React: "readonly", // React is read-only
            }
        },
        rules: {
            "indent": ["error", 4, { "SwitchCase": 1 }], // 4 spaces, 1 level for switch cases
            "linebreak-style": ["error", "windows"], // Windows linebreaks
            "quotes": ["error", "double", { "allowTemplateLiterals": true }], // Backticks
            "semi": ["error", "never"], // No semicol
            "no-var": "error", // No var
            "prefer-const": "error", // Prefer const
            "no-multi-spaces": "error", // No multiple spaces
            "spaced-comment": ["error", "always", { "markers": ["/"] }], // Allow triple slash comments
            "no-undef": "error", // No undefined
            "eqeqeq": "error", // Use ===
            "no-trailing-spaces": "error",
            "no-mixed-spaces-and-tabs": "error",
            "space-in-parens": ["error", "never"],
            "space-before-function-paren": ["error", "never"],
            "space-infix-ops": "error",
            "eol-last": ["error", "always"],
            "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
            "no-console": process.env.NODE_ENV === "production" ? "error" : "warn", // No console in production
            "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn", // No debugger in production
            // 'no-alert': process.env.NODE_ENV === "production" ? "error" : "warn", // No alert in production
            "no-unused-vars": [
                process.env.NODE_ENV === "production" ? "error" : "warn",
                { "argsIgnorePattern": "^_" }
            ], // No unused vars in production
            "no-constant-condition": process.env.NODE_ENV === "production" ? "error" : "warn", // No constant conditions in production
            "no-empty": process.env.NODE_ENV === "production" ? "error" : "warn", // No empty blocks in production
        },
    },
]
