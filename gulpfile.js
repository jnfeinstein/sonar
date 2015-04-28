var browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    del = require('del'),
    gulp = require('gulp'),
    ngHtml2Js = require("gulp-ng-html2js"),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps');
 
gulp.task('clean', function(cb) {
  del(['public'], cb);
})

gulp.task('templates', function() {
  return gulp.src("./client/**/*.html")
    .pipe(ngHtml2Js({
      moduleName: "templates"
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest("./public"));
});

gulp.task('scripts', function() {
  return gulp.src('./client/*.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: true
    }))
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
    gulp.watch('client/**/*.js', ['scripts']);
    gulp.watch('client/**/*.html', ['templates']);
});

gulp.task('default', ['scripts', 'templates']);
