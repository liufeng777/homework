const http = require('http');
const server = http.createServer();

function callback(req, res) {
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.write('Hello Node');
	console.log('Hello Node');
	res.end();
}
// 绑定具名函数callback
server.on('request', callback);

// 移除绑定的监听，只能移除具名函数，匿名的不行
server.removeListener('request', callback);

// 绑定匿名函数
server.on('request', function(req, res) {
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.write('Hello World');
	console.log('Hello World');
	res.end();
});

// 移除匿名函数无效
server.removeListener('request', function(req, res) {
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.write('Hello World');
	console.log('Hello World');
	res.end();
});

// 页面上会显示Hello World, 不会显示Hello Node

// emitter.removeAllListener([event]), event可选，若填则移除指定的事件，否则移除所有绑定的事件

// 绑定端口号
server.listen(2017, '127.0.0.1');
console.log('Server is running at http://127.0.0.1:2017');
