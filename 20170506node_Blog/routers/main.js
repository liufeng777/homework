const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const Content = require('../models/Content');

// 处理通用数据
const data = {};
router.use(function(req, res, next) {
	data.userInfo = req.userInfo;
	data.categories = [];
	Category.find().then(function(categories) {
		data.categories = categories;
		next();
	});
})
// res.render中的路径是相对views而言的
router.get('/', function (req, res, next) {	
	data.category = req.query.category || '';
	data.count = 0;
	data.page = Number(req.query.page || 1);
	data.limitNum = 2;
	data.totalPage = 0;

	const where = {};
	if(data.category) {
		where.category = data.category;
	}
	Content.where(where).count().then(function(count){
		data.count = count;
		data.totalPage = Math.ceil(data.count / data.limitNum);
		if(data.page > data.totalPage) {
			data.page = data.totalPage;
		}
		if(data.page < 1) {
			data.page = 1;
		}	
		const skipNum = (data.page - 1) * data.limitNum;
		return Content.where(where).find().limit(data.limitNum).skip(skipNum).populate(['category', 'author']).sort({ createTime: -1 });
	}).then(function(contents) {
		data.contents = contents;
		res.render('main/index.html', data);
	});		
});

router.get('/detail', function(req, res, next) {
	const contentId = req.query.contentId;
	Content.findOne({
		_id: contentId,
	}).populate('author').then(function(content) {
		data.content = content;
		// 阅读量加1
		content.views ++;
		content.save();
		res.render('main/detail.html', data);
	})
})

module.exports = router;