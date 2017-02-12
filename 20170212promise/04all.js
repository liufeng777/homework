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
		}, 1000);
	});
	return promise;
}
function runAsync3() {
	const promise = new Promise(function(resolve, reject) {
		// 异步操作		 
		setTimeout(function() {
			console.log("3执行完毕");
			resolve('No.3');
		}, 1000);
	});
	return promise;
}

// all 提供了并行执行异步操作的能力，并且在所有的异步执行完了才执行回调
Promise.all([runAsync1(), runAsync2(), runAsync3()]).then(function(data) {
	console.log(data);
})

// 结果为:
// 1执行完毕
// 2执行完毕
// 3执行完毕
// [No.1, No.2, No.3]
 
