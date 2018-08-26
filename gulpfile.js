var gulp = require('gulp');
var serve = require('gulp-serve');
var webserver = require('gulp-webserver');

//var livereload = require('gulp-livereload');
//var watch = require('gulp-watch');

gulp.task('default', function () {
  // place code for your default task here
});

/*
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('./*.html').on('change', function () {
    livereload.reload();
  });
});
*/



gulp.task('serve', function () {
  gulp.src('src')
    .pipe(webserver({
      port: '3000',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});


gulp.task('serve-build', serve(['public', 'build']));
gulp.task('serve-prod', serve({
  root: ['public', 'build'],
  port: 80,
  middleware: function (req, res) {
    // custom optional middleware
  }
}));