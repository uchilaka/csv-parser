module.exports = {
  "extends": [  
    "airbnb/whitespace", "airbnb/hooks"
  ],
  "env": {
    "browser": true,
    "jest": true,
    "es6": true
  },
  "plugins": [
    "import"
  ],
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "no-unused-vars": [ // https://eslint.org/docs/rules/no-unused-vars#options
      "warn", { 
        vars: "local", 
        "args": "after-used", 
        "ignoreRestSiblings": true 
      }
    ],
    "max-len": [ // https://eslint.org/docs/rules/max-len#options
      "warn", {
        "code": 80,
        "tabWidth": 2,
        "ignoreComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ],
    "semi": [
      "warn",
      "never"
    ],
    "quotes": [
      "warn",
      "single"
    ],
    "no-trailing-spaces": "warn",
    "max-len": [ // https://eslint.org/docs/rules/max-len#options
      "warn", {
        "code": 92,
        "tabWidth": 2,
        "ignoreComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ],
    "arrow-parens": ["warn", "as-needed", { "requireForBlockBody": false }],
    "space-in-parens": ["warn", "never"],
    "object-curly-spacing": ["warn", "always", { "objectsInObjects": true }],
    "quotes": [
      "warn",
      "single"
    ],
    "react/jsx-indent": [1, 2, { checkAttributes: true, indentLogicalExpressions: true }],
    "react/jsx-max-props-per-line": [1, { "maximum": 1, "when": "multiline" }],
    "react/jsx-first-prop-new-line": ["warn", "multiline"]  
  }
}