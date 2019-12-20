let
    gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('css', function () {
    gulp.src('./styles/*.css')
        .pipe(livereload({start: true}))
});


gulp.task('default', function () {
    gulp.watch('./styles/*.css', gulp.parallel('css'));
});