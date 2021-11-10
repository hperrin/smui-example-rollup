import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import preprocess from "svelte-preprocess";

module.exports = {
  input: "index.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    name: "app",
  },
  plugins: [
    svelte({
      preprocess: preprocess(),
    }),
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),
    postcss({
      extract: true,
      minimize: true,
      use: [
        [
          "sass",
          {
            includePaths: ["./theme", "./node_modules"],
          },
        ],
      ],
    }),
  ],
  watch: {
    clearScreen: false,
  },
};
