const http = require('http');
const cheerio = require('cheerio');
const baseUrl = 'http://www.imooc.com/learn/'; // baseUrl + id拼接为一个完整url
const url = 'http://www.imooc.com/learn/348';
const videoIds = [348, 259, 197, 134, 75];

// 过滤html，得到章节数据
function filterChapters(html) {
	// cheerio模块类似jquery,能装载操作html
	const $ = cheerio.load(html);
	const chapters = $('.chapter');
	const title = $('#page_header .path span').text();
	const number =$($('.info_num i')[0]).text().trim() * 1;

	// 期望得到的结构
	// courseData = {
	// 	title: title, // 大标题
	// 	number: number, // 学习人数
	// 	videos: [{
	// 	 	chapterTitle: '',
	// 	 	videos: [
	// 	 		title: '',
	// 	 		id: ''
	// 	 	]
	// 	}]
	// }
	
	const courseData = {
		title: title,
		number: number,
		videos: [],
	};

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
		courseData.videos.push(chapterData);
	})
	return courseData;
}

// 打印出章节信息
function printCoureInfo(courseData) {
	courseData.forEach(function(item) {
		console.log(item.number + '人学过' + item.title + '\n');
	})
	courseData.forEach(function(item){
		console.log('###' + item.title + '\n');

		item.videos.forEach(function(i) {
			const chapterTitle = i.chapterTitle;
			console.log(chapterTitle + '\n');
			i.videos.forEach(function(video) {
				console.log('【' + video.id + '】' + video.title + '\n');
			});
		});
	})
}

function getPageAsync(url) {
	return new Promise(function(resolve, reject) {
		console.log('正在读取' + url);

		http.get(url, function (res) {
		    let html = '';
		    res.on('data', function(data) {
		    	html += data;
		    });
		    res.on('end', function() {
		    	resolve(html);
		    	// const courseData = filterChapters(html);
		    	// printCoureInfo(courseData);
		    });
		    // 注册error事件
		}).on('error', function(e) {
			reject(e);
			console.log('获取内容失败！');
		});
	})
}

const fetchCourseArray = [];
videoIds.forEach(function(id) {
	// fetchCourseArray包含promise对象的数组
	fetchCourseArray.push(getPageAsync(baseUrl + id)); // baseUrl + id 拼接为一个完整url,作为getPageAsync的参数
});

// Promise.all([Promise对象])
Promise
	.all(fetchCourseArray)
	.then(function(pages) {
		const courseData = [];

		pages.forEach(function(html) {
			const courses = filterChapters(html);
			courseData.push(courses);
		})

		courseData.sort(function(a, b) {
			return a.number < b.number; // 按学习人数从大到小排序
		})
		printCoureInfo(courseData);
	})
