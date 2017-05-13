// webpack根据模块间的依赖关系进行静态分析，这些文件会被包含到bundle.js文件中
// webpack会给每个模块分配一个唯一的id,并通过这个id索引和访问模块。
// 页面启动时先会先执行runoob1.js的代码，其他模块会在运行require时运行

// require("!style-loader!css-loader!./style.css");
require('./style.css');

const container = document.getElementById('img-container');

const smallImg = document.createElement('img');
// 小于8K, 转为data url，图片太小，占用一个http请求不划算
// 图片转化为base64编码的字符串格式，并储存在URL中, 避免图片独自产生一次http请求。
// data url格式的不被浏览器缓存，若想其被缓存，可以在css样式中将其设置为div的背景background-img
smallImg.src = require('./small.jpg');
smallImg.style.marginRight = '20px';
container.appendChild(smallImg);

const bigImg = document.createElement('img');
// 大于8K，用url-loader处理
bigImg.src = require('./big.jpg');
container.appendChild(bigImg);

document.write(require('./runoob2.js'));

