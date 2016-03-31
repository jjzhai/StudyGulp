var gulp=require('gulp');
var concat=require('gulp-concat');
var jshint=require('gulp-jshint');
var stripDebug=require('gulp-strip-debug');
var uglify=require('gulp-uglify');

gulp.task('jshint',function(){
	gulp.src('./src/scripts/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('scripts',function(){
	gulp.src(['./src/scripts/*.js'])
//hebing
		.pipe(concat('all.js'))
//qudiao debug xinxi
		.pipe(stripDebug())
//qudiao kongge huanhang
		.pipe(uglify())
		.pipe(gulp.dest('./build/scripts/'));
});
