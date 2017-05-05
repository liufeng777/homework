const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const Content = require('../models/Content');

// res.render中的路径是相对views而言的
router.get('/', function (req, res, next) {
	const data = {
		userInfo: req.userInfo,
		categories: [],
		category: req.query.category || '',
		count: 0,
		page: Number(req.query.page || 1),
		limitNum: 2,
		totalPage: 0,
	};
	const where = {};
	if(data.category) {
		where.category = data.category;
	}
	Category.find().then(function(categories) {
		data.categories = categories;
		return Content.where(where).count();
	}).then(function(count){
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

module.exports = router;