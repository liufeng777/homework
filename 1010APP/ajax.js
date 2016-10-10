/**
 * Created by Administrator on 2016/9/28 0028.
 */
$(function () {

    $("#register-submit").on('click',function (event) {
        event.preventDefault();
        $.ajax({
            url:'http://datainfo.duapp.com/shopdata/userinfo.php',
            type:'get',
            dataType:'json',
            data:{
                status:'register',
                userID:$('#userId').val(),
                password:$('#password').val(),
            }
        })
             .done(function (info) {
                console.log(info+'done');
             })

            .fail(function () {
                console.log('error');
            })
            .always(function () {
                console.log('complete');
            })

    });

    $("#login-a").on('click',function (event) {
        event.preventDefault();
        $.ajax({
            url:'http://datainfo.duapp.com/shopdata/userinfo.php',
            type:'get',
            dataType:'json',
            data:{
                status:'login',
                userID:$('#login-userId').val(),
                password:$('#login-password').val(),
            }
        })
            .done(function (info) {
                console.log(info);

                window.location.href="#my";
                window.location.reload();
                localStorage.setItem("userID",$('#login-userId').val());

                
            })
            .fail(function () {
                console.log('error');
            })
            .always(function () {
                console.log('complete');
            })

    });



    $.ajax({
        url:"http://datainfo.duapp.com/shopdata/getGoods.php",
        dataType:"JSONP",
        success:function (data,code) {
            var i = 0;
            for( i in data){
                $(".home-content-div").append( $("<div class='home-goods clear-float ID"+data[i].goodsID+"'></div>"));

                $(".home-goods").eq(i).append($("<div class='goods-left'></div>"));


                $(".home-goods").eq(i).append($("<div class='goods-right'></div>"));
                $(".goods-right").eq(i).append("<p class='title-p'></p>");




                $(".goods-right").eq(i).append($("<div class='goods-right-bottom clear-float'></div>"));
                $(".goods-right-bottom").eq(i).append($("<div class='bottom-left'></div>"));
               
                $(".bottom-left").eq(i).append($("<div class='bottom-left-p'></div>"));

                $(".bottom-left-p").eq(i).append($("<span class='span-new'></span>"));

                $(".bottom-left-p").eq(i).append($("<p class='discount'></p>"));

                $(".goods-right-bottom").eq(i).append($("<div class='bottom-right'></div>"));
                $(".bottom-right").eq(i).append($("<img src='images/car.jpg' class='car-img'/ >"));



                $(".goods-left").eq(i).append("<img src='' class='pic'/>");

                $('.title-p').eq(i).text(data[i].goodsName);
                $('.pic').eq(i).attr("src",data[i].goodsListImg);
                $('.span-new').eq(i).text("￥"+data[i].price);
                $('.discount').eq(i).text(data[i].discount+"折");

                (function (i) {
                    $(".car-img").eq(i).on('click',function () {
                        if(localStorage.getItem("userID")==""||undefined){
                            window.location.href="#login";
                        }else {
                            localStorage.setItem("goodsID",data[i].goodsID);
                        }

                        var user=localStorage.getItem('userID');
                        if(user==" "||undefined){
                            alert("请先登录");
                            window.location.href="#login";
                        }else {
                            
                            $.ajax({
                                url: "http://datainfo.duapp.com/shopdata/updatecar.php",
                                userID: localStorage.getItem('userID'),
                                goodsID: localStorage.getItem('goodsID') + " ",
                                number:"1",
                                success: function (code) {
                                    console.log(code+"成功");
                                },
                                error: function (code) {
                                    console.log("错误！"+code);

                                }
                            })
                        }
                    });
                })(i);
            }

        },
        error:function (data,code) {
            alert("错误！");
        }
    });
    
    $.ajax({
        url:"http://datainfo.duapp.com/shopdata/getclass.php",
        dataType:'json',
        success:function (data,code) {
            var i = 0;
            for( i in data){
                $("#classify-div").append( $('<li class="classify-li"><a href="#my" class="classify-a" ></a></li>'));

                $(".classify-a").css({'color':'#333','font-weight':'200'});             

                $('.classify-a').eq(i).text(data[i].className);
            }
        },
        error:function (data,code) {
            alert("错误！");
        }
    });
    
    $(".out-login").on('click',function () {
        localStorage.removeItem("userID");
        window.location.href="#my";
        window.location.reload();

    });
    

    function checkLoc(name) {
        var val=localStorage.getItem(name);
        if(val==" "||undefined||null){
            $(".my-name").text("昵称：未知");
        }else{
            $(".my-name").text("昵称："+localStorage.getItem(name));
        }
    }
    checkLoc("userID");
    
    $(".car-li").on('click',function () {
        $.ajax({
            url: "http://datainfo.duapp.com/shopdata/getCar.php",
            dataType:"JSONP",
            userID: localStorage.getItem('userID'),
            success: function (data) {
                console.log(data);
            },
            error: function (data) {
                console.log("错误！");

            }
        });
    });


});