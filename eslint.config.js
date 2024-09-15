const globals = require(`globals`)

module.exports = [
    {
        files: [`**/*.js`, `**/*.cjs`, `**/*.mjs`, `**/*.jsx`, `**/*.ts`, `**/*.tsx`],
        ignores: [`node_modules`],
        languageOptions: {
            ecmaVersion: `latest`,
            sourceType: `module`,
            globals: {
                ...globals.node, // Add Node.js globals
            }
        },
        rules: {
            'indent': [`error`, 4],
            'linebreak-style': [`error`, `windows`],
            'quotes': [`error`, `backtick`],
            'semi': [`error`, `never`],
            'no-var': `error`,
            'prefer-const': `error`,
            'spaced-comment': [`error`, `always`],
            'no-undef': `error`,
        },
    },
]
  