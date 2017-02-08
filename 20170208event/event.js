const http = require('http');
const server = http.createServer();

// 为request事件绑定处理函数
// server.on 等价于 server.addListener
server.on('request', function(req, res) {
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.write('Hello Node');
	console.log('Hello Node');
	res.end();
});

// // emitter.once(event, listener) 只执行一次，然后就被删除
// server.once('request', function(req, res) {
// 	res.writeHead(200, {'Content-Type':'text/plain'});
// 	res.write('Hello Node');
// 	console.log('Hello Node');
// 	res.end();
// });

// 绑定端口号
server.listen(2017, '127.0.0.1');
console.log('Server is running at http://127.0.0.1:2017');