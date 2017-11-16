var gulp                = require('gulp');
var autoprefixer        = require('gulp-autoprefixer');
var sass                = require('gulp-sass');
var postcss             = require('gulp-postcss');
var cssImport           = require('postcss-import');
var cssnano             = require('gulp-cssnano');

gulp.task('styles', () => {
  return gulp.src('app/public/styles/main.scss')
    .pipe(postcss([cssImport]))
    .pipe(autoprefixer({
      browsers: ['last 5 versions']
    }))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(cssnano())
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString())
      this.emit('end');
    })
    .pipe(gulp.dest('dist/app/public/styles'));
})