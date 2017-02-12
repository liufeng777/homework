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

// 链式回调
runAsync1()
.then(function(data) {
	console.log(data);
	return runAsync2();
})
.then(function(data) {
	console.log(data);
	return runAsync3();
})
.then(function(data) {
	console.log(data);
})

// 结果为:
// 1执行完毕 No.1
// 2执行完毕 No.2
// 3执行完毕 No.3