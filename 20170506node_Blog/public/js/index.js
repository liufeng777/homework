$(function(){
	const loginBox = $('#login-box');
	const registerBox = $('#register-box');
	const userInfoBox = $('#userInfo-box');

	// 切换到注册
	loginBox.find('a').on('click', function() {
		loginBox.hide();
		registerBox.show();		
		registerBox.find('.responseData').html('');
	});	

	// 切换到登录
	registerBox.find('a').on('click', function() {
		loginBox.show();
		registerBox.hide();
		loginBox.find('.responseData').html('');
	});	

	// 提交注册数据
	registerBox.find('button').on('click',function(){
		$.ajax({
			type: 'post',
			url: '/api/user/register',
			data: {
				username: registerBox.find('[name="username"]').val(),
				password: registerBox.find('[name="password"]').val(),
				repassword: registerBox.find('[name="repassword"]').val(),
			},
			dataType:'json',
			success: function(result) {
				registerBox.find('.responseData').html(result.message);
				// 注册成功跳转到登录页面
				if(result.code === 0) {
					setTimeout(function() {
						loginBox.show();
						registerBox.hide();
					}, 1000);
				}
			}
		});
	});
	
	// 提交注册数据
	loginBox.find('button').on('click',function(){
		$.ajax({
			type: 'post',
			url: '/api/user/login',
			data: {
				username: loginBox.find('[name="username"]').val(),
				password: loginBox.find('[name="password"]').val(),				
			},
			dataType:'json',
			success: function(result) {
				loginBox.find('.responseData').html(result.message);
				// 登录成功跳转到用户页面 
				if(result.code === 0) {
					setTimeout(function() {
						// userInfoBox.show();
						// loginBox.hide();	
						// userInfoBox.find('.userInfo-name').html(result.userInfo.username);
						// userInfoBox.find('.userInfo-notice').html('你好，欢迎光临我的博客');

						// 刷新页面，根据userInfo判断显示哪个版块											
						window.location.reload();
					}, 1000);
				}
			}
		});
	});

	// 退出
	userInfoBox.find('a').on('click', function() {
		$.ajax({
			url: 'api/user/logout',
			success: function(result) {
				if(!result.code) {
					window.location.reload();
				}
			},
		})
	})
	
})