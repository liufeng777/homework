const moduleB = require('./b'); // 其返回值就是被加载模块中的 module.exports
console.log(moduleB); // { a: 100 }
