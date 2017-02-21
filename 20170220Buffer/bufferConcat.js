const buf = new Buffer('helloworldhellonodehellobuffer');

console.time('str += buf');
let str = '';
for(let i=0; i<10000; i++) {
	str += buf;
}
str;
console.timeEnd('str += buf');

console.time('buf concat');
const list = [];
let len = 0;
for(let i = 0; i<10000; i++) {
	list.push(buf);
	len += buf.length;
}
const str2 = Buffer.concat(list, len).toString();
console.timeEnd('buf concat');

// Buffer.concat(list [,totalLength]);
// list: 各元素为Buffer的数组，用于被连接
// totalLength: 数组中各个Buffer元素长度的总和
// totalLength该参数会使Buffer.concat方法执行的更快