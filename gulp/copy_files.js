var gulp                = require('gulp');

gulp.task('copyViews', () => {
  return gulp.src(["app/views/*"])
      .pipe(gulp.dest('dist/app/views'));
})

gulp.task('copyImages', () => {
  return gulp.src(["app/public/images/*"])
      .pipe(gulp.dest('dist/app/public/images'));
});

gulp.task('copyJson', () => {
  return gulp.src(['config/*'], {base: "."})
      .pipe(gulp.dest('dist'))
});