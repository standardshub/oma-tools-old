var gulp = require('gulp');
var runSequence = require('run-sequence');
var git = require('gulp-git');
var watch = require('gulp-watch');
var rjs = require('gulp-requirejs');
var sass = require('gulp-sass');



gulp.task('build-profile', function() {
  gulp.src('oma-profile/oma.scss.css')
    .pipe(sass())
    .pipe(gulp.dest('./build/'));
  rjs({
      baseUrl:    "./oma-profile"
  // ,   optimize:   "none"
  ,   paths:  {
          requireLib: "../node_modules/respec/js/require"
      ,   simpleNode: "../node_modules/respec/js/simple-node"
      ,   shortcut:   "../node_modules/respec/js/shortcut"
      ,   domReady:   "../node_modules/respec/js/domReady"
      ,   core:       "../node_modules/respec/js/core/"
      ,   text:       "../node_modules/respec/js/text"
      ,   tmpl:       "../node_modules/respec/js/tmpl"
      ,   handlebars: "../node_modules/respec/js/handlebars"
      }
  ,   name: "oma"
  ,   include: "requireLib simpleNode shortcut".split(" ")
  ,   out: "./oma-profile.min.js"
  ,   inlineText: true
  ,   preserveLicenseComments: false
  })
      .pipe(gulp.dest('./build/'));
});


gulp.task('watch', function() {
    gulp.watch('oma-profile/**', ['build-profile']);
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
