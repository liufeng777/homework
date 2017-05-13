// webpack根据模块间的依赖关系进行静态分析，这些文件会被包含到bundle.js文件中
// webpack会给每个模块分配一个唯一的id,并通过这个id索引和访问模块。
// 页面启动时先会先执行runoob1.js的代码，其他模块会在运行require时运行

// require("!style-loader!css-loader!./style.css");
require('./style.css');
document.write(require('./runoob2.js'));