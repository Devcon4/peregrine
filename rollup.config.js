import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

const extensions = ['.js', '.ts'];

/** @type {import('rollup').RollupOptions} */
const config = {
    input: 'src/app.ts',
    output: {
        dir: 'dist',
        format: 'iife',
        name: 'Cardinal'
    },
    
    plugins: [
        resolve({ extensions }),
        commonjs(),
        babel({
          extensions,
          babelHelpers: 'bundled',
          include: ['src/**/*'],
        }),
      ],
}

export default config;