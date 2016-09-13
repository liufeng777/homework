/**
 * Created by Administrator on 2016/9/12 0012.
 */
$(function () {
   $("#password2").blur(function () {
       if($("#password2").val()!=$("#password1").val()){
           alert("两次输入密码值不一样，请再次确认！");
           $("#password2").focus();
       }
   });
   $("#random").text(Math.floor((Math.random()+1)*1000));
   $("#code").blur(function () {
       if( $("#code").val()!=$("#random").text()){
           alert("验证码输入有误，请确认！")
       }
    })
});