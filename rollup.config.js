export default {
        input: './src/main.js',
        experimentalPreserveModules: true,
        experimentalCodeSplitting: true,
        output: {
                dir: 'dist/modules',
                format: 'es',
                sourcemap: true,
        },
}

