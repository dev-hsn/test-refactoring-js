var gulp = require('gulp');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var clean = require('gulp-clean');

gulp.task('es6', () => {
    return gulp.src(['app.js', 'app/**/*.js'], {base: "."})
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('views', () => {
    return gulp.src(["app/views/*"])
        .pipe(gulp.dest('dist/app/views'));
})

gulp.task('public', () => {
    return gulp.src(["app/public/**/*"])
        .pipe(gulp.dest('dist/app/public'));
});

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
        watch: ['app.js', 'app/public/styles/*', 'app/views/*', 'app/controllers/*', 'app/config/*', 'app/routes/*', 'app/lib/*', 'app/middleware/*', 'app/config/*'],
        ext: 'js json css twig',
        tasks: ['build']
    });
});

gulp.task('default', ['build', 'server']);
gulp.task('build', ['es6', 'json', 'public', 'views']);
gulp.task('heroku', ['clean', 'build']);
