const express = require('express');
const router = express.Router();

// res.render中的路径是相对views而言的
router.get('/', function (req, res, next) {
	res.render('main/index.html');
});

module.exports = router;