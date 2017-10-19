import {folders, devBuild} from './config.js';
// css
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import assets from 'postcss-assets';
import autoprefixer from 'autoprefixer';
import mqpacker from 'css-mqpacker'; //join media querie declarations
import cssnano from 'cssnano';

export {sass, postcss, assets, autoprefixer, mqpacker, cssnano};

const cssTask = (gulp, plumber, sass, sourcemaps, postcss, assets, autoprefixer, mqpacker, cssnano) => {

    gulp.task('css', ['images'], () => {
        let postCssOpts = [
            assets({loadPaths: ['images/']}),
            autoprefixer({
                browsers: ['last 3 versions']
            }),
            mqpacker
        ];
        if(!devBuild) {
            postCssOpts.push(cssnano);
        }
        return gulp.src(`${folders.src}/scss/**/*.scss`)
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(sass({
                outputStyle: 'expanded',
                imagePath: 'images/',
                precision: 3,
                errLogToConsole: true
            }))
            .pipe(postcss(postCssOpts))
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest(`${folders.build}/css/`));
    });

}

export default cssTask;
