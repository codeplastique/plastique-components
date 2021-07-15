module.exports = env => {
    env = env || {};
    debugger;

    const OUTPUT_DIR = env['OUTPUT_PATH'] || __dirname + "/target";
    let p = require('@plastique/core');
    let WebpackShellPlugin = require('webpack-shell-plugin');

    let Plastique = p.Plastique;
    let CompilePlugin = p.CompilePlugin;
    let LibraryPlugin = p.LibraryPlugin;
    let path = require("path");
    // const i18nDirs = [
    //     path.join(__dirname, "i18n"),
    //     path.join(__dirname, "node_modules/plastique-components/i18n"),
    // ];
    let transformer = new Plastique({
        outputDir: OUTPUT_DIR,
        i18nOutputFileName: "app.locale"
    });
    return [{
        target: 'web',
        resolve: {
            extensions: ['.ts']
        },
        context: __dirname,
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    options: {
                        configFile: "tsconfig.json",
                        getCustomTransformers: (program) => ({
                            before: [transformer]
                        })
                    }
                }
            ]
        },
        entry: {
            'main': './test/test.ts',
        },
        plugins: [
            new LibraryPlugin({
                // 'axios': path.join(__dirname, './static/js', 'axios.min.js'),
                'process': null,
            }),
            new CompilePlugin(),
            new WebpackShellPlugin({
                onBuildExit: "node target/main.js"
            })
        ],
        output: {
            filename: '[name].js',
            path: OUTPUT_DIR,

        },
        optimization: {
            minimize: false
        },
    }];
};