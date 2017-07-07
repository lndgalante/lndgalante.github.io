// Folders
const destination = 'dist'
// Gulp
const gulp = require('gulp')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
// HTML
const htmlmin = require('gulp-htmlmin')
const inject = require('gulp-inject')
// CSS
const unCSS = require('gulp-uncss')
const cleanCSS = require('gulp-clean-css')
// JavaScript
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
// Images
const svgmin = require('gulp-svgmin')
const imagemin = require('gulp-imagemin')

gulp.task('html', () => {
  gulp
    .src('src/index.html')
    .pipe(
      inject(gulp.src('dist/app.min.js'), {
        starttag: '/* inject:js */',
        endtag: '/* endinject */',
        transform: (filePath, file) => file.contents.toString('utf8'),
      })
    )
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./'))
})

gulp.task('css', () =>
  gulp
    .src('src/*.css')
    .pipe(concat('styles.css'))
    .pipe(unCSS({ html: ['index.html'] }))
    .pipe(cleanCSS())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest(destination))
)

gulp.task('js', () =>
  gulp
    .src('src/app.js')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(uglify().on('error', e => console.log(e)))
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest(destination))
)

gulp.task('images', () =>
  gulp
    .src('src/assets/img/*')
    .pipe(
      imagemin([
        imagemin.optipng({ optimizationLevel: 2 }),
        imagemin.svgo({ plugins: [{ removeViewBox: true }] }),
      ])
    )
    .pipe(gulp.dest(destination))
)

gulp.task('default', ['html', 'css', 'js', 'images'], () => {
  gulp.watch('src/index.html', ['html'])
  gulp.watch('src/*.css', ['css'])
  gulp.watch('src/app.js', ['js'])
  gulp.watch('src/assets/img/*', ['images'])
})
