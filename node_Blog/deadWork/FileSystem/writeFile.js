const fs = require('fs');

/*
* writeFile(filename, data, [position], callback)
*		filename:当文件名不存在时会自动新建
*		data:可以是string，也可以是Buffer对象
*/
const filename = 'wFile.txt';
// fs.writeFile(filename, 'Hello', function(err) {
// 	if(err){
// 		console.log('写入文件出错' + err);
// 	} else{
// 		console.log('写入文件成功');
// 	}
// });

/*
* appendFile(filename, data, [position], callback) 向指定文件尾部追加内容		
*		filename:当文件名不存在时会自动新建
*		data:可以是string，也可以是Buffer对象
*/
// fs.appendFile(filename, ',Zoe!', function(err) {
// 	if(err){
// 		console.log('追加文件出错' + err);
// 	} else{
// 		console.log('追加文件成功');
// 	}
// });

/*
* fs.exists(filename, callback) 判断指定文件是否存在，callback返回true/false
*/
fs.exists(filename, function(isExists) {
	if(!isExists) {
		fs.writeFile(filename, 'Hello', function(err) {
			if(err){
				console.log('写入文件出错' + err);
			} else{
				console.log('写入文件成功');
			}
		});
	} else {
		fs.appendFile(filename, ',Zoe!', function(err) {
			if(err){
				console.log('追加文件出错' + err);
			} else{
				console.log('追加文件成功');
			}
		});
	}
})