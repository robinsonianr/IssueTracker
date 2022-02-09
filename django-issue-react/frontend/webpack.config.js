module.exports = {
    module: {
      
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.jsx$/,
          exclude: [/node_modules/],
          use:{
          loader: "babel-loader"
          }
        },
        {
            test: /\.css$/,
            exclude: [/node_modules/],
            use:['style-loader',"css-loader"]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i, 
          loader: 'file-loader',
          options: {
            name: '/src/assets/[name].[ext]'
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        }, 
      ]
    }
  };