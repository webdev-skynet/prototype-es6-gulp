import {folders, gutil} from './config.js';
// es6 transpliling
import browserify from 'browserify';
// import babelify from 'babelify'; directly called
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import watchify from 'watchify';
import uglify from 'gulp-uglify';

export {browserify, source, buffer, watchify, uglify, gutil};

const jsTask = (gulp, gutil, browserify, sourcemaps, source, buffer, watchify, uglify) => {

    const watchedBrowserify = watchify(browserify({
        basedir: '.',
        debug: true,
        entries: [`${folders.src}/js/main.js`],
        cache: {},
        packageCache: {}
    })
  );

    function bundle() {
        return watchedBrowserify
            .transform('babelify', { presets: ["es2015"] })
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest(`${folders.build}/js/`));
    }

  gulp.task('js', bundle);
  watchedBrowserify.on("update", bundle);
  watchedBrowserify.on("log", gutil.log);

}

export default jsTask;
