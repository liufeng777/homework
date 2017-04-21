// fs模块时核心模块，需要require
const fs = require('fs');

/*
* fs.open(path, flags, [mode], callback)
* 	path:要打开文件的路径
* 	flags：打开文件的方式 读/写
* 	mode:设置文件的模式 读/写/执行
* 	callback：回调
*		err:文件打开失败的错误保存在err中，若没有错误，则err为null
*		fd：被打开文件的标识
*/
fs.open('fs.txt', 'r', function(err, fd) {
	if (err) {
		console.log('文件打开失败' + err);
	} else {
		console.log('文件打开成功, fd的值为：' + fd ); // 3
	}
	// 操作完成后关闭文件 fs.close(fd, callback)
	fs.close(fd, function(err1){
		if(err1){
			console.log('关闭文件出错' + err1);
		}
	})
})

fs.open('fs.txt', 'r', function(err, fd) {
	if (err) {
		console.log('文件打开失败' + err);
	} else {
		console.log('文件打开成功, fd的值为：' + fd ); // 4,fd的值累加
	}
	fs.close(fd, function(err1){
		if(err1){
			console.log('关闭文件出错' + err1);
		}
	})
})

// 上述打开操作是异步的，fd只能在回调函数中使用，不会阻塞后续操作
// fs.openSync(path, flags, [mode])同步方式没有回调函数，获取到fd的返回值，然后操作fd
const fd = fs.openSync('fs.txt', 'r');
console.log(fd); // 5，首先打印5，然后打印上述的3,4