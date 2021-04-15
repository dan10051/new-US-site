const
    gulp          = require('gulp'),
    path          = require('path'),
    fs            = require('fs'),
    requirejs     = require('requirejs'),
    cleanCSS      = require('gulp-clean-css'),
    htmlmin       = require('gulp-htmlmin'),


var folders = ['./templates/']
gulp.task('minify-js', function() {
  for(i=0;i<folders.length;i++){
    gulp.src(folders[i]+'**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(folders[i]))
    }
});

var folders = ['./templates/']
gulp.task('minify-css', function() {
  for(i=0;i<folders.length;i++){
      gulp.src(folders[i]+'**/*.css')
        .pipe(cleanCSS({debug: true, rebase: false}))
        .pipe(gulp.dest(folders[i]));
    }
});

var folders = ['./templates/']
gulp.task('minify-html', function() {
    for(i=0;i<folders.length;i++){
      gulp.src(folders[i]+'**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(gulp.dest(folders[i]));
    }
});
