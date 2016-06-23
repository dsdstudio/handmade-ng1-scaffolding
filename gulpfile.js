const inject = require('gulp-inject');
const path = require('path');
const gulp = require('gulp');
const jspm = require('gulp-jspm');
const clean = require('gulp-clean');
const conf = {
	src: 'app',
	dist: 'dist'
};

gulp.task('clean', function() {
	return gulp.src(conf.dist)
		.pipe(clean());
});
gulp.task('build', ['jspm-build', 'inject:dist'], function() {});
gulp.task('jspm-build', [], function() {
	const jspmOpts = {
		selfExecutingBundle:true, 
		minify:true, 
		sourceMapContents:true
	};
	return gulp.src(path.join(conf.src, '/init.js'))
		.pipe(jspm(jspmOpts))
		.pipe(gulp.dest(conf.dist))
});
gulp.task('copy-html', function() {
	return gulp.src(conf.src +'/index.html')
		.pipe(gulp.dest(conf.dist));
});
gulp.task('inject:dist', ['copy-html'], function() {
	const injectOpts = { 
		addRootSlash:false,
		relative:true
	};
	const sources = [
		conf.dist + '/*.js'
	];
	return gulp.src(path.join(conf.dist, '/index.html'))
		.pipe(inject(gulp.src(sources, {read: false}), injectOpts))
		.pipe(gulp.dest(conf.dist));
});
gulp.task('inject', [], function() {
	const injectOpts = { addRootSlash: false };
	const sources = [
		path.join(conf.src, '/**/*.js'),
		path.join('!' + conf.src, '/jspm_packages/**/*.js')	
	];
	return gulp.src(path.join(conf.src, '/index.html'))
		.pipe(inject(gulp.src(sources, {read: false}), injectOpts))
		.pipe(gulp.dest(conf.dist));
});
