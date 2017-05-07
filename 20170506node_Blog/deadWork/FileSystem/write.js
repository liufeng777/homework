const fs = require('fs');

/*
* fs.write(fd, buffer, offset, length, position, callback)
*		fd: 被打开文件的标识
* 		buffer: 用来写入的Buffer对象
*		offset: 写入Buffer对象的起始位置		
*		length：写入Buffer对象的长度
*		position：写入文件的起始位置
*		callback：回调
*			err：写入出错
*			len: buffer中写入的内容的长度
*			buffer：buffer中写入的内容
*/

/*
* fs.write(fd, data, position, [encoding], callback)
*	 data: 写入的数据为字符串格式，不存在偏移量和长度，全部写入
*/
// 当进行写入操作时，打开文件的flags不能为只读r，应该为读写r+
fs.open('fs.txt', 'r+', function(err1, fd) {
	if(err1) {
		console.log('打开文件出错' + err1);
	} else {
		// const bf = new Buffer('Zoe');
		// fs.write(fd, bf, 0, 3, 19, function(err2, len, buffer) {
		// 	if(err2) {
		// 		console.log('写入文件出错' + err2);
		// 	} else {
		// 		console.log('写入的内容长度为：' + len);
		// 		console.log(buffer);
		// 		console.log(bf);
		// 		console.log('写入的buffer内容为：' + buffer);
		const data = '1234';
		fs.write(fd, data, 5, function(err2) {
			if(err2) {
				console.log('写入文件出错' + err2);
			} else {
				console.log('写入文件成功');
			}
		});			
	}
	fs.close(fd, function(err3){
		if(err3){
			console.log('关闭文件出错' + err3);
		}
	})
});