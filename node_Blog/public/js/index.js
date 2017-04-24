$(function(){
	const loginBox = $('#login-box');
	const registerBox = $('#register-box');

	// 切换到注册
	loginBox.find('a').on('click', function() {
		loginBox.hide();
		registerBox.show();		
	});

	// 切换到登录
	registerBox.find('a').on('click', function() {
		loginBox.show();
		registerBox.hide();
	})

	
	
})