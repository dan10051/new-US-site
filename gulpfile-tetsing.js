var gulp = require('gulp'),
//   sass        = require('gulp-sass'), //Подключаем Sass пакет,
   uglify      = require('gulp-uglify');
   cssnano     = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
   rename      = require('gulp-rename'); // Подключаем библиотеку для переименования файло
   minifyPipeline = require('pipeline-minify-css');
   csso = require('gulp-csso');
   htmlmin = require('gulp-htmlmin');
   imagemin    = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
//   pngquant    = require('imagemin-pngquant'); // Подключаем библиотеку для работы с png



gulp.task('minify-js', function () {
   gulp.src('js/**/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('build'))
});



gulp.task('css', function() {
    return gulp.src('css/**/*.css') // Выбираем файл для минификации
//      .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(cssnano()) // Сжимаем
//      .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('css')); // Выгружаем в папку app/css
});


// Gulp task to minify HTML files
gulp.task('html', function() {
  return gulp.src(['html/**/*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./html-min'));
});


gulp.task('img', function() {
    return gulp.src('images/**/*') // Берем все изображения из app
        .pipe(imagemin({ // Сжимаем их с наилучшими настройками
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('images-min')); // Выгружаем на продакшен
});
