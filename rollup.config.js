import autoprefixer from "autoprefixer";
import babel from "@rollup/plugin-babel";
import styles from "rollup-plugin-styles";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import sourcemaps from "rollup-plugin-sourcemaps";

// the entry point for the library
const input = "src/index.js";

var config = [
	{
		input: input,
		output: {
			// then name of the package
			name: "chiraag's-component-library",
			file: `dist/index.cjs.js`,
			format: "cjs",
			exports: "auto",
		},
		// this externelizes react to prevent rollup from compiling it
		external: ["react", "react-dom", /@babel\/runtime/, "prop-types"],
		plugins: [
			commonjs({
				include: /node_modules/,
			}),
			nodeResolve({
				jsnext: true,
				main: true,
				browser: true,
			}),
			sourcemaps(),
			// these are babel configurations
			babel({
				exclude: "node_modules/**",
				plugins: ["@babel/transform-runtime"],
				presets: ["@babel/preset-react", "@babel/preset-env"],
				babelHelpers: "runtime",
			}),
			// this adds support for styles
			styles({
				postcss: {
					plugins: [autoprefixer()],
				},
			}),
		],
	},
];

export default [...config];
