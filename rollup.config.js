import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import flow from 'rollup-plugin-flow';
import uglify from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import precss from 'precss';
import autoprefixer from 'autoprefixer';
import postcssModules from 'postcss-modules';
import postcssUrl from 'postcss-url';
import postcssImport from 'postcss-import';
import globalImport from 'postcss-global-import';
import url from 'rollup-plugin-url';

const cssExportMap = {};
const isProd = process.env.NODE_ENV === 'production';

let postcssPlugins = [
  postcssImport(),
  globalImport(),
  postcssUrl({
    url: 'inline',
  }),
  precss(),
  autoprefixer(),
  postcssModules({
    getJSON(id, exportTokens) {
      cssExportMap[id] = exportTokens;
    },
    generateScopedName: '[name]__[local]___[hash:base64:5]',
  }),
];

if (isProd) {
  postcssPlugins = [...postcssPlugins, cssnano()];
}

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  sourcemap: true,
  external: [],
  plugins: [
    postcss({
      plugins: postcssPlugins,
      getExportNamed: false,
      getExport(id) {
        return cssExportMap[id];
      },
      extensions: ['.css'],
      extract: 'dist/styles.css',
    }),
    flow(),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({
      namedExports: {
        'node_modules/react/react.js': ['PropTypes', 'createElement', 'Component', 'PureComponent'],
      },
    }),
    isProd && eslint({ exclude: 'src/**/*.css' }),
    url({ limit: 1000000 }),
    babel({ exclude: 'node_modules/**' }),
    isProd && uglify(),
  ],
};
