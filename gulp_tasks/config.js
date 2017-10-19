// base(images, browser-sync...)
import gulp from 'gulp';
import browserSync from 'browser-sync';
import newer from 'gulp-newer'; //only new source files will be piped.
import plumber from 'gulp-plumber'; //error handling which prevents Gulp stopping on failures
import sourcemaps from 'gulp-sourcemaps';
import gutil from 'gulp-util';

// optionalDevDependencies
// import spriteGlue from 'gulp-sprite-glue'; // TODO: generate sprites... under construction

export {gulp, plumber, newer, browserSync, sourcemaps, gutil};

// if use template engine set extension
export const templateExtension = 'nunjucks'; // ex: nunjucks, ejs..

// development mode or production mode
export const devBuild = (process.env.NODE_ENV !== 'production');

// input/output folders
export const folders = {
    base: 'build',
    src: 'src/assets',
    build: 'build/assets',
    dist: 'dist/assets' // TODO: under construction
};

// options for browser-sync
export const browsersyncOptions = {
    server: {
        baseDir: `${folders.base}`
    },
    "startPath": "index.html",
    "proxy": true,
    "port": 3000,
    "xip": false,
    "notify": true,
    "minify": true,
};
