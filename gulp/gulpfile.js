const {src, dest, parallel, series} = require('gulp');
const cleanBuild = require('gulp-clean');
const minifyCSS = require('gulp-csso');
const minifyJS = require('gulp-uglify');
const complileJS = require('gulp-babel');
const minifyHTML = require('gulp-minify-html');
const concat = require('gulp-concat');
const sourcemaps = require("gulp-sourcemaps");

function clean() {
  return src('build/*', {read: false})
    .pipe(cleanBuild())
}

function js() {
  return src('assets/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(complileJS())
    .pipe(minifyJS())
    .pipe(concat('bundle.min.js'))
    .pipe(sourcemaps.write("."))
    .pipe(dest('build/'))
}

function css() {
  return src('assets/css/*.css')
    .pipe(minifyCSS())
    .pipe(concat('bundle.min.css'))
    .pipe(dest('build/'))
}


function html() {
  return src('index.prod.html')
    .pipe(minifyHTML())
    .pipe(concat('index.html'))
    .pipe(dest('build/'))
}

exports.clean = clean;
exports.js = js;
exports.css = css;
exports.html = html;
exports.default = series(clean, parallel(css, js, html));
