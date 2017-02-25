const Readable = require('stream').Readable;
const Writable = require('stream').Writable;

const readStream = new Readable(); // 可读流实例
const writeStream = new Writable(); // 可写流实例

readStream.push('I ');
readStream.push('Love ');
readStream.push('Node\n');
readStream.push(null); // readStream完毕

writeStream._write = function(chunk, encode, cb) {
	console.log(chunk.toString());
	cb();
}

readStream.pipe(writeStream);