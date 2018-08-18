const gulp = require('gulp')
const purify = require('gulp-purifycss')
const inject = require('gulp-inject')

gulp.task('css', () => {
  return gulp
    .src('./src/bulma.css')
    .pipe(purify(['index.html']))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('index', () => {
  gulp
    .src('./index.html')
    .pipe(
      inject(gulp.src(['./dist/bulma.css']), {
        starttag: '/* inject:css */',
        endtag: '/* endinject */',
        transform: (filePath, file) => file.contents.toString('utf8'),
      })
    )
    .pipe(gulp.dest('./dist'))
})
