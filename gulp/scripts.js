var gulp        = require('gulp');
var babel       = require('gulp-babel');

gulp.task('es6', () => {
  return gulp.src(['app.js', 'app/**/*.js'], {base: "."})
      .pipe(babel())
      .pipe(gulp.dest('dist'));
});