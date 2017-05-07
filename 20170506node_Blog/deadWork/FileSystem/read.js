const fs = require('fs');

/*
* fs.read(fd, buffer, offset, length, position, callback)
*		fd: 被打开文件的标识
* 		buffer: 用来储存打开文件内容的Buffer对象
*		offset: 储存Buffer对象的起始位置		
*		length：储存Buffer对象的长度
*		position：读取文件的起始位置,null表示从0位开始
*		callback：回调
*			err：读取出错
*			len: buffer中储存的内容的长度
*			buffer：buffer中储存的内容
*/
fs.open('fs.txt', 'r', function(err1, fd) {
	if(err1) {
		console.log('打开文件出错' + err1);
	} else {
		const bf = new Buffer(20);
		fs.read(fd, bf, 0, 20, null, function(err2, len, buffer) {
			if(err2) {
				console.log('读取文件出错' + err2);
			} else {
				console.log('读取的内容长度为：' + len);
				console.log(buffer);
				console.log(bf);
				console.log('储存的buffer内容为：' + buffer);
				// buffer等同于bf
			}
		})
	}
});