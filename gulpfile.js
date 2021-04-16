var gulp          = require('gulp'),
    //uglify      = require('gulp-uglify');
    babel         = require('gulp-babel'),
    cleanCSS      = require('gulp-clean-css'),
    htmlmin       = require('gulp-htmlmin')


var folders = ['./template/']
gulp.task('minify-js', function() {
  for(i=0;i<folders.length;i++){
    return gulp.src(folders[i]+'**/*.js')
      .pipe(babel({
        "presets": ["es2015"],
        "plugins": ["transform-object-assign"],
        "compact": true,
        "comments": false
    }))
//      .pipe(uglify())
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
