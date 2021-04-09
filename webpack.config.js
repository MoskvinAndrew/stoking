const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

let optimize = {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial',
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true,
        },
      },
    },
    minimizer: isProd ? [new UglifyJsPlugin()] : [],
  };

let conf = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: ['@babel/polyfill', './main.tsx'],
    },
    // entry: {
    //     'bundle-home': './entry-home.js',
    //     'bundle-manager': './entry-manager.js',
    // },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/[name].[contenthash].js',
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss"],
        alias: {
            api: path.resolve(__dirname, 'src/api/'),
            styles: path.resolve(__dirname, 'src/assets/styles/'),
            img: path.resolve(__dirname, 'src/assets/img/'),
            icons: path.resolve(__dirname, 'src/assets/icons/'),
            modules: path.resolve(__dirname, 'src/components/modules/'),
            routes: path.resolve(__dirname, 'src/routes/'),
            store: path.resolve(__dirname, 'src/store/'),
        },
    },
    devServer: {
        // contentBasePublicPath: '/react_catalog/',
        // openPage: 'stoking/',
        // contentBase: [path.join(__dirname, "dist")],
        compress: true,
        port: 8000,
        overlay: true,
        watchContentBase: true,
        progress: true,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    devtool: isDev ? 'eval-cheap-module-source-map' : false,
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.css$/,
                exclude: /src/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /^((?!\.module).)*(scss|css)$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        }
                    },
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.module\.(scss|css)$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: {
                                localIdentName: '[local]__[sha1:hash:hex:7]'
                            }
                        }
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './template/browser.html',
            cache: false,
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/fonts'),
                    to: path.resolve(__dirname, 'dist/assets/fonts')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/styles/_fonts.css'),
                    to: path.resolve(__dirname, 'dist/assets/css/_fonts.css')
                }
            ]
        }),
    ],
    //optimization: isDev ? [] : optimize,
    performance: {
        hints: false,
    },
};

module.exports = (env, argv) => conf;