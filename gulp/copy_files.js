var gulp                = require('gulp');

gulp.task('copyViews', () => {
  return gulp.src(["app/views/*"])
      .pipe(gulp.dest('dist/app/views'));
})

gulp.task('copyPublic', () => {
  return gulp.src(["app/public/**/*"])
      .pipe(gulp.dest('dist/app/public'));
});

gulp.task('copyJson', () => {
  return gulp.src(['config/*'], {base: "."})
      .pipe(gulp.dest('dist'))
});