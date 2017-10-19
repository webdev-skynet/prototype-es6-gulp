'use strict';

// NOTE: before running app for prod, do this in terminal: export NODE_ENV=production
// TODO: add gulp-sprite-glue optional task

import {folders, gulp, plumber, newer, browserSync,
browsersyncOptions, templateExtension, sourcemaps, gutil} from './gulp_tasks/config.js';

// TASKS
import cssTask, {sass, postcss, assets, autoprefixer, mqpacker, cssnano} from './gulp_tasks/styles.js';
import imgTask, {imagemin} from './gulp_tasks/images.js';
import jsTask, {browserify, source, buffer, watchify, uglify} from './gulp_tasks/scripts.js';
// >> optional tasks
import injectSvgTask, {injectSvg} from './gulp_tasks/inject-svg.js';
import templateRenderTask, {templateRender, getData} from './gulp_tasks/template-render.js';

browserSync.create();

cssTask(gulp, plumber, sass, sourcemaps, postcss, assets, autoprefixer, mqpacker, cssnano);
imgTask(gulp, plumber, newer, imagemin);
jsTask(gulp, gutil, browserify, sourcemaps, source, buffer, watchify, uglify);
// >> optional tasks
injectSvgTask(gulp, plumber, newer, injectSvg);
templateRenderTask(gulp, plumber, getData, templateRender);


let tasks = ['css', 'template-render', 'js', 'svg-inject']; // >> add optional task after js

// ATTENTION: if no entries in js task (main.js...) browser-sync wont't start
gulp.task('default', tasks, () => {
    browserSync.init(browsersyncOptions);
    gulp.watch(`${folders.src}/images/**/*`, ['images']);
    gulp.watch(`${folders.src}/scss/**/*`, ['css']);
    gulp.watch(`${folders.src}/js/**/*`, ['js']);
    gulp.watch(`${folders.src}/**/*.html`, ['svg-inject']);
    gulp.watch(`./src/**/*.+(html|${templateExtension}`, ['template-render']); // >> optional tasks // TODO: add template_extension

    gulp.watch([
        `${folders.build}*.html`,
        `${folders.build}/images/**/*`,
        `${folders.build}/css/**/*.css`,
        `${folders.build}/js/**/*.js`,
        `${folders.build}/data/**/*.json`
    ]).on('change', browserSync.reload);
});
