/*
* Buffer是一个全局变量，不需要require就可以直接使用
* Buffer用于操作二进制数据流
*/

// 声明并指定大小 new Buffer(size)
// 当指定空间大小之后，其值是固定的，不能更改
const bf1 = new Buffer(5);
console.log(bf1);

bf1[6] = 10;
console.log(bf1); // 其值不变，不能改变大小

bf1[1] = 10;
console.log(bf1); // 第二个值变化，可更改其中的值

// 数组声明方式 new Buffer(array),数组长度不可变
const bf2 = new Buffer([1,2,3]);
console.log(bf2);

bf2[4] = 4;
console.log(bf2); // 值不变

// 字符串声明方式 new Buffer(string, [encoding]); encoding默认为UTF-8
const bf3 = new Buffer('hello', 'utf-8');
console.log(bf3); // <Buffer 68 65 6c 6c 6f>

// 注：buffer.length指的是字节长度，而不是字符串长度
const strE = 'hello';
const bfE = new Buffer(strE);
console.log('strE.length:' + strE.length + '\n' +　'bfE.length:' + bfE.length);

// 一个汉字三个字节
const strC = '你好';
const bfC = new Buffer(strC);
console.log('strC.length:' + strC.length + '\n' +　'bfC.length:' + bfC.length);

// Buffer对象的方法(需要new)
// bf.write(str [,offset] [,length]) str是要写入的字符串，offset是bf的偏移量，即写入的bf的开始下标，length是bf的写入长度
const strW = 'hello';
const bfW = new Buffer(5);
bfW.write(strW, 1, 3);
console.log(bfW); // <Buffer 随机数 68 65 6c 随机数>

// bf.toString([encoding] [,start] [,end]); encoding默认utf-8,包括起始位，不包括结束位
const bfS = new Buffer('hello');
console.log(bfS.toString('utf-8', 0, 4));

// bf.toJSON()
const bfJ = new Buffer('hello');
console.log(bfJ.toJSON()); // { type: 'Buffer', data: [ 104, 101, 108, 108, 111]}

// bf.slice([start] [,end]) 包括起始位，不包括结束位
const bf = new Buffer('hello');
const bfSl = bf.slice(1,4);
console.log(bfSl);
// 注：新的bfSl与bf引用相同的内存地址，改变新的会影响老的

// bf.copy(bfC [,targetStart] [,sourceStart] [,sourceEnd])
const bfCo = new Buffer(10);
bf.copy(bfCo, 0, 1, 4);
console.log(bfCo);
// 注:改变bfC不会影响原bf

// Buffer类方法，不需要new
// isEncoding('')判断是否支持某编码
console.log(Buffer.isEncoding('utf-8')); // true
console.log(Buffer.isEncoding('gbk')); // false

// isBuffer(obj) 判断对象是否为buffer对象
const arr = [1,2,3];
console.log(Buffer.isBuffer(arr)); // false
console.log(Buffer.isBuffer(bf)); // true

// byteLength() 输出字节长度
console.log(strC.length); // 2
console.log(Buffer.byteLength(strC)); // 6

// concat(list, [totalLength]) list是Buffer数组，totalLength是list中每个Buffer对象的字节长度之和
const str1 = 'hello';
const str2 = '你好';
const list = [new Buffer(str1), new Buffer(str2)];
console.log(list);
const bfConcat = Buffer.concat(list, 11);
console.log(bfConcat);
// 注：当使用字符串拼接的时候，Buffer对象自动调用toString方法
console.log('list：' + list + '\n' + 'bfConcat：' +　bfConcat);
