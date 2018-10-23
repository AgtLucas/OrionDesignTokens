const gulp = require('gulp');
const sass = require('gulp-sass');
const StyleDictionary = require('style-dictionary').extend('./config.json');



gulp.task('buildTokens', function() {
  StyleDictionary.buildAllPlatforms();
});

gulp.task('buildCss', function() {
  gulp.src('./src/scss/{,*/}*.{scss,sass}')
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded', //alt options: nested, compact, compressed
    }))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('default', ['buildTokens', 'buildCss']);
