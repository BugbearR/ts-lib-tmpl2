/* eslint-disable @typescript-eslint/no-var-requires */
const { config } = require('@swc/core/spack')
const path = require("path");

module.exports = config({
    entry: {
        web: path.join(__dirname, "src/index.ts"),
    },
    output: {
        path: path.join(__dirname, "dist"),
        name: "index.umd.js"
    },
    options: {
        "jsc": {
            "parser": {
                "syntax": "typescript"
            },
            "target": "es5",
            "minify": {
                "compress": {
                    "unused": true
                },
                "mangle": true
            }
        },
        "env": {
            "mode": "usage",
            "coreJs": 3
        },
        "minify": true,
        "module": {
            "type": "umd"
        }
    }
});
