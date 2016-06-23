const inject = require('gulp-inject');
const path = require('path');
const gulp = require('gulp');

const conf = {
	src: 'app',
	dist: 'dist'
};
gulp.task('inject', [], function() {
	const injectOpts = { addRootSlash: false };
	const sources = [
		path.join(conf.src, '/**/*.js'),
		path.join('!' + conf.src, '/jspm_packages/**/*.js')	
	];
	return gulp.src(path.join(conf.src, '/index.html'))
		.pipe(inject(gulp.src(sources, {read: false})), injectOpts)
		.pipe(gulp.dest(conf.dist));
});
