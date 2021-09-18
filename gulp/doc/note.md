# Gulp

- order script concat

````javascript
function js() {
  return src(['assets/js/jquery.js', 'assets/js/app.js', 'assets/js/es6.js'])
    .pipe(sourcemaps.init())
    .pipe(complileJS())
    .pipe(minifyJS())
    .pipe(concat('bundle.min.js'))
    .pipe(sourcemaps.write("."))
    .pipe(dest('build/'))
}
````

- [usueful link](https://developers.google.com/speed/docs/insights/MinifyResources)

````
html-minifier
csso
uglify-js
````

