import {folders} from './config.js';
import injectSvg from 'gulp-inject-svg';

export {injectSvg};

const injectSvgTask = (gulp, plumber, newer, injectSvg) => {

    // TODO/FIXME: issue with template-render, find a way to integrate into defaul task
    // gulp.task('svg-inject', () => {
    //     let out = `${folders.build}`;
    //     return gulp.src(`src/**/*.nunjucks`) // FIXME: change to ${templateExtension}
    //         .pipe(plumber())
    //         .pipe(newer(out))
    //         .pipe(injectSvg({base: `src/`}))
    //         .pipe(gulp.dest(out));
    // });

    gulp.task('svg-inject', () => {
        let out = `${folders.base}`;
        return gulp.src(`${folders.base}/index.html`)
            .pipe(plumber())
            //.pipe(newer(out))
            .pipe(injectSvg({base: `build/`}))
            .pipe(gulp.dest(out));
    });

    // TODO: set a task to delete svg files in build folder (ref : https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md or gulp-clean)

}

export default injectSvgTask;
