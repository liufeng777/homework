const stream = require('stream');
const util = require('util'); // 工具类

// 自定义可读流方法
function ReadStream() {
	// 改变其上下文，让其可以调用可读流成员函数
	stream.Readable.call(this);
}
// ReadStream继承流里面可读的原型
util.inherits(ReadStream, stream.Readable);
// 重写其read方法，下划线私有方法
ReadStream.prototype._read = function() {
	this.push('I ');
	this.push('Love ');
	this.push('Node\n');
	this.push(null); // 完毕
}


// 自定义可写流方法
function WriteStream() {
	// 改变其上下文，让其可以调用可写流成员函数
	stream.Writable.call(this);
	this._cached = new Buffer(''); // 缓存
}

// ReadStream继承流里面可写的原型
util.inherits(WriteStream, stream.Writable);

// 重写其write方法, 下划线私有方法
WriteStream.prototype._write = function(chunk, encode, cb) {
	console.log(chunk.toString());
	cb();
}

// 自定义转换流方法
function TransformStream() {
	// 改变其上下文，让其可以调用转换流成员函数
	stream.Transform.call(this);
}
// Transform继承流里面转换的原型
util.inherits(TransformStream, stream.Transform);

// 重写其transform和flush方法，下划线私有方法
TransformStream.prototype._transform = function(chunk, encode, cb) {
	this.push(chunk);
	cb();
}
TransformStream.prototype._flush = function(cb) {
	this.push('Oh Yeah!'); // 为得到的数据加上额外的内容
	cb();
}

// 生成实例
const rs = new ReadStream();
const ws = new WriteStream();
const ts = new TransformStream();


// 先pipe给ts加上附加信息Oh Yeah!,然后pipe给ws
rs.pipe(ts).pipe(ws);