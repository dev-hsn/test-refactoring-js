var gulp = require('gulp');

require('./gulp/scripts');
require('./gulp/copy_files');
require('./gulp/clean');
require('./gulp/server');

gulp.task('default', ['build', 'server']);
gulp.task('build', ['es6', 'copyJson', 'copyPublic', 'copyViews']);
gulp.task('heroku', ['clean', 'build']);
