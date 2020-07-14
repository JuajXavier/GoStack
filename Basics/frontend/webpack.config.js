const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // toda vez que tiver um arquivo .js
        exclude: /node_modules/, // e ele não estiver na pasta node_modules
        use: {
          loader: 'babel-loader', // converta ele pra mim utilizando o babel-loader
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'},
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i, // * pode ter quantas caracteres quiser, \. tipo do arquivo e i pra tanto faz se maiuscula ou minúscula.
        use: {
          loader: 'file-loader',
        }
      }
    ]
  },
};