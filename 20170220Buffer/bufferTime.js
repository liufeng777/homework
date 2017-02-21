let string1, string2
let buffer1, buffer2
let x;

// write 100 string VS write 100 buffer
console.time('write 100 string');
for(x=0; x<100; x++) {
	const y = x + ''
	string1 += y;
}
console.timeEnd('write 100 string');

console.time('write 100 buffer');
buffer1 = new Buffer(100);
for(x=0; x<100; x++) {
	const y = x + '';
	buffer1.write(y, x);
}
console.timeEnd('write 100 buffer');

// write 100000 string VS write 100000 buffer
console.time('write 100000 string');
for(x=0; x<100000; x++) {
	const y = x + ''
	string2 += y;
}
console.timeEnd('write 100000 string');

console.time('write 100000 buffer');
buffer2 = new Buffer(100000);
for(x=0; x<100000; x++) {
	const y = x + '';
	buffer2.write(y, x);
}
console.timeEnd('write 100000 buffer');