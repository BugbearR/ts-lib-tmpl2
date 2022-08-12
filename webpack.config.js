module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    module: {
        rules: process.env.ENABLE_ESBUILD
            ? [
                {
                    test: /\.ts$/,
                    use: 'esbuild-loader',
                },
            ]
            : [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                },
            ],
    },
    resolve: {
        extensions: [
            '.ts', '.js'
        ]
    }
};
