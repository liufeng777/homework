const fs = require('fs');
const project = {
	name: 'autoProject',
	fileData: [
		{
			name: 'css',
			type: 'dir',
		},
		{
			name: 'js',
			type: 'dir',
		},
		{
			name: 'images',
			type: 'dir',
		},
		{
			name: 'index.html',
			type: 'file',
			content: '<html>\n\t<head>\n\t\t<title>title</title>\n\t</head>\n\t<body>\n\t\t<h1>hello</h1>\n\t</body>\n</html>'
		}
	]
}
fs.mkdirSync(project.name);
if(project.fileData || project.fileData.forEach) {
	project.fileData.forEach(function (f) {
		f.path = project.name + '/' + f.name;
		f.content = f.content || '';
		switch (f.type) {
			case 'dir' :
				fs.mkdirSync(f.path);
				break;
			case 'file' :
				fs.writeFileSync(f.path, f.content);
				break;
			default :
				break;
		}
	})
}