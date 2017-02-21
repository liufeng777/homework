const fs = require('fs');

// 更直接的方式pipe，pipe会自动调用data、end事件
fs.createReadStream('source.txt').pipe(fs.createWriteStream('dest.txt'));