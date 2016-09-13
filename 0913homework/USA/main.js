/**
 * Created by Administrator on 2016/9/13 0013.
 */
(function () {
    var myCanvas=document.querySelector("#myCanvas");
    var context=myCanvas.getContext("2d");
    function circle(x,y,r,s,e,color) {
        context.beginPath();
        context.arc(x,y,r,s,e);
        context.fillStyle=color;
        context.fill();
        context.closePath();
    }    
    circle(250,250,250,0,2*Math.PI,"#cd2e3e");
    circle(250,250,200,0,2*Math.PI,"#fff");
    circle(250,250,150,0,2*Math.PI,"#cd2e3e");
    circle(250,250,100,0,2*Math.PI,"#02468d");
    
    function star() {
        context.beginPath();
        context.moveTo(250,150);
        for(var i=0;i<5;i++){
             var ox=100*Math.cos(i*144*Math.PI/180-Math.PI/2)+250;
             var oy=100*Math.sin(i*144*Math.PI/180-Math.PI/2)+250;
             context.lineTo(ox,oy);
         }
        context.closePath();
        context.stroke();
        context.fillStyle="#fff";
        context.fill();
    }
    star();
})();