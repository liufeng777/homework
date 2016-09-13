/**
 * Created by Administrator on 2016/9/13 0013.
 */
(function () {
    var myCanvas=document.querySelector("#myCanvas");
    var context=myCanvas.getContext("2d");

    function fan(x,y,r,s,e,color) {
        context.save();
        context.beginPath();
        // 位移到圆心，方便绘制
        context.translate(250, 250);
        // 移动到圆心
        context.moveTo(0, 0);
        // 绘制圆弧
        context.arc(x,y,r,s,e);
        // 闭合路径
        context.closePath();
        context.restore();
        context.fillStyle=color;
        context.fill();

    }

    var i=1;
    var id=setInterval(function () {
        var end=i*Math.PI/180;
        fan(0,0,200,0,end,"red");
        i++;
        if(i>180) {
            clearInterval(id);
            i=180;
            var id2=setInterval(function () {
                end=i*Math.PI/180;
                fan(0,0,200,180*Math.PI/180,end,"blue");
                i++;
                if(i>270) {
                    clearInterval(id2);
                    i=270;
                    var id3=setInterval(function () {
                        end=i*Math.PI/180;
                        fan(0,0,200,270*Math.PI/180,end,"green");
                        i++;
                        if(i>360) {
                            clearInterval(id3);
                            }
                    },50);
                }
            },50);
        }
    },50);


})();