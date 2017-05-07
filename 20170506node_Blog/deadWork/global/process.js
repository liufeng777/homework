/*
* process是一个全局对象，可对当前进程进行访问和控制
* process对象有很多的方法和属性
*/

console.log(process.argv);
// 其输出值是一个数组 ['运行的环境', '当前运行文件的绝对路径', '运行时带的参数']
// 如在命令行中输入 node process.js a=1 b=2
// ['C:\\Program Files\\nodejs\\node.exe', 'E:\\myGit\\node_Blog\\deadWork\\global\\process.js', 'a=1', 'b=2']

// process.execPath 开启当前的绝对路径

// process.env 返回用户环境信息
console.log(process.env);

// process.version 返回当前node的版本信息
// process.versions 返回当前node以及node依赖包的版本信息
// process.pid 返回当前进程的pid