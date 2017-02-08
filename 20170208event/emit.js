const http = require('http');
const events = require('events'); // 加载events模块

const server = http.createServer();

// 绑定自定义事件
server.on('myEvent', function(arg) {
	console.log(arg);
});

// 未触发就不会执行
server.on('noEmit', function() {
	console.log("hello world");
})

// 触发自定义事件
server.emit('myEvent', 'hello node');

server.listen(2017, '127.0.0.1');
console.log('Server is running at http://127.0.0.1:2017');

// 查看监听器个数
const num1 = events.EventEmitter.listenerCount(server, 'myEvent');
const num2 = events.EventEmitter.listenerCount(server, 'noEmit');
console.log('server上绑定的myEvent监听器个数为：' + num1 + '\n' + 'server上绑定的noEmit监听器个数为：' + num2);
