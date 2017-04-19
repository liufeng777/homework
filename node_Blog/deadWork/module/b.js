/*
*在一个模块中定义变量后，其作用域仅限于该模块，不能直接被其他模块使用
*如果要在其他模块中使用该变量，方法有：
*	1.定义在global下，但不推荐使用
*	2.使用模块对象 module
*/
const a = 100;
// global.a = 100;

/*
*module: 保存提供和当前模块相关的信息
*在module对象里有一个exports对象，通过其将该模块变量暴露出去
*/
// console.log(module); // {id: '-', exports: {}, parent: null, filename: '', children: []}

// module.exports.a = a;

/*
*在node中有一个内置的对象exports，其与module.exports相同
*/
console.log(module.exports === exports); // true
exports.a = a; // 等同于module.exports.a = a;

// 注：前面我们是给module.exports.a的属性赋值
// 如果改变module.exports的值，如module.exports = [1,2,3];
// 那么module.exports与exports之间的联系就断开了