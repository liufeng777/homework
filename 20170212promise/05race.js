function runAsync1() {
	const promise = new Promise(function(resolve, reject) {
		// 异步操作
		setTimeout(function() {
			console.log("1执行完毕");
			resolve('No.1');
		}, 1000);
	});
	return promise;
}
function runAsync2() {
	const promise = new Promise(function(resolve, reject) {
		// 异步操作
		setTimeout(function() {
			console.log("2执行完毕");
			resolve('No.2');
		}, 2000);
	});
	return promise;
}
function runAsync3() {
	const promise = new Promise(function(resolve, reject) {
		// 异步操作		 
		setTimeout(function() {
			console.log("3执行完毕");
			resolve('No.3');
		}, 2000);
	});
	return promise;
}

// all方法的效果实际上是「谁跑的慢，以谁为准执行回调」，
// 那么相对的race就有另一个方法「谁跑的快，以谁为准执行回调」
// 将1的异步设为1秒，其余2秒
// 1秒后runAsync1已经执行完了，此时then里面的就执行了。
// 在then里面的回调开始执行时，runAsync2()和runAsync3()并没有停止，仍旧再执行。
// 于是再过1秒后，输出了他们结束的标志。

Promise.race([runAsync1(), runAsync2(), runAsync3()]).then(function(data) {
	console.log(data);
})

// 结果为:
// 1执行完毕
// No.1
// 2执行完毕
// 3执行完毕

 
