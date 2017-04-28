const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Category = require('../models/Category');
const Content = require('../models/Content');

//只有管理员才能进入后台管理页
router.use(function(req, res, next) {
	if(!req.userInfo.isAdmin) {
		res.send('对不起，只有管理员才能进入后台管理页面！');
	}
	next();
});

// 后台管理---首页
router.get('/', function (req, res, next) {		
	res.render('admin/index.html', {
		userInfo: req.userInfo
	});
});

// 后台管理---用户管理，分页显示用户列表
// limit(Number)限查找的条数制
// skip(Number)要跳过的条数
router.get('/user', function (req, res, next) {	
	let page = Number(req.query.page || 1);
	const limitNum = 2;
	let skipNum;
	let totalPage;
	// page应该大于0，小于总页数
	User.count().then(function(count) {
		totalPage = Math.ceil(count / limitNum);
		if(page > totalPage) {
			page = totalPage;
		}
		if(page < 1) {
			page = 1;
		}	
		skipNum = (page - 1) * limitNum;
		User.find().limit(limitNum).skip(skipNum).then(function(users) {				
			res.render('admin/user_index.html', {
				userInfo: req.userInfo,
				users: users,
				page: page,
				totalPage: totalPage,
				part: 'user',				
			});
		});
	});
});

// 分类首页
router.get('/category', function(req, res, next) {
	let page = Number(req.query.page || 1);
	const limitNum = 2;
	let skipNum;
	let totalPage;
	Category.count().then(function(count) {
		totalPage = Math.ceil(count / limitNum);
		if(page > totalPage) {
			page = totalPage;
		}
		if(page < 1) {
			page = 1;
		}
		skipNum = (page - 1) * limitNum;
		Category.find().sort({ _id: -1 }).limit(limitNum).skip(skipNum).then(function(categories) {
			res.render('admin/category_index.html', {
				userInfo: req.userInfo,
				categories: categories,
				page: page,
				totalPage: totalPage,
				part: 'category',
			});
		});
	});	
});

// 分类添加,get方式访问，给用户展现分类添加的页面
router.get('/category/add', function(req, res, next) {
	res.render('admin/category_add.html', {
		userInfo: req.userInfo,
	});
});
// 添加分类的保存，post方式访问，用户提交表单中的数据
router.post('/category/add', function(req, res, next) {
	const name = req.body.name || '';		
	if(name === '') {		
		res.render('admin/error.html', {
			userInfo: req.userInfo,
			errorInfo: '分类名称不能为空！',
		});
		return;
	}
	Category.findOne({
		name: name,
	}).then(function(result) {
		if(result) {
			res.render('admin/error.html', {
				userInfo: req.userInfo,
				errorInfo: '该分类名称已经存在！',
			});
			return Promise.reject();
		} else {
			const category = new Category({
				name: name,
			});
			return category.save();		
		}		
	}).then(function(newCategory) {
		res.render('admin/success.html', {
			userInfo: req.userInfo,
			successInfo: '分类保存成功！',
			url: '/admin/category',
		});
	});
});
// 编辑分类信息
router.get('/category/edit', function(req, res) {
	const id = req.query.id || '';		
	Category.findOne({ 
		_id: id
	 }).then(function(category) {
		if(!category) {
			res.render('admin/error.html', {
				userInfo: req.userInfo,
				errorInfo: '该分类不存在！',
			});
		} else {			
			res.render('admin/category_edit.html', {
				userInfo: req.userInfo,
				category: category,
			})
		}
	})
});

