var gulp = require('gulp');
var sass = require('gulp-sass');
var eslint = eslint = require('gulp-eslint');
var browserSync = require('browser-sync').create();

gulp.task('lint', function () {
  return gulp.src('app/js/**/*.js')
    .pipe(eslint({
	'rules':{
        'quotes': [1, 'single'],
        'semi': [1, 'always']
    }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    });
});

gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});
