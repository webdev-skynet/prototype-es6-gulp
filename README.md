# project-template
taskrunner &amp; html template for project at work with modular tasks


## Ref Links
* [Gulp & Babel](http://macr.ae/article/gulp-and-babel.html)
* [Gulp for Beginners | CSS-Tricks](https://css-tricks.com/gulp-for-beginners/)
* [nystudio107 | A Gulp Workflow for Frontend Development Automation](https://nystudio107.com/blog/a-gulp-workflow-for-frontend-development-automation)
* [nystudio107 | A Better package.json for the Frontend](https://nystudio107.com/blog/a-better-package-json-for-the-frontend)
* [An Introduction to Gulp.js](https://www.sitepoint.com/introduction-gulp-js/)
* [Using ES6 with gulp](https://markgoodyear.com/2015/06/using-es6-with-gulp/)
* [Working with Images in Stylesheets with PostCSS](https://css-tricks.com/images-in-postcss/)
* [Strategies for Cache-Busting CSS](https://css-tricks.com/strategies-for-cache-busting-css/)

## Others boilerplate
* [Sass Boilerplate](https://github.com/olefredrik/sass-boilerplate)

## gulp plugins
* [A plugin of gulp for files include](https://www.npmjs.com/package/gulp-file-include)
* [A plugin of gulp for files advanced include](https://www.npmjs.com/package/gulp-advanced-file-include)
* [A plugin for gulp connect to PHP](https://www.npmjs.com/package/gulp-connect-php)
* [Gulp Plugins](https://github.com/willianjusten/awesome-svg/blob/master/topics/Gulp-plugins.md) <<svg-tools>>

# suntory old gulpfile.js backup

> important plugins:  
* gulp-file-include
* postcss-bem

```js
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('cssnext');
var precss = require('precss');
var bem = require('postcss-bem');
var nested = require('postcss-nested');
var autoprefixer = require('autoprefixer');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


gulp.task('css', function () {
    var processors = [
    	cssnext,
    	precss,
        nested,
        autoprefixer({browsers: ['last 2 version']}),
    ];
    return gulp.src('./src/**/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./'));
});

gulp.task('copyImg', function () {
    gulp.src(['./src/softdrink/kenkounavi/img/**'])
    .pipe(gulp.dest('./softdrink/kenkounavi/img/'))
});

gulp.task('copyJs', function () {
    gulp.src(['./src/softdrink/kenkounavi/js/**'])
    .pipe(gulp.dest('./softdrink/kenkounavi/js/'))
});

gulp.task('copyPdf', function () {
    gulp.src(['./src/softdrink/kenkounavi/pdf/**'])
    .pipe(gulp.dest('./softdrink/kenkounavi/pdf/'))
});

gulp.task('fileinclude', function() {
    gulp.src(['./src/softdrink/kenkounavi/**/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: './src/templates'
    }))
    .pipe(gulp.dest('./softdrink/kenkounavi/'));
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.css', ['css','copyImg','copyJs','copyPdf','fileinclude']);
    gulp.watch('./src/**/*.js', ['copyJs','copyImg','css','copyPdf','fileinclude']);
    gulp.watch('./src/**/*.html', ['fileinclude','css','copyImg','copyJs','copyPdf']);
});

/*
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('*.html').on('change', reload);
})
*/
 
```

---

```

```
---
