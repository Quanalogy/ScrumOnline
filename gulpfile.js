var gulp = require('gulp');
var ts = require('gulp-typescript');
var path = require('path');
var exec = require('child_process').exec;

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('build:server', function () {
    // Read the TypeScript settings for the server from the server directory config file.
    var tsProject = ts.createProject(path.resolve('./tsconfig.json'));

    // Start the transpiling process of all .ts files in the server folder and subdirectories.
    return gulp.src([path.resolve('./backend/**/*.ts'), path.resolve('./typings/index.d.ts')])
        .pipe(ts(tsProject))
        .js
        .pipe(gulp.dest(path.resolve('./backend/')))
});

gulp.task('serve', function(cb) {
    exec('node backend/server.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});
