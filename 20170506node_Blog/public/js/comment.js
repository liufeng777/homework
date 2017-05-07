$(function() {	 
	const limitNum = 3;
	var page = 1;
	var totalPage = 1;
	var comments = [];
	// 每次加载页面的时候先读取所有评论
	$.ajax({
		url: '/api/comment/get',
		data: {
			contentId: $('#contentId').val(),
		},
		dataType: 'json',
		success: function(result) {
			comments = result.data.reverse();
			renderCommentList();
		},
	});

	// 点击评论按钮添加评论
	$('#comment-btn').on('click', function() {
		$.ajax({
			type: 'post',
			url: '/api/comment/post',
			data: {
				contentId: $('#contentId').val(),
				comment: $('#comment-text').val(),
			},
			dataType:'json',
			success: function(result) {
				if(result.code === 1) {
					$('#responseData').html(result.message);
				} else {
					$('#responseData').html('');
				}
				//评论成功后先清空表单
				$('#comment-text').val('');
				comments = result.data.comments.reverse();
				renderCommentList();
			}
		});
	});	

	// 翻页事件委托机制	
	$('.comment-page').delegate('a', 'click', function() {
		// 判断是上一页还是下一页的a
		if($(this).parent().hasClass('page-pre')) {
			page--;
		} else {
			page++;
		}
		renderCommentList();
	});

	// 渲染评论的列表	
	function renderCommentList() {		
		if(comments.length === 0) {
			$('.comment-empty').html('暂时还没有评论！')
		}
		$('#comments-count').html(comments.length);
		totalPage = comments.length > 0 ? Math.ceil(comments.length / limitNum) : 1;
		$('.page-current').html(page + ' / ' + totalPage);

		if(page <= 1) {
			page = 1;
			$('.page-pre').html('没有上一页了');
		} else{
			$('.page-pre').html('<a href="javascript:;">上一页</a>');
		} 
		if(page >= totalPage) {
			page = totalPage;
			$('.page-next').html('没有下一页了');
		} else{
			$('.page-next').html('<a href="javascript:;">下一页</a>');
		} 
		
		var html = '';
		var start = (page - 1) * limitNum;
		var end = page * limitNum > comments.length ? comments.length : page * limitNum;
		for(var i = start; i < end; i++) {
			// html += '<li>' + 
			// '<p class="clear-float">' + 
			// '<span class="comment-username">'+ comments[i].username +'</span>' + 
			// '<span class="comment-time">' + comments[i].postTime + '</span>' + 
			// '</p>' + 
			// '<p>' + comments[i].comment + '</p>' +
			// '</li>'

			// es6
			html += `<li><p class="clear-float"><span class="comment-username">${comments[i].username}</span> 
			<span class="comment-time">${dateFormat(comments[i].postTime)}</span></p><p>${comments[i].comment}</p></li>`
		};
		$('.comment-list').find('ul').html(html);
	}	
	// 格式化日期
	function dateFormat(d) {
		const initDate = new Date(d);
		const year = initDate.getFullYear();
		const month = initDate.getMonth() + 1;
		const day = initDate.getDate();
		const hours = initDate.getHours();
		const minutes = initDate.getMinutes();
		const seconds = initDate.getSeconds();
		const  date = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
		return date;
	}
});