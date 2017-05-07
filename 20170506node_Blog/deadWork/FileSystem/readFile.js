const fs = require('fs');
/*
* readFile(filename, callback)读取文件
*/
const filename = 'fs.txt';
fs.readFile(filename, function(err, data) {
	if(err) {
		console.log('读取文件失败' + err);
	} else {
		console.log(data);
	}
});

/*
* stat(path, callback)返回文件状态信息
*/
fs.stat(filename, function(err, status) {
	if(err) {
		console.log('读取文件状态失败' + err);
	} else {
		console.log(status);
	}
})

/*
* unlink(filename, callback)删除文件
*/
fs.unlink('wFile.txt', function(err) {
	if(err) {
		console.log('删除文件失败' + err);
	} else {
		console.log('删除文件成功');
	}
})