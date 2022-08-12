// from https://zenn.dev/rabbit/articles/ef84ae02a987b2
import { build } from 'esbuild';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { dependencies } = require('./package.json');

const entryFile = './src/index.ts';

const shared = {
  bundle: true,
  entryPoints: [entryFile],
  external: dependencies ? Object.keys(dependencies) : [],
  minify: true,
  sourcemap: false,
};

build({
  ...shared,
  logLevel: 'info',
  format: 'esm',
  outfile: './dist/index.esm.js',
  target: ['ES6'],
});

build({
  ...shared,
  logLevel: 'info',
  format: 'cjs',
  outfile: './dist/index.cjs.js',
  target: ['ES6'],
});
