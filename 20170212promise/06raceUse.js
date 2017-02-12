// race的应用实例
// 加载图片
function getImg() {
	const promise = new Promise(function(resolve, reject) {
		const img = new Image();
		img.onload = function() {
			resolve(img);
		}
		img.src = '***';
	});
	return promise;
}
// 超时处理
function timeout() {
	const promise = new Promise(function(resolve, reject){
		setTimeout(function() {
			reject('图片请求超时！')
		}, 5000);
	});
	return promise;
}
// .race([getImg(), timeout()])请求图片低于5秒执行前者，否则执行后者
Promise
	.race([getImg(), timeout()])
	.then(function(data){
		console.log(data);
	})
	.catch(function(reason) {
		console.log(reason);
	})

