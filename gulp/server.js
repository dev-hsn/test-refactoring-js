var gulp        = require('gulp');
var nodemon     = require('gulp-nodemon');

gulp.task('server', function() {
  nodemon({
      script: 'dist/app.js',
      watch: ['app.js', 'app/public/styles/*', 'app/views/*', 'app/controllers/*', 'app/config/*', 'app/routes/*', 'app/lib/*', 'app/middleware/*', 'app/config/*'],
      ext: 'js json css twig scss',
      tasks: ['build']
  });
});
