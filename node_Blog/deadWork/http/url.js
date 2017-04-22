const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');

const server = http.createServer();

server.on('request', function (req, res) {
	// 访问路径req.url, 问号后面跟的是query string
	// console.log(req.url);

	const urlStr = url.parse(req.url); // 将用户的访问的路径序列化为一个对象
	const HtmlDir = __dirname + '/html'; // 当前文件所在文件夹目录加上html，就到了html文件夹目录
	switch (urlStr.pathname) {
		case '/':
			// 首页
			setData(HtmlDir + '/index.html', req, res);
			break;
		case '/user' :
			// 用户页 
			setData(HtmlDir + '/user.html', req, res);
			break;
		case '/login' :
			// 登录页 
			setData(HtmlDir + '/login.html', req, res);
			break;
		case '/login/check' :
			// 接收用户数据页
			if(req.method.toUpperCase() === 'GET') {
				// get方法把数据放在请求路径的query中
				console.log(urlStr.query); // req.urlStr.query为username=Zoe&password=123	
				console.log(querystring.parse(urlStr.query)); // querysting将其转化为对象	
			}
			if(req.method.toUpperCase() === 'POST') {
				// post方法把数据存在缓存区buffer中,需要request的data和end事件来拼接
				let str = '';
				req.on('data', function(chunk) {
					str += chunk;
				});
				req.on('end', function() {
					console.log(str);
					console.log(querystring.parse(str)); 
				});
			}			
			break;
		default:
			// 其他页面
			setData(HtmlDir + '', req, res);
			break;
	}
});
function setData(file, req, res) {
	fs.readFile(file, function(err, data) {
		if(err) {
			res.writeHead(404, {
				'content-type' : 'text/html; charset=utf-8'
			});
			res.write('<h1>您访问的页面不存在</h1>');
			res.end();
		} else {
			res.writeHead(200, {
				'content-type' : 'text/html; charset=utf-8'
			});
			res.write(data);
			res.end();
		}
	})
}

server.listen(8080, 'localhost');