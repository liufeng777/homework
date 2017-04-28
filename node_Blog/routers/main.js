const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// res.render中的路径是相对views而言的
router.get('/', function (req, res, next) {
	Category.find().then(function(categories) {
		res.render('main/index.html', {
			userInfo: req.userInfo,
			categories: categories,
		});
	});	
});

module.exports = router;