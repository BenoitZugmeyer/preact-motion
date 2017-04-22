const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('rollup-plugin-replace');
const uglify = require('rollup-plugin-uglify');
const istanbul = require('rollup-plugin-istanbul');

const DEVELOPMENT = process.env.NODE_ENV !== 'production';
const TEST = process.env.NODE_ENV === 'test';

module.exports = {
  entry: 'src/index.js',
  sourceMap: true,

  plugins: [
    TEST && {
      name: 'test-mock-resolve',
      resolveId(importee) {
        if (importee === 'raf') return `${__dirname}/test/mockRaf.js`;
        return undefined;
      },
    },
    nodeResolve({
      main: true,
      jsnext: true,
      extensions: ['.js', '.jsx'],
    }),
    babel({
      exclude: ['node_modules/prop-types/**', 'node_modules/lodash.range/**'],
      babelrc: false,
      presets: [
        ['env', {
          modules: false,
          loose: true,
          targets: {
            browsers: ['last 2 versions'],
          },
        }],
      ],
      plugins: [
        'external-helpers',
        ['transform-react-jsx', { pragma: 'h' }],
        'transform-flow-strip-types',
        'transform-class-properties',
        'transform-object-rest-spread',
        ...!DEVELOPMENT ? [
          'transform-react-remove-prop-types',
        ] : [],
      ],
    }),
    TEST && istanbul({
      include: 'src/**',
    }),
    commonjs({
    }),
    Boolean(process.env.NODE_ENV) && replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    !DEVELOPMENT && uglify({
      compress: {
        // This will remove prop-types completely in production
        pure_funcs: ['createCommonjsModule'],
      },
    }),
  ],

  moduleName: 'PreactMotion',
  moduleContext: {
    'performance-now': 'window',
  },

  globals: {
    preact: 'preact',
  },
};
