const http = require('http');
const cheerio = require('cheerio');
const url = 'http://www.imooc.com/learn/348';

// 过滤html，得到章节数据
function filterChapters(html) {
	// cheerio模块类似jquery,能装载操作html
	const $ = cheerio.load(html);
	const chapters = $('.chapter');

	// 期望得到的结构
	// [{
	// 	chapterTitle: '',
	// 	videos: [
	// 		title: '',
	// 		id: ''
	// 	]
	// }]
	const courseData = [];

	// 遍历chapters,获取每一章节里的数据
	chapters.each(function(item) {
		const chapter = $(this);
		const chapterTitle = chapter.find('strong').text();
		const videos = chapter.find('.video').children('li');

		const chapterData = {
			chapterTitle: chapterTitle,
			videos: []
		};

		// 遍历videos，获取每一节视频的数据
		videos.each(function(item) {
			const video = $(this).find('.J-media-item');
			const videoTitle = video.text();
			const id = video.attr('href').split('video/')[1];

			chapterData.videos.push({
				title: videoTitle,
				id: id
			})
		})
		courseData.push(chapterData);
	})
	return courseData;
}

// 打印出章节信息
function printCoureInfo(courseData) {
	courseData.forEach(function(item){
		const chapterTitle = item.chapterTitle;
		console.log(chapterTitle + '\n');

		item.videos.forEach(function(video) {
			console.log('【' + video.id + '】' + video.title + '\n');
		})
	})
}

http.get(url, function (res) {
    let html = '';
    res.on('data', function(data) {
    	html += data;
    });
    res.on('end', function() {
    	const courseData = filterChapters(html);
    	printCoureInfo(courseData);
    });
    // 注册error事件
}).on('error', function() {
	console.log('获取内容失败！');
});