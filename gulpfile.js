const argv = require('yargs').argv;
const gulp = require('gulp');
const jade = require('gulp-jade');
const babel = require('gulp-babel');
const stylus = require('gulp-stylus');
const browserSync = require('browser-sync');

const reload = browserSync.reload;
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');

// var dest = argv.dir || '../egoscio.github.io'
const dest = argv.dir || './index.html';

gulp.task('default', ['compile']);

gulp.task('compile', ['assets', 'jade', 'babel', 'stylus']);


gulp.task('assets', () => gulp.src('src/assets/*')
  .pipe(gulp.dest(dest)));

gulp.task('jade', () => gulp.src('src/jade/*.jade')
  .pipe(jade({ pretty: false, doctype: 'html' }))
  .pipe(gulp.dest(dest)));

gulp.task('babel', () => gulp.src('src/babel/*.js')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['es2015'],
    minified: true,
    comments: false,
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(dest)));

gulp.task('stylus', () => gulp.src('src/stylus/*.styl')
  .pipe(sourcemaps.init())
  .pipe(stylus({
    compress: true,
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(dest)));


gulp.task('browser-sync', () => {
  browserSync.init(['./index.html/**.*'], {
    server: {
      baseDir: './index.html',
    },
  });
});

gulp.task('watch', ['browser-sync'], () => {
  gulp.watch('index.html/*.js', reload);
  gulp.watch('src/assets/*', ['assets']);
  gulp.watch('src/jade/*.jade', ['jade']);
  gulp.watch('src/babel/*.js', ['babel']);
  gulp.watch('src/stylus/*.styl', ['stylus']);
});
