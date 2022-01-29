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
      }
      ]
    }
  };