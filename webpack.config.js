// __dirname the current location path 
const path = require('path')//used to join the path as concat is not ok for edge cases
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) => {
    const isProduction = env === 'production'
    const CSSExtract = new ExtractTextPlugin('styles.css')

    return {
        entry: './src/app.js',//where to start
        output: {
            path: path.join(__dirname,'public','dist'),
            filename:'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/, //a regex for .js files
                exclude: /node_modules/
            },{
                test:/\.s?css$/,  //ends with .css or .scss
                // use: [ //gives an array of loaders
                //     'style-loader',
                //     'css-loader',
                //     'sass-loader'
                // ]
                use: CSSExtract.extract({
                    use: [
                        //'css-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap:true
                            }
                        },
                        //'sass-loader'
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap:true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction? 'source-map' : 'inline-sorce-map', 
        // for better viewing of code problems in stack trace, exact file we wrote (not going in line 22222 on bundle js)
        devServer: {
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
}



