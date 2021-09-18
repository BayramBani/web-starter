# webpack configuration

## basic

````javascript
const path = require('path');

module.exports = {
    entry: index.js,App.jsput: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};
````

## css

````
yarn add style-loader css-loader --dev
````

````
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
````

## image

````
yarn add file-loader --dev
````

````
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
````

## font

````
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
````

## data

````
yarn add csv-loader xml-loader --dev
````

````
  module: {
    rules: [
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
````

## webpack-dev-server

````
yarn add webpack-dev-server --dev
````


