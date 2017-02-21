// // 对于复制copy小型的文件
// const fs = require('fs');
// const source = fs.readFileSync('path/to/source', {encoding: 'uft8'});
// fs.writeFileSync('path/to/dest', source);
// // 把文件内容全部读入内存，再写入文件，但对于较大型文件，理想的方法是读一部分写一部分，即流的概念

// Stream 在node.js中是EventEmitter的实现，并且有多种实现形式，如：
// http responses request ; fs read write streams ; zlib streams ; tcp sockets ; child process stdout and stderr

const fs = require('fs');
const readStream = fs.createReadStream('source.txt');
const writeStream = fs.createWriteStream('dest.txt');

readStream.on('data', function (chunk) { // 当有数据流出时，写入数据
	// writeStream.write(chunk); // 如果写入的速度跟不上读取的速度，有可能导致数据丢失
	if (writeStream.write(chunk) === false) {
		readStream.pause(); // 如果没有写完，暂停读取流
	}
});

writeStream.on('drain', function() { // 写完后，继续读取
	readStream.resume();
});

readStream.on('end', function() { // 当数据读完时，关闭数据流
	writeStream.end();
});
