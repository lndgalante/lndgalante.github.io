const gulp = require('gulp')
const rename = require('gulp-rename')
const htmlmin = require('gulp-htmlmin')
const cleanCSS = require('gulp-clean-css')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

gulp.task('minify-html', () => {
  gulp.src('./src/html/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('.'))
})

gulp.task('minify-css', () => {
  gulp.src('./src/css/styles.css')
    .pipe(cleanCSS())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('minify-js', (cb) => {
  gulp.src('./src/js/script.js')
    .pipe(uglify())
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('./dist/js'))
})

gulp.task('minify-img', () => {
  gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
})

gulp.task('default', ['minify-html', 'minify-css', 'minify-js', 'minify-img'], () => {
  gulp.watch('./src/html/index.html', ['minify-html'])
  gulp.watch('./src/css/styles.css', ['minify-css'])
  gulp.watch('./src/js/script.js', ['minify-js'])
  gulp.watch('./src/img/*', ['minify-img'])
})
