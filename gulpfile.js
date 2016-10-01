var gulp = require('gulp');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');

gulp.task('minify-html', function () {
    return gulp.src('./src/html/index.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('.'))
});

gulp.task('minify-css', function () {
    return gulp.src('./src/css/styles.css')
        .pipe(cleanCSS())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('minify-img', function () {
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('default', ['minify-html', 'minify-css', 'minify-img'], function () {
    gulp.watch('./src/html/index.html', ['minify-html']);
    gulp.watch('./src/css/styles.css', ['minify-css']);
    gulp.watch('./src/img/*', ['minify-img']);
})