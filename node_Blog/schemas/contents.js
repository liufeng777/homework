const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
	// 所属分类,分类的_id
	category: {
		// 类型
		type: mongoose.Schema.Types.ObjectId,
		// 引用 models中的Category
		ref: 'Category',
	},

	// 标题
	title: String,
	// 简介
	description: {
		type: String,
		default: '',
	},
	// 内容
	content: {
		type: String,
		default: '',
	},
	// 作者
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	// 创建时间
	createTime: {
		type: Object,		
	},
	// 阅读量
	views: {
		type: Number,
		default: 0,
	}

});