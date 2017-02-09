const http = require('http');
const querystring = require('querystring') // 可以将对象序列化

// 请求的数据
const postData = querystring.stringify({
	'content' : 'Scott讲的很棒',
	'cid' : 348, // 课程id
});

// 字符串或对象，如果是字符串会被url模块的parse()解析为对象
// options配置请求发出的格式
const options = {
	hostname: 'www.imooc.com',
	port: 80,
	path: '/course/docomment',
	method: 'POST',
	headers: {
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		// 当前提交数据的长度，服务器端会进行校验
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=b47786e9-3101-4dc5-9075-ff7654b0ae97; imooc_isnew_ct=1467861334; loginstate=1; apsid=VjNDU5YzU5ZWU3ZWRkN2ZjMTU4NzMyMjI5MDI4YzcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzY5MDM2NgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA0Zjc4YjM0NDNlYmZhNTE5MzEyMDUzNjA2ZDhkMDA4nUZ7WJ1Ge1g%3DY2; PHPSESSID=dj8ub556j4tm3q31u1326v0jl2; imooc_isnew=2; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1484473977,1486037197,1486263792,1486559177; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1486559207; IMCDNS=0; cvde=589b17c6da78a-12',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/comment/348',
		'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}
// http.request(options[, callback])
const req = http.request(options, function(res) {
	console.log('status' + res.statusCode);
	console.log('headers' + JSON.stringify(res.headers));

	// 接受传来的数据
	res.on('data',function(chunk) {
		// 判断是否为Buffer类型
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	});

	// 数据接受完毕，网络连接关闭会触发end事件
	res.on('end', function() {
		console.log('评论完毕！');
	});
});

// 请求出错
req.on('error', function(e) {
	console.log('Error' + e.message)
});
// 把提交的数据写进请求体
req.write(postData);

// 手动调用req.end()方法
req.end();
