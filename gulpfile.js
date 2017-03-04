const gulp = require('gulp'),
    browser = require('browser-sync'),
    pug = require('gulp-pug'),
    clean = require('gulp-clean'),
    ghPages = require('gulp-gh-pages'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename');

gulp.task('build', ['clean'], function () {
    gulp.start('pugBuild', 'cssmin')
});

gulp.task('deploy', function () {
    return gulp
        .src('./dist/**/*')
        .pipe(ghPages());
});

gulp.task('clean', function () {
   return gulp
        .src('dist/')
        .pipe(clean())
})

gulp.task('cssmin', function() {
    return gulp.src('src/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/'))
});

gulp.task('pugBuild', function buildHTML() {
    return gulp
        .src('src/*.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('dist/'))
});

gulp.task('sv', function () {

    //Iniciando o servidor
    browser.init({
        server: {
            baseDir: 'dist'
        }
    });

    //Escuta de alterações
    gulp
        .watch('dist/**/*.*')
        .on('change', browser.reload);
    gulp
        .watch('src/**/*.pug',['pugBuild'])
        .on('change', function(){});


})
