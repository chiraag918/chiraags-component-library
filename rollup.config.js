import autoprefixer from "autoprefixer";
import babel from "@rollup/plugin-babel";
import styles from "rollup-plugin-styles";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

// the entry point for the library
const input = "src/index.js";

var MODE = [
	{
		fomart: "cjs",
	},
	{
		fomart: "esm",
	},
	{
		fomart: "umd",
	},
];

var config = [];

MODE.map((m) => {
	var conf = {
		input: input,
		output: {
			// then name of the package
			name: "chiraag's-component-library",
			file: `dist/index.${m.fomart}.js`,
			format: m.fomart,
			exports: "auto",
			globals: {
				react: "React", // If library relies on React, provide global variable name
				"react-dom": "ReactDOM", // If library relies on ReactDOM, provide global variable name
			},
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
			// these are babel configurations
			babel({
				exclude: "node_modules/**",
				plugins: ["@babel/transform-runtime"],
				babelHelpers: "runtime",
			}),
			// this adds support for styles
			styles({
				postcss: {
					plugins: [autoprefixer()],
				},
			}),
		],
	};
	return config.push(conf);
});

export default config;
