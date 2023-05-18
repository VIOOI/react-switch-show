import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/index.tsx', // здесь указывается входной файл
    output: {
        dir: '.', // здесь указывается выходная директория
        format: 'esm', // здесь указывается формат выходного файла
        sourcemap: true
    },
    plugins: [
        typescript(),
        resolve(),
        commonjs(),
        terser()
    ]
};
