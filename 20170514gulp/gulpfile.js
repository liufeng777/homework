// 导入工具包
const gulp = require('gulp');
const less = require('gulp-less');

// 定义一个testLess任务,将less文件转化为css文件
gulp.task('testLess', function () {
	gulp.src('src/less/index.less') // 该任务针对的less文件
		.pipe(less()) // 该任务调用的模块
		.pipe(gulp.dest('src/css')); // 将在src/css目录下生产index.css文件
});

gulp.task('default', ['testLess', 'elseTask']); // 定义默认任务elseTask为其他任务，该实例没有定义elseTask

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径