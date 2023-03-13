import TsPaths from 'tsconfig-paths-webpack-plugin'
import { Configuration } from 'webpack'

// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
// import Entries from './config/entries'
import { DIST_DIR, resolve, SRC_DIR } from './config/path'

const Base: Configuration = {
    entry: SRC_DIR,
    output: {
        path: DIST_DIR,
        clean: true,
        filename: '[name].[contenthash].js',
        sourceMapFilename: 'source_maps/[file].map',
        assetModuleFilename: 'assets/[hash][ext][query]',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devtool: 'source-map',
    plugins: [
        // new BundleAnalyzerPlugin({ openAnalyzer: false, analyzerPort: 7777 }),
    ],
    resolve: {
        extensions: ['.mjs', '.tsx', '.ts', '.js'],
        plugins: [
            new TsPaths({ configFile: resolve(SRC_DIR, 'tsconfig.json') }),
        ],
    },
}

export default Base
