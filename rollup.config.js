import sassSyntax from 'postcss-scss';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import sass from '@csstools/postcss-sass';
import css from '@modular-css/rollup';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/index.js',
      assetFileNames: '[name][extname]',
      format: 'cjs',
    },
    {
      file: 'es/index.js',
      assetFileNames: '[name][extname]',
      format: 'esm',
    },
  ],
  external: ['react', 'prop-types', 'classnames'],
  plugins: [
    resolve(),
    babel(),
    css({
      namedExports: false,
      before: [sass()],
      map: false,
      postcss: {
        syntax: sassSyntax,
      },
    }),
    {
      name: 'add-css',
      renderChunk(code, _, { format }) {
        return (
          (format === 'cjs'
            ? '"use strict";\nrequire("./Layout.module.css");\n'
            : 'import "./Layout.module.css";\n') +
          code.replace(/^'use strict';/, '')
        );
      },
    },
  ],
};
