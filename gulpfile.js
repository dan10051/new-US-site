var gulp          = require('gulp'),
    cleanCSS      = require('gulp-clean-css'),
    terser        = require('gulp-terser'),
    htmlmin       = require('gulp-htmlmin')

var folders = ['./template/']
gulp.task('treser-js', function() {
  for(i=0;i<folders.length;i++){
    return gulp.src(folders[i]+'**/*.js')
        .pipe(terser())
        .pipe(gulp.dest(folders[i]));
    }
});

var folders = ['./template/']
gulp.task('minify-css', function() {
  for(i=0;i<folders.length;i++){
      return gulp.src(folders[i]+'**/*.css')
        .pipe(cleanCSS({debug: true, rebase: false}))
        .pipe(gulp.dest(folders[i]));
    }
});

var folders = ['./template/']
gulp.task('minify-html', function() {
    for(i=0;i<folders.length;i++){
      return gulp.src(folders[i]+'**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(gulp.dest(folders[i]));
    }
});
