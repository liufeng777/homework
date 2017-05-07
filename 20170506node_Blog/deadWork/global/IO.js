/*
* stdin stdout输入输出流
*/
// process.stdout.write('hello node');

// 默认情况下，输入流是关闭的，要想监听输入流数据得先开启输入流
process.stdin.resume();

// 监听用户的输入数据
// process.stdin.on('data', function(chunk) {
// 	console.log('用户输入了：' + chunk);
// });

// 计算a+b的值
let a;
let b;
process.stdout.write('请输入a的值：');
process.stdin.on('data', function(chunk) {
	if(!a) {
		a = Number(chunk);
		process.stdout.write('请输入b的值：');
	} else {
		b = Number(chunk);
		process.stdout.write('a+b的值为：' + (a + b));
	}
});