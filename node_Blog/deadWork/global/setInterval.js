setInterval(function () {
	const now = new Date();
	const year = now.getFullYear();
	const month = now.getMonth() + 1;
	const date = now.getDate();
	const hour = now.getHours();
	const minute = now.getMinutes();
	const second = now.getSeconds();
	console.log('现在的时间为：' + year + '/' + month + '/' + date + '  ' + hour + ':' + minute + ':' + second)
}, 1000);
