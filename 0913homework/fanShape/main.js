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
    fan(0,0,200,0,2*Math.PI,"green");
    fan(0,0,200,0*Math.PI/180,60*Math.PI/180,"red");
    fan(0,0,200,60*Math.PI/180,120*Math.PI/180,"blue");





})();