var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    cssbeautify = require('gulp-cssbeautify'),
    reload = browserSync.reload;

gulp.task('html', function() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('app'))
        .pipe(reload({ stream: true }));
});

gulp.task('scss', function() {
    return gulp.src('src/scss/main.scss')
        .pipe(sass())
        .pipe(cssbeautify({
            indent: '  ',
            openbrace: 'end-of-line',
            autosemicolon: true
        }))
        .pipe(gulp.dest('app/styles'))
        .pipe(reload({ stream: true }));
})

gulp.task('js', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('app/js'))
        .pipe(reload({ stream: true }));
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        }
    })
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.html', ['html'])
    gulp.watch('src/scss/**.scss', ['scss'])
    gulp.watch('src/js/**/*.js', ['js'])
});

gulp.task('default', ['html', 'scss', 'js', 'browserSync', 'watch']);