import sass from '@csstools/postcss-sass';
import css from '@modular-css/rollup';
import sassSyntax from 'postcss-scss';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

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
      include: /\.scss$/i,
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
            ? '"use strict";\nrequire("./Layout.css");\n'
            : 'import "./Layout.css";\n') + code.replace(/^'use strict';/, '')
        );
      },
    },
  ],
};
