/**
 * Created by Administrator on 2016/10/10 0010.
 */
(function () {
    var canvas1=document.getElementById("canvas1");
    var context1=canvas1.getContext("2d");
    var canvas=document.getElementById("canvas");
    var context=canvas.getContext("2d");
    var id;
    var video;
    var x=200,y=200;
    var btn1=document.querySelector("#btn1");
    var btn2=document.querySelector("#btn2");

    function createVideo() {
        video=document.createElement("video");
        video.width=500;
        video.height=500;
        video.autoplay="autoplay";
    }

    function start1() {
        context1.save();
        context1.beginPath();
        context1.drawImage(video,0,0);
        context1.closePath();
        context1.restore();
        requestAnimationFrame(start1);
    }

    var render=function () {
        canvas.onmousedown=function (event) {

            document.onmousemove=function(event){
                x=event.offsetX;
                y=event.offsetY;
            };
            document.onmouseup=function (event){
                document.onmousemove=null;
                document.onmouseup=null;
            }
        };

        context.clearRect(0,0,500,500);
        context.save();
        context.beginPath();
        context.arc(x,y,150,0,Math.PI*2);
        context.closePath();
        context.clip();

        context.beginPath();
        context.globalAlpha = 0.2;
        context.fillStyle = "rgb(255,255,255)";
        context.fillRect(0,0,400,400);
        context.closePath();

        context.restore();
        id=requestAnimationFrame(render);

    };

    btn1.onclick=function () {
        video.pause();
        render();
    };
    btn2.onclick=function () {
        video.play();
        context.clearRect(0,0,500,500);
        cancelAnimationFrame(id);
    };
   function init() {
       navigator.mediaDevices.getUserMedia({
           audio:false,video:true
       }).then(function (result) {
          video.srcObject=result;
       }).catch(function (error) {
           console.log(error);
             }) ;

       createVideo();
       start1();
   } 
    
   init();
    
})();