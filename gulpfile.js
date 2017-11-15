var gulp = require('gulp');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var clean = require('gulp-clean');

gulp.task('es6', () => {
    return gulp.src(["app.js", "routes/*", 'lib/*', 'middleware/*'], {base: "."})
        .pipe(babel({presets: ['es2015']}))
        .pipe(gulp.dest('dist'));
});

gulp.task('public', () => {
    return gulp.src(["public/**/*"])
        .pipe(gulp.dest('dist/public'));
})

var notify = require('gulp-notify');
var clean = require('gulp-clean');

gulp.task('json', () => {
    return gulp.src(['config/*'], {base: "."})
        .pipe(gulp.dest('dist'))
});

gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});


gulp.task('server', function() {
    nodemon({
        script: 'dist/app.js',
        watch: ['app.js', 'public/styles/*', 'views/*', 'controllers/*', 'config/*', 'routes/*', 'lib/*', 'middleware/*', 'config/*'],
        ext: 'js json css twig',
        tasks: ['build']
    });
});

gulp.task('default', ['build', 'server']);
gulp.task('build', ['es6', 'json', 'public']);
gulp.task('heroku', ['clean', 'build']);
