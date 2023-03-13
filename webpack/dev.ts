import HtmlPlugin from 'html-webpack-plugin'
import { Configuration as Wonf } from 'webpack'
import { Configuration as Donf } from 'webpack-dev-server'

import Base from './base'
import { SRC_DIR, resolve } from './config/path'
import { DevStyle } from './config/style'

interface Configuration extends Wonf {
    devServer: Donf
}

const DevConfig: Configuration = {
    ...Base,
    mode: 'development',
    module: {
        rules: [...Base.module!.rules!, DevStyle],
    },
    plugins: [
        ...Base.plugins!,
        new HtmlPlugin({ template: resolve(SRC_DIR, 'template.html') }),
    ],
    devServer: {
        port: 8000,
        hot: true, // true = full reload
        historyApiFallback: true,
        compress: true,
        client: {
            logging: 'none',
            reconnect: 7,
        },
    },
}

export default DevConfig
