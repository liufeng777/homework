// new Buffer(str [,encoding]);
const buf1 = new Buffer('hello Buffer', 'base64'); // encoding 默认为 utf-8
console.log(buf1); // <Buffer 85 e9 65 a0 1b 9f 7d ea>  
console.log(buf1.length); // 8

// 如果不指定encoding,默认utf-8, 结果为 <Buffer 68 65 6c 6c 6f 20 42 75 66 66 65 72>  12

// new Buffer([])
const buf2 = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
console.log(buf2); // <Buffer 68 65 6c 6c 6f>
console.log(buf2.toString()); // hello

// new Buffer(size);
const buf3 = new Buffer(4);
buf3.write('12345');
console.log(buf3); // <Buffer 31 32 33 34>
console.log(buf3.toString()); // 1234

// Buffer.copy(targetBuffer [,targetStart] [,sourceStart] [,sourceEnd]);
const bufA = new Buffer('hello');
const bufB = new Buffer(bufA.length);
// sourceBuferr.copy(targetBuffer);
bufA.copy(bufB);
console.log(bufB.toString()); // hello