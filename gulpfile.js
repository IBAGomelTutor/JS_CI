var gulp = require('gulp');
var karma = require('karma').server;

gulp.task('test', function () {
    karma.start({
        configFile: __dirname + '/karma.conf.ci.js'
    });
});