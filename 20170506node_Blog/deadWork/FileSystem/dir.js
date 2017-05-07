const fs = require('fs');

/*
* mkdir(path, callback)创建文件夹
*/
fs.mkdir('./1', function (err) {
	if(err) {
		console.log('创建文件夹失败' + err);
	} else {
		console.log('创建文件夹成功');
	}
})

/*
* rmdir(path, callback)删除文件夹
*/
// fs.rmdir('./1', function (err) {
// 	if(err) {
// 		console.log('删除文件夹失败' + err);
// 	} else {
// 		console.log('删除文件夹成功');
// 	}
// })

/*
* readdir(path, callback)读取文件夹
*/
fs.readdir('../FileSystem', function(err, fileList) {
	if(err) {
		console.log('读取文件夹失败' + err);
	} else {
		fileList.forEach(function(i) {
			fs.stat(i, function(err, status) {
				if(status) {
					switch (status.mode) {
					case 16822:
						console.log('[文件夹] ' + i);
						break;
					case 33206:
						console.log('[文件] ' + i);
						break;
					default:
						console.log('[其他] ' + i);
					}
				}				
			});
		})
	}
})