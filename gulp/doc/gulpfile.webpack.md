# gulpfile.js (webpack)
````
const {src, dest, series} = require('gulp');
const cleanBuild = require('gulp-clean');
const webpack = require('webpack-stream');

function clean() {
  return src('dist/*', {read: false})
    .pipe(cleanBuild())
}

function webpackjs() {
  return src('src/index.js')
    .pipe(webpack(
      {
        mode: 'production',
        module: {
          rules: [
            {test: /\.css$/, loader: ['style-loader', 'css-loader']},
          ],
        },
        output: {
          filename: 'bundle.js'
        }
      }
    ))
    .pipe(dest('dist/'));
}

exports.clean = clean;
exports.webpackjs = webpackjs;
exports.default = series(clean, webpackjs);

````
