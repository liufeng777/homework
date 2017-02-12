function getNumber() {
	// 参数resolve、reject,成功执行resolve方法，失败执行reject方法
	const promise = new Promise(function(resolve, reject) {
		// 异步操作
		setTimeout(function() {
			const num = Math.ceil(Math.random()*10); // 1-10的随机数
			if(num <= 5) {
				resolve(num);
			} else {
				reject(num + '太大了！');
			}
		}, 1000);
	});
	return promise;
}
// catch的作用类似then的第二个参数的回调
getNumber()
	.then(
		function(data) {		
			console.log('resoved ' + data);
			console.log(someData); // someDate未定义，但程序仍会执行，catch会捕捉到错误
		}
	)
	// reject
	.catch(
		function(reason) {
			console.log('rejected ' + reason);
		}
	)
