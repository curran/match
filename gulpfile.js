// This file uses Gulp to compile the match function
// from CoffeeScript to JavaScript.
//
// Curran Kelleher
// December 2014
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    umd = require('gulp-umd');

gulp.task('default', function() {
  gulp.src('./src/*.coffee')

    // Compile the CoffeeScript source to JavaScript.
    .pipe(coffee({bare: true}).on('error', gutil.log))

    // Wrap the compiled JavaScript using UMD, which
    // exposes `match` as an AMD module, a global, and a Node module.
    .pipe(umd())

    // Write the output to the dist directory.
    .pipe(gulp.dest('./dist'));
});
