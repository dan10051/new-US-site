const gulp              = require('gulp'),
                        cleancss                        = require('gulp-clean-css'),
                        concat                          = require('gulp-concat'),
                        uglify                          = require('gulp-uglify'),
                        browserSync     = require('browser-sync').create();

gulp.task('minify-css', () => {
        return gulp.src('www/css/*.css')
                .pipe(cleancss({level:{1:{specialComments:0}}}))
                .pipe(concat('css.min.css'))
                .pipe(gulp.dest('www/css'));
});

gulp.task('minify-js', () => {
        return gulp.src('www/js/*.js')
                .pipe(concat('js.min.js'))
                .pipe(uglify())
                .pipe(gulp.dest('www/js'))
});

const htmlmin = require('gulp-htmlmin');

gulp.task('minify-html', () => {
  return gulp.src('www/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('www/'));
});

gulp.task('default', function() {
    browserSync.init({
                                proxy: "knowledgecity.dev:8888",
                                open: false,
                                notify: false,
    });
                gulp.watch("www/*.php").on("change", browserSync.reload);
                gulp.watch("www/**/*.css").on("change", browserSync.reload);
});
