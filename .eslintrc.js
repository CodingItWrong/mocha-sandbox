module.exports = {
    "env": {
        "es6": true,
        "node": true,
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
    },
    "rules": {
        // safety
        "curly": ["error", "all"],
        "eqeqeq": ["error", "always"],
        "no-eval": ["error"],
        "no-implied-eval": ["error"],
        "no-return-await": ["error"],
        "no-template-curly-in-string": ["error"],
        "no-var": ["error"],
        "no-with": ["error"],
        "require-await": ["error"],
        "semi": ["error", "always"],

        // diffs
        "comma-dangle": [
            "error",
            {
                "arrays": "only-multiline",
                "objects": "only-multiline",
            }
        ],

        // style
        "array-bracket-spacing": ["error", "never"],
        "arrow-spacing": ["error"],
        "block-spacing": ["error", "always"],
        "brace-style": ["error", "1tbs"],
        "camelcase": ["error"],
        "comma-spacing": ["error"],
        "comma-style": ["error", "last"],
        "eol-last": ["error", "always"],
        "func-call-spacing": ["error", "never"],
        "indent": ["error", 2],
        "key-spacing": ["error"],
        "keyword-spacing": ["error"],
        "linebreak-style": ["error", "unix"],
        "max-len": ["error", { "code": 80 }],
        "no-multiple-empty-lines": ["error", { "max": 1 }],
        "no-trailing-spaces": ["error"],
        "no-whitespace-before-property": ["error"],
        "object-curly-spacing": ["error", "always"],
        "padded-blocks": ["error", "never"],
        "quotes": ["error", "single"],
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "template-curly-spacing": ["error", "never"],
    }
};
