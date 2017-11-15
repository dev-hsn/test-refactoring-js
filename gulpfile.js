var gulp = require('gulp');

require('./gulp/scripts');
require('./gulp/styles');
require('./gulp/copy_files');
require('./gulp/clean');
require('./gulp/server');

gulp.task('default', ['build', 'server']);
gulp.task('build', ['es6', 'styles', 'copyImages', 'copyJson', 'copyViews']);
gulp.task('heroku', ['clean', 'build']);
