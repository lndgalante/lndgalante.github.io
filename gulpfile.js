var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');

gulp.task('minify', function() {
    return gulp.src('index-dev.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyCSS: true
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(''))
});

gulp.task('default', ['minify'], function() {
    gulp.watch('index-dev.html', ['minify']);
})