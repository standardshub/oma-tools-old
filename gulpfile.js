var gulp = require('gulp');
var runSequence = require('run-sequence');
var git = require('gulp-git');
var watch = require('gulp-watch');
var rjs = require('gulp-requirejs');
var sass = require('gulp-sass');

gulp.task('watch', function() {
    gulp.watch('**', ['build-profile']);
});

gulp.task('publish', function(callback) {
  runSequence('checkout', 'merge', 'push', 'cleanup', callback);
});

gulp.task('checkout', function() {
  git.checkout('gh-pages', function (err) {
    if (err) throw err;
  });
});

gulp.task('merge', function() {
  git.merge('master', function(err) {
    if (err) throw err;
  });
});

gulp.task('push', function() {
  git.push('origin', 'gh-pages', function(err) {
    if (err) throw err;
  });
});

gulp.task('cleanup', function() {
  git.checkout('master', function(err) {
    if (err) throw err;
  });
});
