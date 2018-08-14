//require our dependencies
var path = require('path');
var webpack = require('webpack');
//var BundleTracker = require('webpack-bundle-tracker')


module.exports = {
    //the base directory (absolute path) for resolving the entry option
    context: __dirname,
    //the entry point we created earlier. Note that './' means
    //your current directory. You don't have to specify the extension  now,
    //because you will specify extensions later in the `resolve` section
    entry: './main',

    output: {
        //where you want your compiled bundle to be stored
        path: '/',
        // path: path.resolve('./assets/bundles/'),
        //naming convention webpack should use for your files
        filename: 'index.js',
        // filename: '[name].[chunkhash].js',
        // publicPath: '/'
    },

    // plugins: [
    //     // new webpack.optimize.CommonsChunkPlugin({
    //     //   name: 'vendor',
    //     //   filename: 'vendor.js',
    //     //   minChunks (module) {
    //     //     return module.context &&
    //     //            module.context.indexOf('node_modules') >= 0;
    //     //   }
    //     // }),
    //     // new webpack.optimize.ModuleConcatenationPlugin(),
    //     //tells webpack where to store data about your bundles.
    //     new BundleTracker({ filename: './webpack-stats.json' }),
    //     //makes jQuery available in every module
    //     new webpack.ProvidePlugin({
    //         $: 'jquery',
    //         jQuery: 'jquery',
    //         'window.jQuery': 'jquery'
    //     }),
    //     new UglifyJsPlugin({
    //       uglifyOptions: {
    //         ecma: 8,
    //         warnings: false,
    //         output: {
    //           comments: false,
    //           beautify: false,
    //         },
    //         // mangle: { toplevel: true },
    //         toplevel: false,
    //         nameCache: null,
    //         ie8: false,
    //         keep_classnames: undefined,
    //         keep_fnames: false,
    //         safari10: false,
    //         compress:true
    //       }
    //     }),
    // ],

    module: {
        rules: [
            //a regexp that tells webpack use the following loaders on all
            //.js and .jsx files
            {
                test: /\.jsx?$/,
                //we definitely don't want babel to transpile all the files in
                //node_modules. That would take a long time.
                exclude: /node_modules/,
                //use the babel loader
                loader: 'babel-loader',
                query: {
                    //specify that we will be dealing with React code
                    presets: ['react']
                }
            },
           
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/i, loader: "url-loader" },
            { test: /\.gif$/i, loader: "file-loader" },
            { test: /\.css$/, loader: "css-loader" },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                },
                ]
            },
        ]
    },

    resolve: {
        //tells webpack where to look for modules
        modules: ['node_modules'],
        //extensions that should be used to resolve modules
        extensions: ['*', '.js', '.jsx', '.css']
    }
};
