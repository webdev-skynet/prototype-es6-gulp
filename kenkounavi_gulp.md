# suntory old gulpfile.js backup
> important plugins:  
* gulp-file-include
* postcss-bem

```js
var gulp = require('gulp');var postcss = require('gulp-postcss');var cssnext = require('cssnext');var precss = require('precss');var bem = require('postcss-bem');var nested = require('postcss-nested');var autoprefixer = require('autoprefixer');var fileinclude = require('gulp-file-include');var browserSync = require('browser-sync').create();var reload      = browserSync.reload;gulp.task('css', function () {    var processors = [    	cssnext,    	precss,        nested,        autoprefixer({browsers: ['last 2 version']}),    ];    return gulp.src('./src/**/*.css')        .pipe(postcss(processors))        .pipe(gulp.dest('./'));});gulp.task('copyImg', function () {    gulp.src(['./src/softdrink/kenkounavi/img/**'])    .pipe(gulp.dest('./softdrink/kenkounavi/img/'))});gulp.task('copyJs', function () {    gulp.src(['./src/softdrink/kenkounavi/js/**'])    .pipe(gulp.dest('./softdrink/kenkounavi/js/'))});gulp.task('copyPdf', function () {    gulp.src(['./src/softdrink/kenkounavi/pdf/**'])    .pipe(gulp.dest('./softdrink/kenkounavi/pdf/'))});gulp.task('fileinclude', function() {    gulp.src(['./src/softdrink/kenkounavi/**/*.html'])    .pipe(fileinclude({      prefix: '@@',      basepath: './src/templates'    }))    .pipe(gulp.dest('./softdrink/kenkounavi/'));});gulp.task('watch', function() {    gulp.watch('./src/**/*.css', ['css','copyImg','copyJs','copyPdf','fileinclude']);    gulp.watch('./src/**/*.js', ['copyJs','copyImg','css','copyPdf','fileinclude']);    gulp.watch('./src/**/*.html', ['fileinclude','css','copyImg','copyJs','copyPdf']);});/*gulp.task('serve', function () {    browserSync.init({        server: {            baseDir: './'        }    });    gulp.watch('*.html').on('change', reload);})*/ 
```


