var gulp = require('gulp');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');
var less = require('gulp-less');
var path = require('path');

var nodeModules = './wwwroot/libs/';
var compiledTS = '/wwwroot/appScripts/';

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(nodeModules)
        .pipe(clean());
});

gulp.task("scriptsNStyles", () => {
    gulp.src([
            'core-js/client/**',
            'systemjs/dist/system.src.js',
            'reflect-metadata/**',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'jquery/dist/jquery.*js',
            'bootstrap/dist/js/bootstrap.*js',
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("./wwwroot/libs"));
});

var tsProject = ts.createProject('scripts/tsconfig.json', {
    //Use TS version installed by NPM instead of gulp-typescript's built-in
    typescript: require('typescript')
});

gulp.task('clean-ts', function () {
    return gulp.src('wwwroot/appScripts/**', { read: false })
      .pipe(clean());
});

gulp.task('ts', function (done) {
    //var tsResult = tsProject.src()
    var tsResult = gulp.src([
            "scripts/**/*.ts"
    ])
        .pipe(tsProject(), undefined, ts.reporter.fullReporter());
    
    return tsResult.js.pipe(gulp.dest('./wwwroot/appScripts'));
});

gulp.task('less', function() {
    return gulp.src("content/less/*.less")
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./wwwroot/content/css'));
});

gulp.task('watch', ['watch.ts','watch.less']);

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('scripts/**/*.ts', ['ts']);
});

gulp.task('watch.less', ['less'], function () {
    return gulp.watch('content/less/*.less', ['less']);
});

gulp.task('default', ['scriptsNStyles', 'watch']);
gulp.task('production', ['scriptsNStyles']);