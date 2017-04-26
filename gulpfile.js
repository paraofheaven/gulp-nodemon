var gulp = require('gulp')
	, eslint = require('gulp-eslint')
	, nodemon = require('./index');

gulp.task('lint',function (){
	gulp.src('./*/**.js')
		.pipe(eslint())
})

gulp.task('cssmin',function(){	
})

gulp.task('afterstart',function(){
	console.log('process has finished restarting')
})

gulp.task('test',['lint'],function(){
	var stream = nodemon({
		script: './test/server.js'
		,verbose: true
		,env: { 'NODE_ENV': 'developmemt' }
		,watch: './'
		,ext: 'js html'
	})
	stream
		.on('restart','cssmin')
		.on('crash',function(){
			console.error('\n Application has crashed! \n');
			console.error('Restarting in 2 seconds...\n');
			setTimeout(function (){
				stream.emit('restart')
			},2000)
		})
})