// 保存编辑分类信息
router.post('/category/edit', function(req, res) {
	const id = req.query.id || '';
	const name = req.body.name || '';
	Category.findOne({
		_id: id,
	}).then(function(category) {
		if(!category) {
			res.render('admin/error.html', {
				userInfo: req.userInfo,
				errorInfo: '该分类不存在！',
			});
			return Promise.reject();
		} else {
			// 不修改则直接跳转到成功页面
			if(name === category.name) {
				res.render('admin/success.html', {
					userInfo: req.userInfo,
					successInfo: '编辑成功！',
					url:'/admin/category',
				});
				return Promise.reject();
			} else {
				return Category.findOne({
					_id: {$ne: id},
					name: name,
				});		
			}
		}
	}).then(function(result) {
		if(result) {
			res.render('admin/error.html', {
				userInfo: req.userInfo,
				errorInfo: '数据库已存在同名分类！',
			});
			return Promise.reject();
		} else {
			return Category.update({
				_id: id,
			}, {
				name: name
			});	
		}			
	}).then(function() {
		res.render('admin/success.html', {
			userInfo: req.userInfo,
			successInfo: '编辑成功！',
			url:'/admin/category',
		});
	});
});
// 删除分类
router.get('/category/delete', function(req, res) {
	const id = req.query.id || '';
	Category.remove({
		_id: id,
	}).then(function() {
		res.render('admin/success.html', {
			userInfo: req.userInfo,
			successInfo: '删除成功',
			url: '/admin/category',
		})
	})
})

// 内容首页
router.get('/content', function(req, res) {
	let page = Number(req.query.page || 1);
	const limitNum = 2;
	let skipNum;
	let totalPage;
	Content.count().then(function(count) {
		totalPage = Math.ceil(count / limitNum);
		if(page > totalPage) {
			page = totalPage;
		}
		if(page < 1) {
			page = 1;
		}
		skipNum = (page - 1) * limitNum;
		// populate('category')将content的category字段映射到Category模型上，获取对应的记录
		Content.find().sort({ _id: -1 }).limit(limitNum).skip(skipNum).populate('category').then(function(contents) {
			res.render('admin/content_index.html', {
				userInfo: req.userInfo,
				contents: contents,
				page: page,
				totalPage: totalPage,
				part: 'content',
			});
		});
	});	
});
// 添加内容
router.get('/content/add', function(req, res) {
	Category.find().then(function(categories) {
		res.render('admin/content_add.html', {
			userInfo: req.userInfo,
			categories: categories,
		});
	});	
});
// 保存内容
router.post('/content/add', function(req, res) {
	if(req.body.category === '') {
		res.render('admin/error.html', {
			userInfo: req.userInfo,
			errorInfo: '分类不能为空！',
		});
		return;
	}
	if(req.body.title === '') {
		res.render('admin/error.html', {
			userInfo: req.userInfo,
			errorInfo: '标题不能为空！',
		});
		return;
	}
	new Content({
		category: req.body.category,
		title: req.body.title,
		description: req.body.description,
		content: req.body.content,
	}).save(function() {
		res.render('admin/success.html', {
			userInfo: req.userInfo,
			successInfo: '保存内容成功！',
			url: '/admin/content',
		})
	})

});
// 编辑内容
router.get('/content/edit', function(req, res) {
	const id = req.query.id || '';
	let categories = [];
	Category.find().sort({ _id: 1}).then(function(rs) {
		categories = rs;
		return Content.findOne({
			_id: id,
		}).populate('category');
	}).then(function(content) {
		if(!content) {
			res.render('admin/error.html', {
				userInfo: userInfo,
				errorInfo: '指定内容不存在',
			});		
		} else {
			res.render('admin/content_edit.html', {
				userInfo: req.userInfo,
				content: content,
				categories: categories,
			});				
		}
	});	
});
// 保存编辑内容
router.post('/content/edit', function(req, res) {
	const id = req.query.id || '';
	if(req.body.category === '') {
		res.render('admin/error.html', {
			userInfo: req.userInfo,
			errorInfo: '分类不能为空！',
		});
		return;
	}
	if(req.body.title === '') {
		res.render('admin/error.html', {
			userInfo: req.userInfo,
			errorInfo: '标题不能为空！',
		});
		return;
	}
	Content.update({
		_id: id,
	}, {
		category: req.body.category,
		title: req.body.title,
		description: req.body.description,
		content: req.body.content,
	}).then(function() {
		res.render('admin/success.html', {
			userInfo: req.userInfo,
			successInfo: '编辑内容成功！',
			url: '/admin/content',
		});
	})
});
// 删除内容
router.get('/content/delete', function(req, res) {
	const id = req.query.id || '';
	Content.remove({
		_id: id,
	}).then(function() {
		res.render('admin/success.html', {
			userInfo: req.userInfo,
			successInfo: '删除内容成功！',
			url: '/admin/content',
		})
	})
});
module.exports = router;
