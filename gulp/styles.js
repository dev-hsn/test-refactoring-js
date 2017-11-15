var gulp                = require('gulp');
var autoprefixer        = require('gulp-autoprefixer');
var sass                = require('gulp-sass');

gulp.task('styles', () => {
  return gulp.src('app/public/styles/main.scss')
    .pipe(autoprefixer({
      browsers: ['last 5 versions']
    }))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString())
      this.emit('end');
    })
    .pipe(gulp.dest('dist/app/public/styles'));
})