// ref: https://zellwk.com/blog/nunjucks-with-gulp/

import {folders, templateExtension} from './config.js';
import getData from 'gulp-data';
import templateRender from 'gulp-nunjucks-render';

export {templateRender, getData};

const data = `../src/assets/data/data.json`;

const templateRenderTask = (gulp, plumber, getData, templateRender) => {

    gulp.task('template-render', () => {

        return gulp.src([
            `src/**/*.+(html|${templateExtension})`,
            '!src/assets/**/*' // prevent rendering of templates folder
            ])
            .pipe(plumber())
            .pipe(getData(function() {
                if (data) {
                    return require(data);
                } else {
                    console.log('Please set your data in "const data"');
                }
            }))
            .pipe(templateRender({
                path: [`${folders.src}/templates/`]
            }))
            .pipe(gulp.dest(`${folders.base}`))
    });

}

export default templateRenderTask;
