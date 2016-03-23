'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");

function errorAlert(error) {
    notify.onError({title: "Gulp Error", message: "Check your terminal", sound: "Purr"})(error); //Error Notification
    console.log(error.toString());//Prints Error to Console
    this.emit("end"); //End function
}

gulp.task('js', function () {
    gulp.src('static/js/*.js')
        .pipe(plumber({errorHandler: errorAlert}))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('static/dist'))
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('static/dist'));
});

/**
 * watch
 */
gulp.task('default', function () {
    gulp.watch('static/js/*.js', ['js']);
});