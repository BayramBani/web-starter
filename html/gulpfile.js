const {src, dest, parallel, series} = require('gulp');
const clean = require('gulp-clean');

function cleanBS() {
  return src('bootstrap/assets/*', {read: false})
    .pipe(clean())
}

function cleanM() {
  return src('materialize/assets/*', {read: false})
    .pipe(clean())
}

function bootstrap() {
  return src('node_modules/bootstrap/dist/**/*')
    .pipe(dest('bootstrap/assets/'))
}

function jquery() {
  return src('node_modules/jquery/dist/**/*')
    .pipe(dest('bootstrap/assets/js/'))
}

function materialize() {
  return src('node_modules/materialize-css/dist/**/*')
    .pipe(dest('materialize/assets/'))
}

exports.default = parallel(series(cleanBS, bootstrap, jquery),series(cleanM,materialize));
