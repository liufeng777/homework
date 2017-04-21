const fs = require('fs');

/*
* rename(oldPath, newPath, callback)文件重命名
*/
fs.rename('wFile.txt', 'wFileNew.txt', function(err) {
	if(err) {
		console.log('文件重命名失败' + err);
	} else{
		console.log('文件重命名成功');
	}
})