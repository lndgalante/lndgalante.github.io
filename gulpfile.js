var gulp = require('gulp');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');


gulp.task('minify-html', function () {
    return gulp.src('index-dev.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(''))
});

gulp.task('minify-css', function () {
    return gulp.src('css/styles.css')
        .pipe(cleanCSS())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['minify-html', 'minify-css'], function () {
    gulp.watch('index-dev.html', ['minify-html']);
    gulp.watch('css/styles.css', ['minify-css']);
})