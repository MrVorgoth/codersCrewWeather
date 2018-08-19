module.exports = {
    entry: './src/SandboxScript.js',
    output: {
        path: '/home/milosz/Documents/CodersCamp/project4/codersCrewWeather/dist/',
        filename: 'SandboxScript.bundle.js'
    },
    mode: 'development',
    externals: ['axios'],
    resolve: {
        extensions: ['js']
    },
    module: {
        rules: [
            {
                loaders: ['babel-loader'],
                exclude: /node_modules/,
            }
        ]
    }
}