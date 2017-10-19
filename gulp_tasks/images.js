import {folders} from './config.js';
import imagemin from 'gulp-imagemin'; //svgo, jpgegtran, optipng, gifsicle not integrated
// TODO: maybe add https://github.com/ben-eb/gulp-svgmin ?

export {imagemin};

const imgTask = (gulp, plumber, newer, imagemin) => {

    gulp.task('images', () => {
        let output = `${folders.build}/images/`;
        return gulp.src(`${folders.src}/images/**/*`)
            .pipe(plumber())
            .pipe(newer(output))
            .pipe(imagemin([
                imagemin.gifsicle({ interlaced: false }),
                imagemin.jpegtran({ progressive: false }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [
                        { removeTitle: true },
                        { removeDesc: true },
                        { removeComments: true }
                    ]
                })
            ],
            { verbose: true }
            ))
            .pipe(gulp.dest(output));
    });

}

export default imgTask;
